---
qid: ing_0eb84226c0__aws__local
question: 'Explain: Process data at nearly any scale — Serverless Computing \u2013
  Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 415
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:52-05:00'
sources: []
---

**Situation & Task**

I led a cross‑functional team that needed to ingest, transform and score 10 TB of customer telemetry daily for a recommendation engine, but the pipeline had to be fully serverless to keep ops overhead low.

**Action (Dive Deep + Invent & Simplify)**  

1. **Data Ingestion** – Used *Amazon Kinesis Data Streams* with enhanced fan‑out to capture real‑time events and *S3 Event Notifications* for batch uploads.  
2. **Processing** – Built a Lambda chain: first Lambda normalizes data, then another triggers an Amazon Step Functions state machine that invokes *AWS Glue ETL jobs* (PySpark) on an EMR Serverless cluster, eliminating the need to manage clusters.  
3. **Model Scoring** – Deployed the trained SageMaker model as a *SageMaker Endpoint* behind *Amazon API Gateway*. Lambda invoked the endpoint in parallel across shards, aggregating results with another Lambda before writing back to S3.  
4. **Observability & Cost** – Integrated CloudWatch metrics, X-Ray tracing, and AWS Budgets; used *AWS Lambda Provisioned Concurrency* for predictable latency (≤ 200 ms) while keeping costs under $2k/month.

**Result (Deliver Results)**  

- Scaled from 50 GB/day to 10 TB/day with no manual intervention.  
- Reduced processing time by 70 % and cost by 45 % compared to our previous EC2‑based pipeline.  
- Achieved 99.9 % availability across three AZs.

**Learning & Ownership**

I conducted a post‑mortem after an outage where a Lambda timeout caused a back‑pressure spike; we added retry logic and circuit breakers, reducing failure impact by 90 %. This showcases *Ownership*—owning the system end‑to‑end, diving deep into failure modes, and iterating for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
