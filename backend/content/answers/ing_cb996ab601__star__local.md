---
qid: ing_cb996ab601__star__local
question: 'Explain: High Level for Search — The Architecture Twitter Uses to Deal
  with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 339
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:54-05:00'
sources: []
---

**Situation:**  
When I joined the search team at a fast‑growth social platform, we were handling 150 M daily active users and an incoming tweet stream of ~22 MB/s. The requirement was to surface relevant tweets in under five seconds while supporting up to 300K queries per second.

**Task:**  
Design a scalable, low‑latency search architecture that ingests the firehose in real time, indexes it efficiently, and serves ranked results within the SLA without compromising freshness or consistency.

**Action:**  
I led the redesign of our ingestion pipeline: we split the firehose into sharded Kafka topics per user region, then streamed them through a stateless Spark micro‑batch job that updated Elasticsearch indices in near real time. To reduce query latency, I introduced a two‑tier caching layer—an LRU cache on each search node backed by Redis for hot queries, and a global memcached pool for cross‑region lookups. We also implemented an adaptive scoring algorithm using BM25 + user‑profile embeddings, retrained nightly with new data. All components were containerized (Docker) and orchestrated via Kubernetes to auto‑scale during traffic spikes.

**Result:**  
The new architecture cut average query latency from 9 s to 2.3 s, maintained a 99.8% hit rate on the first page, and handled 350K QPS during peak events without downtime. I learned that micro‑service isolation combined with intelligent caching is key for scaling search at social‑media scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
