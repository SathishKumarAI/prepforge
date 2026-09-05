---
qid: ing_b6a893c3e8__star__local
question: 'Explain: Stronger business continuity — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 343
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:24-05:00'
sources: []
---

**Situation:**  
While leading the migration of a fintech SaaS platform to Google Cloud, we discovered that our on‑premise data center had just hit its end‑of‑life and a single point of failure risk was too high for the 99.999% uptime SLA we promised to investors.

**Task:**  
Design a disaster recovery (DR) strategy that would keep the service online during any regional outage, reduce recovery time objectives (RTO) to under 15 minutes, and keep recovery point objective (RPO) below 5 seconds for critical transaction data.

**Action:**  
I set up an automated multi‑region architecture: replicated BigQuery datasets across us-central1 and europe-west1 using bi‑directional streaming; implemented Cloud Spanner with global replication for transactional state; added a Cloud Load Balancer with health checks that automatically failover to the secondary region. For backup, I scheduled nightly snapshots of Persistent Disks and used Cloud Storage Nearline for long‑term retention. We also introduced Terraform scripts to spin up a full test DR environment on demand, enabling quarterly fail‑over drills that validated our RTO/RPO targets.

**Result:**  
After the first successful drill, we cut the projected RTO from 1 hour to 12 minutes and confirmed an RPO of <4 seconds. The platform’s 99.999% SLA was maintained during a recent regional outage, with no data loss and zero revenue impact. I learned that continuous testing and automated provisioning are key to resilient cloud DR plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
