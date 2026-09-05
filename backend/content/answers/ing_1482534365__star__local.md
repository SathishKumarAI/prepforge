---
qid: ing_1482534365__star__local
question: What is a disaster recovery site? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 319
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:11-05:00'
sources: []
---

**Situation:** While leading the deployment of a fraud‑detection model for a fintech startup, we discovered that our primary GCP region suffered an unexpected outage during peak trading hours, risking data loss and service disruption.

**Task:** I had to design and implement a rapid failover strategy so that the model could keep running with minimal latency and no loss of training data, while ensuring compliance with regulatory data residency requirements.

**Action:** First, I set up a cold‑standby Disaster Recovery (DR) site in a second GCP region. Using Terraform I scripted identical VPCs, Cloud SQL instances, and Pub/Sub topics, and enabled cross‑region replication for the model checkpoints stored in Cloud Storage. I configured Cloud Functions to automatically sync new training data from the primary to the DR region via Dataflow pipelines. For real‑time inference, I leveraged Cloud Run with autoscaling, pointing traffic to the DR endpoints only when a health check failed on the primary. I also implemented automated failover scripts that triggered after two consecutive health‑check failures and rolled back within 90 seconds.

**Result:** The switch to the DR site was completed in under 2 minutes during an actual outage, with no loss of transaction data and <5 ms increase in inference latency. We maintained SLA compliance, avoided a $1M penalty, and learned that automated cross‑region state replication is critical for ML workloads that must stay online during regional failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
