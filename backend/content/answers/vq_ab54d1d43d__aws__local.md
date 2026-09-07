---
qid: vq_ab54d1d43d__aws__local
question: Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 437
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:26-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional data migration for a fintech client, we needed to move 5 TB of transactional logs from on‑premises SQL Server into an AWS lakehouse in under two weeks, without disrupting daily reporting.

**Action**  
I chose **Azure Data Factory (ADF)** as the orchestration layer because it natively supports hybrid connectivity and offers robust monitoring. I designed a pipeline with:

1. **Self‑Hosted Integration Runtime** for secure on‑prem access.  
2. **Copy Activity** using **Parallel Copy** (max 100 concurrent copies) to stage data into an S3 bucket via the **Azure Blob Storage Linked Service**.  
3. **Mapping Data Flow** to transform schema, apply incremental logic, and write to an Amazon Redshift Spectrum table.  

Key AWS services: **S3**, **Redshift Spectrum**, **Glue** (for cataloging), and **CloudWatch** for observability. I added a **DLQ** on the pipeline to capture failures and auto‑retry with exponential backoff.

**Result**  
- Completed migration in 10 days, 25% faster than the projected 13 days.  
- Achieved <0.1 % data loss (validated by hash checks).  
- Cut operational cost by 30% versus a manual ETL approach.  

**Reflection & Learning**  
I realized early that over‑parallelizing without throttling caused transient timeouts; I introduced a **Dynamic Partitioning** strategy to keep concurrency within API limits, learning the importance of *Dive Deep* into provider quotas.

> **Leadership Principles:**  
> - **Customer Obsession:** Delivered a seamless migration with minimal downtime.  
> - **Ownership & Dive Deep:** Took full responsibility for pipeline health and iterated on failure patterns.  

This experience underscores how Azure Data Factory can be leveraged within AWS ecosystems to meet stringent SLAs while optimizing cost and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
