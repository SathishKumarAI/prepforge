---
qid: ing_5126eb5127__star__local
question: 'Explain: Databases — YouTube\u00a0Architecture - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 350
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:10:40-05:00'
sources: []
---

**Situation:**  
When I joined the data platform team at a fast‑growth video startup, we were hitting a bottleneck: our monolithic MySQL cluster could no longer keep up with the 10 M daily uploads and 50 M concurrent viewers. Latency on video metadata queries spiked to 300 ms during peak hours.

**Task:**  
I was tasked with designing a high‑scalability database layer that would support real‑time recommendations, live streaming analytics, and serve millions of read requests per second while keeping write latency under 20 ms.

**Action:**  
First, I split the schema into three shards: user profiles (Cassandra for eventual consistency), video metadata (PostgreSQL with logical replication), and analytics events (Kafka + ClickHouse). I added a CDN‑backed cache layer using Redis Streams to push hot data to edge nodes. For write amplification, I introduced an append‑only log in S3 combined with DynamoDB Global Tables to keep the primary key space global but writes local. Finally, I automated horizontal scaling via Kubernetes operators that spun up new replicas based on CPU and query queue length.

**Result:**  
Read latency dropped from 300 ms to under 30 ms during traffic spikes, and write throughput increased by 4×. The system now handles 70 M daily uploads with a 99.9% uptime SLA. I learned that sharding on access patterns and combining streaming analytics with an append‑only store is key for video platforms at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
