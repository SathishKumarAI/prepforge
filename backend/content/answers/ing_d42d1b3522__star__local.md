---
qid: ing_d42d1b3522__star__local
question: 'Explain: ratelimit — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 390
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:48-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s Mobility Platform team, we were launching a new real‑time ride‑matching service in the Midwest. The traffic spikes during rush hour caused our match engine to hit >10 k requests per second, and several drivers reported “latency” complaints. Our existing rate limiter was too coarse: it throttled all API calls uniformly, which meant legitimate user requests were delayed while the system still overloaded on internal telemetry streams.

**Task:**  
I needed to redesign the rate‑limit logic so that critical routing traffic could flow smoothly during peak periods, without compromising overall service stability or violating our SLA of <200 ms latency for 95 % of match requests.

**Action:**  
1. Implemented a *token bucket* algorithm per tenant (driver and rider) using Redis Streams to share state across microservices.  
2. Added a “burst” window that allowed short spikes, capped at 3× the baseline rate, and used exponential back‑off for retrying failed requests.  
3. Integrated Prometheus metrics to monitor hit ratios and latency per bucket, enabling dynamic adjustment of bucket sizes based on real‑time load.  
4. Conducted chaos testing with simulated traffic surges to validate that the new limiter kept latency under SLA while keeping error rates <0.1 %.

**Result:**  
Post‑deployment, average match request latency dropped from 310 ms to 165 ms during rush hour, and our SLA compliance rose from 88 % to 96 %. The system also handled a 150 % traffic increase in the next quarter without additional infrastructure. I learned that fine‑grained, tenant‑aware rate limiting coupled with real‑time observability is key for balancing performance and reliability in large‑scale distributed services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
