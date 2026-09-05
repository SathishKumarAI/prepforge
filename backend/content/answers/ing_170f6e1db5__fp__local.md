---
qid: ing_170f6e1db5__fp__local
question: 'Explain: Server-Sent Events (SSE) — Long Polling vs WebSockets - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 365
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:54:53-05:00'
sources: []
---

**Why we need a “push” channel**

A web client normally talks to a server via HTTP: the browser *asks* and the server *answers*.  
In many ML‑driven dashboards (real‑time loss curves, inference results, model updates) the server must **notify** the client as soon as new data appears.  
The naive way is *long polling*: the client opens a request that stays open until the server has something to send, then closes it and immediately reopens another. This works because HTTP already guarantees an end‑to‑end connection; however, each round trip incurs header overhead, TCP handshakes, and server resources for a separate socket per user.

**WebSockets: a true duplex channel**

A WebSocket upgrades the initial HTTP request to a persistent TCP stream that is *bidirectional*. Once established, either side can send arbitrary frames without re‑handshake. For ML workloads this means:
- **Zero latency** (no polling interval)
- **Lower bandwidth** (no repetitive headers)
- **Scalable concurrency** (one socket per client)

The trade‑off is the complexity of maintaining a persistent connection and handling reconnection logic.

**Non‑obvious insight**

Long polling *does not* create a new TCP connection each time; browsers reuse the same underlying socket. Thus, for low‑traffic, bursty updates, long polling can be cheaper than WebSockets because it avoids keeping sockets alive when idle. The choice boils down to **update frequency vs resource cost**: WebSockets shine for high‑throughput streams; long polling is surprisingly efficient for sparse, event‑driven ML notifications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
