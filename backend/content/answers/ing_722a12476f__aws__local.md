---
qid: ing_722a12476f__aws__local
question: What is the difference between backup and disaster recovery?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 423
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:35-05:00'
sources: []
---

**Situation / Task**  
I was leading a cross‑functional team that had to secure our ML model registry in a regulated cloud environment. The client asked: *“What’s the difference between backup and disaster recovery?”* – a question that can trip up even seasoned engineers.

**Action**  
I explained that **backup** is a *point‑in‑time copy* of data (model artifacts, training code, metadata) stored for restoration after accidental deletion or corruption. It uses incremental snapshots in Amazon S3 with versioning and lifecycle policies—cost‑effective and highly durable but not designed for rapid failover.

For **disaster recovery (DR)** I described a *complete site‑to‑site replication* strategy:  
- **Primary** – model registry on an Amazon Aurora Serverless DB in us‑east‑1.  
- **Secondary** – automated cross‑region read replicas in eu‑central‑1, with Route 53 latency‑based routing and health checks.  
- DR drills run monthly; failover is automated via AWS CloudFormation stacks that spin up a new training cluster in minutes.

I highlighted key metrics: backup restore time < 5 min for 500 GB of artifacts vs. DR recovery time < 30 min with zero data loss, measured by RTO/RPO SLAs.

**Result**  
The client approved the architecture, reducing compliance risk from a potential 90‑day RPO to under 1 hour and cutting storage costs by 35% thanks to S3 lifecycle rules.  

---

### Leadership Principles
- **Ownership** – I took full responsibility for both data protection strategies and drove them to production.  
- **Dive Deep** – I quantified restore times, cost per GB, and RPO/RTO thresholds to justify design choices.

*Bar‑raiser cue:* Demonstrated clear ownership, depth in technical trade‑offs, and a tangible impact on compliance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
