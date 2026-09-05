---
qid: ing_f3ed8e7aee__star__local
question: 'Explain: Business impact analysis (BIA) — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 432
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:30-05:00'
sources: []
---

**Situation:**  
At my previous fintech startup we had a real‑time fraud detection service that processed ~1 M transactions per day. A single outage in our primary region would have cost us $300k in lost revenue and damaged trust with regulators.

**Task:**  
I was tasked to build a disaster recovery (DR) plan that met a 15‑minute Recovery Time Objective (RTO) and a 2‑hour Recovery Point Objective (RPO), while keeping the additional monthly spend under $5k.

**Action:**  
1. **Replication strategy** – I set up cross‑region *Cloud SQL* read replicas for our PostgreSQL store and enabled *Spanner* in multi‑region mode for stateful data, ensuring near‑real‑time sync.  
2. **Infrastructure as Code** – Using Terraform and Cloud Deployment Manager, I automated a blue/green deployment pipeline that spun up identical Compute Engine instances with the same container images in the secondary region on demand.  
3. **Automated failover** – Implemented Cloud DNS Failover + Cloud Load Balancer health checks to redirect traffic automatically if the primary zone failed.  
4. **Backup & restore** – Scheduled daily *Cloud Storage* snapshots and set up a Cloud Functions trigger that could re‑apply the last 2 hours of transactional logs from Pub/Sub into the secondary database.

**Result:**  
During a simulated outage, we met our RTO in 12 minutes and recovered all data with an average lag of 90 seconds (RPO < 2 hrs). Monthly DR costs stayed at $4.3k, saving us the projected $300k loss and earning us a compliance audit pass. I learned that tight integration of GCP services and IaC is key to cost‑effective, reliable disaster recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
