---
qid: ing_8eb100b125__aws__local
question: What Is a Webhook? — Webhooks | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 501
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:48:43-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my time at **XYZ Corp**, I led the redesign of our event‑driven architecture to support real‑time integrations for a SaaS product used by 25 000 customers. The core requirement was a *Webhook* system that could push JSON payloads to external services with <200 ms latency, 99.9 % success rate, and zero manual intervention.

**Situation & Task**  
Existing polling APIs caused data staleness and high load on our database. I owned the migration to an event‑driven model while ensuring backward compatibility for legacy partners.

**Action**  
1. **Event source:** Capture state changes in DynamoDB Streams.  
2. **Orchestration:** Use **Amazon EventBridge** rules to fan‑out events to multiple *Lambda* functions (one per partner).  
3. **Delivery layer:** Each Lambda writes a signed payload to an SQS FIFO queue; another Lambda polls the queue, retries with exponential backoff, and posts to the partner’s URL via **API Gateway** (with built‑in throttling).  
4. **Monitoring & Retry:** CloudWatch Alarms trigger SNS alerts for failures; dead‑letter queues store undelivered messages for manual review.  

I chose EventBridge for its native integration with DynamoDB Streams, low cost ($0.20 per million events), and high availability. Using SQS FIFO guarantees order per partner without over‑provisioning Lambda concurrency.

**Result**  
- Reduced API latency from 2 s to <200 ms.  
- Achieved a 99.97 % delivery success rate within the first month.  
- Cut operational cost by **30 %** compared to the polling baseline (saved $12k/month).  

**Learning**  
I realized that *ownership* means iterating on failure data: after an initial spike in retries, I tuned back‑off parameters and added a circuit breaker, which lowered failures by 40 %. This experience reinforced my belief in **Customer Obsession** (ensuring partners received timely updates) and **Dive Deep** (profiling Lambda logs to eliminate bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
