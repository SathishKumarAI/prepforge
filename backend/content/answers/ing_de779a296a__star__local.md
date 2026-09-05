---
qid: ing_de779a296a__star__local
question: 'Explain: Rate limit by IP — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 322
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:42-05:00'
sources: []
---

**Situation**  
During the rollout of our real‑time fraud detection model, we noticed a surge in API calls from a handful of merchants’ servers. The traffic spike caused latency spikes and occasional timeouts for other clients.

**Task**  
I needed to throttle requests per IP so that no single merchant could overwhelm the inference service while keeping overall throughput high.

**Action**  
I integrated the RatelimiterAPI (Redis‑backed, token‑bucket algorithm) into our Flask gateway. For each incoming request I:
1. Extracted the client IP from `X-Forwarded-For`.
2. Queried Redis for the current token count; if below 5 tokens per second, processed the request and decremented the bucket.
3. If tokens were exhausted, returned a 429 with a Retry‑After header derived from the bucket refill rate.
4. Logged throttled requests to a sidecar Prometheus exporter for monitoring.

I tuned the bucket size (10 tokens) and refill rate (1 token/100 ms) after load testing, balancing fairness against protection.

**Result**  
The throttle reduced per‑IP request rates by 85% during peak periods, restoring average latency from 350 ms to under 120 ms for all clients. The system handled a 2000 % traffic increase without service degradation, and I documented the approach in our Ops playbook for future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
