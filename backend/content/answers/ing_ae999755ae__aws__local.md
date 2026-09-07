---
qid: ing_ae999755ae__aws__local
question: 'Explain: 4.3 Data Replication and Backup — Single Point of Failure (SPOF)
  | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 474
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:24-05:00'
sources: []
---

**Situation**  
While architecting a global e‑commerce platform for a startup that had just hit 10 M monthly active users, the team discovered that our primary PostgreSQL cluster was a single point of failure (SPOF). A single node outage meant 15 % revenue loss per hour.  

**Task**  
Design a replication and backup strategy that eliminates SPOFs, guarantees ≥99.999% availability, and keeps cost below $5k/month.

**Action**  
1. **Multi‑AZ RDS PostgreSQL** – enabled automatic failover to a standby in another AZ (AWS RDS).  
2. **Read Replicas** – provisioned two cross‑region replicas (us‑west‑2 & eu‑central‑1) for disaster recovery and low‑latency reads.  
3. **Automated Backups + Point‑in‑Time Recovery** – leveraged RDS’s daily snapshots plus continuous WAL archiving to S3, enabling 7‑day PITR.  
4. **Infrastructure as Code (IaC)** – used CloudFormation templates for idempotent deployment and version control.  
5. **Monitoring & Alerts** – CloudWatch alarms on replication lag >30 s; SNS + Lambda auto‑switch if lag persists >5 min.  

**Result**  
- Downtime dropped from 4 hrs/month to <2 mins (99.999% uptime).  
- Recovery time objective (RTO) improved from 8 hrs to 15 min, meeting SLAs.  
- Monthly cost increased by only $1.2k, staying well below budget.  

**Reflection**  
I owned the end‑to‑end solution, diving deep into RDS internals and WAL mechanics. The biggest learning was that automated failover alone is insufficient; you must monitor lag and enforce thresholds to avoid “silent” replication delays. This design now serves as the baseline for all new services in the org.  

**Leadership Principles**  
- **Ownership** – drove the project from requirement gathering to production rollout.  
- **Dive Deep** – analyzed RDS internals, WAL propagation, and cost models to optimize trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
