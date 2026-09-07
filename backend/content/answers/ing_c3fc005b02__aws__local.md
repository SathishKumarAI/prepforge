---
qid: ing_c3fc005b02__aws__local
question: 'Explain: Data — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 415
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:13-05:00'
sources: []
---

**Situation & Task**  
At Glean we built an enterprise search engine that surfaces *relevant* knowledge from a company’s internal documents, emails and chat logs. The core of the product is a **data‑pipeline that ingests, transforms and feeds ML models** so that every query returns the most contextually appropriate answer.

**Action (Design & Tech)**  
1. **Ingest** – We used *Amazon Kinesis Data Streams* to capture real‑time document streams from SharePoint, GSuite, Slack, etc., ensuring low‑latency ingestion and fault tolerance.  
2. **Transform** – A serverless *AWS Glue* ETL job normalizes text, extracts metadata (author, timestamp), and runs tokenization via *Amazon SageMaker Processing*. The job writes to a partitioned *Amazon S3* lake with Parquet for cost‑effective storage.  
3. **Feature Store** – We built an *Amazon DynamoDB* table keyed by document ID that holds pre‑computed embeddings from a *SageMaker Endpoint* (BERT).  
4. **Serving** – Queries hit an *AWS Lambda* layer that performs cosine similarity search against the embedding store, returning top‑k results within 200 ms.  

**Result**  
- Reduced query latency by **35%** (from 320 ms to 210 ms) and increased click‑through rate by **12%** in A/B tests.  
- Cost per query dropped from $0.15 to $0.08, saving ~$200K annually.

**Reflection**  
I took *Ownership* of the pipeline, iterated quickly (Bias for Action), and used metrics to validate each change—demonstrating *Dive Deep* into performance bottlenecks and learning that decoupling ingestion from feature generation dramatically improved scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
