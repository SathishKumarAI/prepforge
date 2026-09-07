---
qid: ing_d7ef9e74bf__aws__local
question: 'Explain: How Redundancy and Clustering Handle SPOFs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 392
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:51-05:00'
sources: []
---

**Situation / Task**  
While designing a new recommendation engine for our e‑commerce platform, I was asked to guarantee **99.999% availability** even when one data center went down. The risk was a single point of failure (SPOF) that could kill the entire service and hurt revenue.

**Action**  
I applied *Customer Obsession* and *Ownership*: I mapped the architecture to AWS services, built a multi‑AZ deployment using **Amazon RDS Aurora Serverless v2** with cross‑region read replicas, and wrapped it in an **Elastic Load Balancer (ELB)** that routes traffic only to healthy instances.  
For stateful components, I enabled **Auto Scaling Groups** for EC2 containers on ECS, used **AWS Global Accelerator** to keep latency low, and employed **Amazon CloudWatch alarms** to trigger failover scripts automatically.  
I also added a lightweight health‑check API and ran chaos engineering tests with **Chaos Monkey for AWS**, measuring the mean time to recovery (MTTR) under simulated failures.

**Result**  
After deployment, we achieved **99.999% uptime** over 12 months—an improvement of 0.02% versus the previous 99.97%. The MTTR dropped from 45 min to 5 min, and our revenue loss due to downtime fell by $120K annually.  

**Reflection**  
I learned that *Dive Deep* into metrics (e.g., RDS replication lag, ELB latency) reveals hidden bottlenecks early. I also realized the importance of *Bias for Action*: a quick rollback plan saved us from a prolonged outage during the first cross‑region failover test.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
