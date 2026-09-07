---
qid: ing_b92ab82a12__aws__local
question: 'Explain: Cost estimate — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 449
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:36-05:00'
sources: []
---

**Answer – Amazon Style**

> *Customer Obsession & Ownership*  
> **Situation:** A client wanted to launch a semantic search layer for its e‑commerce catalog (≈ 5 M SKUs) with 1 k queries/sec and 99.9 % latency SLA.  
> **Task:** Deliver an end‑to‑end cost estimate that balances performance, reliability, and future growth.  
> **Action:** I scoped the architecture:  
> * **Data ingestion** – S3 + Glue to convert raw CSV/JSON into a Parquet catalog.  
> * **Vector indexing** – Amazon Kendra for semantic retrieval (10 M vectors) with an on‑demand instance pool (kda‑large).  
> * **Query layer** – API Gateway → Lambda (Python) that calls Kendra; fallback to DynamoDB for metadata.  
> * **Monitoring & scaling** – CloudWatch Alarms, Auto Scaling on Lambda concurrency, and Kendra’s built‑in auto‑scaling.  
> * **Cost modeling:**  
>   - S3 storage: $0.023 /GB × 200 GB ≈ **$4.60/mo**  
>   - Kendra on‑demand: $0.12 per 1,000 queries × 2.5 M qps × 30 days ≈ **$108 k/mo** (high‑scale tier)  
>   - Lambda & API Gateway: <$1 k/mo  
> *Total estimate:* **≈ $110 k/month** with a projected 20 % reduction by migrating to Kendra’s “spot” pricing and pruning unused vectors.  

> **Result:** Presented the model; client approved, saved 15 % after spot‑pricing trial.  
> **Learnings:** Validated that semantic search cost is dominated by query volume; early adoption of spot pricing can yield measurable savings without compromising SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
