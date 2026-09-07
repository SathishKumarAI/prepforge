---
qid: ing_7ff52a1592__aws__local
question: 'Explain: Importance of disaster recovery — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 465
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:30-05:00'
sources: []
---

**Answer (AWS‑style)**  

> *Disaster Recovery (DR) is a set of policies and procedures that allow an organization to restore critical services after a catastrophic event—whether it’s a data center outage, ransomware attack, or natural disaster.*  
>   
> **Leadership Principles:** *Customer Obsession* – customers expect 99.999% uptime; *Ownership* – I own the entire recovery lifecycle.

### Situation & Task
At my previous role, we served a healthcare SaaS with HIPAA‑compliant data. A regional outage knocked out our primary AWS region, threatening SLA breaches and regulatory penalties. My task: design an automated DR plan that minimized downtime (<5 min) and cost (≤ $1k/month).

### Action
I architected a **multi‑region active‑passive** strategy:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Data replication | Amazon RDS Multi-AZ + Read Replicas in us-east-2 | Low‑latency, synchronous failover |
| Object storage | S3 Cross‑Region Replication (CRR) | Immutable backup for audit |
| Orchestration | AWS CloudFormation StackSets + Route 53 health checks | Zero‑touch deployment and DNS switchover |
| Automation | Lambda + Step Functions | Immediate rollback on failure |

I introduced **Infrastructure as Code** to spin up the entire DR stack in 3 min, achieving a **RTO <4 min** during our quarterly drill—meeting our SLA. Cost analysis showed $900/month versus $5k/year for manual backups.

### Result
- **Downtime reduced from >30 min to <4 min** (80% improvement).  
- **Regulatory compliance audit score rose from 85% to 100%.**  
- Stakeholders praised the *Ownership* and *Dive Deep* approach; the solution was later adopted company‑wide.

---

**Bar‑raiser takeaways:** clear ownership, deep technical dive, measurable impact, and a learning loop (post‑mortem reviews).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
