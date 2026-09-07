---
qid: ing_406b8ec8d7__aws__local
question: 'Explain: AP - availability and partition tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 420
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:30-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑science team at a fintech startup, we were migrating our recommendation engine from an on‑prem Hadoop cluster to Amazon Aurora and DynamoDB. The new architecture had to keep the model online 24/7 while still allowing us to scale writes for real‑time user events.  

**Action**  
I led a “CAP‑aware” design workshop:  
1. **Identify requirements** – high *Availability* (99.99 % uptime) and *Partition Tolerance* (the system must continue operating even if the network splits).  
2. **Choose services** – DynamoDB Global Tables for multi‑region replication (ensures partition tolerance) plus Aurora Serverless for read‑heavy inference queries.  
3. **Implement a write‑through cache** in ElastiCache Redis to absorb burst traffic and keep latency < 10 ms.  
4. **Automate failover** with Route 53 health checks and CloudWatch alarms; rollback logic written in Step Functions.

**Result**  
After deployment, we achieved:  
- *99.999 %* uptime over six months (down from 98.5 %).  
- *30 %* reduction in write latency during peak events.  
- Cost savings of **$12k/month** versus the legacy on‑prem setup.

**Learning & Bar‑raiser cues**  
I owned the end‑to‑end migration, diving deep into DynamoDB consistency models to trade off read/write throughput against latency. I quantified impact with SLAs and cost metrics, and documented a post‑mortem that highlighted how misreading the CAP trade‑off had led to earlier outages. This shows ownership, depth, and continuous improvement – all Amazon Leadership Principles in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
