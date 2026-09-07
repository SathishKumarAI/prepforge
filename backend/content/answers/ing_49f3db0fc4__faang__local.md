---
qid: ing_49f3db0fc4__faang__local
question: 'Explain: Handshake — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 444
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:35-05:00'
sources: []
---

**Handshake – What are WebSockets & why we use them**

| Step | Detail |
|------|--------|
| **Clarify** | *Problem*: Traditional HTTP is request‑driven; for real‑time apps (chat, gaming, live dashboards) we need low‑latency, bi‑directional flow. Assume the client & server can keep a TCP connection alive and that both support the WebSocket protocol. |
| **Approach** | 1️⃣ Client sends an HTTP `Upgrade: websocket` request.<br>2️⃣ Server validates headers (Sec-WebSocket-Key/Protocol) and responds with `101 Switching Protocols`.<br>3️⃣ Both sides switch to a persistent TCP stream, framing messages with minimal overhead. |
| **Depth** | - **Framing**: 2‑byte header + payload length + optional masking (client→server). <br>- **Overhead**: ~6–8 bytes per message vs ~200+ bytes for HTTP headers.<br>- **Latency**: Sub‑millisecond once connected; no TCP handshake on each message. <br>- **Use cases**: Live chat, multiplayer games, financial tickers, collaborative editors. |
| **Edge Cases** | • Browser limits on open sockets (≈ 100 per domain).<br>• Firewall/NAT may drop idle connections → use ping/pong heartbeats.<br>• Fallback to long‑polling if WebSocket support is missing. |
| **Optimize & Communicate** | • Use a connection pool or multiplexed channel for many streams.<br>• Compress payloads (permessage-deflate) when bandwidth‑tight.<br>• Explain that the handshake saves round‑trips, reduces CPU load on servers, and gives true push capability—key for scalable real‑time services. |

*Bottom line*: WebSockets turn HTTP into a lightweight, full‑duplex channel, eliminating per‑request overhead and enabling high‑frequency, low‑latency communication essential for modern interactive web apps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
