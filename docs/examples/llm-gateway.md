---
sidebar_position: 1
title: LLM Gateway
description: Examples for LLM provider gateway usage
---

# LLM Gateway Examples

## Short-Lived Gemini URL (1 hour)

Creates a secure URL valid for 1 hour. The Gemini API key is encrypted and auto-deleted after expiry.

```bash
export GEMINI_KEY="AIza...your-gemini-key"

# 1. Generate Signed URL
SIGNED_URL=$(curl -s ${CONTROL_PLANE}/v1/presign \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "google",
    "method": "POST",
    "path": "/v1/chat/completions",
    "client_api_key": "'"${GEMINI_KEY}"'",
    "config": { "model": "gemini-2.5-flash" },
    "external_session": "testing-session-1",
    "expires_in": 3600,
    "max_uses": 1
  }' | jq -r '.url')

echo "Signed URL: $SIGNED_URL"

# 2. Call via Gateway (OpenAI Format)
curl "${SIGNED_URL}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-2.5-flash",
    "messages": [{"role": "user", "content": "Explain quantum computing in one sentence."}]
  }'
```

## Long-Lived Anthropic Adapter (for Claude Code)

Creates an Adapter Token valid for 1 year (`expires_in: -1`). Ideal for CLI tools and IDE extensions.

```bash
export ANTHROPIC_API_KEY="sk-ant...your-anthropic-key"

# Generate Adapter URL with multiple allowed paths
ADAPTER_URL=$(curl -s ${CONTROL_PLANE}/v1/presign \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "anthropic",
    "method": "POST",
    "path": ["/v1/messages", "/v1/completions", "/v1/embeddings", "/v1/models"],
    "client_api_key": "'"${ANTHROPIC_API_KEY}"'",
    "config": { "model": "claude-sonnet-4-20250514", "max_tokens": 4096 },
    "external_session": "claude-code-session",
    "external_user": "developer-1",
    "max_uses": -1,
    "expires_in": -1
  }' | jq -r '.url')

echo "Adapter URL: $ADAPTER_URL"
```

### Configure Claude Code

Set the environment variable:

```bash
export ANTHROPIC_BASE_URL="$ADAPTER_URL"
```

Or in `~/.claude/settings.json`:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://openrind-gateway.arakoo.com/openrind-proxy/a/TOKEN_HERE"
  }
}
```

## OpenAI with Cost Limit

Creates a session with a $5 spending cap. Gateway blocks requests after limit is reached.

```bash
export OPENAI_API_KEY="sk-...your-openai-key"

curl -s ${CONTROL_PLANE}/v1/presign \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "openai",
    "path": "/v1/chat/completions",
    "client_api_key": "'"${OPENAI_API_KEY}"'",
    "cost_limit": 5000000,
    "expires_in": -1,
    "max_uses": -1
  }' | jq '.'
```

When the limit is reached:

- Gateway returns HTTP 403: `Session cost limit exceeded`
- Session is flagged as `blocked`
- Subsequent requests rejected in O(1) time
