---
qid: ing_e3196b6fad__star__local
question: 'Explain: Endpoint: GET /{short_code} — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 354
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:02:53-05:00'
sources: []
---

**Situation** – While working on a startup’s internal tool, we needed a public-facing URL shortener that could handle millions of hits per day with sub‑millisecond latency and zero downtime during traffic spikes.

**Task** – Design the `GET /{short_code}` endpoint: resolve a short code to its original URL, redirect users, log analytics, and enforce rate limits—all while staying horizontally scalable and cost‑effective.

**Action** – I built a stateless microservice in Go with Gin. The handler first performs an in‑memory LRU cache lookup; on miss it queries a Redis cluster that holds the short_code → long_url mapping. If still missing, we fall back to a sharded PostgreSQL table (partitioned by hash of the code) for durability. I added a Bloom filter to pre‑reject non‑existent codes and reduce database load. For analytics, each hit is pushed asynchronously to Kafka, then processed by a worker that writes daily aggregates into ClickHouse. Rate limiting uses Redis Lua scripts with sliding window logic. All services run in Docker containers orchestrated by Kubernetes, autoscaling based on request latency.

**Result** – The endpoint achieved 99.9% cache hit rate, reducing database traffic by 85%. Average response time dropped to 25 ms under a 2M RPS load test, and the system sustained 5× traffic during a flash sale without any outages. I learned how careful caching layers, probabilistic data structures, and event‑driven analytics can turn a simple redirect into a highly available, scalable service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
