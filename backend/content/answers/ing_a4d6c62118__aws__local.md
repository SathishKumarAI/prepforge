---
qid: ing_a4d6c62118__aws__local
question: 'Explain: Disaster Recovery — Disasterrecovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 391
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:00-05:00'
sources: []
---

**Disaster Recovery for a Global E‑commerce Platform**

*Situation:* In 2023 our flagship marketplace serves ~1M active users daily across 5 regions. A catastrophic RTO (Recovery Time Objective) of >30 min would cost ~$200K/day in lost revenue and erode customer trust.

*Task:* Design a resilient, low‑cost DR strategy that meets **Customer Obsession** and **Ownership** while keeping the budget under $500K annually.

*Action:*  
1. **Replication & Multi‑AZ** – Use **Amazon RDS Aurora Global Database** for PostgreSQL; cross‑region read replicas in us-east-2 and eu-central-1 with automatic failover (<5 s).  
2. **Immutable Backups** – Store nightly snapshots in **S3 Glacier Deep Archive** (cost $0.004/GB) and versioned EBS volumes for point‑in‑time recovery.  
3. **Infrastructure as Code** – Deploy the entire stack via **AWS CloudFormation** + **Terraform**, enabling rapid spin‑up of a “cold” DR site in 10 min.  
4. **Chaos Engineering** – Run monthly failover drills; achieved 99.95% success rate, reducing mean time to recovery from 45 min to 12 min over six months.  

*Result:* Cut potential downtime cost by **$1.2M annually**, achieved RTO <15 min, and earned a “Top Performer” award in the quarterly leadership review.

**Bar‑raiser cues:** Ownership of end‑to‑end recovery; deep dive into latency & cost trade‑offs; quantifying impact; learning from failed drills (adjusted replica lag).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
