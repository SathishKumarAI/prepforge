---
qid: ing_df912f6104__aws__local
question: 'Explain: Durability: — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 474
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:15-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of an on‑prem transactional system to Amazon Aurora for a fintech client that required *99.999% durability* and strict ACID compliance. The goal was to prove that the cloud could match or exceed our legacy DB’s reliability while cutting cost by 30 %.  

**Action – Technical Design**  
1. **Choose Aurora Serverless v2**: auto‑scales with zero admin overhead, leveraging **Aurora Multi‑AZ** for synchronous replication across two AZs (ensuring durability).  
2. **Implement Write‑Ahead Logging (WAL)** and point‑in‑time recovery using Aurora’s built‑in **snapshot & backup** mechanism (daily incremental + weekly full).  
3. **Use DynamoDB Streams** for audit logs, enabling *eventual consistency* where strict ACID is not required.  
4. **Deploy CloudWatch Alarms** on `DatabaseConnections` and `AuroraReplicaLag` to trigger auto‑scaling or failover.  

**Result**  
- Achieved 99.999% durability (≈5.26 hrs of downtime per year) vs. the previous 99.95%.  
- Reduced total cost of ownership by **32 %** in one fiscal year.  
- Cut recovery time from 4 hrs to **30 minutes** thanks to Aurora’s instant failover and continuous backups.  

**Reflection – Bar‑raiser Lens**  
*Ownership*: I owned the end‑to‑end migration, coordinating with security, compliance, and ops teams.  
*Dive Deep*: I benchmarked WAL write latencies and identified a 20 % bottleneck in the default buffer pool size, which I tuned to improve throughput by 15 %.  
*Quantified Impact*: Delivered measurable cost savings and SLA improvement.  
*Learning from Failure*: Initial failover tests exposed a mis‑configured IAM role; we documented the fix and updated our IaC templates, preventing future rollbacks.  

**Leadership Principles Highlighted**  
- **Ownership** – took full responsibility for reliability and cost.  
- **Dive Deep** – analyzed performance metrics to optimize configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
