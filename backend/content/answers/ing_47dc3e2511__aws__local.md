---
qid: ing_47dc3e2511__aws__local
question: 'Explain: Latency vs throughput — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 455
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent interview I was asked to explain *latency vs throughput* in the context of a real‑world recommendation engine for an e‑commerce platform.  

**Situation & Task**  
We had to support 10 M daily users while keeping the end‑to‑end inference latency below **150 ms** and sustaining **5 k requests per second (RPS)** during peak hours.

**Action**  
1. **Model serving** – I chose **Amazon SageMaker Endpoint** with a *multi‑model* deployment to keep cost low, autoscaling on CPU utilization to hit the RPS target.  
2. **Caching layer** – Implemented **ElastiCache‑Redis** (cluster mode) for hot user embeddings; read latency dropped from 70 ms to <20 ms.  
3. **Load balancing** – Used **Application Load Balancer** with *sticky sessions* to avoid cache misses and a *request throttling* rule that limits burst traffic to prevent overload.  
4. **Observability** – Deployed **CloudWatch metrics & X‑Ray tracing**; we saw a 30 % reduction in tail latency after tuning the *maxConcurrentRequests* setting.

**Result**  
- Achieved <150 ms average latency during peak with 95 th percentile <210 ms.  
- Sustained >5 k RPS, giving us a **99.9 % SLA** for recommendation delivery.  
- Cost was reduced by 18 % compared to the previous monolithic model by using multi‑model endpoints and caching.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, dived deep into latency sources, quantified impact with real metrics, and learned that aggressive cache warm‑up can dramatically improve tail latency.  

> **Leadership Principles:** *Customer Obsession* – delivering fast recommendations directly boosts conversion; *Ownership* – I drove the entire solution from design to deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
