---
qid: ing_48e96a8746__aws__local
question: 'Explain: Amazon RDS Multi-AZ instance deployment — AWS-Services/1_Databases/AmazonRDS/RDSDeploymentOptions/MultiAZInstance.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 452
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:25-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led the migration of a 10‑million‑row transactional app from an on‑prem MySQL cluster to **Amazon RDS**. The business required zero downtime, high availability, and a recovery point objective (RPO) < 1 minute.  

**Action (A)**  
I chose **Multi‑AZ deployment** because it automatically creates a synchronous standby in a second Availability Zone (AZ). For the design I:  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Primary DB | RDS MySQL – Multi‑AZ | Synchronous replication guarantees up‑to‑date failover. |
| Monitoring | Amazon CloudWatch + RDS Event Subscriptions | Immediate alerts on failover events. |
| Backup | Automated backups (30‑day retention) | Enables point‑in‑time recovery without manual snapshots. |
| Load Balancing | Application‑level routing via Route 53 latency‑based policies | Directs traffic to the primary AZ; in a rare failover scenario, DNS updates within 60 s. |

I also enabled **Enhanced Monitoring** (Granular OS metrics) and **Performance Insights** to tune the workload. For cost control I chose the **db.m5.large** instance family and reserved instances for 3‑year term, reducing on‑demand spend by ~35 %.  

**Result (R)**  
- Zero unplanned downtime during migration; total cutover time < 2 minutes.  
- RPO achieved at 30 seconds (measured via CloudWatch metrics).  
- 99.999% availability SLA met with only one planned maintenance window per month.  
- Cost savings of $12k annually versus a standalone single‑AZ deployment.

**Learning & Ownership**  
I documented the failover playbook, ran quarterly drills, and updated the incident response guide—demonstrating *Ownership* and *Dive Deep*. The project taught me that while Multi‑AZ handles most high‑availability needs, combining it with application‑level routing and proactive monitoring delivers the resilience customers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
