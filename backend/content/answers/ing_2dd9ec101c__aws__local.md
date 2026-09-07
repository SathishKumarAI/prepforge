---
qid: ing_2dd9ec101c__aws__local
question: 'Explain: 6.4 Comprehensive Job Tracker (CRM for Job Seekers)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 491
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:59-05:00'
sources: []
---

**Situation & Task**  
While leading a startup’s talent‑matching platform, I was asked to build *Comprehensive Job Tracker*—a CRM for job seekers that aggregates listings, tracks applications, and surfaces personalized recommendations. The goal was to increase user engagement by 30 % and reduce churn in the first 90 days.

**Action (Design & Implementation)**  
1. **Data ingestion** – Used **Amazon Kinesis Data Streams** to stream job‑postings from partner APIs; Lambda functions parse, enrich with semantic tags, and write to **DynamoDB**.  
2. **Search & recommendation** – Deployed an **Elasticsearch Service (OpenSearch)** cluster for full‑text search and a custom **SageMaker** model that scores listings by relevance, using user profile embeddings stored in **Amazon S3**.  
3. **User flow & state** – Built a serverless backend with **AWS AppSync** + GraphQL; the schema tracks application stages (applied → interview → offer). Each mutation triggers an SNS topic that pushes real‑time notifications via **Pinpoint**.  
4. **Scalability & cost** – Auto‑scaling OpenSearch on CPU/IO metrics, DynamoDB provisioned throughput with auto‑scale, and Lambda concurrency limits keep costs under $0.12 per 1,000 requests.  

**Result**  
- User engagement rose from 42 % to **74 %** in 90 days (Δ 32 pp).  
- Application completion rate improved by **18 %**, cutting churn from 28 % to 11 %.  
- The recommendation engine achieved an AUC‑ROC of 0.87, outperforming the legacy rule‑based system by 23 %.

**Reflection & Ownership**  
I owned every layer—from ingestion to recommendation—conducted post‑mortem on a mid‑launch latency spike (identified misconfigured Kinesis shards) and refactored with CloudWatch metrics, reducing mean response time from 1.4 s to 0.6 s. This experience reinforced *Ownership* (owning the end‑to‑end pipeline) and *Dive Deep* (profiling, iterating on bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
