---
qid: ing_59f0d89e22__aws__local
question: 'Explain: Leaderboard API — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 379
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:04-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At my last role I was tasked with building a real‑time leaderboard for a mobile game that had 1 M daily active users (DAU). The leaderboard needed to update within 200 ms of each score submission and serve global rankings without lag.

**Action (Dive Deep, Bias for Action)**  
I architected a distributed system on AWS:  

| Component | Service | Rationale |
|-----------|---------|-----------|
| Ingest API | Amazon API Gateway + Lambda | Serverless, auto‑scale, low latency |
| Queue | Amazon SQS FIFO | Guarantees order and deduplication |
| Score Processor | EC2 Auto Scaling Group with Spot Instances | Handles bursty writes; cost‑effective |
| Store & Query | DynamoDB (global secondary index on `score`) + DAX cache | 99.999% read availability, sub‑10 ms reads |
| Aggregation Worker | Amazon Kinesis Data Streams → Lambda → Redshift | Periodic batch for analytics and export |

**Result (Deliver Results)**  
- Latency dropped from 1 s to **<200 ms** per update.  
- 99.9% of leaderboard queries served in <10 ms, even at peak traffic (250 k concurrent users).  
- Operational cost decreased by **35 %** versus the legacy monolith.  

I also introduced automated health checks and a rollback strategy for failed batches, learning that *fail fast* improves reliability. This design showcases ownership, deep technical dive, and measurable impact—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
