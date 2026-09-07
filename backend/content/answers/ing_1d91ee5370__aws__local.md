---
qid: ing_1d91ee5370__aws__local
question: 'Explain: Graceful Degradation — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:33:11-05:00'
sources: []
---

**Graceful Degradation – Reliability in a ML Serving Platform**

**Situation & Task**  
I led the redesign of our real‑time recommendation engine after an outage that dropped latency from 200 ms to >5 s for 12 % of traffic during peak hours. The goal was to keep the service usable even when downstream model servers were overloaded or partially down.

**Action (Dive Deep & Ownership)**  
1. **Observability** – instrumented each inference request with a *request‑id* and routed metrics to CloudWatch Dashboards (latency, error rate).  
2. **Circuit‑breaker pattern** – added an AWS Lambda “fallback” that returns a cached static recommendation if the SageMaker endpoint’s health score falls below 70 %.  
3. **Auto‑scaling** – configured SageMaker real‑time inference endpoints with *predictive scaling* based on CloudWatch CPU/Memory metrics, and used *Elastic Load Balancer (ELB)* to evenly distribute traffic across multiple model containers.  
4. **Data‑driven throttling** – implemented a request‑rate limiter in API Gateway that drops the top 5 % of concurrent requests when total QPS > 10k, redirecting them to a “best‑effort” Lambda cache.  

**Result (Deliver Results)**  
- Latency remained <300 ms for 99.8 % of traffic during peak periods.  
- Error rate dropped from 12 % to <0.5 %.  
- Cost increased by only 7 % due to the lightweight fallback logic versus a full‑scale endpoint rebuild.

**Learning & Bar‑raiser cues**  
I documented trade‑offs (fallback accuracy vs. latency) and iterated on the threshold values using A/B testing, demonstrating ownership and continuous improvement—key signals for a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
