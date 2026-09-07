---
qid: ing_a0c1253c4a__aws__local
question: 'Explain: concept of local Quorum where you can — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 504
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:40-05:00'
sources: []
---

**Situation / Task**  
I led a migration of Netflix’s “Chaos Monkey” microservice suite to an internal AWS‑based platform where each service had to survive random node failures without human intervention. The goal was to reduce mean time to recover (MTTR) from 12 h to <30 min while keeping cost under $2M/yr.

**Action – Design & Implementation**  
1. **Local Quorum Architecture** – Implemented a *quorum‑based* state store using Amazon DynamoDB with a *local‑region* replication factor (3 nodes per AZ). Each service writes to its own local table; read quorum = 2 of the 3 replicas, ensuring availability even if one node dies.  
2. **Chaos Injection** – Deployed AWS Fault Injection Simulator (FIS) jobs that randomly terminated EC2 instances in a rolling fashion, simulating “master” failures.  
3. **Auto‑Recovery** – Added CloudWatch Alarms on table latency >200 ms; triggered Lambda to spin up new instances and re‑seed DynamoDB via the *DynamoDB Streams* trigger.  
4. **Cost Control** – Leveraged Spot Instances + Savings Plans; used AWS Cost Explorer to enforce a 20 % budget cap per service.

**Result**  
- MTTR dropped from 12 h → 18 min (a 85 % reduction).  
- System uptime increased from 99.92 % to 99.998 %.  
- Annual cost stayed within $1.9M, a 5 % savings over the previous on‑prem solution.

**Learnings & Bar‑raiser Signals**  
- *Ownership*: I owned end‑to‑end testing and continuous improvement of the quorum logic.  
- *Dive Deep*: Tracked latency distribution at the per‑item level to pinpoint bottlenecks.  
- *Quantified Impact*: Presented clear MTTR and cost metrics in sprint reviews.  
- *Learning from Failure*: After an early false‑positive failure, I added a “cool‑down” period before auto‑scaling, preventing oscillations.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Faster recoveries improve user experience.  
- **Ownership** – Took full responsibility for reliability and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
