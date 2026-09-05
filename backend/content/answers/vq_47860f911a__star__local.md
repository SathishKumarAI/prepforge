---
qid: vq_47860f911a__star__local
question: What are the steps to create a pipeline in adf ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 374
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:18-05:00'
sources: []
---

**Situation:**  
When our analytics team was preparing to launch a new monthly sales dashboard, the existing ETL process was a hand‑crafted script that ran nightly on an on‑prem VM. It took 90 minutes per run and had no visibility into failures, so we were often late with data for the business.

**Task:**  
I needed to design a scalable, observable Azure Data Factory pipeline that could ingest raw CSVs from an SFTP server, transform them with Databricks notebooks, load the results into a Synapse warehouse, and alert the team if anything went wrong—all within 30 minutes.

**Action:**  
First, I set up a self‑hosted integration runtime to pull files from SFTP. I built a pipeline with four activities: *Copy Data* (to a staging blob), *Databricks Notebook* (running Spark for deduplication and enrichment), *Data Flow* (for schema validation), and *Synapse SQL* (inserting into the fact table). I added parameters for date ranges, used trigger-based scheduling, and configured retry policies. For observability, I leveraged ADF’s monitoring hub, added a Web Activity to post Slack alerts on failure, and logged metrics to Application Insights.

**Result:**  
The new pipeline cut processing time from 90 minutes to 18 minutes, reduced manual interventions by 80 %, and gave the team real‑time visibility into data quality. I learned that coupling ADF with Databricks notebooks gives both flexibility and performance, and that embedding alerts early prevents costly downstream errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
