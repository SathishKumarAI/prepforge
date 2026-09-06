---
qid: ing_9c198b2e2b__fp__local
question: 'Explain: Introduction — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 492
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:15-05:00'
sources: []
---

**Why the problem matters**

Every ride request triggers a cascade of data look‑ups: user profile, driver proximity, surge pricing tables, map tiles, and historical trip logs. These reads must be served in milliseconds for a smooth user experience. With millions of concurrent users, the raw storage layer would have to sustain tens of millions of I/O operations per second—far beyond what a single disk or even a sharded key‑value store can deliver without unacceptable latency.

**The principle that drives the solution**

*Latency ≈ 1 / (bandwidth × hit‑ratio)*.  
If we keep the *hit‑ratio* high, we can reduce the required bandwidth dramatically. Uber’s integrated cache is essentially a *hierarchical memory* system: fast in‑memory caches sit directly beside the online store, each tier serving a progressively larger set of keys with longer access patterns.

**How it works**

1. **Local in‑process LRU** – every service instance keeps a small (≈ 10 MB) cache for its most recent queries.
2. **Cluster‑wide shared cache** – a distributed, partitioned key‑value store (e.g., Memcached/Redis) backs the local caches, spilling over when the in‑process one is full.
3. **Write‑through with pre‑warming** – updates to the persistent store are immediately reflected in both tiers; batch pre‑fetches for anticipated queries (e.g., upcoming surge zones) keep hot data resident.

The *integrated* aspect means that cache miss logic is embedded into the read path of the online storage API, so a single call either hits memory or falls back to disk without extra round‑trips. This tight coupling eliminates the “cache‑miss penalty” and keeps throughput linear with the number of nodes.

**Non‑obvious insight**

Because Uber’s traffic is highly *spatially* correlated (many riders in the same city), the cache can exploit *geographic locality*: a single shard often serves many neighboring requests. By aligning shards to geographic regions, Uber turns what would be random I/O on disk into almost‑sequential reads within each shard, further boosting effective bandwidth without adding more hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
