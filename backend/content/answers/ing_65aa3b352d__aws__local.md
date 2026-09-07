---
qid: ing_65aa3b352d__aws__local
question: 'Explain: Stateful Protocol — Statefulvsstateless'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 376
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:15:00-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the migration of our real‑time fraud engine from an on‑prem batch system to a cloud‑native microservice that had to process 1 M events/sec with <10 ms latency. The team debated whether to use a stateful or stateless protocol for inter‑service communication.

**Action**  
I scoped the problem (state persistence, fault tolerance, scaling) and designed two prototypes:  
* **Stateful:** Kafka + Redis Streams – each consumer held session state in Redis; Kafka ensured ordering.  
* **Stateless:** gRPC with per‑request context and DynamoDB for transient state.  

We ran a 48‑hour load test on AWS Fargate + Elastic Load Balancer, measuring latency, CPU, and cost.

**Result**  
The **stateful Kafka/Redis** solution achieved 8 ms average latency, 99.999% SLA, and $0.12/hr per worker (≈$87/month for 10 workers). The stateless gRPC approach hit 15 ms latency under peak load and incurred higher DynamoDB costs ($0.20/hr). We chose the stateful design, reduced ops overhead by 40%, and gained a 25% margin on our cost‑to‑serve metric.

**Reflection**  
I exercised **Customer Obsession** (delivering low‑latency fraud detection) and **Ownership** (owning end‑to‑end performance). The deep dive into Kafka vs. gRPC taught me that stateful protocols often win when data locality and ordering are critical—an insight I’ll bring to any high‑scale ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
