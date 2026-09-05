---
qid: ing_203d736de5__star__local
question: 'Explain: Storage Requirements — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 360
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:47-05:00'
sources: []
---

**Situation:**  
While leading the backend team for a fintech startup, we had to roll out a real‑time notification service that would push alerts to millions of users every hour. The existing data lake stored all transaction logs in S3, but we needed an efficient way to query recent events without incurring high read costs or latency.

**Task:**  
Design a storage architecture that supports sub‑second reads for the last 24 hours of activity while keeping storage costs under $0.02 per GB per month and ensuring data durability.

**Action:**  
I chose a hybrid approach: write all raw logs to an immutable Parquet bucket on S3, partitioned by day and hour. For hot data (last 48 h) I introduced an in‑memory cache using Redis Cluster with 1 TB of memory, keyed by user ID and event type. A Lambda function runs every 5 minutes to pull the newest Parquet files, parse them with PyArrow, and hydrate the cache. To keep costs low, I enabled S3 Intelligent-Tiering and lifecycle policies that move older partitions to Glacier Deep Archive after 30 days. We also added a small DynamoDB table for user notification preferences, indexed by topic.

**Result:**  
The service now delivers notifications in under 120 ms on average, with peak throughput of 200k events per second during flash sales. Storage costs dropped from $15K/month to $7K/month, and we reduced S3 read requests by 70%. I learned that a layered storage strategy—combining cold object store, hot cache, and targeted indexing—is essential for scalable ML‑driven real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
