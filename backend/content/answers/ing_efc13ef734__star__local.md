---
qid: ing_efc13ef734__star__local
question: 'Explain: Metadata Traffic — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 332
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:23-05:00'
sources: []
---

**Situation:**  
At my previous role, we were launching a new podcast recommendation feature on our music streaming platform. The user‑interface had to fetch millions of track and artist metadata in real time while keeping latency under 150 ms during peak hours.

**Task:**  
Design the metadata traffic layer that could serve this volume with high availability, minimal duplication, and cost efficiency—essentially a scalable “metadata bus” for Spotify‑style streaming.

**Action:**  
I chose a hybrid approach: a global Redis cache for hot data, backed by a sharded Kafka cluster that streamed changes from our master database. Every write to the metadata store produced an event; consumers updated local caches or persisted updates to a Cassandra table for durability. To reduce cross‑region hops I used DynamoDB Global Tables with read replicas in each region and applied time‑to‑live (TTL) policies to purge stale entries automatically. For observability, I instrumented Prometheus metrics and set up alerts on cache hit ratios dropping below 95 %. Finally, I implemented an exponential backoff retry for cache misses to keep the system resilient under load.

**Result:**  
The new architecture cut average metadata latency from 300 ms to 90 ms during peak traffic, increased cache hit rate to 97 %, and lowered infrastructure cost by ~18 % due to efficient TTL eviction. I learned that coupling event‑driven updates with regionally distributed caches gives both speed and consistency in a global streaming service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
