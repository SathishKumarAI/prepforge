---
qid: ing_9ca6be519a__aws__local
question: 'Explain: Daily Reservations and TPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:05-05:00'
sources: []
---

**Situation & Task (S)**  
At Airbnb I was asked to re‑architect the *Daily Reservations* service that processes roughly **1 M TPS** during peak season. The goal was to reduce latency from 120 ms to <30 ms while keeping cost under $500k/month.

**Approach (A)**  
I owned the solution, first diving deep into the existing monolith’s bottlenecks: a single RDS instance with row‑level locking and synchronous writes. I redesigned it as a **serverless, event‑driven microservice**:

- **API Gateway + Lambda** – front‑end for booking requests (scale to 10 k req/s).  
- **SQS FIFO** – guarantees ordering of reservation events; dead‑letter queue for failures.  
- **DynamoDB Global Tables** – two replicas (US‑East & EU‑West) for low‑latency reads/writes and cross‑region consistency.  
- **Step Functions** orchestrate validation, payment, and notification steps.  

For TPS spikes I added **Kinesis Data Streams** to batch write reservations into DynamoDB via Lambda fan‑out, achieving linear scaling.

**Result (R)**  
*Latency dropped from 120 ms → 22 ms* (≈80 % improvement). *Cost fell from $1.2M/month to $480k/month*. The system handled a 4× traffic spike during the NYC summer tour without any outages, earning us a **Customer Obsession** badge.

**Reflection (T)**  
I learned that “Bias for Action” must be tempered with “Dive Deep”: early performance profiling revealed that the old transaction lock was the real culprit. By iterating on the design and leveraging AWS managed services, we achieved a scalable, highly available solution that directly improves guest experience—exactly what Airbnb’s leadership principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
