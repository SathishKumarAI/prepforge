---
qid: ing_80352b738f__aws__local
question: 'Explain: let''s see how the dispatch system works — UBER System design
  | OLA system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 472
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:10-05:00'
sources: []
---

**Situation & Goal (Customer Obsession)**  
At my previous company we launched a ride‑hailing app that needed a real‑time dispatch engine. Users expected < 3 s to see a driver, even during peak hours when demand spiked 4×.

**Task (Ownership + Deliver Results)**  
Design an end‑to‑end system that matches riders to nearby drivers with high availability and low latency, while keeping costs under $0.15 per dispatch.

**Action (Dive Deep & Bias for Action)**  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| **Geospatial indexing** | Amazon DynamoDB Global Tables + PartiQL queries | Fast read/write, multi‑region replication for 99.999% uptime. |
| **Real‑time driver updates** | Amazon Kinesis Data Streams → Lambda → DynamoDB | Scales to millions of events/sec; serverless keeps idle cost low. |
| **Matching engine** | AWS Step Functions orchestrating a Lambda that runs a nearest‑neighbor algorithm (HNSW) on cached vectors in ElastiCache Redis | Decouples compute, allows horizontal scaling with minimal latency (< 200 ms). |
| **Fallback & retry** | SQS + DLQ for failed matches; exponential backoff in Lambda | Guarantees eventual consistency and visibility into failures. |
| **Analytics** | Amazon Athena on S3 logs + QuickSight dashboards | Tracks match success rate, driver wait time, cost per dispatch. |

**Result (Deliver Results)**  
- Achieved 97% of rides matched within 2 s during peak load.  
- Reduced average driver idle time by 18%, boosting revenue by $1.2M/month.  
- Cost per dispatch dropped from $0.32 to $0.12, saving $300K annually.

**Learnings (Bar‑Raiser focus)**  
We initially over‑provisioned DynamoDB partitions; after monitoring hot keys we applied adaptive scaling and sharding, cutting latency by 25%. This iterative tuning exemplifies true ownership and data‑driven improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
