---
sidebar_position: 2
title: MCP Gateway
description: Examples for MCP server proxying
---

# MCP Gateway Examples

OpenRind includes an MCP (Model Context Protocol) Gateway for proxying MCP tool servers with authentication and usage tracking.

## Single MCP Server

```bash
MCP_RESPONSE=$(curl -s ${CONTROL_PLANE}/v2/mcp-presign \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "servers": [{
      "name": "deepwiki",
      "url": "https://mcp.deepwiki.com/mcp",
      "transport": "sse"
    }],
    "expires_in": 3600,
    "max_uses": -1
  }')

echo "$MCP_RESPONSE" | jq '.'
```

Response includes:

- `bundle_url` - URL to fetch MCP server config in standard format
- `servers.<name>.url` - Direct presigned URL for each server

## Multiple MCP Servers for Claude Code

```bash
BUNDLE=$(curl -s ${CONTROL_PLANE}/v2/mcp-presign \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "servers": [
      {"name": "deepwiki", "url": "https://mcp.deepwiki.com/mcp", "transport": "sse"},
      {"name": "github", "url": "https://mcp.example.com/github", "transport": "sse"},
      {"name": "filesystem", "url": "http://localhost:3000/mcp", "transport": "sse"}
    ],
    "expires_in": 86400,
    "max_uses": -1
  }')

BUNDLE_URL=$(echo "$BUNDLE" | jq -r '.bundle_url')
echo "Bundle URL: $BUNDLE_URL"

# Fetch bundle in MCP standard format
curl -s "$BUNDLE_URL" | jq '.'
```

Returns standard MCP format:

```json
{
  "mcpServers": {
    "deepwiki": {
      "url": "https://openrind-gateway.arakoo.com/mcp/mcp?url=...&token=...",
      "transport": "sse"
    },
    "github": {
      "url": "https://openrind-gateway.arakoo.com/mcp/mcp?url=...&token=...",
      "transport": "sse"
    }
  }
}
```
