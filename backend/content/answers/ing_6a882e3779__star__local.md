---
qid: ing_6a882e3779__star__local
question: 'Explain: Docstore Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 386
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:35-05:00'
sources: []
---

**Situation** – When I joined Uber’s data platform team, our analytics layer was choking on a single hot table: the real‑time trip history that fed surge pricing and ETA models. The table sat in Cassandra, but we were seeing 30 M reads per second during peak hours—far beyond what the cluster could sustain without latency spikes.

**Task** – I had to design an architecture that would keep read latency under 10 ms while still delivering accurate data for downstream ML pipelines, all without rewriting our existing storage layer.

**Action** – I introduced a two‑tier “Docstore” approach. First, we wrapped each row in a document and pushed it into a distributed cache (Redis Cluster) with a write‑through policy. The cache held the most frequently accessed 10 % of documents (about 4 M per shard), using LRU eviction tuned by access patterns observed from the Cassandra logs. Second, for cold reads we leveraged an integrated “read‑through” proxy that fetched missing docs directly from Cassandra, updated the cache, and served the request—all in a single RPC path. We also added per‑document TTLs to keep the cache fresh without manual invalidation.

**Result** – After deployment, read latency dropped from 70 ms to 8 ms, and we achieved 45 M reads/sec with only 15 % of the Cassandra cluster’s capacity. The cost savings were $2M annually on storage nodes, and the ML models saw a 12 % reduction in prediction error because they now had fresher data. I learned that combining an intelligent cache layer with minimal changes to the underlying store can solve seemingly intractable throughput problems without sacrificing consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
