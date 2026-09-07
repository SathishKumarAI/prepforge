---
qid: ing_f0027fd2e0__aws__local
question: 'Explain: Resulting context — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 458
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:50-05:00'
sources: []
---

**Situation (S)** – At a fintech startup I led the migration of our fraud‑detection pipeline from a monolithic batch job to an event‑driven architecture. The goal was to reduce latency from 12 hrs to real‑time scoring while keeping data lineage intact for audit.

**Task (T)** – Design an *Event Sourcing* pattern that captures every transaction as immutable events, feeds them into a ML model, and stores the resulting score in a read‑optimized view for downstream services.

**Action (A)**  
1. **Capture**: Kafka → Amazon MSK (high throughput, 5 M events/day).  
2. **Store**: Persist raw events to S3 with partitioned Parquet; use DynamoDB Streams as the source of truth for eventual consistency.  
3. **Compute**: Glue ETL jobs extract batches (10 min windows) and invoke SageMaker Batch Transform (model version v1.4).  
4. **Serve**: Updated scores are written to a global‑secondary‑index DynamoDB table; API Gateway + Lambda proxy for low‑latency queries.  
5. **Observability**: CloudWatch metrics + X-Ray traces track latency, error rates, and model drift.

**Result (R)** –  
- Latency dropped from 12 hrs → <30 s per transaction.  
- Throughput increased to 10× with 99.999% availability via Multi‑AZ MSK clusters.  
- Cost decreased by 35 % due to serverless Glue and spot SageMaker instances.  

**Leadership Principles** – *Customer Obsession* (real‑time fraud alerts), *Ownership* (owning the full data pipeline), *Dive Deep* (analyzing event schema evolution), and *Bias for Action* (iterating on model versioning).  

Bar‑raisers look for clear ownership, measurable impact, deep technical justification, and lessons learned from initial batch failures that drove the shift to event sourcing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
