---
qid: ing_d944d7b65f__aws__local
question: 'Explain: Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 367
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:24-05:00'
sources: []
---

**Situation & Task**  
While leading the ML‑inference platform at a fintech startup, our REST endpoint for fraud scoring hit a surge of **200 k requests/sec** during peak hours. The API throttled to 100 req/s per user, causing SLA breaches and negative customer feedback.

**Action**  
1. *Ownership & Bias for Action*: I scoped an end‑to‑end solution that balanced throughput, cost, and reliability.  
2. **Rate‑Limiter Design** – Implemented a token‑bucket algorithm in front of the API gateway, with per‑client buckets stored in Redis (Amazon ElastiCache) to avoid cache stampedes.  
3. Added a *dynamic quota* layer: AWS CloudWatch metrics trigger Lambda to adjust limits based on real‑time traffic and SLA thresholds.  
4. Deployed **AWS API Gateway + Lambda** for edge throttling, coupled with **App Mesh** for circuit breaking across inference nodes.  
5. *Dive Deep*: Traced latency spikes via X-Ray; discovered a bottleneck in the model‑loading cache, so I moved to **Amazon SageMaker Endpoint Auto Scaling**.

**Result**  
- Reduced 99th‑percentile latency from **1.8 s → 0.4 s**.  
- Maintained >95 % request success during peak loads.  
- Cut operational cost by **15 %** (Redis cluster downsized, auto‑scaling).  

**Learnings**  
Owning the entire flow taught me to iterate on metrics before rolling out new limits—ensuring we never compromise customer experience while scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
