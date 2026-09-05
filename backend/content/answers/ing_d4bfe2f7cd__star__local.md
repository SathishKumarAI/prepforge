---
qid: ing_d4bfe2f7cd__star__local
question: 'Explain: Assumptions: — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 405
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:32-05:00'
sources: []
---

**Situation** – At my last company we noticed our internal analytics platform was hitting a bottleneck: every time we generated a new shortened link, the lookup latency spiked after only about 10 k active URLs per minute. The product team wanted a public‑facing shortener that could handle millions of daily requests while still keeping storage costs low.

**Task** – My job was to outline the key design assumptions: how many users we expected, traffic patterns, acceptable latency, durability requirements, and cost constraints. I also had to decide on the data model (hash vs. sequential ID), the cache strategy, and whether to support custom aliases.

**Action** – I started by modeling user growth: 10 k requests/day in Q1, scaling to 1 M/ day by year‑end. From that, I derived a throughput target of ~30 req/sec per shard, with <200 ms latency under peak load. I assumed eventual consistency was acceptable for reverse lookups (since redirects are idempotent) and chose DynamoDB for persistence because of its auto‑scaling write capacity and low read latency. For hashing, I used a 64‑bit base62 encoder to avoid collisions; to handle custom aliases I added a secondary index. To keep costs down, I leveraged an in‑memory Redis cache with TTL=12 hrs for hot URLs.

**Result** – The design was greenlit; we launched the service two weeks ahead of schedule. Within the first month, traffic hit 250 k requests/day and latency stayed below 180 ms on average. Storage costs were under $400/month thanks to efficient key compression. I learned that early, realistic assumptions about growth and consistency can dramatically simplify trade‑offs in a high‑scale system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
