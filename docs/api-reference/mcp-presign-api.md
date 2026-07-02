---
sidebar_position: 2
title: MCP Presign API
description: Generate signed URLs for MCP server access
---

# MCP Presign API

Generate signed URLs for MCP (Model Context Protocol) server access.

**Endpoint:** `POST /v2/mcp-presign`

**Base URL:** `https://openrind.arakoo.com`

## Request Headers

| Header | Value |
|--------|-------|
| `Authorization` | `Bearer YOUR_API_KEY` |
| `Content-Type` | `application/json` |

## Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `servers` | `array` | Yes | Array of MCP server configurations |
| `servers[].name` | `string` | Yes | Server name (used as key in response) |
| `servers[].url` | `string` | Yes | MCP server URL |
| `servers[].transport` | `string` | No | Transport type: `sse` (default) or `http` |
| `servers[].auth_type` | `string` | No | Auth type: `none`, `bearer`, `api_key`, `oauth` |
| `servers[].auth_config` | `object` | No | Auth configuration (tokens, keys) |
| `expires_in` | `number` | No | Validity in seconds (60-86400). Default: `3600` |
| `max_uses` | `number` | No | Max calls. `-1` = unlimited |
| `cost_limit` | `number` | No | Max spend in microdollars |
| `session_id` | `string` | No | Custom session UUID |
| `metadata` | `object` | No | Custom metadata |

## Response

```json
{
  "bundle_url": "https://openrind-gateway.arakoo.com/mcp/bundle/BUNDLE_TOKEN",
  "bundle_token": "BUNDLE_TOKEN",
  "expires_at": 1735689600,
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "servers": {
    "deepwiki": {
      "url": "https://openrind-gateway.arakoo.com/mcp/mcp?url=...&token=...",
      "transport": "sse"
    }
  }
}
```

## Bundle URL Response

Fetching the `bundle_url` returns standard MCP format:

```json
{
  "mcpServers": {
    "deepwiki": {
      "url": "https://openrind-gateway.arakoo.com/mcp/mcp?url=...&token=...",
      "transport": "sse"
    }
  }
}
```
