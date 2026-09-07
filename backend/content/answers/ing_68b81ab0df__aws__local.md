---
qid: ing_68b81ab0df__aws__local
question: How to update the score of a player? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 590
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:06-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a real‑time fantasy sports leaderboard used by 1 M daily active users. The system had to update player scores every minute while keeping latency under 50 ms and costs below $5k/month.

**Action – Design**  
I chose an *event‑driven* architecture:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Score ingestion | Amazon Kinesis Data Streams | Low‑latency, auto‑scaling ingestion of 10 K events/s. |
| Real‑time aggregation | Amazon Lambda + DynamoDB Streams | Serverless compute scales with traffic; streams trigger incremental updates to a *global* leaderboard table. |
| Leaderboard storage | DynamoDB (partition key: sport+date, sort key: score) | Single‑write hotspot avoided by sharding on sport and using GSIs for top‑N queries. |
| Cache & hot‑read | Amazon ElastiCache Redis (Cluster mode) | 10 ms read latency for the top 100 players; automatic failover keeps availability >99.9%. |
| Batch re‑calculation | AWS Glue + Athena | Weekly full recompute to correct drift, stored in S3 for audit and analytics. |

**Result**  
- Latency dropped from 300 ms to <30 ms for 95th percentile of score updates.  
- Monthly ops cost fell from $12k to $4.2k (≈65 % savings).  
- System handled a 200 % traffic spike during playoffs without any outages, maintaining >99.99 % availability.

**Leadership Principles & Take‑aways**  

| Principle | How it surfaced |
|-----------|----------------|
| **Customer Obsession** | We measured user engagement via click‑through rates on leaderboard widgets; post‑launch a 12 % lift confirmed value. |
| **Ownership** | I championed the full stack, from ingestion to cache, and wrote SOPs for rollback in case of data drift. |
| **Dive Deep** | Tracked DynamoDB hot‑key patterns with CloudWatch Metrics, tuned partition keys, and validated throughput with XRay traces. |
| **Bias for Action** | Rolled out Lambda functions within 3 weeks, iterating on cold‑start mitigation before the live season. |

**Bar‑raiser cues**  
- Demonstrated end‑to‑end ownership and cross‑team coordination.  
- Quantified impact (latency, cost, user engagement).  
- Showed a deep understanding of trade‑offs (serverless vs. managed cache, DynamoDB sharding).  
- Shared lessons: “If we hadn’t instrumented Lambda cold starts early, we’d have missed the 50 ms SLA.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
