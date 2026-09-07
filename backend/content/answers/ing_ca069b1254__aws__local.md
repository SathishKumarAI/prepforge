---
qid: ing_ca069b1254__aws__local
question: What does backup mean? — What is Disaster Recovery? | Google Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 430
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation** – In my last role I led a team that built a highly‑available recommendation engine for an e‑commerce platform. The system processed ~2 M requests/day, and any downtime translated to lost revenue (~$120k/month).  
> **Task** – We had to guarantee data durability and rapid recovery in case of a region‑wide outage.  
> **Action** –  
> *Backup*: I implemented automated nightly snapshots using **Amazon RDS Aurora** (point‑in‑time recovery) and S3 versioning for immutable object storage, ensuring 99.9999% durability. Backups were stored across two Availability Zones (AZs) and replicated to a secondary region via **S3 Cross‑Region Replication**.  
> *Disaster Recovery*: I designed a **multi‑region active‑passive architecture**: the primary cluster ran in us‑east‑1, while a standby cluster spun up on demand in eu‑west-1 using **Amazon Aurora Global Database** and **AWS CloudFormation StackSets** for rapid provisioning. We defined an RTO of <30 min and an RPO of 15 min, validated through quarterly DR drills that reduced recovery time from 2 hrs to 18 mins (a 90% improvement).  
> **Result** – After deployment, the system achieved a *99.9998%* uptime during a simulated outage, saving ~$200k/month in avoided revenue loss and earning recognition for “Exceeding Customer Obsession” by the leadership team.  

**Key Principles Highlighted**  
- **Ownership**: Took full responsibility for data resilience.  
- **Dive Deep & Bias for Action**: Rapidly iterated on backup/DR strategy, validated with real drills.  
- **Deliver Results**: Quantified uptime and cost savings, aligning with business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
