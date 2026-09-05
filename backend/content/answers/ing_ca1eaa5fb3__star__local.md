---
qid: ing_ca1eaa5fb3__star__local
question: 'Explain: The 80/20 Rule — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 338
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:24-05:00'
sources: []
---

**Situation:** While leading the redesign of our e‑commerce platform’s product detail page, we observed that 80 % of traffic was hitting only 20 % of our catalog items—yet each request still hit a heavy database join across inventory, pricing, and recommendation tables.

**Task:** I needed to reduce database load and improve page latency by 30 % before the holiday sales surge, without sacrificing data freshness for those high‑volume SKUs.

**Action:** I introduced a Redis cache layer keyed on product ID. For each request, the service first checked the cache; if a miss occurred (roughly 10 % of hits), it queried the database and populated the cache with a TTL of 5 minutes. I also added a “cache‑aside” write strategy: whenever inventory or pricing changed, an event pushed to a Kafka topic triggered a background worker that invalidated or updated the relevant keys. This kept stale reads below 1 % while keeping the majority of traffic served from memory.

**Result:** Page load times dropped from 850 ms to 520 ms (a 39 % improvement), and database queries fell by 75 %. The system handled a 2× spike during the sale without throttling. I learned that judicious cache invalidation, combined with event‑driven updates, turns the 80/20 rule into a tangible performance win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
