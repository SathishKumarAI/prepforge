---
qid: ing_b8ceddc916__fp__local
question: Why are WebSockets used? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 377
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:01-05:00'
sources: []
---

**WebSocket: a minimal, bidirectional channel for the “real‑time” need**

The core problem in web apps is *latency + bandwidth* when exchanging state with a server.  
HTTP is request/response; each round trip incurs TCP three‑way handshake, TLS negotiation and an HTTP header payload. For high‑frequency updates (chat, telemetry, multiplayer), this overhead dominates cost and creates jitter.

A WebSocket solves this by turning the single HTTP upgrade into a *persistent duplex stream*:

1. **Handshake** – one initial HTTP request that upgrades to TCP/TLS.  
2. **Zero‑header framing** – subsequent frames carry only a 2‑byte length, so the per‑message cost is ≈ 4 bytes vs. 300+ bytes for an HTTP header.  
3. **Push capability** – the server can initiate frames; no client polling required.

From an optimization standpoint this is a *minimization of stateful overhead* (O(1) per message after handshaking). The channel preserves TCP’s congestion control, so it still respects network capacity while enabling sub‑100 ms latency.  

**Non‑obvious insight:** WebSockets are not merely “faster” HTTP; they enable *stateless protocols to be re‑stateful* without server resources. A single socket can multiplex many logical streams (e.g., separate chat rooms) by using a lightweight message type header, turning the connection into an application‑level multiplexer that scales with client count rather than per‑connection sockets. This is why modern real‑time apps choose WebSocket over long polling or SSE.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
