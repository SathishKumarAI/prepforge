---
qid: ing_af1bdbf05f__aws__local
question: 'Explain: you know, if you have to build — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 462
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:36-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team at my previous company, we were tasked to replace an on‑prem ML pipeline that processed ~50 TB of telemetry per day for real‑time fraud detection. The legacy stack (Spark + Hadoop) had a 2‑hour batch window and was hitting SLA drift.

**Task** – Design a scalable, low‑latency end‑to‑end system on AWS that could ingest streams, train models in near‑real time, and serve predictions with < 200 ms latency while keeping monthly spend under $250k.

**Action** –  
1. **Ingest & Store**: Kinesis Data Streams → S3 (glacier for cold data).  
2. **Feature Engineering**: Lambda + Glue to enrich records; features persisted in DynamoDB (partitioned by user) for fast lookup.  
3. **Model Training**: SageMaker Ground Truth + Pipelines with Spot Instances (up to 70 % cost savings). Trained an XGBoost model nightly, versioning via SageMaker Model Registry.  
4. **Inference**: SageMaker Endpoint (multi‑model) behind an Application Load Balancer; autoscaling based on CloudWatch metrics.  
5. **Observability**: CloudWatch + OpenTelemetry for latency/throughput; Athena queries on S3 logs to audit drift.

**Result** –  
- Latency dropped from 2 h batch to < 200 ms prediction.  
- Throughput increased 4×, handling 10 M events/day without throttling.  
- Cost reduced by 35 % vs. the legacy stack.  
- Model drift alerts triggered within minutes, enabling rapid retraining.

**Leadership Principles Highlighted** – *Customer Obsession* (delivering real‑time fraud insights), *Ownership* (full responsibility from ingestion to serving), and *Dive Deep* (profiling every component for cost/latency trade‑offs). The bar‑raiser will note the end‑to‑end ownership, quantitative impact, and iterative learning loop that kept the system resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
