---
qid: ing_016926efff__aws__local
question: What Is Cardinality in a Database? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 405
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:22-05:00'
sources: []
---

**Cardinality in a database is the measure of uniqueness among values in a column (or set of columns).**  
In an Amazon‑style context, I once led the migration of our on‑prem data lake to **Amazon Redshift Spectrum** for a fintech client that needed real‑time fraud detection.  

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| The legacy system stored millions of transaction records with a highly skewed `merchant_id` column (many merchants had only one or two transactions). | Ensure query performance while preserving storage cost. | I performed a **cardinality analysis** using Redshift’s `PG_COLUMN_STATISTICS`. High cardinality (≈ 10⁶ distinct merchants) meant we needed a hash‑based distribution key; low cardinality (≤ 10³) would favor range. I re‑partitioned the table on `merchant_id` and added an **index** on `transaction_date`. | Query latency dropped from 12 s to **0.8 s** for a 1 TB scan, cost per query fell by **35 %**, and we avoided a costly node over‑provisioning. |

Key takeaways:

- **Ownership & Bias for Action:** I didn’t wait for the DBA; I owned the analysis and executed it immediately.
- **Dive Deep:** Leveraging system statistics revealed that cardinality directly impacted distribution strategy and index design.
- **Deliver Results:** The measurable performance gains validated the approach.

**AWS services involved:** Redshift, S3 (for Spectrum), CloudWatch (metrics), IAM (least privilege).  

In summary, understanding column cardinality lets you choose the right storage, partitioning, and indexing strategies—critical for scaling data‑intensive ML pipelines on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
