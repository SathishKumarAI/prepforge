---
qid: ing_e9804a2812__fp__local
question: 'Explain: How to achieve real-time communication — Long Polling vs WebSockets
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 378
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:15:10-05:00'
sources: []
---

### Real‑time communication in the browser  
The core problem: a client must receive server events as soon as they occur, while keeping bandwidth and latency low.

| Technique | How it solves the problem | Why it behaves that way |
|-----------|--------------------------|------------------------|
| **Long Polling** | The client sends an HTTP request and the server holds it open until data is ready (or a timeout). When the response arrives, the client immediately issues a new request. | HTTP is stateless; the only way to push from server to client without extra protocol support is to reuse the existing request/response cycle. Holding the connection keeps the “long‑poll” alive. |
| **WebSocket** | The client upgrades an HTTP handshake to a full‑duplex TCP stream (`ws://`). Both sides can send frames independently, with minimal framing overhead. | WebSockets are a standard extension of HTTP that turns the single socket into a persistent pipe, eliminating per‑message handshakes and letting the server push instantly. |

### Non‑obvious insight  
Both methods ultimately trade *latency* for *resource usage*. Long polling keeps the number of open connections bounded (one per client) but incurs an extra round‑trip on every message; WebSockets maintain a single long‑lived connection, so latency is near zero but each open socket consumes server threads or event‑loop capacity. Therefore, when scaling to millions of users, you must pair WebSocket with a **message broker** (e.g., Redis Pub/Sub) and cluster the application behind a load balancer that can proxy the TCP stream—otherwise you hit the “socket exhaustion” wall even though each client uses only one connection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
