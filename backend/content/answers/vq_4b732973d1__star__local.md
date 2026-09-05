---
qid: vq_4b732973d1__star__local
question: How do you handle schema evolution in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 304
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:08-05:00'
sources: []
---

**Situation** – In my last role I was responsible for the nightly ETL pipeline that moved transactional data from our on‑prem SQL Server to an Azure Data Lake Gen2 using Azure Data Factory (ADF). The source schema kept adding new columns every month, and our downstream analytics team expected a consistent view in their Power BI dashboards.  
**Task** – I had to design a solution that allowed the pipeline to automatically adapt to these changes without breaking existing consumers or requiring manual intervention each time the schema changed.  
**Action** – I implemented an ADF Data Flow with *Auto Mapping* enabled and used a *Schema Drift* feature in the source dataset. For every run, I added a pre‑activity that queried the source table’s `INFORMATION_SCHEMA.COLUMNS` to generate a dynamic mapping file. The data flow then referenced this file so new columns were ingested as nullable fields. To preserve historical consistency, I stored each version of the schema in an Azure Table Storage and used a lookup activity to apply the correct schema when loading into the destination ADLS Gen2 Parquet files.  
**Result** – After deployment, schema changes no longer caused pipeline failures; we reduced manual maintenance by 80 % and kept our Power BI reports online 99.9 % of the time. I learned that coupling dynamic mapping with versioned metadata storage is key to robust data lake ingestion in a fast‑moving environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
