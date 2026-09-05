---
qid: ing_674843d4bf__star__local
question: 'Explain: partition metadata somehow that request router even'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 388
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:16-05:00'
sources: []
---

**Situation:**  
At my last job I was tasked with scaling our recommendation engine to serve millions of users per day. The existing request router was a bottleneck because it had to look up model metadata for every incoming query, and the metadata set grew from 500 to over 20 000 entries after we added new content categories.

**Task:**  
I needed to redesign how the router accessed partition metadata so that lookup latency stayed under 2 ms while keeping memory usage low. The goal was a 30 % reduction in request‑to‑response time and no impact on model accuracy.

**Action:**  
I introduced a two‑layer partitioning scheme:  
1. **Hash‑sharded in‑memory cache** – the router hashes the content ID to one of 64 shards, each holding a compact Bloom filter plus a small key/value map for the most frequently accessed models.  
2. **Lazy‑loaded metadata store** – when a miss occurs, the shard asynchronously fetches the full metadata from a distributed KV store (Cassandra), caches it in LRU fashion, and serves the request. I used protobufs to keep each entry < 200 bytes and added a background compaction job that pruned stale keys every night.

**Result:**  
Lookup latency dropped from 12 ms to 1.7 ms on average, reducing overall throughput time by 35 %. Memory usage fell from 8 GB to 3.2 GB per router node. I learned that a hybrid cache‑plus‑lazy‑load strategy can keep routing fast without sacrificing data freshness or scaling to tens of thousands of metadata entries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
