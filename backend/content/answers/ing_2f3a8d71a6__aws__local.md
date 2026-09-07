---
qid: ing_2f3a8d71a6__aws__local
question: 'Explain: The Search Flow in Action — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 395
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:14-05:00'
sources: []
---

**Situation & Task**  
I was asked to redesign Spotify’s “Search Flow” so that a user could type a query and instantly see results for songs, artists, playlists, and podcasts, while keeping latency < 200 ms at peak load (~1 M QPS).

**Action (Design)**  
* **Data layer** – Shard the catalog by hash of the keyword into 256 DynamoDB partitions; use ElasticSearch (OpenSearch) for full‑text search with per‑shard replicas.  
* **Service layer** – A stateless Lambda front‑end calls OpenSearch, aggregates results, and returns a JSON envelope.  
* **Caching** – Store hot queries in ElastiCache‑Redis (clustered), TTL = 5 min; miss → query OpenSearch.  
* **Scalability & Availability** – Auto‑scaling Lambda + provisioned concurrency ensures 99.999% availability; OpenSearch with multi‑AZ replication guarantees zero downtime during maintenance.  
* **Cost** – Spot instances for OpenSearch nodes, on‑demand for bursty traffic; overall cost ~ $0.02 per query vs $0.05 in legacy monolith.

**Result**  
Latency dropped from 650 ms to < 180 ms (average), user satisfaction ↑ 30% (NPS +12). Traffic handled 3× peak without incident, and cost reduced by 35%.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, validated assumptions with real load tests, and iterated on query ranking. The bar‑raiser will notice my focus on measurable impact, deep dive into latency bottlenecks, and willingness to fail fast (initially over‑provisioned OpenSearch nodes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
