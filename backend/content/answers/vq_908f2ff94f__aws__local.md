---
qid: vq_908f2ff94f__aws__local
question: How does one create a standby database?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 358
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:36-05:00'
sources: []
---

**Situation / Task**  
I was tasked with designing a highly‑available PostgreSQL stack for an e‑commerce platform that needed 99.9 % uptime during peak holiday sales. The requirement was to create a standby database that could take over instantly if the primary failed.

**Action**  
- **Ownership & Bias for Action:** I chose Amazon RDS for PostgreSQL because it abstracts patching, backup, and scaling while giving me control over replication settings.  
- **Dive Deep & Invent & Simplify:** I enabled *RDS Read Replica* in a different AZ, set up automatic promotion via the `promotion_tier` parameter, and used **AWS CloudWatch** alarms to trigger a Lambda that switches DNS records (Route 53) if the replica’s health status changes.  
- For disaster recovery across regions, I leveraged **Amazon Aurora Global Database**, which replicates data at sub‑second latency to a secondary region, ensuring zero data loss in a cross‑region outage.  
- I configured **AWS Backup** for nightly snapshots and used **Auto Scaling Groups** to spin up read‑only instances during traffic spikes, keeping costs low by terminating idle replicas.

**Result**  
The standby system reduced mean time to recovery from 30 minutes (on-prem) to <2 seconds in production. During the 2024 holiday surge, we handled a 250% traffic spike with no downtime and incurred only a 12 % increase in operating cost—well below the budgeted 20 %. The solution also earned a **Customer Obsession** award for maintaining uninterrupted checkout flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
