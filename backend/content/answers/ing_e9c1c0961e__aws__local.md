---
qid: ing_e9c1c0961e__aws__local
question: 'Explain: the backup data center will help to — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 679
total_tokens: 925
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:42-05:00'
sources: []
---

**Situation (S)**  
When I led the migration of Uber’s real‑time ride‑matching service to a hybrid cloud platform, we discovered that a single data center could not guarantee the 99.999% uptime required for millions of drivers and riders worldwide. The backup data center was proposed as a disaster‑recovery (DR) layer.

**Task (T)**  
Design an architecture that keeps machine‑learning‑driven pricing models live during failover, with zero data loss and <5 s latency increase, while keeping costs under $3M/yr.

**Action (A)**  
1. **Data replication** – I chose **Amazon Aurora Global Database** for transactional ML feature tables; it replicates across regions with <200 ms lag, ensuring the pricing model is always up‑to‑date.  
2. **Model serving** – Deployed **SageMaker Endpoints** in both primary and DR regions behind a **Route 53 latency‑based routing policy**, automatically redirecting traffic when health checks fail.  
3. **Stateless compute** – Used **AWS Lambda + ECS Fargate** for the matching engine, so scaling is instantaneous and region‑agnostic.  
4. **Infrastructure as Code** – Implemented with **CloudFormation stacks** that include **Auto Scaling Groups**, **Elastic Load Balancers**, and **DynamoDB Global Tables** for driver‑location data.  
5. **Cost control** – Leveraged **Savings Plans** on Lambda and Fargate, and used **Spot Instances** for non‑critical batch ML jobs.

**Result (R)**  
- Achieved 99.999% availability across regions; downtime during a simulated outage was <12 s.  
- Latency increased by only 3 ms on failover.  
- Annual DR spend dropped from $4.5M to $2.8M, a 38 % savings.  
- Customer churn during outages fell below 0.02%, compared to 0.15% in the legacy system.

**Leadership Principles Highlighted**

| Principle | How it was demonstrated |
|-----------|------------------------|
| **Ownership** | Took full responsibility for end‑to‑end DR design and cost optimization. |
| **Dive Deep** | Analyzed replication lag, model inference times, and cost models to choose the right services. |
| **Bias for Action** | Deployed a rapid failover prototype in two weeks and iterated based on real traffic tests. |
| **Deliver Results** | Quantified uptime, latency, and cost savings that directly impacted millions of riders. |

**What a bar‑raiser would listen for**

- Clear ownership: “I was the point person for this DR architecture.”  
- Depth: Detailed justification for Aurora Global vs. RDS; Lambda vs. EC2 trade‑offs.  
- Quantified impact: Exact uptime, latency, cost numbers.  
- Learning from failure: Post‑mortem on a 2023 outage that informed the current design.

This approach aligns with Amazon’s focus on customer obsession (minimal disruption for riders), ownership (end‑to‑end responsibility), and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
