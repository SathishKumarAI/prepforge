---
qid: ing_75415b2fd6__aws__local
question: 'Explain: Data flow — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 484
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:02-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the design of a *Customer‑Distillation Pipeline* for an e‑commerce SaaS that needed to surface actionable insights from 3 TB of clickstream data per day. The goal was to reduce manual feature engineering by 70 % and improve recommendation accuracy by 15 %.

**Action (Design)**  
1. **Ingest** – I chose **Amazon Kinesis Data Streams** for real‑time ingestion, throttling to 10 kpps with auto‑scaling.  
2. **Staging** – A nightly batch job used **AWS Glue** to transform raw JSON into Parquet and load it into an **Amazon S3 data lake** (partitioned by date).  
3. **Feature Store** – I built a serverless feature store in **Amazon DynamoDB** with TTL for freshness, accessed via **AWS SDK** from downstream services.  
4. **Model Training & Inference** – Trained on **SageMaker Pipelines**, deployed models as **ECR containers behind an Application Load Balancer**; inference served by **Lambda@Edge** to keep latency < 50 ms globally.  
5. **Observability** – Integrated **Amazon CloudWatch** metrics, **X-Ray** tracing, and a custom dashboard in **QuickSight** for SLA monitoring.

**Result**  
- Cut feature‑engineering effort from 120 h/month to 35 h (≈70 % reduction).  
- Recommendation accuracy improved by 15 %, boosting AOV by $1.2M annually.  
- Cost fell from $45K/yr (on‑prem Spark cluster) to $22K/yr on AWS.

**Reflection & Ownership**  
I proactively identified the bottleneck in data freshness, drove cross‑team buy‑in for DynamoDB, and iterated on Lambda memory settings after a 3 % latency spike. I documented lessons in a post‑mortem and built automated rollback logic—showing *Ownership* and *Dive Deep*.  

> **Bar‑raiser cue:** Looked for measurable impact, end‑to‑end ownership, depth of technical trade‑offs, and evidence that failures were turned into learning moments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
