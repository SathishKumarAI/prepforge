---
qid: ing_f46ab9c67b__aws__local
question: 'Explain: Booking Systems — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 455
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:17-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*.  

> **Situation / Task** – I was asked to design a high‑throughput flight booking service for a global travel startup. The goal: handle 5 M bookings/day with <200 ms latency, while guaranteeing data consistency and fault tolerance.  

> **Action** –  
> 1️⃣ *Requirements & Deep Dive*:  
>   - *Consistency*: eventual vs strong; I chose **ACID** per booking using **Amazon RDS Aurora (PostgreSQL)** with read replicas for scaling reads.  
>   - *Scalability*: Stateless API layer on **AWS Lambda + API Gateway**, auto‑scaling to 10 k concurrent invocations.  
>   - *Availability*: Deploy across **3 AZs**; use **Elastic Load Balancer (ALB)** with health checks, and **Route 53 latency routing** for global users.  
>   - *Cost*: Spot Instances + Lambda’s pay‑per‑invocation model keep monthly ops <$150k versus $350k on EC2-only.  
> 2️⃣ *Design* – A publish/subscribe queue (**Amazon SQS FIFO**) decouples booking requests from confirmation logic, ensuring order and exactly‑once semantics.  

> **Result** – After launch:  
> • 99.999% SLA achieved; latency dropped to 120 ms avg (vs 350 ms pre‑refactor).  
> • Daily bookings grew 30% month‑over‑month with zero downtime during peak holidays.  
> • Operational cost cut by 55%.  

> **Bar‑raiser takeaways** – I owned the entire system, dove deep into consistency trade‑offs, quantified impact (latency, cost), and iterated on failure scenarios (e.g., SQS dead‑letter queues).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
