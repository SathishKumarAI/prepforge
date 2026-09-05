---
qid: ing_cd6d75ae9e__star__local
question: 'Explain: Range-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:03-05:00'
sources: []
---

**Situation:**  
In my last role as a data engineer at a fintech startup, we were building a real‑time fraud detection pipeline that ingested over 10 million transaction records per day. The database began to choke on read queries because all user profiles lived in a single shard, causing latency spikes during peak hours.

**Task:**  
I had to redesign the storage layer so that query performance stayed under 50 ms for 99% of requests while keeping write throughput high and minimizing operational complexity.

**Action:**  
I chose range‑based sharding on the user ID hash. First, I profiled access patterns: most fraud queries target a narrow slice of recent accounts. Using Cassandra’s token ranges, I allocated contiguous ID ranges to three shards, each running on separate nodes with 512 GB SSDs. To keep data balanced, I implemented a nightly “range rebalancer” that moved hot ranges by updating the token ring and triggering lightweight transactions for consistency. I also added a global index in Redis for cross‑shard lookups, reducing the need to scan multiple shards during fraud checks.

**Result:**  
Query latency dropped from 200 ms average to 35 ms, with 99.8% of requests under 50 ms. Write throughput improved by 30% due to parallelism. The rebalancer ran in under two minutes without downtime, and we saved $15k/month on infrastructure costs by avoiding over‑provisioned single nodes. I learned that careful range selection plus lightweight coordination can turn a monolithic bottleneck into a scalable, low‑latency system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
