---
qid: ing_307d897f18__aws__local
question: Why does deduplication matter more for an AI corpus than a warehouse, and
  how do you do it at scale?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 469
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:56-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined the data science team at a fintech startup, we were building an AI‑driven fraud model on a 2 TB customer transaction corpus. Our warehouse had ~1 M distinct records, but the AI corpus contained duplicate profiles that inflated training time and degraded model accuracy. The goal was to reduce duplicates by ≥90% while keeping latency <5 s for inference.

**Action (Dive Deep + Bias for Action)**  
I designed a distributed dedup pipeline on AWS:

| Step | Service | Reasoning |
|------|---------|-----------|
| 1️⃣ Ingest & hash | **Kinesis Data Streams → Lambda** | Real‑time ingestion, compute SHA‑256 on key fields. |
| 2️⃣ Dedup store | **DynamoDB Global Secondary Index (GSI)** on the hash | O(1) lookup for duplicates; auto‑scaling throughput keeps cost low. |
| 3️⃣ Batch cleanup | **Glue ETL** writes unique rows to **S3 (Parquet)** → **Redshift Spectrum** for analytics. |

We added a *dedup counter* table in DynamoDB that tracks how many times each hash appears, enabling us to flag heavy duplicates.

**Result (Deliver Results + Quantified Impact)**  
- Duplicate reduction: 92% (from 2 TB → 0.24 TB).  
- Training time cut from 48 h to 6 h (10× speed‑up).  
- Model precision improved by 4 points (AUC ↑ 0.02).  
- Cost of the pipeline: <$200/month, compared to $1,500 for a naïve Spark job.

**Reflection (Learn & Grow)**  
The first run missed a few edge cases where different accounts shared the same email but had distinct IDs. Adding a secondary hash on the customer name fixed this without adding cost. I documented the lessons in our knowledge base and mentored two junior engineers to maintain the pipeline, ensuring continuous ownership.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
