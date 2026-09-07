---
qid: ing_4f0142e91f__aws__local
question: 'Explain: Sharding — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:00-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑engineering team at a fast‑growing photo‑sharing startup, we hit a bottleneck: a single PostgreSQL cluster could not handle the 12 M daily uploads and 200 M read requests without latency spikes. I was tasked with designing a sharded architecture that would scale to 100 M users while keeping write/read latency under 50 ms.

**Action (Dive Deep & Ownership)**  
1. **Shard by user ID hash** – each shard is an Aurora PostgreSQL instance in its own Availability Zone, ensuring high availability and localized reads.  
2. **Global metadata service** – a DynamoDB table (`UserShardMap`) maps `user_id → shard_endpoint`. Reads hit the map first (single‑partition key) then proxy to the correct shard via an API Gateway + Lambda layer for routing.  
3. **Batching & async writes** – uploads are queued in SQS and processed by Kinesis Data Streams, which batch 500 writes per shard before committing to Aurora, reducing write amplification.  
4. **Cache tier** – Elasticache‑Redis clusters per shard cache recent posts; cold starts hit the database only once.  

**Result (Deliver Results)**  
- Latency dropped from 200 ms to <45 ms for read/write ops.  
- Throughput scaled linearly: 10× more users with no performance regression.  
- Cost decreased by 18 % thanks to reserved instances and spot‑based compute for background jobs.

**Reflection (Bias for Action & Customer Obsession)**  
The first week of deployment revealed a “hot shard” issue; we introduced a read‑write split by sharding the write queue further, which restored evenness. This iterative learning loop—monitor → hypothesize → test—ensured continuous improvement and customer satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
