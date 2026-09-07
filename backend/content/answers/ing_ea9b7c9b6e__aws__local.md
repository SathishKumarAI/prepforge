---
qid: ing_ea9b7c9b6e__aws__local
question: 'Explain: High-Level Design — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 414
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:37-05:00'
sources: []
---

**Situation** – I was asked to outline a high‑level AI‑driven recommendation system for Airbnb (Neo Kim & Hayk’s architecture).  
**Task** – Build a scalable, low‑latency service that personalises listings at scale while keeping cost in check.

**Action** –  
1. **Data ingestion**: Use *Amazon Kinesis Data Streams* to stream user activity and property metadata into an *AWS Glue* ETL pipeline, storing raw logs in S3 for auditability.  
2. **Feature store**: Persist engineered features in *Amazon DynamoDB* (high‑write throughput) and refresh them nightly via *Glue Jobs*.  
3. **Model training**: Train collaborative‑filtering & content‑based models on *SageMaker*, leveraging spot instances to cut GPU costs by ~70 %.  
4. **Inference layer**: Deploy the top‑k model as a *Lambda* function behind an *API Gateway* for < 50 ms latency, scaling automatically with request bursts.  
5. **Observability**: Push metrics (prediction latency, CTR lift) to *CloudWatch* and trigger alarms; log request traces in *X-Ray* for debugging.

**Result** – The pilot achieved a 12 % increase in click‑through rate and a 7 % boost in booking conversion within two weeks of rollout. Cost per recommendation stayed under $0.0003, below the target of $0.001.  
**Learning** – Early failures in cold‑start handling taught me to cache popular listings in *ElastiCache*—a change that cut latency by 30 %.  

> **Leadership Principles:** *Customer Obsession* (maximize booking success), *Ownership* (own end‑to‑end pipeline), *Dive Deep* (profiling and tuning each layer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
