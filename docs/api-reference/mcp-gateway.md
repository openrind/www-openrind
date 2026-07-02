---
sidebar_position: 3
title: MCP Gateway
description: MCP Gateway endpoints and proxy parameters
---

# MCP Gateway Endpoints

**Base URL:** `https://openrind-gateway.arakoo.com`

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/mcp/health` | `GET` | Health check |
| `/mcp/bundle/:token` | `GET` | Get MCP servers in standard format |
| `/mcp/mcp` | `ALL` | Proxy MCP requests to upstream server |

## MCP Proxy Query Parameters

| Parameter | Description |
|-----------|-------------|
| `url` | Encoded upstream MCP server URL |
| `token` | Presigned token for authentication |
