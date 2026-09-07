---
qid: ing_96a28d5c39__aws__local
question: 'Explain: Interviewer — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 558
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:41-05:00'
sources: []
---

**Situation (S)**  
I was tasked at a fintech startup to build a real‑time leaderboard that ranks users by credit‑score improvements, serving ~200 k active users and 30 k write ops per second during peak promotion periods.

**Task (T)**  
Design a highly available, low‑latency system that can ingest millions of score updates daily, surface the top 1000 in <50 ms, and support historical trend queries for compliance audits.

**Action (A)**  

| AWS Service | Role |
|-------------|------|
| **Kinesis Data Streams** | Ingest raw score events with 1‑second buffering. |
| **Lambda** | Stateless transform to compute delta, publish to DynamoDB. |
| **DynamoDB (partitioned by user‑id)** | Store latest score and timestamp; provisioned capacity + auto‑scaling for spikes. |
| **DAX (Redis‑compatible)** | Cache the top 1000 sorted set (`ZSET`) for sub‑10 ms reads. |
| **Elasticache Redis** | Maintain a real‑time leaderboard via `ZADD/ZREVRANGE`. |
| **S3 + Athena** | Periodic snapshot of full rankings for audit and analytics. |

*Scalability:* Kinesis shards auto‑scale to 10 k events/s; DynamoDB handles >1 M writes/second with global tables for multi‑AZ resilience.  
*Availability:* All services are regionally redundant; Lambda retries on failures, DAX clusters have failover nodes.  
*Cost:* Spot instances for data processing reduce compute spend by ~35%; S3 lifecycle tiers keep storage costs low.

**Result (R)**  

- Latency: 80 % of leaderboard queries <15 ms, 95 % <30 ms.  
- Throughput: Sustained 60 k writes/s during promotion; no throttling observed.  
- Business impact: User engagement rose 18 %, churn dropped 12 % within the first month.

**Reflection**  

I practiced *Ownership* by leading end‑to‑end delivery and *Dive Deep* to uncover bottlenecks (e.g., DynamoDB hot partitions). The failure mode—Lambda timeouts during peak—led me to introduce a retry buffer, improving reliability by 99.9 %. This design aligns with Amazon’s **Customer Obsession** (fast leaderboard for users) and **Deliver Results** (measurable engagement gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
