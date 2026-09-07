---
qid: ing_cc642f06e9__aws__local
question: 'Explain: do twice as much work and I — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 489
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:05-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: While modernizing a legacy recommendation engine, my team was asked to double the processing throughput without compromising accuracy or SLA.  
*Task*: We needed an event‑driven pipeline that could ingest user interactions in real time and feed ML models for instant personalization.  
*Action*: I scoped a **Kafka + Lambda + SageMaker** architecture:  
- **Kafka** (or EventBridge) handled high‑volume, low‑latency ingestion with at‑least‑once semantics.  
- **AWS Lambda** processed events in parallel, performing feature extraction and enqueuing payloads to an SQS queue.  
- A **SageMaker Endpoint** served the trained model; Lambda invoked it per batch, returning predictions that were written back to DynamoDB for downstream services.  

I introduced *checkpointing* via Kinesis Data Streams to guarantee exactly‑once processing and implemented a metrics dashboard (CloudWatch + Grafana) to track latency, error rates, and cost per request.

*Result*: Through this event‑driven design we achieved **2× throughput** while keeping latency < 200 ms. Cost dropped by **35%** due to serverless scaling; we also reduced model drift detection time from 24 h to 30 min.  

**Dive Deep & Deliver Results**

I conducted a cost/latency trade‑off analysis: comparing EC2 + Kafka vs. managed Kinesis, and Lambda vs. Fargate for heavy transforms. The chosen stack delivered the required scalability with *99.99% availability* at a fraction of the operational overhead.

**Bar‑raiser Takeaway**  
- **Ownership**: I led cross‑functional discussions to align ML ops, data engineering, and product on SLAs.  
- **Dive Deep**: Quantified every micro‑service’s cost/latency curve; iterated on batch size until optimal.  
- **Learning from Failure**: Early trials exposed a Lambda timeout issue; we refactored to step functions, preventing 10 % SLA degradation in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
