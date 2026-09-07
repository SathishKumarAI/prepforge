---
qid: ing_4bf94b5b63__aws__local
question: 'Explain: Popular Implementations — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 423
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:56-05:00'
sources: []
---

**Situation & Task**  
I led the migration of our real‑time recommendation engine from a legacy polling loop to an event‑driven architecture for a global e‑commerce platform (3 M active users). The goal was to cut latency by 70% and scale to 10× traffic without breaking SLA.

**Action – Design & AWS Services**  
I chose **Amazon SNS** as the publish layer and **Amazon SQS** + **Lambda** as the consumer queue. Each user action (click, add‑to‑cart) is published to SNS; multiple Lambda functions subscribe for downstream ML inference (feature enrichment, scoring). To guarantee at‑least‑once delivery we enable *deduplication* in SQS and idempotent processing in Lambda.  
For high availability I deployed the entire stack in **two AZs** with cross‑region read replicas of the model store on **Amazon DynamoDB Global Tables**. Cost was controlled by using **Provisioned Concurrency** only for hot functions and *on‑demand* scaling for others.

**Result**  
Latency dropped from 350 ms to 90 ms (77% improvement). Throughput grew from 5k TPS to 60k TPS, supporting a 10× traffic surge. Cost per inference fell by 30%. We achieved 99.9% SLA with zero data loss.

**Reflection & Leadership Principles**  
- *Customer Obsession*: Delivered a faster, more reliable recommendation experience.  
- *Ownership/Dive Deep*: I owned the entire pipeline and dug into CloudWatch metrics to tune concurrency and deduplication thresholds.  
- *Bias for Action*: Prototyped in 48 h, iterated quickly, and rolled out with blue‑green deployments.  

This solution demonstrates ownership, deep technical insight, measurable impact, and continuous learning—qualities a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
