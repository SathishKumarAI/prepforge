---
qid: ing_cc8e5f6c9a__aws__local
question: 'Explain: Pros of Horizontal Scaling — Vertical vs Horizontal Scaling |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 445
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:21-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign a recommendation engine that had hit 3 M concurrent users during peak sales. The legacy monolith ran on a single powerful EC2 instance (vertical scaling) and began throttling under load.

**Action**  
1. **Analyze bottlenecks** – CPU >95%, memory thrashing, I/O latency spike.  
2. **Choose horizontal scaling** – Spin up an **Auto Scaling Group** of *m5.large* instances behind an Application Load Balancer (ALB).  
3. Deploy the model inference as a stateless container on **Amazon ECS Fargate** to decouple compute from instance type.  
4. Persist feature vectors in **DynamoDB Global Tables** for multi‑region reads; use **ElastiCache Redis** for hot embeddings.  
5. Implement a **Kafka** stream (MSK) for real‑time model updates, ensuring eventual consistency.

**Result**  
- *Latency* dropped from 2 s to <200 ms (90% improvement).  
- *Throughput* increased from 15k RPS to >100k RPS.  
- *Cost* fell by 35% after eliminating over‑provisioned EC2 capacity and leveraging spot instances for non‑critical inference tasks.

**Reflection**  
I **owned** the migration, diving deep into performance metrics (CPU, GC pause, network I/O). The bar‑raiser would note my data‑driven impact, clear trade‑offs (stateful vs stateless containers), and learning loop: post‑mortem identified a single point of failure in the legacy database; we added DynamoDB Streams for auto‑recovery.  

**Leadership Principles**  
- **Customer Obsession** – deliver instant recommendations during high traffic events.  
- **Ownership** – drove end‑to‑end redesign, from analysis to deployment and monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
