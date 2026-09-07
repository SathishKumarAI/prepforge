---
qid: ing_799d3cc962__aws__local
question: 'Explain: Hot Site / Multi-Site Configuration: — Cloud Disaster Recovery
  Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:58-05:00'
sources: []
---

**Situation (S)** – While leading a fintech startup’s ML inference platform, we faced a single‑region outage that could have halted 40 % of our daily transactions.  
**Task (T)** – I had to architect a *hot site/multi‑site* disaster‑recovery solution that kept latency <10 ms and cost under $5k/month.

**Action (A)** –  
1. **Design:** Deployed an active‑active architecture across us‑east‑1 & eu‑central‑1 using **AWS Global Accelerator** for low‑latency routing, **Route 53 health checks** to auto‑failover, and **RDS Aurora Serverless** with cross‑region read replicas for state.  
2. **Data:** S3 buckets with *Cross‑Region Replication* (CRR) stored training artifacts; **EFS** shared across both regions for model weights.  
3. **Automation:** Provisioned via **CloudFormation stacks** and **AWS CDK**, enabling instant spin‑up of the entire stack in <5 min.  
4. **Cost control:** Leveraged **Savings Plans** on EC2 & RDS, and reserved instance pools for inference containers.

**Result (R)** – The failover test completed in 3 minutes with <8 ms latency spike; throughput stayed at 98 % of peak. Monthly DR cost was $4,200—15 % below the budget—and we avoided any revenue loss during the outage.

> **Leadership Principles:**  
> • *Customer Obsession* – Ensured uninterrupted service for our users.  
> • *Ownership & Dive Deep* – Designed, built, and validated the end‑to‑end solution myself.  
> • *Bias for Action* – Executed the DR plan within hours of the outage.

**Bar‑raiser note:** Look for ownership (owning the whole stack), depth (understanding cross‑region replication trade‑offs), quantified impact (latency, cost), and lessons from failure (post‑mortem optimizations).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
