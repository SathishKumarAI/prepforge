---
qid: ing_aaec540142__star__local
question: 'Explain: Interviewer — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 346
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:46-05:00'
sources: []
---

**Situation:**  
While working at a fintech startup, our real‑time analytics dashboard started lagging during peak trading hours. The counters for active users and transaction volume were being updated by thousands of microservices across three regions, and the single Redis instance we used was becoming a bottleneck.

**Task:**  
I had to design a distributed counter system that could handle 50 k writes per second, guarantee eventual consistency within 200 ms, and support horizontal scaling without downtime.

**Action:**  
I chose an event‑driven architecture with Kafka as the write queue. Each service publishes “increment” events to a topic partitioned by key (e.g., userID). A dedicated consumer group runs multiple workers that batch events in 10 ms windows, aggregate them locally, and update a sharded Redis cache using Lua scripts for atomic increments. For persistence I used an append‑only log stored on S3 with periodic compaction jobs that replay the events into a MySQL table for auditability. To avoid hot spots, I implemented consistent hashing on counter keys and added a small “stale” window (up to 5 % error) that is acceptable for dashboards.

**Result:**  
Write latency dropped from 350 ms to under 80 ms, throughput scaled from 10 k to 60 k writes/s without new servers, and the dashboard refreshed every 200 ms during peak load. I learned how to balance consistency, performance, and fault tolerance by combining streaming, sharding, and eventual‑consistency patterns in a production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
