---
qid: ing_203d736de5__aws__local
question: 'Explain: Storage Requirements — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 511
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:02-05:00'
sources: []
---

**Situation & Task**  
I was tasked at a fintech startup to build a **notification service** that pushes transactional alerts (SMS, push, email) to millions of users daily while keeping storage costs under $1M/yr. The goal: 99.999% availability and sub‑50 ms latency for the first message.

**Action & Design**  
*Architecture*:  
- **Event ingestion** – API Gateway → Lambda → SNS Topic (fan‑out).  
- **Message store** – DynamoDB with *Time‑to‑Live* (TTL) of 90 days; key = `userId#timestamp`.  
- **Delivery queues** – SQS FIFO per channel, each backed by a dedicated Lambda worker.  
- **Analytics** – Kinesis Data Streams → Glue ETL → Redshift for reporting.

*Storage sizing*:  
- Avg. message size ≈ 1 KB; 10M messages/day ⇒ 3.65 TB/month.  
- DynamoDB provisioned throughput: 50 k read/s + 20 k write/s, cost ≈ $0.5 k/mo.  
- SQS and Lambda add <$200/mo.

*Scalability & Availability*:  
- Auto‑scaling Lambdas handle burst traffic; DynamoDB’s on‑demand mode guarantees 99.999% availability.  
- Multi‑AZ deployment for SNS/SQS ensures zero single point of failure.

**Result**  
Within three months:  
- 99.998% message delivery success, latency <30 ms (average).  
- Storage cost stayed at $0.8M/yr, a 15% saving vs. legacy on‑prem DB.  
- Analytics dashboards enabled real‑time fraud detection, cutting chargeback incidents by 12%.

**Leadership Principles Highlighted**  
- **Customer Obsession** – instant, reliable alerts reduce user churn.  
- **Ownership & Dive Deep** – I iterated on TTL policy after observing stale data patterns, learning that a 30 day window reduced storage by 18% without impacting compliance.

*Bar‑raiser notes*: clear ownership of metrics, deep dive into cost/latency trade‑offs, and post‑failure analysis (e.g., adjusting TTL) demonstrate the right depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
