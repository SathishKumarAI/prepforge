---
qid: vq_063be31e3d__aws__local
question: What are the different file formats in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 485
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:37:09-05:00'
sources: []
---

**Situation / Task**

In my last role I led a migration of a legacy on‑prem Hadoop warehouse to Amazon EMR for a retail client whose catalog grew from 10 M to **45 M** SKUs in two years. The team needed to decide which Hive file formats would give the best balance between query performance, cost and ease of ingestion.

**Action**

I scoped the requirements:  
* **Fast aggregations** on time‑series dimensions (sales, inventory).  
* **Low storage costs** for cold historical data.  
* **Simple ETL pipelines** that could ingest streaming logs nightly.

After a deep dive into Hive’s supported formats I chose:

| Format | Use case | AWS Service | Key trade‑offs |
|--------|----------|-------------|----------------|
| ORC | High‑cardinality fact tables (sales, inventory) | EMR + Athena | 2–3× compression; column pruning; high CPU cost for writes. |
| Parquet | Dimensional data and semi‑structured logs | EMR + S3 Select | Columnar, schema evolution, good for joins. |
| Text/CSV | Legacy raw feeds that need minimal processing | EMR | No compression; higher I/O cost but fastest ingestion. |

I implemented a **glue catalog** to auto‑discover schemas and used **AWS Glue ETL jobs** with the *DynamicFrame* API to convert incoming CSV streams into ORC on S3, tagging them by year for lifecycle policies.

**Result**

- Query latency on sales aggregates dropped from **15 s → 1.2 s** (12×).  
- Storage cost per month fell from $18k to $9k due to ORC compression (~50% savings).  
- The ETL pipeline completed 30 min faster, freeing 20 dev‑hrs/month for new features.

**Reflection**

I took full ownership of the migration, iterated on format choices after profiling, and documented a “format decision matrix” that is now used across teams. This experience reinforced the importance of **Customer Obsession** (delivering fast insights to business users) and **Dive Deep** (profiling data to choose the right storage).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
