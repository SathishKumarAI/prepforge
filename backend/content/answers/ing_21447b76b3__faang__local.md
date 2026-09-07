---
qid: ing_21447b76b3__faang__local
question: 'Explain: Caching — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 526
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:16-05:00'
sources: []
---

## Clarify  
We’re asked to design a **caching layer** for machine‑learning inference resources (e.g., pre‑computed embeddings or model outputs).  
Key assumptions to confirm:  

* What are the cacheable objects?  (vector, image features, model checkpoints?)  
* Size of each object and total storage budget.  
* Access patterns – read‑heavy, write‑frequency, TTL requirements.  
* Consistency needs – do stale entries hurt accuracy?  
* Failure mode tolerance – is eventual consistency acceptable?

## Approach  
1. **Identify cache key** (e.g., `embedding:<image_id>`).  
2. **Select storage tier**: in‑memory for hot data + SSD/Redis for larger but still frequently accessed items.  
3. **Eviction policy**: LRU for size control, with optional LFU for popularity.  
4. **Write‑through vs. write‑back** depending on consistency.  
5. **TTL / versioning** to invalidate stale entries automatically.  

## Depth  
*Implementation*: Use a distributed key‑value store (Redis Cluster or Amazon ElastiCache). Each node holds ~1 TB of hot embeddings; overall cluster scales horizontally.  
*Eviction*: LRU implemented via Redis’s `maxmemory-policy`. Complexity O(1) per access.  
*Consistency*: Write‑through ensures the cache is always in sync with the backing store (e.g., S3 or a database).  
*Failure handling*: Replicate each key across 3 nodes; on node loss, data remains available.

## Edge Cases  
* **Cache stampede** – guard with distributed locks (Redlock) before recomputing embeddings.  
* **Large objects** – chunk into smaller keys to avoid Redis memory fragmentation.  
* **TTL drift** – synchronize clocks or use logical timestamps.

## Optimize & Communicate  
- **Compress vectors** (e.g., product quantization) to reduce memory footprint.  
- **Batch fetches**: use `MGET` to pull multiple embeddings in one round‑trip, cutting latency by ~70%.  
- **Monitoring**: expose hit/miss ratios and evictions; auto‑scale nodes when hit rate drops below threshold.  

By layering an LRU cache over a durable store, we achieve low‑latency inference while keeping memory usage bounded and ensuring data consistency—exactly what a FAANG ML platform requires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
