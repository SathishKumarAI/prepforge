---
qid: ing_23b6f4a34c__star__local
question: How would it work? — Ratelimiterapi
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 346
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:22-05:00'
sources: []
---

**Situation** – In my last role I was tasked with keeping our public recommendation‑engine API from being overwhelmed during flash sales. The existing static token bucket would either throttle legitimate users or let a few bots flood the service, driving up latency to 350 ms on average.

**Task** – Build an adaptive rate limiter that learns traffic patterns in real time and assigns per‑user quotas without manual rule tuning, keeping SLA below 200 ms while preserving revenue from high‑value customers.

**Action** – I set up a lightweight streaming pipeline: every request hit Kafka → Spark Structured Streaming processed in micro‑batches. A gradient‑boosted tree (XGBoost) model was trained on features like IP reputation, historical burst size, time of day, and user tier. The model output a dynamic “fairness score” that we mapped to a token bucket capacity stored in Redis. We used an exponential moving average to smooth sudden spikes and added a fallback threshold for cold users. Continuous A/B testing updated the model every 4 h.

**Result** – After deployment, request latency dropped from 350 ms to 180 ms, API throughput increased by 35 %, and bot traffic was cut by 78 %. I learned that blending real‑time ML inference with classic rate‑limiting primitives can yield both performance and fairness in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
