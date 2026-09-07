---
qid: ing_64107db2d6__aws__local
question: 'Explain: Sources — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 411
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:21-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team for an enterprise recommendation engine, we discovered that our model was stalling because the training data was incomplete—missing user intent signals from third‑party content platforms. I owned the “Data Sourcing” effort and had to design a scalable ingestion pipeline that could pull structured and unstructured data from multiple APIs in real time.

**Action**  
1. **Dive Deep** into each source’s schema, rate limits, and data quality.  
2. Built an **AWS Glue** crawler per source to catalog raw JSON/CSV streams; used **Lambda** functions to normalize the payloads on ingestion.  
3. Employed **Amazon Kinesis Data Streams** as a fault‑tolerant buffer feeding into an **S3 EventBridge** trigger that launched an **EMR Serverless** job for ETL, storing the cleaned dataset in **Redshift Spectrum**.  
4. Added a **CloudWatch alarm** on ingestion latency; when lag exceeded 5 min, it auto‑scales the EMR cluster and sends a Slack alert.

**Result**  
- Reduced data freshness lag from *12 hours* to *under 3 minutes*.  
- Increased downstream model accuracy (AUC) by **14%**, lifting monthly revenue by $2.8M.  
- Cut storage costs by 30% through partitioned S3 and Redshift Spectrum, saving ~$50K annually.

**Reflection & Bar‑Raiser Insight**  
I took full ownership of the data pipeline, demonstrated deep technical knowledge (AWS Glue, Kinesis, EMR Serverless), quantified impact with revenue lift, and iterated quickly after a failed Lambda deployment by adding idempotent retries. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**—exactly what bar‑raisers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
