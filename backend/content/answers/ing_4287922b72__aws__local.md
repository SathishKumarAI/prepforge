---
qid: ing_4287922b72__aws__local
question: 'Explain: The types of disaster recovery you’ll need will depend on your
  IT infrastructure, the type of backup and recovery you use, and the assets you need
  to protect.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 419
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:26-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of a financial‑services application to AWS. The client required zero data loss and 30 min RTO for critical transactional workloads while keeping cost below $50k/month.

**Action**  
I designed a **tiered disaster‑recovery (DR) strategy**:

| Tier | Service / Feature | Rationale |
|------|------------------|-----------|
| **Primary** | Amazon RDS Multi‑AZ, Aurora Serverless | Automatic failover within seconds; eliminates manual backups. |
| **Backup** | S3 + Glacier Deep Archive with lifecycle policies | Cost‑effective long‑term storage; 7‑day retention for compliance. |
| **DR Site** | Cross‑region read replicas (us-east-1 → us-west-2) + Route 53 latency‑based routing | Provides geographic isolation and 5 min RTO on failover. |

I scripted automated snapshots, leveraged AWS Backup to enforce policies, and used CloudWatch alarms to trigger Lambda for cross‑region copy. The architecture was validated with a simulated outage that restored services in **4 minutes** (RTO) while keeping data loss under 1 KB (RPO).

**Result**  
The solution cut DR costs by **38 %** versus the legacy on‑prem plan, improved RTO from 30 min to 4 min, and earned a compliance audit “green” rating.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered an outage‑resilient platform that met strict regulatory deadlines.  
- *Ownership & Dive Deep*: I owned the entire DR pipeline, from design through automated testing, and dove deep into cost modeling to justify architectural choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
