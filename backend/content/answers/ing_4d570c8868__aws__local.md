---
qid: ing_4d570c8868__aws__local
question: 'Explain: The Health Checker Component — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 429
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:00-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with designing a health‑checker for an ML inference gateway that needed to serve 10 k concurrent requests per second while guaranteeing <1 ms latency. The goal was to replace a flaky custom script that had a 5 % error rate during peak traffic.

**Action – Design**  
I built a **multi‑layer health checker** using **AWS ALB + Lambda@Edge** and **Amazon CloudWatch Metrics**.  
* Layer 1: ALB performs TCP/HTTP checks every 30 s, pushing status to CloudWatch.  
* Layer 2: A scheduled Lambda inspects the model’s prediction latency & error rate; if >10 ms or >2 % errors, it updates a DynamoDB “health” table.  
* Layer 3: An Application Auto‑Scaling policy reads that table and triggers ECS task replacement or scaling.  

I chose **ALB** for its low cost and high availability, **Lambda@Edge** for zero‑latency checks at edge locations, and **DynamoDB** for fast writes/reads with 99.999 % durability. This architecture scales horizontally without any single point of failure.

**Result**  
After deployment the error rate dropped from 5 % to <0.2 %, and average latency fell by 18 ms (≈30 %). The cost increased only 12 % due to Lambda invocations, but we gained a 4× higher uptime guarantee.

**Leadership Principles Highlighted**  
* **Customer Obsession** – Ensured end‑users experienced reliable predictions.  
* **Ownership & Dive Deep** – Built the entire pipeline, monitored every metric, and iterated based on data.  

Bar‑raisers look for ownership, measurable impact, and a willingness to learn from failure; my design demonstrates all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
