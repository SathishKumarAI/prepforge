---
qid: ing_90f0f4c55f__star__local
question: 'Explain: System Design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 339
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:46-05:00'
sources: []
---

**Situation** – At my previous SaaS startup we launched a marketplace that sold over 200,000 SKUs across 50 categories. The marketing team wanted an up‑to‑date “sales rank” per category to surface trending products in the app, but our existing analytics pipeline only produced daily batch reports and lagged by 48 hours.

**Task** – Build a real‑time sales‑rank service that ingests millions of order events per day, updates each product’s rank within seconds, and exposes an API for the mobile front‑end with <200 ms latency.

**Action** – I designed a stream‑processing architecture on Kafka + Kinesis. Each order event was keyed by category+product, routed to a Flink job that maintained a sliding window of 7 days per product. The job updated a Redis sorted set (score = sales volume) for each category; we used Lua scripts to atomically increment scores and prune expired entries. A lightweight Go microservice queried Redis to return the top‑10 list via gRPC, caching results in Memcached with a 5 second TTL.

**Result** – The system processed 3 M events/day with <150 ms query latency. Category rankings refreshed every minute, enabling the app to display real‑time trends; user engagement on featured products rose 18%, and churn dropped by 4% within two months. I learned how to trade off consistency for speed using Redis sorted sets and the importance of windowed aggregations in streaming pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
