---
qid: ing_84e9970466__star__local
question: 'Explain: Disaster recovery (DR) defined — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 334
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:08-05:00'
sources: []
---

**Situation:**  
In my last role I was leading a real‑time fraud detection model for a payment platform that processed over 4 million transactions per day. A critical data pipeline failure caused the model to stop serving predictions, threatening compliance and customer trust.

**Task:**  
I had to design and implement a disaster recovery (DR) strategy that would keep the ML service available with minimal downtime and preserve data integrity across regional outages.

**Action:**  
First, I mapped out the entire workflow—data ingestion, feature store, model inference, and result routing. Using GCP’s multi‑region Cloud Storage buckets for raw data and Vertex AI Pipelines for retraining, I set up a failover pipeline that automatically switched to an identical replica in another region when latency or error thresholds were breached. I added Cloud Functions to trigger a rollback of the last stable model version stored in Artifact Registry if the primary endpoint failed. Additionally, I implemented continuous health checks with Cloud Monitoring alerts and automated rollback scripts executed via Cloud Scheduler.

**Result:**  
After deployment, our uptime for the fraud detection service rose from 99.2 % to 99.99 %, reducing potential loss by an estimated $1.2 M annually. The DR plan also cut recovery time objectives from hours to under five minutes, and I documented the process in a run‑book that became part of our incident response training. This experience reinforced the importance of treating ML pipelines as first‑class services with built‑in resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
