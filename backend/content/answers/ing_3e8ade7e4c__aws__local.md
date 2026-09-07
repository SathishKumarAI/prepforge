---
qid: ing_3e8ade7e4c__aws__local
question: 'Explain: Resources — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 381
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:28-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑functional team tasked with migrating IBM’s legacy “Data Architecture” docs to an internal knowledge base that could be queried by our ML pipelines. The goal was to reduce the time engineers spent hunting for data lineage from **3 days → 30 minutes** and enable automated schema discovery for model training.

**Action (Technical)**  
I mapped the IBM metadata graph into a *schema‑on‑read* data lake on **Amazon S3** with partitioned Parquet files. Using **AWS Glue** crawlers, I generated catalog tables in **Amazon Athena**, exposing them via **AWS Lake Formation** for fine‑grained access control. To support real‑time lineage updates, I set up a **Kinesis Data Firehose** stream that ingests change logs from the IBM system and triggers a Lambda function to update Glue partitions.  

For query performance, I leveraged **Amazon Redshift Spectrum** to run complex joins across millions of rows without moving data into an OLAP cluster. Cost was controlled by S3 lifecycle policies (tiering infrequently accessed tables to Glacier) and by using Athena’s pay‑per‑query pricing.

**Result**  
Engineers now retrieve lineage metadata in under **45 seconds**, a 90% reduction in effort, and the automated pipeline cuts manual data prep time for ML models from **5 days → 1 day**.  

**Reflection (Leadership)**  
I took *Ownership* of the migration, *Dived Deep* into Glue catalog semantics, and delivered measurable results—exactly what Amazon looks for in a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
