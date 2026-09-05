---
qid: ing_b39dfcc476__star__local
question: 'Explain: Prototyping a Live Comment Service — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 326
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:09-05:00'
sources: []
---

**Situation**  
At my last company we were launching a live‑streaming platform and the product team asked me to prototype a real‑time comment system that could handle 200k concurrent viewers with sub‑second latency.

**Task**  
I had to design a low‑latency, horizontally scalable service that ingested user comments, broadcasted them instantly, persisted for moderation, and survived traffic spikes without dropping messages.

**Action**  
I chose a Kafka cluster as the ingestion backbone for durability and backpressure handling. Each stream partition fed into a pool of Node.js workers behind an Nginx load balancer; workers used Redis Pub/Sub to push comments to WebSocket clients. For persistence I used a sharded MongoDB collection with TTL indexes, ensuring only the last 5 minutes were kept for display while older data went to cold storage. I implemented back‑pressure by throttling producers when consumer lag exceeded 100 ms and added a fallback HTTP endpoint for clients that couldn’t maintain WebSockets.

**Result**  
The prototype supported 250k concurrent viewers with an average end‑to‑end latency of 48 ms, and dropped less than 0.02% of messages under peak load. I learned how to balance Kafka throughput with in‑memory pub/sub for instant delivery, and the importance of graceful degradation when scaling out real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
