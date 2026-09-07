---
qid: ing_6e428a894e__aws__local
question: 'Explain: HTTP in Distributed Systems — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 400
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:14-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign our recommendation engine’s inference API from a monolithic REST endpoint to a scalable, multi‑region service that could serve > 10 M requests/day with < 200 ms latency.  

**Action (Design)**  
1. **API Gateway + Lambda@Edge** – exposed HTTPS endpoints globally, giving TLS termination and request routing without managing servers.  
2. **Amazon SageMaker Endpoint** – hosted the trained model; we used *multi‑model* endpoints to batch predictions from several models in a single call, cutting inference cost by 35 %.  
3. **Cache with Amazon CloudFront + Redis (ElastiCache)** – cached top‑10k items per region, reducing SageMaker hits by 70 % and latency to ~80 ms.  
4. **Circuit Breaker & Retry Logic** in the Lambda layer ensured graceful degradation; if SageMaker was throttled, we returned a “cached” response.  

**Result (Metrics)**  
- 99.9 % availability across three AZs.  
- Cost down from $12k/month to $7k/month (~42 %).  
- Latency dropped from 350 ms to 78 ms, hitting the <200 ms SLA for 98 % of requests.

**Reflection (Bar‑raiser)**  
I owned the full lifecycle: gathered traffic patterns (Dive Deep), iterated on caching strategy (Bias for Action), and documented failure scenarios (Learned from a prior outage where unhandled timeouts caused a 15 % spike in error rate). This aligns with **Customer Obsession** (delivering fast, reliable predictions) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
