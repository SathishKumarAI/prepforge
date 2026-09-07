---
qid: ing_b52ce35339__aws__local
question: 'Explain: Availability Numbers — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 497
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:11-05:00'
sources: []
---

**Situation & Task**  
I was hired by a startup that wanted to launch an ML‑powered recommendation engine for its e‑commerce platform. The client demanded *99.999% availability* during peak holiday traffic (~10 k requests/second) with a 30‑day data retention window, while keeping cost under $50k/month.

**Action – Design & AWS Services**  
1. **Data ingestion** – Kinesis Data Streams (shard‑size = 2 MiB/s) → Lambda → S3 *landing zone* for raw events.  
2. **Feature store** – DynamoDB Global Tables (replica in us‑east‑1 & eu‑west‑1) with TTL=30 days; read/write capacity auto‑scaling, backed by DynamoDB Accelerator (DAX).  
3. **Model training** – SageMaker Pipelines on spot instances + managed Spot Fleet for cost savings; model artifacts stored in S3 with versioning.  
4. **Serving layer** – SageMaker Endpoints behind an Application Load Balancer (ALB) with *cross‑region* routing and health checks. The endpoint is replicated to a second region for failover, using Route 53 latency‑based routing.  
5. **Observability** – CloudWatch metrics & Alarms on request latency (<200 ms), error rate (<0.1%), and auto‑scale triggers; X-Ray traces for downstream calls.

**Result**  
- Achieved *99.999%* uptime (≤ 4.32 min downtime in 12 months).  
- Latency < 180 ms for 95th percentile of requests.  
- Monthly cost: $48k, 18% below the budget.  

**Reflection & Bar‑raiser focus**  
I took *Ownership* by mapping every failure point and creating automated rollback scripts (Lambda) that restored the last healthy endpoint in under 30 s. I *Dived Deep* into CloudWatch logs to discover a rare Lambda cold‑start spike, then pre-warmed with provisioned concurrency. The key learning: always model for the edge case—small latency hiccups during holidays can cascade into revenue loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
