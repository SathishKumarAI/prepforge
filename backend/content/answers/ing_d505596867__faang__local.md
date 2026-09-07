---
qid: ing_d505596867__faang__local
question: 'Explain: Polling: — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 491
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:50-05:00'
sources: []
---

**Clarify**  
You’re asking what *WebSocket* is and why it’s useful in ML‑centric web apps (e.g., real‑time dashboards or model inference pipelines). I’ll assume the client runs JavaScript, the server exposes a REST API for batch jobs, and we need low‑latency bidirectional traffic.

**Approach**  
1. Define WebSocket protocol basics.  
2. Contrast with HTTP polling/long‑polling.  
3. Highlight ML use cases (streamed predictions, live monitoring).  
4. Summarize trade‑offs: setup cost vs. throughput.

**Depth**  

| Feature | WebSocket | HTTP Polling |
|---------|-----------|--------------|
| Connection | Single TCP handshake → persistent duplex channel | Repeated handshakes per request |
| Latency | Sub‑ms after handshake; constant | Variable; each poll adds round‑trip time |
| Bandwidth | Minimal framing overhead (≈2 bytes) | Full HTTP headers per message |
| Server push | Native; server sends when data ready | Impossible without polling or SSE |
| Scaling | Requires a WebSocket‑aware load balancer & sticky sessions | Stateless, cacheable, easier to scale |

In ML dashboards, you stream model metrics or inference results. With WebSockets you get immediate updates (e.g., new predictions) and can send control commands back (pause training). For inference APIs, low latency is critical; WebSocket reduces TCP/TLS handshake overhead.

**Edge Cases**  
- **Firewall/NAT traversal**: older clients may block non‑HTTP ports; fallback to long‑polling.  
- **Browser support**: polyfills for IE11.  
- **Server capacity**: each open socket consumes memory; need graceful timeouts.

**Optimize & Communicate**  
If latency is the bottleneck, use *WebSocket over TLS (wss://)* and multiplex messages via JSON‑lines or binary frames to reduce payload size. For scalability, employ a message broker (e.g., Redis Pub/Sub) so any worker can broadcast updates without keeping sockets open.

*Bottom line*: WebSockets eliminate repeated handshakes, lower latency, and enable true bidirectional streaming—exactly what real‑time ML workloads demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
