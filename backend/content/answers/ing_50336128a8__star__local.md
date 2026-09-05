---
qid: ing_50336128a8__star__local
question: 'Explain: Fan-out-on-write (Push Model) for Normal Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 297
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:51-05:00'
sources: []
---

**Situation:**  
In a mid‑size SaaS analytics platform we had a real‑time dashboard that showed each user’s key metrics as soon as they were updated in the database. The original design used a pull model: every client polled the server for changes, which caused 3–5 s latency and spiked read traffic during peak hours.

**Task:**  
I was tasked with reducing the perceived lag to under one second while keeping load balanced across our microservices, without introducing data staleness or overwhelming the network.

**Action:**  
Implemented a fan‑out‑on‑write strategy. When a user’s metric changed, the write service published an event to a Redis Streams topic. A lightweight “push” worker subscribed to that stream and pushed the updated value via WebSocket (using Socket.IO) directly to all connected sessions for that user. I added a TTL cache in Redis to prevent duplicate pushes and throttled updates with a 200 ms debounce per metric. For offline users, we queued events in Kafka, replaying them on reconnection.

**Result:**  
Latency dropped from ~4 s to <1 s on average; read traffic fell by 70%, freeing database resources for other workloads. I learned how to balance real‑time delivery with system resilience and the importance of fine‑grained throttling in push architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
