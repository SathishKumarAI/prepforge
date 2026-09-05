---
qid: ing_46879aea34__star__local
question: 'Explain: Rate Limiting and Throttling — A Cheatsheet to Build Secure APIs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 310
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:41-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with exposing a recommendation engine as a public REST API. Within the first month of launch, traffic spiked from ~1k requests/day to over 50k in just two weeks, and our backend servers began throttling, causing timeouts for legitimate users.

**Task**  
I needed to protect the service from abuse while keeping latency low, ensuring we stayed within our $200/month compute budget and maintained a 99.9% uptime SLA.

**Action**  
I implemented a two‑tier rate limiter using Redis’s sorted sets for per‑user limits (100 requests/min) and an application‑level token bucket for burst control (max 10 tokens). For global throttling, I added an API gateway rule that returned HTTP 429 with a `Retry-After` header when traffic exceeded 1k req/s. I also introduced circuit‑breaker patterns via Hystrix to prevent cascading failures. All limits were enforced in the Nginx reverse proxy and mirrored in the Go microservice for consistency.

**Result**  
Within three days, request latency dropped from 650 ms to under 120 ms during peak periods. The number of 5xx errors fell by 85%, and we avoided an additional $350 in cloud costs. I learned that combining per‑user quotas with global throttling and graceful degradation yields a robust, cost‑effective API layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
