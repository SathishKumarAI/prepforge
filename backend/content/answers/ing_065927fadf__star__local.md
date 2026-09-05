---
qid: ing_065927fadf__star__local
question: 'Explain: High availability — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 395
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:34-05:00'
sources: []
---

**Situation**  
In my last role I was leading a real‑time fraud detection pipeline on GCP that processed ~2 M events per day for an online marketplace. The SLA required 99.95% uptime; any outage would cost us $5k in lost revenue and erode trust.

**Task**  
I had to design a high‑availability architecture with a robust disaster recovery (DR) plan so the pipeline could survive both regional outages and accidental data loss, while keeping recovery time objectives under 15 minutes.

**Action**  
I leveraged Cloud Spanner’s multi‑region replication for our user profiles and Firestore in “regional” mode for logs. The ML model was containerized with Docker and deployed via Cloud Run in two regions (us-central1 & us-east1). I set up an automated, hourly snapshot of the Spanner database to a cold‑standby region (europe-west1) using the `gcloud spanner instances migrate` command, and implemented Cross‑Region Load Balancing with health checks. For data loss protection, I added a Cloud Pub/Sub dead‑letter queue that persisted messages for 7 days before reprocessing. Finally, I scripted a Terraform stack that could spin up a full replica environment in 10 minutes using GCP’s “failover” feature.

**Result**  
After the rollout, we saw no downtime during a scheduled us-central1 maintenance window; traffic automatically shifted to us-east1 with <12 s latency increase. The DR plan reduced our RTO from >2 h to <15 min and ensured data integrity during an accidental Spanner deletion—no user data was lost. I learned that combining regional services, automated snapshots, and a well‑defined Terraform stack is key to achieving true high availability in GCP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
