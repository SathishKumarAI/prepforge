---
qid: ing_e57d7042dc__faang__local
question: 'Explain: Data Partitioning — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 415
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:48-05:00'
sources: []
---

**Clarify**  
You’re asking about *data partitioning* in ML pipelines and how *caching* fits into the design. I’ll assume we’re building a distributed training system that shards data across workers, and we want to reduce disk‑to‑memory hops while keeping consistency.

**Approach**  
1. Partition data (shards) by key or hash.  
2. Store each shard on local SSDs or object store.  
3. Use an in‑memory cache per worker for the most frequently accessed shards.  
4. Cache invalidation follows a policy (LRU, TTL).  
5. Optionally replicate hot shards to other nodes.

**Depth**  
Caching turns *O(read latency + I/O)* into *O(memory read)* for hot data. In Spark or TensorFlow‑TF, you can use `RDD.persist(StorageLevel.MEMORY_ONLY)` or `tf.data.Dataset.cache()`. The cache size is bounded; eviction uses LRU to keep the highest‑access shards alive. Consistency is maintained by writing back updates only at epoch boundaries (checkpointing). Complexity: read hits are O(1), misses hit disk O(log N) for lookup + O(B) block transfer. Memory overhead is linear in cache size.

**Edge Cases**  
- Skewed access patterns can cause thrashing; monitor hotness and rebalance shards.  
- Updates to training data require invalidating affected caches; stale reads can hurt convergence.  
- Failure of a node that owns the cache must recover from disk or replicated shard.

**Optimize & Communicate**  
To improve, consider *tiered caching* (SSD + RAM) and *prefetching* based on model gradient history. In an interview, I’d explain how this reduces CPU wait time, lowers network traffic, and scales with data size—key metrics for a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
