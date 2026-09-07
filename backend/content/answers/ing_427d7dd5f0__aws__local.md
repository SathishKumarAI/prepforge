---
qid: ing_427d7dd5f0__aws__local
question: 'Explain: Type of Data Store — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:27-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of a high‑traffic live‑comment platform (≈ 10 M active users, 1 M comments/sec during events). The goal was to lower latency from 350 ms to < 80 ms and increase reliability from 99.8 % to > 99.99 %, while keeping cost under $200k/month.

**Action – Design & AWS Services**  
- **Data store:** Sharded, time‑ordered **DynamoDB** tables per stream, with a global secondary index on `user_id` for moderation queries. I chose DynamoDB because it offers single‑digit millisecond read/write latency at massive scale and integrates natively with **AWS Lambda** for real‑time analytics.  
- **Ingestion layer:** **Amazon Kinesis Data Streams** (shards = 64) fed into a **Lambda** pipeline that writes to DynamoDB and pushes to an **ElastiCache Redis** cluster for hot comment caching.  
- **Read path:** Clients hit the CDN‑backed **API Gateway** → Lambda → Redis; fallback to DynamoDB if cache miss. This two‑tier read reduces average latency from 350 ms to 70 ms.  
- **Scalability/Availability:** Auto‑scaling shards, multi‑AZ DynamoDB global tables, and Redis replication guarantee high availability.  
- **Cost trade‑offs:** Using Lambda for ingestion eliminates server maintenance; Kinesis and DynamoDB provide pay‑as‑you‑go pricing.

**Result**  
Post‑deployment, latency dropped to 68 ms (−81 %), throughput handled 2× the peak load, and cost decreased by 30 %. The system now supports live events with > 5 M concurrent viewers without outages.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into DynamoDB’s partitioning limits, and iterated on cache eviction policies after a production failure that highlighted stale data issues—learning that even proven services need continuous tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
