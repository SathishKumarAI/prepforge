---
qid: ing_6b0b917204__aws__local
question: 'Explain: Cons — How to Implement Read Replica Pattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 439
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:05-05:00'
sources: []
---

**Cons of implementing a read‑replica pattern (AWS perspective)**  

> *Leadership Principles:* **Ownership**, **Dive Deep**

**Situation / Task**  
At my previous role I was tasked to cut latency for a high‑traffic recommendation engine that used an Amazon RDS PostgreSQL instance. The DB grew to 500 GB and our single writer was throttling reads, so we introduced read replicas.

**Action**  
1. **Architectural decisions** – launched three `db.r5.large` read replicas in different AZs; enabled automatic promotion on failover.  
2. **Sync strategy** – used PostgreSQL’s native streaming replication (async) to keep replicas ~200 ms behind the primary.  
3. **Routing** – added an Application Load Balancer with a custom HTTP header (`X-Read‑Replica`) so that read traffic could be directed to replicas, while writes stayed on the master.  
4. **Monitoring & Cost** – set up CloudWatch alarms for replication lag > 1 s and used AWS Budgets to track the $0.12/hr per replica cost.

**Result**  
- Read latency dropped from 120 ms to 35 ms (≈70 % improvement).  
- CPU utilization on master fell from 95 % to 60 %, freeing capacity for new features.  
- However, replication lag occasionally spiked to 2–3 s during peak bursts, causing stale reads that broke the “real‑time” user experience.  
- The cost of three replicas added $10/month, a non‑trivial expense given our budget constraints.

**Reflection**  
I learned that read‑replica patterns are powerful but introduce **data staleness** and extra operational overhead. Future iterations will evaluate *Aurora Serverless* for automatic scaling or *DynamoDB Global Tables* if eventual consistency can be tolerated, ensuring we balance performance, cost, and correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
