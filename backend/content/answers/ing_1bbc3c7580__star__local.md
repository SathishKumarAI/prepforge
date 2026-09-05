---
qid: ing_1bbc3c7580__star__local
question: 'Explain: Design Deep Dive — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 360
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:40-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with building a proof‑of‑concept for a company’s new marketing platform that needed to generate short URLs for campaign tracking. The prototype had to handle 10 k requests per second and store click analytics for up to five years.

**Task**  
Design an end‑to‑end URL shortening service: create unique slugs, redirect efficiently, persist mappings, and provide real‑time analytics without downtime.

**Action**  
I chose a stateless API layer on Node.js with Express, backed by a Redis cache (LRU) for hot slugs and a sharded PostgreSQL cluster for durability. Slug generation used a base‑62 encoded counter stored in a distributed lock (Redlock) to avoid collisions. I implemented rate limiting via token buckets per IP, added GeoIP routing to serve the nearest CDN edge, and instrumented Prometheus metrics. For analytics, I streamed click events into Kafka and processed them with ksqlDB, exposing real‑time dashboards through Grafana.

**Result**  
The prototype handled 12 k rps in a single region with <30 ms latency for 95% of requests, and the analytics pipeline delivered 1‑minute lag on daily reports. The design was later adopted as the foundation for production rollout, scaling to 200 k rps across multiple regions while keeping cost per click under $0.02. I learned how to balance consistency, availability, and performance in a distributed URL shortener.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
