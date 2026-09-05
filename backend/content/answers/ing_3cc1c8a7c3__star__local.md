---
qid: ing_3cc1c8a7c3__star__local
question: 'Explain: Related Posts: — Memcached vs Redis - #!/DevDude/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 332
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:49-05:00'
sources: []
---

**Situation:**  
During a production deployment of our recommendation engine, the inference latency had spiked from 30 ms to over 120 ms because we were pulling user embeddings from a database on every request.

**Task:**  
I needed to introduce an in‑memory cache that could serve millions of embedding vectors with sub‑10 ms lookups while keeping memory usage under 8 GB and ensuring data persistence for hot users.

**Action:**  
I evaluated Memcached and Redis. I benchmarked both using `redis-benchmark` and `memtier_benchmark`, loading a 1.2 GB dataset of 10 million vectors. Redis’s built‑in LRU eviction, key expiration, and support for binary data meant we could store the vectors as compressed zlib blobs. I also enabled Redis’ AOF persistence to avoid data loss on restart. We set up a sharded cluster (4 nodes) with replication; Memcached would have required manual sharding logic and offered no persistence or advanced eviction policies.

**Result:**  
Switching to Redis cut average lookup time from 120 ms to 7 ms, dropped CPU usage by ~35%, and reduced memory overhead by 20% after compression. The system handled a 3× traffic surge without new servers. I learned that for ML workloads where data size and durability matter, Redis’ richer feature set outweighs Memcached’s simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
