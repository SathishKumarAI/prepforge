---
qid: ing_b3969ea52b__aws__local
question: 'Explain: Shared nothing architecture — Sharednothingarchitecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 514
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:59-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team that needed to scale a real‑time recommendation engine from 10 k to 5 M active users without incurring data bottlenecks or single points of failure.

**Action – Design**  
We adopted a **shared‑nothing architecture**: every node owns its own compute, memory and storage.  
* **Compute** – AWS EC2 Spot instances in an Auto Scaling Group (ASG) to keep costs low while providing burst capacity.  
* **Storage** – Amazon EBS local NVMe for fast feature cache; Amazon S3 for immutable training datasets.  
* **Message bus** – Amazon Kinesis Data Streams feeds each node with a partitioned stream of user events, guaranteeing at‑least‑once delivery and no cross‑node contention.  
* **Model serving** – Each node runs an inference container on AWS ECS Fargate, exposing a REST endpoint via Application Load Balancer (ALB). The ALB’s routing policy uses weighted target groups so we can roll out new models without downtime.  

**Result**  
After launch, the system handled 20× more traffic with <1 % latency increase. Cost per inference dropped from $0.05 to $0.02 thanks to spot pricing and the lack of shared I/O. We also reduced mean time to recovery (MTTR) from 45 min to under 5 min because each node could be replaced independently.

**Reflection – Bar‑raiser Lens**  
*Ownership*: I owned end‑to‑end delivery, coordinating devs, SREs and data scientists.  
*Dive Deep*: The choice of Kinesis partitioning vs. DynamoDB Streams was driven by latency benchmarks.  
*Quantified Impact*: 20× traffic, cost savings $120k/month.  
*Learning*: Initial prototype suffered from cross‑node cache invalidation; we fixed it by moving to per‑node feature stores—an example of iterative improvement.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering a highly available recommendation service that scales with user growth.  
- **Ownership & Bias for Action** – Rapidly iterating on the architecture and cutting costs while maintaining reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
