---
qid: ing_b21d41a74e__star__local
question: 'Explain: Testing and maintenance — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 353
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:02-05:00'
sources: []
---

**Situation** – While leading a production‑grade recommendation engine on Google Cloud, we noticed that one of our regional clusters was experiencing intermittent node failures during peak traffic, threatening SLA commitments and user experience.

**Task** – I had to design and implement a disaster‑recovery (DR) strategy that could automatically recover the entire ML pipeline—data ingestion, model training, inference services—within 30 minutes without manual intervention, while keeping costs under 10% of our baseline spend.

**Action** – First, I set up cross‑region Cloud Storage buckets and leveraged Cloud Spanner for a globally replicated metadata store. For compute, I deployed the same Vertex AI Pipelines in two regions with a Cloud Load Balancer and health checks that routed traffic to the healthy region. I scripted Terraform modules to spin up fresh Compute Engine instances on demand, using Managed Instance Groups with autoscaling based on CPU utilization. I also enabled automated snapshots of model artifacts and used Cloud Functions triggered by Pub/Sub alerts to re‑initialize training jobs in the standby region. Finally, I configured an IAM policy that allowed only the DR team to promote a standby cluster to production.

**Result** – After the first simulated failover, recovery time dropped from 2 hours to 18 minutes, well below our target. The dual‑region setup added just 8% to our monthly bill, and we achieved zero data loss during the test. I learned that rigorous DR in GCP relies on immutable infrastructure, automated provisioning, and continuous testing of failover paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
