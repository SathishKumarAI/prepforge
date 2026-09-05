---
qid: ing_5d2e8308c5__star__local
question: 'Explain: Use Cases — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 368
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:22-05:00'
sources: []
---

**Situation**  
In my last role I built an e‑commerce recommendation engine that had to push personalized product suggestions to users in real time while they browsed. The initial prototype used a REST API with long polling from the front end, which caused noticeable lag when many concurrent shoppers were active.

**Task**  
I needed to reduce latency for delivering model predictions and lower server load so that every user could see fresh recommendations within 200 ms without overwhelming our inference cluster.

**Action**  
First I profiled the long‑polling flow: each request opened a new HTTP connection, incurred TLS handshake overhead, and the backend had to keep the session alive for up to 30 seconds. I refactored the system to use WebSocket connections per user. The ML inference service now streams predictions over the same socket using JSON‑lines, batching requests from multiple users into single GPU calls. I also added a lightweight back‑pressure mechanism: if the client queue grew beyond 10 messages, the server throttled new predictions until the front end caught up.

**Result**  
Switching to WebSockets cut average prediction latency from 1.2 s to 150 ms and reduced HTTP connection churn by 70%. CPU usage on the inference nodes dropped by 35%, freeing capacity for other workloads. I learned that choosing the right transport—HTTP long polling vs persistent WebSocket—can dramatically affect both user experience and infrastructure cost in ML‑driven real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
