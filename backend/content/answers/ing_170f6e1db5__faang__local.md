---
qid: ing_170f6e1db5__faang__local
question: 'Explain: Server-Sent Events (SSE) — Long Polling vs WebSockets - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 624
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:38:19-05:00'
sources: []
---

**Clarify**  
We’re comparing three server‑to‑client streaming patterns: *Long Polling*, *Server‑Sent Events (SSE)*, and *WebSockets*. I’ll assume the use case is real‑time data push from a web app to browsers, with typical constraints on latency, bandwidth, and server resources.

**Approach**  
1. Define each protocol’s handshake & transport.  
2. Contrast their strengths/weaknesses in terms of: connection cost, message framing, bi‑directionality, browser support, scalability, and security.  
3. Summarize when to pick each.

**Depth**  

| Feature | Long Polling | SSE | WebSocket |
|---------|--------------|-----|-----------|
| **Handshake** | Repeated HTTP GETs; server holds until data or timeout | Single HTTP GET that stays open (HTTP/1.1 upgrade) | TCP handshake + optional HTTP upgrade to WS protocol |
| **Transport** | Text over HTTP, one message per request | Text/event-stream MIME type; text framing with `data:` lines | Binary/text frames over a persistent TCP socket |
| **Directionality** | Unidirectional (server → client) | Unidirectional | Bidirectional |
| **Latency** | High: round‑trip per event | Low: continuous stream | Lowest: immediate frame delivery |
| **Browser support** | All browsers, no extra libs | Modern browsers; IE11+ polyfills needed | Most modern browsers; older ones need Flash/Polyfill |
| **Scalability** | Many open connections → many HTTP requests → higher CPU & memory | Fewer connections, lighter server load than WS | Requires full duplex sockets; can handle high throughput but needs proper back‑pressure handling |
| **Security** | Inherits HTTPS | Same as WS | Uses TLS if `wss://`; vulnerable to CSRF unless mitigated |

**Edge Cases**  
- *Large payloads*: WebSocket handles binary blobs efficiently; SSE must chunk text.  
- *Server restarts*: Long Polling reconnects automatically; SSE and WS need explicit reconnection logic (SSE auto‑reconnect header).  
- *Network intermediaries*: Some proxies choke on long‑open sockets, favoring long polling.

**Optimize & Communicate**  
For read‑only feeds with low event volume, SSE is simplest: minimal client code, built‑in reconnection, and good scalability. If you need full duplex or binary data (e.g., multiplayer game state), WebSockets win despite higher server complexity. Long polling remains a fallback when legacy infrastructure cannot support persistent connections.

> **TL;DR:**  
> • *Long Polling*: HTTP‑only, high latency, simple but resource‑heavy.  
> • *SSE*: One‑way text stream, low latency, great for logs/updates.  
> • *WebSocket*: Full duplex, lowest latency, best for interactive apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
