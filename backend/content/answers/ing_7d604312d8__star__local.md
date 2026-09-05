---
qid: ing_7d604312d8__star__local
question: 'Explain: Hot Shards — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 341
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:32-05:00'
sources: []
---

**Situation:**  
At my last role we were scaling a real‑time recommendation engine that served millions of users daily. The underlying key‑value store had become a bottleneck; one shard consistently handled ~70% of write traffic because most user IDs hashed to the same prefix, leading to latency spikes and hot spots.

**Task:**  
I needed to redistribute load evenly across shards without disrupting live traffic or compromising data locality for recommendation queries.

**Action:**  
First I profiled request patterns with Prometheus + Grafana, confirming a deterministic hash collision. I then redesigned the sharding key: appended a user’s signup month and a hashed “region” suffix before hashing. Using Apache Kafka Streams, I streamed incoming writes to a new partitioned topic that performed this composite key transformation in real time. The old shards were gradually decommissioned via a rolling‑out script while maintaining read replicas for consistency. Finally, I updated the application’s connection pool (HikariCP) to target the new set of 12 shards and added rate limiting per shard with Redis Sentinel to guard against accidental spikes.

**Result:**  
Load balanced across all shards dropped write latency from an average of 350 ms to 85 ms, and CPU usage on any single node fell below 30%. The system now handles 5× the previous traffic volume with a 99.9% SLA, and I learned that proactive key design coupled with streaming transformations can eliminate hot spots without costly infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
