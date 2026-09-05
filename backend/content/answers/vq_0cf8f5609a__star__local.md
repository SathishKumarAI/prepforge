---
qid: vq_0cf8f5609a__star__local
question: How do you implement ETL process in Azure Data Factory ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 386
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:40-05:00'
sources: []
---

**Situation:**  
At my previous company we had a legacy reporting system that pulled sales data from an on‑prem SQL Server into Power BI dashboards every night. The source tables grew to 200 GB and the nightly refresh was taking over six hours, causing stale metrics for our finance team.

**Task:**  
I needed to design an automated ETL pipeline in Azure Data Factory (ADF) that would load the data into a Synapse Analytics lakehouse within two hours, preserve lineage, and allow incremental loads for future runs.

**Action:**  
1. Created a self‑managed ADF instance linked to our on‑prem SQL Server via a Self‑Hosted Integration Runtime.  
2. Built a pipeline with a “Get Metadata” activity to capture the latest file timestamp and a “Lookup” to compare against a control table in Azure SQL DB.  
3. Used a “Copy Data” activity with incremental copy logic (using `LastModified` column) to load only new rows into a staging ADLS Gen2 folder, partitioned by date.  
4. Implemented a mapping data flow that performed deduplication, type conversions, and calculated key metrics before writing to Synapse’s Delta Lake tables.  
5. Scheduled the pipeline with a tumbling window trigger (12 h) and added an alert on failure via Azure Monitor.

**Result:**  
The new ADF workflow cut nightly load time from 6 hrs to under 90 min, increased data freshness for dashboards, and reduced operational costs by 30 %. I learned the importance of incremental logic and proper partitioning in large‑scale ETL on Azure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
