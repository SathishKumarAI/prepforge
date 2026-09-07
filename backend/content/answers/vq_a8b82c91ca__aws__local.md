---
qid: vq_a8b82c91ca__aws__local
question: What database events can be set?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 570
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:46-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Situation:* In my previous role I led the migration of a legacy MySQL fleet to Aurora Serverless v2 for a SaaS platform that served 1 M active users daily. We needed automated recovery, audit trails and performance tuning without manual intervention.

> *Task:* Design **database events** that would trigger alerts, backups, and scaling actions while keeping cost ≤ $3k/month.

> *Action:*  
> 1. **EventBridge + Lambda** – I created a CloudWatch Events rule for `RDSDBInstanceDelete`, `AuroraClusterScaling`, and `BackupCompleted`. Each event fired a Lambda that wrote to an SQS queue, ensuring eventual consistency.  
> 2. **SNS notifications** for critical events (e.g., `DBInstanceStopped`, `Failover`) so dev‑ops got real‑time alerts on Slack/PagerDuty.  
> 3. **Automated snapshots**: a scheduled EventBridge rule invoked `rds:create-db-cluster-snapshot` every 12 h, retaining only the last 7 snapshots to stay within storage limits.  
> 4. **Performance insights metrics** were pushed to CloudWatch Alarms (`CPUUtilization > 80%`) which triggered auto‑scaling of Aurora capacity units (CU).  

> *Result:* After deployment we reduced mean time to recovery from 18 h to < 30 min, cut backup storage by 35 %, and kept monthly RDS costs at $2.8k while handling a 120% traffic spike with zero downtime.

---

### What a bar‑raiser looks for

| Aspect | Why it matters |
|--------|----------------|
| **Ownership** | I owned the end‑to‑end event chain, from rule creation to cost monitoring. |
| **Dive Deep** | I quantified CPU thresholds, snapshot retention, and CU scaling to justify each decision. |
| **Quantified Impact** | Measured MTTR, storage savings, and cost, showing tangible ROI. |
| **Learning from Failure** | After an initial false‑positive alarm, I tuned the CloudWatch metric’s period and threshold, reducing noise by 80%. |

> *Leadership Principles Highlighted:*  
> • **Ownership** – full responsibility for reliability and cost.  
> • **Dive Deep** – rigorous metrics and tuning.  
> • **Bias for Action** – rapid deployment of automated responses.  

This approach demonstrates a customer‑obsessed, scalable solution that balances performance, availability, and cost—all key to an Amazon‑style architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
