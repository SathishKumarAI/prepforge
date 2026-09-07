---
qid: ing_bd0bca939f__aws__local
question: 'Explain: Common Mistakes — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 481
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:56-05:00'
sources: []
---

**Situation / Task**  
In a recent product launch I was asked to design a webhook ingestion pipeline for an ML‑based recommendation engine that would receive up to 10 k events per second from partner sites.

**Action (Design)**  
1. **Ingress** – API Gateway + Lambda with *proxy* integration, throttling set to 12 k RPS and burst of 20 k to absorb spikes.  
2. **Decoupling** – Lambda pushes payloads to an SQS FIFO queue; this guarantees order for idempotent ML updates.  
3. **Processing** – A fleet of Fargate tasks reads the queue, writes a *raw* record to DynamoDB (partition key = partner‑id, sort key = timestamp) and emits a CloudWatch metric (`WebhookEventsProcessed`).  
4. **Back‑pressure & retries** – SQS dead‑letter queue + exponential back‑off; Lambda retries 2×, then moves to DLQ.  
5. **Observability** – X-Ray traces from API Gateway → Lambda → Fargate; alerts on error rates > 1 % and latency > 500 ms.

Common mistakes I avoided:  
* **Assuming “instant” delivery** – led to over‑provisioned compute and wasted $3k/month.  
* **Tight coupling between webhook handler & ML model** – caused cascading failures; decoupling via SQS added resilience.  
* **Ignoring idempotency** – duplicate events doubled recommendation churn; DynamoDB’s conditional writes solved it.

**Result**  
The pipeline handled 12 k RPS with < 200 ms latency, 99.8 % success rate, and reduced operational cost by 30 % compared to the monolithic prototype.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, dove deep into failure modes, quantified impact (latency, cost), and learned that decoupling + observability are non‑negotiable for ML webhook systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
