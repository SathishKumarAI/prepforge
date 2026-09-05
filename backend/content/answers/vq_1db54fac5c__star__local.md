---
qid: vq_1db54fac5c__star__local
question: Q2). What are processing tools in Azure Data Factory ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:27-05:00'
sources: []
---

**Situation:** In my last role, we had a quarterly reporting pipeline that pulled data from dozens of on‑premises SQL servers and published dashboards to Power BI. The existing SSIS jobs were slow, and the team was looking for a cloud‑native solution in Azure.

**Task:** I needed to design a scalable ETL workflow in Azure Data Factory (ADF) that could ingest, transform, and load over 10 TB of data per month while keeping costs under $5k/month and ensuring the pipeline ran within an 8‑hour window.

**Action:** I leveraged ADF’s **Data Flow** for visual mapping transformations—using derived columns, aggregations, and joins—to replace complex SSIS packages. For big‑data processing, I incorporated **Spark pools** in Azure Synapse to run distributed SQL queries on the raw lakehouse data, optimizing partitioning to reduce execution time by 30%. To orchestrate the entire workflow, I used ADF’s **Control Flow** activities: a Trigger for nightly ingestion, a **Lookup** to fetch metadata, and a **ForEach** loop that dynamically created pipelines per source. Finally, I set up **Data Lake Storage Gen2** as the landing zone and configured incremental refresh logic with watermark columns.

**Result:** The new pipeline cut processing time from 12 hours to 5 hours, reduced monthly costs by 25%, and delivered dashboards within the required window. I learned how to blend ADF’s visual data flows with Spark for high‑volume transformations and how to architect a cost‑effective, maintainable cloud pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
