---
qid: ing_8ead421a8e__aws__local
question: 'Explain: Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 478
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:32-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team at my previous company, we needed to run 12 K training jobs nightly on GPU clusters. The existing cron‑based scheduler caused bottlenecks, SLA drift (average lag 4 h), and no visibility into failures.

**Action**  
I architected a **distributed job scheduler** using AWS services:

| Component | Service | Reason |
|-----------|---------|--------|
| Job queue | Amazon SQS FIFO + DLQ | Guarantees order, retry, and dead‑letter handling. |
| Metadata store | DynamoDB (Global Tables) | Low‑latency reads/writes for job state; cross‑region replication for high availability. |
| Orchestration | Step Functions + ECS‑Fargate | Serverless compute, automatic retries, parallelism control, and built‑in monitoring. |
| Metrics & alerts | CloudWatch + SNS | Real‑time dashboards (99th percentile latency < 30 min) and automated escalations. |

I added a **self‑healing layer** that polls failed jobs in the DLQ every 10 min and resubmits them after inspecting error codes, reducing manual intervention by 80%. The scheduler also exposes an API for ad‑hoc job submission with priority tags.

**Result**  
* SLA compliance rose from 70 % to **>99 %**.  
* Job turnaround time dropped from 4 h to **<45 min** on average.  
* Operational cost decreased by 35 % thanks to Fargate’s pay‑per‑second billing and auto‑scaling.

**Reflection (Bar‑raiser lens)**  
I took full *ownership* of the end‑to‑end flow, *dived deep* into failure modes, quantified impact with clear metrics, and learned from early mis‑estimated retry limits—adjusting them to avoid duplicate GPU usage. This design scales horizontally, remains highly available, and keeps costs predictable while delivering measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
