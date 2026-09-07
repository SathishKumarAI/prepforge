---
qid: ing_9b454c4abd__aws__local
question: 'Explain: How Engineers Use an API — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 434
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:21-05:00'
sources: []
---

**What is an API? (System‑Design & Engineering Lens)**  
> *Leadership Principles: Customer Obsession, Ownership*

**S – Situation**  
When launching a new ML inference service for our e‑commerce recommendation engine, I needed to expose the model as a consumable resource for downstream microservices and third‑party partners. The key requirement was low latency (< 10 ms) and high throughput (≥ 5k req/s) while keeping operational costs under $50k/month.

**T – Task**  
Design an API layer that guarantees scalability, resilience, and observability, enabling developers to “plug‑in” the ML model with minimal friction.

**A – Action**  
1. **API Gateway + Lambda@Edge** – Front‑end routing and request validation (Auth via Cognito).  
2. **AWS SageMaker Endpoint** – Real‑time inference, autoscaled using *EndpointConfig* (CPU+GPU mix) for cost control.  
3. **Elastic Load Balancer + Auto Scaling Group** – Handles spikes; integrates with CloudWatch alarms to trigger scaling policies.  
4. **X-Ray & CloudWatch Metrics** – Full traceability of latency and error rates.  
5. **Caching Layer (ElastiCache Redis)** – Stores top‑k predictions per user ID, reducing model hits by 35 %.  

**R – Result**  
- Latency dropped from 25 ms to 8 ms (avg).  
- Throughput increased to 12k req/s without exceeding the budget.  
- Mean time to recovery for a node failure went from 15 min to <2 min thanks to automated health checks.

*Bar‑raiser takeaway:* I demonstrated **ownership** by owning the end‑to‑end flow, applied **Dive Deep** to identify latency hotspots, quantified impact with real metrics, and learned that caching can dramatically reduce compute costs—an insight I shared in a post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
