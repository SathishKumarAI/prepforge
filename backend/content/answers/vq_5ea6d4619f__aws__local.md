---
qid: vq_5ea6d4619f__aws__local
question: what are Complex data types in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 396
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation / Task** – While leading a migration of the 200‑TB customer‑behavior warehouse from on‑prem Hadoop to EMR, I was asked to redesign the schema so that downstream BI tools could ingest nested clickstream data without costly ETL.  
>   
> **Action** – I first “dive deep” into Hive’s support for complex types: *ARRAY*, *MAP* and *STRUCT*. I mapped each raw JSON event field to a STRUCT, used ARRAYs for lists of products in an order, and MAPs for dynamic key/value pairs (e.g., session attributes). I then created a Hive metastore catalog on Aurora PostgreSQL, defined the table with these complex columns, and wrote a single Spark job that flattened only the fields needed by Tableau while preserving the nested hierarchy for future use.  
>   
> **Result** – The new schema reduced the number of tables from 12 to 3, cutting query costs on Athena by **35 %** (≈$4k/month) and slashing BI load times from 18 min to under 2 min. Because we kept the complex types in Hive, downstream data scientists could still run ad‑hoc Spark jobs that leveraged nested fields without re‑engineering the pipeline—demonstrating *ownership* of both operational efficiency and analytical flexibility.  
>   
> **Reflection** – I learned that exposing Hive’s native complex types early in the design phase can eliminate repetitive flattening logic, but it also requires careful partitioning to avoid hotspot scans. Future iterations will experiment with Glue Catalog’s “columnar” storage options (Parquet) to further optimize cost and performance.  

*Leadership Principles highlighted: Customer Obsession, Ownership, Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
