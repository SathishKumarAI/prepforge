---
qid: vq_a0a5ad5d62__star__local
question: Difference between Azure Data Factory and Azure Databricks ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 336
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:38-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with migrating a legacy ETL pipeline that processed about 2 TB of daily log data from on‑prem Hadoop to Azure. The existing workflow ran nightly, but our business users were demanding near‑real‑time insights for fraud detection.

**Task:**  
I had to redesign the ingestion and transformation process so we could ingest raw logs in under 30 minutes, perform complex aggregations, and expose the results to Power BI dashboards with minimal latency.

**Action:**  
First I used **Azure Data Factory (ADF)** to orchestrate data movement: ADF pipelines pulled the CSV files from an Azure Blob Storage staging area, scheduled triggers, and handled error handling. For the heavy transformations, I spun up an **Azure Databricks** cluster and wrote Spark notebooks that performed windowed joins, ML feature engineering, and schema evolution in a distributed manner. I leveraged Delta Lake for ACID transactions, used Databricks’ auto‑scaling to manage peak loads, and published the processed tables as Azure SQL Managed Instance views so Power BI could query them directly.

**Result:**  
The new pipeline reduced data latency from 24 hours to under 45 minutes, increased throughput by 3×, and cut operational costs by ~15% thanks to ADF’s pay‑per‑run pricing. I learned that ADF excels at orchestrating and moving data, while Databricks shines when you need scalable compute and advanced analytics on large volumes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
