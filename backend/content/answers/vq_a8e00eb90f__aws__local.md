---
qid: vq_a8e00eb90f__aws__local
question: What are managed and external tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 400
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:52-05:00'
sources: []
---

**Question:** *What are managed and external tables?*  

**Answer (Amazon‑style)**  

> **Situation & Task** – In a recent data‑lake migration, my team had to decide how to expose millions of customer logs stored in S3 for downstream BI without re‑ingesting or duplicating data.  
> **Action** – I introduced Athena’s *managed* tables for curated fact tables (partitioned by `event_date`) and *external* tables for raw log files that stay under our ownership. Managed tables store the table definition and schema in the Glue catalog; when you drop a managed table, its data is deleted from S3—great for derived metrics we can regenerate. External tables point to existing S3 locations; dropping the table only removes metadata, preserving raw logs for audit and future re‑processing. I also added lifecycle policies on the external bucket (archive to Glacier after 90 days) to control cost.  
> **Result** – The new schema reduced query costs by **35 %** (from $1.2M to $0.78M annually) while keeping raw data intact for compliance audits. It also cut ETL runtime from 4 hrs to 45 min, enabling near‑real‑time dashboards.  
> **Reflection** – I learned that *Ownership* + *Dive Deep* means you must understand both business needs and the underlying storage implications; we avoided a costly data duplication pitfall by properly using managed vs external tables.  

**AWS Services Used:** Athena, Glue Data Catalog, S3 Lifecycle, Glacier.  

**Bar‑raiser focus:** Demonstrated ownership of cost & compliance, deep dive into table semantics, quantified performance gains, and proactive learning from the migration failure that initially duplicated data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
