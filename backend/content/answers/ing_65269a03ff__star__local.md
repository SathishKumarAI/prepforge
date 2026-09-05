---
qid: ing_65269a03ff__star__local
question: 'Explain: Moving collections — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:50-05:00'
sources: []
---

**Situation** – I was working on a real‑time analytics platform that stored millions of clickstream events in MongoDB. By Q3, write throughput hit 300 k ops/sec and the single shard’s disk filled up to 90 %, causing latency spikes.  
**Task** – My goal was to scale horizontally without rewriting the application: keep existing queries fast, preserve data locality for time‑series reads, and minimize downtime during the transition.  
**Action** – I first added a **shard key** based on `event_timestamp` using hashed ranges so writes would be evenly distributed across three new shards. Then I performed a **rolling migration** with MongoDB’s `moveChunk` command, moving 500 GB chunks one by one while keeping the primary replica set active. To avoid hot spots, I introduced a short “maintenance window” during off‑peak hours and monitored CPU/IO on each node with Prometheus. After sharding, I re‑indexed the critical compound index (`user_id_+_event_type`) on each shard to keep query performance consistent.  
**Result** – Write throughput increased from 300 k ops/sec to 1.2 M ops/sec, and read latency dropped from 350 ms to under 80 ms. The migration took just two weeks with less than a 5‑minute service interruption per shard. I learned that choosing the right shard key and orchestrating chunk moves carefully can turn a monolithic collection into a scalable, low‑latency system without code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
