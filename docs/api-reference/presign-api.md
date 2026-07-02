---
sidebar_position: 1
title: Presign API
description: Generate signed URLs for LLM provider access
---

# Presign API

Generate signed URLs for LLM provider access.

**Endpoint:** `POST /v1/presign`

**Base URL:** `https://openrind.arakoo.com`

## Request Headers

| Header | Value |
|--------|-------|
| `Authorization` | `Bearer YOUR_API_KEY` |
| `Content-Type` | `application/json` |

## Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `provider` | `string` | Yes | Target provider (`openai`, `anthropic`, `google`, `cohere`, `groq`, etc.) |
| `path` | `string` or `string[]` | Yes | Allowed API path(s) (e.g., `/v1/chat/completions`) |
| `client_api_key` | `string` | No* | Your provider API key. Encrypted at rest. |
| `virtual_key` | `string` | No* | Use pre-configured key instead of `client_api_key`. |
| `method` | `string` | No | Allowed HTTP method. Default: `POST` |
| `expires_in` | `number` | No | Validity in seconds. `-1` = 1 year. Default: `3600` |
| `max_uses` | `number` | No | Max calls allowed. `-1` = unlimited. Default: `-1` |
| `cost_limit` | `number` | No | Max spend in microdollars ($1 = 1,000,000 microdollars) |
| `config` | `object` | No | Provider config overrides (model, max_tokens, etc.) |
| `external_session` | `string` | No | Your session identifier (max 255 chars) |
| `external_user` | `string` | No | Your user identifier for billing (max 255 chars) |
| `session_id` | `string (uuid)` | No | Custom session UUID. Auto-generated if not provided. |
| `metadata` | `object` | No | Custom JSON metadata (max 64KB) |

:::note
Either `client_api_key` or `virtual_key` must be provided.
:::

## Response

```json
{
  "url": "https://openrind-gateway.arakoo.com/openrind-proxy/t/TOKEN/v1/chat/completions",
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "expires_at": 1735689600
}
```

## Example Request

```bash
curl -X POST https://openrind.arakoo.com/v1/presign \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "provider": "openai",
    "path": "/v1/chat/completions",
    "client_api_key": "sk-...",
    "expires_in": 3600,
    "max_uses": 100
  }'
```
