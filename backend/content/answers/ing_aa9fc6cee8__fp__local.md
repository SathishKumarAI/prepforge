---
qid: ing_aa9fc6cee8__fp__local
question: 'Explain: Cons ❌ — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 367
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:08-05:00'
sources: []
---

**Long‑Polling vs. WebSockets: Why the “cons” are unavoidable**

At its core, both patterns solve *stateful two‑way communication* over HTTP, a stateless protocol.  
With long polling, the client sends a request and the server holds it open until an event occurs or a timeout fires. When the response arrives, the client immediately reissues a new request. The trade‑off is that each round trip incurs full TCP/HTTP overhead: connection establishment (TCP handshake, TLS renegotiation), headers, parsing, and a fresh socket teardown on close. This “handshake cost” multiplies with every event, inflating latency and CPU usage.

WebSockets eliminate this by establishing a persistent duplex channel after an initial HTTP upgrade. The protocol’s design guarantees *zero‑copy*, *frame‑based* data transfer: the server can push arbitrary payloads without re‑initiating connections. Consequently, per‑message overhead collapses to a few bytes of framing and TCP ack traffic.

**Non‑obvious insight:**  
Long polling’s cost is not just network latency; it’s an *information bottleneck*. Each request/response pair carries the entire state of the HTTP transaction—headers, cookies, TLS session tickets. The server must rebuild that context for every event, effectively re‑encoding the same information repeatedly. WebSockets avoid this by moving to a persistent context, turning the communication into a continuous stream where only delta data is transmitted. This principle—minimizing redundant state transfer—is why websockets scale far better in high‑frequency scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
