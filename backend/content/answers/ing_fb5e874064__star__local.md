---
qid: ing_fb5e874064__star__local
question: 'Explain: When to shard a collection across multiple shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 346
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:42-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we built a real‑time fraud detection system that stored every transaction in a MongoDB collection. By the end of year two, the collection had grown to 12 TB and query latency for our anomaly engine spiked from 150 ms to over 1 s during peak hours.

**Task:**  
I was tasked with reducing read latency below 200 ms while keeping write throughput high enough for 10k transactions per second, all without a complete rewrite of the ingestion pipeline.

**Action:**  
First, I profiled the workload and discovered that most reads were range queries on the `transaction_date` field, while writes were evenly distributed across users. I decided to shard on a hashed compound key `(user_id, transaction_date)` so each shard held roughly equal write load but also kept related time slices together for efficient range scans. We added a `shardKey` index and re‑balanced data using MongoDB’s built‑in balancer, monitoring the oplog lag to avoid hotspots. To mitigate cross‑node traffic, I implemented a read preference of “primaryPreferred” on application nodes that were geographically close to the majority of users.

**Result:**  
After sharding, average query latency dropped to 110 ms (a 70% improvement), and write throughput stayed above 12k TPS. We also reduced disk usage per node by 30% thanks to better data distribution. This experience taught me that thoughtful shard key design—balancing read patterns against write locality—is crucial for scaling real‑time analytics workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
