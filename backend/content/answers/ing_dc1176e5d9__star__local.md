---
qid: ing_dc1176e5d9__star__local
question: 'Explain: So you don''t want it to be — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 434
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:07-05:00'
sources: []
---

**Situation**  
At a mid‑size e‑commerce firm I was leading the migration of our recommendation engine from batch‑trained models to an online inference pipeline. The existing nightly retraining produced stale predictions that hurt conversion rates during flash sales, and we had to hit a hard SLA of 120 ms per request for the mobile app.

**Task**  
I needed to design a system that could serve fresh model updates with sub‑100 ms latency while keeping accuracy within ±0.5% of the batch baseline, all on a single GPU instance to stay under cost constraints.

**Action**  
I built a lightweight feature store in Redis, keyed by user segment and product category, so features were pre‑aggregated and cached at request time. The model was refactored into TensorFlow Lite, compiled with XNNPACK for CPU inference, and wrapped in a FastAPI service behind an Envoy proxy that handled request routing and rate limiting. I introduced a blue‑green deployment strategy: new predictions were served to 10% of traffic while monitoring latency, loss, and conversion. If metrics stayed within thresholds, we rolled out to the rest.

**Result**  
Latency dropped from 120 ms to 85 ms (30 % improvement), conversion rate increased by 1.8 %, and we cut inference cost by 25 %. I learned that coupling feature engineering with a low‑latency cache and continuous A/B testing is critical for production ML systems, especially when operating under tight resource budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
