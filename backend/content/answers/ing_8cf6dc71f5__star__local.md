---
qid: ing_8cf6dc71f5__star__local
question: 'Explain: Timeouts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 282
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:44-05:00'
sources: []
---

**Situation** – In a recent e‑commerce project, our recommendation microservice was hitting 30 % of requests with a 5 s timeout because the downstream product catalog API lagged during peak traffic.

**Task** – I had to design a robust solution that kept the user experience smooth while ensuring we didn’t overwhelm the catalog service or waste resources on stalled calls.

**Action** – First, I introduced an HTTP client with exponential back‑off and a 2 s timeout for all outbound requests. I wrapped the API calls in a circuit breaker so that if three consecutive failures occurred, the system would short‑circuit and return cached product data instead of hitting the catalog again. I also added a retry queue using Redis Streams to replay failed requests during off‑peak hours. For monitoring, I exposed Prometheus metrics on request latency, timeout rates, and circuit‑breaker state.

**Result** – After deployment, timeout incidents dropped from 30 % to <2 %, page load times improved by 1.8×, and we avoided unnecessary load spikes on the catalog API. I learned that defining clear timeouts, coupled with graceful degradation, is essential for resilient system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
