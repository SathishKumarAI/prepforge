---
qid: ing_363fb599b9__star__local
question: 'Explain: Caching — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 353
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:48-05:00'
sources: []
---

**Situation** – I was leading the redesign of a real‑time notification platform for a mobile app that had over 2 million daily active users. The existing architecture hit 1.8 ms per request but spiked to 300 ms during peak hours, causing many push failures and a 12% churn spike.

**Task** – Reduce average latency below 50 ms while keeping the system cost‑effective, and ensure that notifications were delivered reliably even under sudden traffic surges.

**Action** – I introduced a two‑layer caching strategy. First, an in‑memory LRU cache (Redis) stored user subscription data and recent message IDs to avoid repeated DB lookups; we set a 5 min TTL for dynamic preferences. Second, a request coalescing layer using a short‑lived “pending” queue (Kafka with a 100 ms window) merged duplicate push requests before hitting the external push provider, cutting redundant API calls by ~70%. I also added circuit‑breaker logic that routed traffic to a backup notification service during upstream outages. All changes were rolled out via canary deployments and monitored with Grafana dashboards.

**Result** – Latency dropped from 300 ms to an average of 38 ms at peak load, push success rate improved by 15%, and infrastructure cost fell by 18% thanks to reduced external API usage. I learned that thoughtful cache granularity combined with request aggregation can dramatically improve both performance and resilience in high‑traffic notification systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
