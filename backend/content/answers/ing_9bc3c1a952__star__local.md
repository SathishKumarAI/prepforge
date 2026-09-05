---
qid: ing_9bc3c1a952__star__local
question: 'Explain: The punch line — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 384
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:38-05:00'
sources: []
---

**Situation** – I was leading a migration for a global e‑commerce platform that had to route traffic from 50 % of its users in Asia and the rest in North America. The vendor suggested we use DNS‑based GSLB so we could keep a single A record pointing to multiple data centers.

**Task** – My job was to design a resilient routing scheme that guaranteed near‑real‑time failover, minimal latency, and accurate load distribution without relying on the user’s local resolver cache.

**Action** – I first measured how long DNS resolvers cached our records (TTL averaged 12 h). I set up a monitoring stack that logged query origins, hit rates per region, and response times. Using this data I implemented a weighted round‑robin policy in Route 53 with health checks, but then added an edge‑cache layer that served a custom “geo‑aware” header. Whenever the TTL expired or a health check failed, we pushed a new A record immediately; otherwise we relied on CloudFront to forward requests to the nearest healthy origin. I also introduced a small 5 s delay in the DNS response for users whose previous TTL was still valid so they’d refresh sooner.

**Result** – The platform achieved <1 % of traffic hitting a stale IP, latency dropped from an average of 350 ms to 120 ms, and we avoided any single‑point outages. I learned that pure DNS GSLB is brittle because of caching and TTL; combining it with edge‑caching and real‑time health checks creates a robust global routing strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
