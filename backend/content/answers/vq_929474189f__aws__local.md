---
qid: vq_929474189f__aws__local
question: can we extract only different data from two different tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 511
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:51-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to reconcile daily inventory feeds from two legacy systems that each populated a separate Redshift table (`inventory_a` and `inventory_b`). The business needed a single source of truth for downstream analytics, but the tables had thousands of rows with occasional mismatches. They wanted an automated way to pull only the differing records so we could investigate data quality issues without re‑processing the entire dataset.

**Action**  
I designed an incremental ETL using **AWS Glue** and **Amazon Redshift Spectrum**:

1. **Schema harmonization** – created a canonical view `inventory_common` that normalizes column names and datatypes across both tables.
2. **Change data capture (CDC)** – leveraged Redshift’s `INSERTED` and `DELETED` system tables to flag rows changed in the last 24 hrs, reducing scan volume by ~90%.
3. **Set‑difference logic** – wrote a Spark job (Glue) that executed:
   ```sql
   SELECT * FROM inventory_common_a
   EXCEPT
   SELECT * FROM inventory_common_b
   UNION ALL
   SELECT * FROM inventory_common_b
   EXCEPT
   SELECT * FROM inventory_common_a;
   ```
4. **Output** – results written to an S3 bucket (`s3://data-lake/inventory/diffs/`) and a Redshift materialized view for downstream BI.

I chose Glue because it natively integrates with Redshift, scales on demand, and keeps operational costs low (pay‑as‑you‑go). The use of Spectrum allowed us to query the raw S3 data without moving it into Redshift, preserving cost efficiency.

**Result**  
The new pipeline processed 5 M rows in under 12 minutes versus the previous 2‑hour manual diff. We reduced storage costs by 35% and cut investigation time from days to hours. The accuracy of downstream reports improved by 99.8%, as verified against audit logs.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for end‑to‑end data quality, designing the solution, monitoring it, and iterating on failures.
- **Dive Deep** – By examining Redshift system tables and using set operations, I uncovered subtle schema mismatches that had gone unnoticed.
- **Deliver Results** – Quantified improvements in performance, cost, and accuracy demonstrate tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
