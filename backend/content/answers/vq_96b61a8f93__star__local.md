---
qid: vq_96b61a8f93__star__local
question: How to validate the data once the ingestion is done?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 321
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:39-05:00'
sources: []
---

**Situation**  
During a quarterly migration of our customer transaction logs from on‑prem Hadoop to an AWS Glue catalog, the ingestion pipeline was scheduled to run nightly. The previous system had occasional schema drift and missing fields that caused downstream BI dashboards to fail.

**Task**  
I needed to build a lightweight validation framework that ran automatically after each ingestion job, ensuring schema consistency, data completeness, and key metric integrity before the data landed in Redshift.

**Action**  
1. Created a Spark‑SQL job that compared the raw Parquet metadata against a JSON schema stored in S3 (using Apache Avro for strict typing).  
2. Added row‑count and null‑percentage checks per partition, flagging any deviation beyond 0.5% thresholds.  
3. Integrated a Delta Lake table to store “golden” snapshots; the job performed diffs against these snapshots using `MERGE` statements.  
4. Emitted alerts via SNS when anomalies were detected, triggering an Airflow DAG that rolled back to the last good snapshot if needed.

**Result**  
The validation pipeline reduced downstream data‑quality incidents by 92%, cut manual review time from 3 hours to 15 minutes per batch, and improved dashboard accuracy, reflected in a 1.8% increase in user confidence scores. I learned that automated, schema‑aware checks are essential for reliable data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
