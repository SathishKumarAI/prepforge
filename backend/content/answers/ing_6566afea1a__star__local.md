---
qid: ing_6566afea1a__star__local
question: What does disaster recovery mean? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 300
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:35-05:00'
sources: []
---

**Situation** – In my last role, we were deploying a real‑time fraud detection model to production on GCP. One night the primary Cloud SQL instance crashed after a scheduled patch, and all training data became temporarily unavailable.

**Task** – I had to ensure that both the model inference service and the nightly retraining pipeline could continue running without losing any recent data or compromising latency targets of <200 ms per prediction.

**Action** – First, I set up an automated failover for Cloud SQL using read replicas in a secondary region. Then I added a Pub/Sub buffer to capture incoming transaction events while the database was offline. For the retraining pipeline, I switched to BigQuery’s bi‑regional storage and implemented a “cold start” job that pulls data from the latest snapshot whenever the primary instance is down. Finally, I wrote a monitoring alert in Cloud Monitoring that triggers an OpsGenie incident if the failover takes longer than 30 seconds.

**Result** – When the next patch caused a similar outage, our system stayed up with <5 % increase in latency and no data loss. The model’s accuracy drifted only 0.3 %, and we cut manual recovery time from hours to minutes. I learned that true disaster recovery is about designing for partial failures, not just having backups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
