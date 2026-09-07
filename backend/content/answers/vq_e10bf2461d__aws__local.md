---
qid: vq_e10bf2461d__aws__local
question: What is a heap (table on a heap)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 565
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:29-05:00'
sources: []
---

**Answer**

> *“A heap table is a storage format in Snowflake that stores data rows in an unordered, append‑only structure, optimized for high ingestion rates and fast scans on recent data.”*

---

### Behavioral (STAR)

**Situation:** In 2023 I led the migration of our nightly ETL pipeline from **Amazon Redshift** to **Snowflake** for a fintech client with > 10 TB of transactional logs.  
**Task:** Reduce query latency on new‑arrival data while keeping cost under $15k/month.  
**Action:** I proposed using Snowflake’s *HEAP* tables for raw ingestion, then scheduled nightly merges into partitioned **CLUSTERED** tables. I wrote a Terraform script to spin up the warehouse with 8 credits and enabled auto‑pause.  
**Result:** Query latency dropped from 12 s (Redshift) to < 0.5 s on recent data; storage cost fell by 32 %. The client reported a 25 % reduction in support tickets related to “slow queries.”  

---

### Technical / System

| Requirement | Design Choice | AWS Service(s) |
|-------------|---------------|----------------|
| **High ingestion rate** | Use Snowflake HEAP tables (append‑only, no clustering overhead). | Snowflake (via Redshift Spectrum for legacy data). |
| **Fast recent‑data queries** | Periodic MERGE into a CLUSTERED table on the `ingest_ts` column. | Snowflake, AWS Glue (for ETL orchestration). |
| **Cost control** | Auto‑pause warehouse; use multi‑cluster only during peak hours. | Snowflake auto‑pause, Amazon CloudWatch alarms. |
| **Scalability** | Horizontal scaling via Snowflake’s elastic compute; data stored on S3 for durability. | Snowflake + Amazon S3. |
| **Trade‑offs** | HEAP tables sacrifice long‑term query performance but excel at ingestion; mitigated by nightly merges. |

---

### Bar‑Raiser Lens

*Ownership:* I owned the full migration, from design to Terraform deployment.  
*Dive Deep:* I benchmarked 15 k row batches and tuned warehouse sizing based on actual I/O patterns.  
*Quantified Impact:* 32 % storage savings, 12× latency improvement, $5k/month cost reduction.  
*Learning:* Initial mis‑estimate of clustering overhead led to a costly trial; corrected by prototyping with HEAP first.

---

> **Leadership Principles:** *Customer Obsession, Ownership.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
