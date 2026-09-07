---
qid: ing_9efec062d7__aws__local
question: 'Explain: Common Queue Patterns — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 463
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:17-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of a recommendation pipeline that processed > 10M user events/day. The legacy batch system caused 12‑hour latency and missed real‑time personalization opportunities.

**Action (Design)**  
1. **Pattern:** *Work‑item queue* with *fan‑out* for parallel inference.  
2. **AWS services:**  
   - **Amazon SQS FIFO** to guarantee order of user actions per session.  
   - **AWS Lambda** (concurrent = 5000) to pull batches of 10 000 messages, invoke the SageMaker endpoint.  
   - **DynamoDB Streams** to push results back to a *recommendation cache* in **Amazon ElastiCache for Redis**.  
3. **Scalability & Availability:** SQS scales automatically; Lambda auto‑scales with target tracking on CPU usage (≤ 70 %). The SageMaker endpoint is deployed behind an Application Load Balancer with 2 AZs, ensuring < 99.9 % availability.  
4. **Cost trade‑offs:** Using *reserved* Lambda capacity ($0.0000167/GB‑s) reduced costs by 35 %. Persisting inference results in Redis (TTL = 30 min) avoided repeated expensive calls.

**Result**  
Latency dropped from 12 h to < 2 s for the top 10 % of active users, boosting click‑through rate by **18 %** and revenue per session by **$0.04**. The system handled a 3× traffic surge without additional engineers.

---

> **Bar‑raiser notes:**  
> *Ownership* – I owned the end‑to‑end pipeline, not just the queue layer.  
> *Dive Deep* – Quantified latency, cost, and throughput; chose services based on those metrics.  
> *Learning from failure* – The initial batch approach failed to meet real‑time needs; pivoting to event‑driven queues solved it and added a reusable pattern for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
