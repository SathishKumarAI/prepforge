---
qid: ing_1232a6a4e5__star__local
question: 'Explain: Rate limiters and load shedders — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 373
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:02-05:00'
sources: []
---

**Situation** – In my last role I was responsible for the public analytics API that served our mobile app. A marketing push caused a 4× spike in traffic, and we saw latency climb from 120 ms to over 1 s while request failures hit 8 %.  

**Task** – I had to keep the API responsive, protect downstream services from overload, and preserve revenue‑generating requests without sacrificing developer experience.  

**Action** – First, I introduced a token bucket rate limiter in Envoy (configured via Lua) that capped each client’s burst to 10 req/s with a leaky‑bucket refill of 5 req/s. To avoid hard failures during traffic surges, I added a “load shedder” layer: an upstream filter that inspected the current request queue length and probabilistically dropped 30 % of requests when the queue exceeded 200ms latency. All state was stored in Redis for cross‑pod consistency. I also instrumented Prometheus metrics (request rate, latency percentile, drop ratio) and set up alerting so we could react before SLA violations.  

**Result** – After rollout, average latency dropped to <150 ms during the peak week, while 95th‑percentile latency stayed below 300 ms. The load shedders prevented downstream services from throttling, keeping our revenue pipeline stable. I learned that combining rate limiting with probabilistic shedding and real‑time metrics gives a balanced safety net for high‑traffic APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
