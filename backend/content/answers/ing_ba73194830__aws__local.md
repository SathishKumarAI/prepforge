---
qid: ing_ba73194830__aws__local
question: 'Explain: Active-Passive (Standby) — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 465
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:15-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we had a real‑time analytics platform that served internal dashboards for over 200k users. The SLA required **99.95 % uptime**, but our single‑region deployment crashed during a firmware upgrade, costing us $120K in lost revenue and eroding customer trust.

**Action** – *Active‑Passive (Standby) Architecture*  
1. **Infrastructure**: Provisioned an *Amazon EC2 Auto Scaling Group* (ASG) with two identical instances per AZ. One instance ran as the active node; a second instance in a different AZ was kept idle but fully configured (AMI snapshot, security groups, IAM roles).  
2. **Failover**: Used **Route 53 latency‑based routing** with health checks on the active endpoint. When health check failed, Route 53 automatically switched DNS to the standby instance within <5 s.  
3. **Data sync**: Employed **Amazon RDS Read Replica** in a different region for database state; replication lag never exceeded 2 s (measured via CloudWatch).  
4. **Cost control**: Leveraged *Spot Instances* for the passive node, reducing standby cost by ~30 % while maintaining rapid spin‑up.

**Result** – *Deliver Results & Ownership*  
- Achieved **99.999 % uptime** over the next 12 months (down from 99.88 %).  
- Cut mean time to recovery (MTTR) from 45 min to <5 s, preserving $2M/month in revenue.  
- Earned a “Customer Obsession” award for proactively protecting end‑users.

**Reflection & Bar‑Raiser Notes**  
I demonstrated *Ownership* by owning the post‑incident review and redesigning the architecture. I dove deep into latency metrics and cost trade‑offs, quantifying impact with real numbers. The failure taught me to incorporate health checks early and keep standby resources ready—an insight now embedded in our deployment playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
