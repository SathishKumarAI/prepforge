---
qid: ing_c21788fb3d__star__local
question: 'Explain: Search Request — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 380
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:59-05:00'
sources: []
---

**Situation** – While working on a feature to power the “Explore” feed at a mid‑size photo app, I noticed that users were waiting up to three seconds for hashtag searches, and our analytics showed a 12 % drop in engagement when latency exceeded 1 s.

**Task** – My goal was to redesign the search request pipeline so that hashtag queries returned results in under 800 ms with a 99.9 % success rate, even during peak traffic (≈200k requests/min).

**Action** – I first profiled the monolithic query layer and identified three bottlenecks: full‑table scans on the `photos` table, blocking locks from concurrent writes, and stale cache data. I split the service into a stateless API gateway that accepted queries, a read‑optimized search index built with Elasticsearch (sharded by hashtag hash), and an async microservice that updated the index in near real‑time using Kafka streams. To keep latency low, I added a two‑tier cache: an in‑memory LRU cache for hot hashtags and a Redis cluster for mid‑term data. I also implemented query throttling and circuit breakers to protect downstream services during spikes.

**Result** – After deployment, average search latency dropped from 2.8 s to 0.55 s, and the hit rate increased by 18 %. Engagement on hashtag‑based posts rose by 9 %, and we reduced server costs by 22 % thanks to the more efficient indexing strategy. This experience taught me that a well‑partitioned, event‑driven architecture can turn a sluggish search into a high‑throughput, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
