---
qid: ing_8b030629e2__star__local
question: 'Explain: Using different kinds of rate limiters in concert'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 340
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:39-05:00'
sources: []
---

**Situation** – In my last role I built a real‑time recommendation system for an e‑commerce platform that served millions of users per day. Our inference service was hit by bursts of traffic during flash sales, causing latency spikes and occasional request drops.

**Task** – I needed to keep the end‑to‑end latency below 200 ms while ensuring the GPU cluster wasn’t overloaded and that the downstream analytics pipeline received a steady stream of predictions for monitoring.

**Action** – I implemented a two‑layer rate limiting strategy. First, a *token bucket* limiter at the API gateway capped incoming requests to 10 k per minute, smoothing spikes before they reached the inference layer. Second, inside the GPU pool I used a *leaky bucket* on each worker node that throttled batch sizes to 32 samples per second, preventing memory thrashing. I also added a fallback *circuit breaker* that temporarily switched new traffic to a CPU‑based model when GPU utilization hit 90 %. All components were orchestrated with Kubernetes HPA and Prometheus alerts.

**Result** – Latency dropped from an average of 350 ms to 140 ms, and we maintained 99.7 % request success during peak events. The system also reduced GPU costs by 18 % because the throttling avoided unnecessary over‑provisioning. I learned that combining different rate limiter algorithms lets you address both traffic spikes and resource constraints in a complementary way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
