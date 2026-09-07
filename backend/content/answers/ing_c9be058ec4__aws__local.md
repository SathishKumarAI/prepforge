---
qid: ing_c9be058ec4__aws__local
question: 'Explain: Data structures — Technical interviewing | Microsoft Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 427
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:31-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a feature that exposed an on‑prem ML pipeline to customers via a web portal. The core requirement was to store millions of model artefacts, training logs and inference results in a format that allowed *real‑time* querying for dashboards while keeping costs under $1M/yr.

**Action (Technical)**  
I chose **Amazon S3** + **AWS Glue** + **Amazon Athena** as the data lake, using **Parquet** files for columnar storage. To support fast point‑in‑time lookups I added a **DynamoDB** index keyed by `model_id#timestamp`. For inference latency < 200 ms I deployed a **Lambda@Edge** layer that pulls the latest model from S3 via the AWS SDK and caches it in an **Elasticache Redis** cluster.  
I also designed a **schema‑agnostic ingestion microservice** (Python/Flask) that validates JSON payloads against a JSON‑Schema, serializes them to Parquet, and writes them atomically to S3 using *S3 Object Lock* for immutability.

**Result**  
The new architecture cut storage costs by 35 % and reduced query times from 12 s (Redshift) to < 2 s (Athena). The real‑time dashboard now refreshes every minute, driving a 27 % increase in customer engagement.  

**Leadership Principles Reflected**  
- **Customer Obsession**: Delivered instant insights for product managers.  
- **Ownership & Dive Deep**: Built end‑to‑end data flow, profiled bottlenecks, and iterated until latency met SLA.  

*Bar‑raiser cue*: I quantified the impact (cost %, latency), demonstrated deep architectural trade‑offs, and learned that early schema design reduces downstream complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
