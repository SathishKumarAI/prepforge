---
qid: ing_ca069b1254__star__local
question: What does backup mean? — What is Disaster Recovery? | Google Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 380
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:09-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection model for an online marketplace, we noticed that the training dataset was growing to over 3 TB of raw logs plus 500 GB of feature tables in BigQuery. One night a regional outage hit our primary Cloud Storage bucket and all recent ingestion jobs failed.

**Task** – I had to design a robust backup strategy and a disaster‑recovery plan so that we could restore the entire ML pipeline—data, models, and inference services—in under an hour without data loss or service interruption.

**Action** – First, I set up automated daily snapshots of our Cloud Storage bucket using GCS Lifecycle Rules and exported BigQuery tables to Cloud Storage with partitioned CSVs. For real‑time safety, I enabled “Near‑Realtime” replication across two multi‑region buckets via Cloud Storage’s Dual‑Region feature. Then I built a Terraform module that provisions a Compute Engine VM running Airflow, which on startup pulls the latest snapshots from the secondary bucket, restores BigQuery tables via `bq load`, and triggers a model retraining job in Vertex AI. Finally, I configured Cloud Monitoring alerts to trigger an OpsGenie incident if any component failed.

**Result** – After a staged test, we recovered all training data and the latest model version within 45 minutes, keeping downtime below our SLA of one hour. The exercise also revealed that automated snapshot retention saved us $2k/month in storage costs by pruning old snapshots early. I learned that combining GCS replication with Terraform‑driven recovery pipelines turns backup into a proactive business continuity feature rather than a reactive safety net.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
