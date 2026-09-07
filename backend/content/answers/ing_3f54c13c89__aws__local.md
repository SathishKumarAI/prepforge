---
qid: ing_3f54c13c89__aws__local
question: 'Explain: Heartbeat — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:56-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a real‑time presence platform (“Heartbeat”) that feeds live user activity into downstream analytics and recommendation engines. The goal was to support **10 M concurrent users** with sub‑second latency while keeping ops cost < $200k/month.

**Action (Design)**  
*Architecture*:  
- **API Gateway + Lambda** for ingestion, throttling at 50 req/s per user.  
- **Kinesis Data Streams** (shard size 1 MB/s) to buffer events; *Lambda* transforms and writes to a **DynamoDB Global Table** (partition key = userID).  
- **SQS FIFO** queues for downstream services (e.g., analytics, notification) to guarantee order.  
- **CloudWatch Alarms + Step Functions** auto‑scale shards and trigger cold‑start mitigation.

*Scalability & Availability*:  
- Kinesis offers 10× horizontal scaling; DynamoDB Global Table gives < 1 ms latency with multi‑AZ resilience.  
- Lambda concurrency limits (default 1000) are increased via *reserved concurrency*, ensuring no request throttling during traffic spikes.  

*Cost*:  
- Kinesis: ~$0.015/shard/hour → ~48 shards = $34/mo.  
- DynamoDB: provisioned throughput + on‑demand burst ≈ $120/mo.  
- Lambda & SQS negligible at this scale.

**Result**  
Latency dropped from 350 ms to **< 80 ms** (95th percentile). Daily active users grew by **25%** in three months, and ops cost stayed below the budget target.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, performed deep dive metrics on shard utilization, and learned that pre‑warming Lambda containers during peak hours prevented cold‑start latency. This iterative improvement aligns with Amazon’s *Ownership* and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
