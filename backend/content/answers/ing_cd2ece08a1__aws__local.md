---
qid: ing_cd2ece08a1__aws__local
question: 'Explain: Toward the world as a computer — Viewing the world as a computer:
  Global capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 398
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:42-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team that had to expose our global data lake to hundreds of ML models in real time while keeping latency < 50 ms. The challenge was treating the world as a *computer*: every sensor, log stream, and user interaction became a deterministic input that could be queried, transformed, and fed into downstream analytics.

**Action**  
*Ownership & Dive Deep* – I built an event‑driven architecture on **Amazon EventBridge** + **Kinesis Data Streams** to ingest 10 M events/sec.  
*Bias for Action* – Deployed a stateless **Lambda** layer that normalised data into a unified schema stored in **DynamoDB Global Tables**, ensuring eventual consistency across three AZs.  
*Invent & Simplify* – Introduced an **AWS Glue** crawler to auto‑generate Athena tables, allowing ML teams to run ad‑hoc queries with `SELECT * FROM events WHERE event_type='click'` without writing code.  
*Customer Obsession* – Implemented a real‑time monitoring dashboard (CloudWatch + QuickSight) that surfaced model drift metrics within 30 s of data arrival.

**Result**  
- Reduced end‑to‑end ingestion latency from 2 s to < 50 ms, enabling live recommendation engines.  
- Cut infrastructure cost by 35% through serverless scaling and spot‑instance usage for batch jobs.  
- Increased model accuracy by 12% due to richer, lower‑latency feature pipelines.

**Bar‑raiser notes** – I demonstrated full ownership of the pipeline, dove deep into performance bottlenecks, quantified impact with concrete numbers, and learned from an initial failure (spurious schema drift) by adding automated validation rules in Glue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
