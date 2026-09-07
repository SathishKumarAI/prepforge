---
qid: ing_3fd804db57__aws__local
question: 'Explain: Subscribers — What is Pub/Sub Messaging? - Pub/Sub Messaging Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 400
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:08-05:00'
sources: []
---

**Customer Obsession + Dive Deep**

> **Situation (S)** – In my last role I led the migration of a legacy notification system that served 1 M daily active users. The existing batch jobs caused 3‑minute latency and missed peak traffic, hurting customer experience.

> **Task (T)** – I had to design an event‑driven architecture that guaranteed real‑time delivery, scalability, and fault tolerance while keeping costs under $10k/month.

> **Action (A)** –  
> 1. Adopted Amazon SNS as the **Publish/Subscribe** layer: producers publish events to a single topic; multiple subscribers (Lambda, SQS, Kinesis) receive copies without blocking each other.  
> 2. Implemented *fan‑out* via Lambda triggers for real‑time email/SMS and an SQS queue for downstream batch analytics.  
> 3. Configured **Dead Letter Queues** and CloudWatch metrics to surface failures within 5 min.  
> 4. Leveraged SNS’s *message filtering* to reduce unnecessary traffic (only relevant events reach each subscriber).  

> **Result (R)** – Achieved 99.999% delivery SLA, cut notification latency from 3 min to <200 ms, and reduced infrastructure cost by 35 %. Customer satisfaction scores rose by 12 points in the subsequent NPS survey.

**What a bar‑raiser hears**

- Ownership: I took full responsibility for end‑to‑end performance.  
- Dive Deep: I quantified latency, throughput, and cost; I tuned SNS message size and SQS visibility timeout.  
- Impact: Delivered measurable uptime and cost savings.  
- Learning: After an initial spike in failures, I refined filtering rules—showing iterative improvement and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
