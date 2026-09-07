---
qid: ing_a40a2b49fa__faang__local
question: 'Explain: Application Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 599
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *application‑level caching* in the context of ML systems—how we store intermediate results (feature vectors, model predictions, embeddings) to reduce latency and compute cost. I’ll assume we’re talking about in‑memory or distributed cache layers used alongside batch pipelines.

**Approach**  
1. Define caching: a memory‑or‑disk tier that holds frequently accessed data so recomputation is avoided.  
2. Explain why ML benefits: expensive feature extraction, model inference, and dataset shuffling.  
3. Show typical cache design patterns (write‑through, read‑ahead).  
4. Discuss consistency guarantees (eventual vs strict) and invalidation strategies.

**Depth**  
Caching in ML systems typically involves a key–value store (Redis, Memcached, or a distributed file system with block caching). Keys are often composite: model ID + input hash. Values can be raw tensors, serialized embeddings, or prediction probabilities.  

- **Cache hit rate** is critical; we aim for >90 % on cold‑start inference.  
- **Eviction policy**: LRU for small, high‑velocity data; LFU for long‑lived embeddings.  
- **Write‑through** ensures the underlying store (e.g., S3 or a database) remains authoritative, reducing staleness.  
- For *feature stores*, we often precompute features nightly and publish to cache; real‑time pipelines fall back to recomputation if missing.

Complexity: O(1) average lookup in Redis; memory overhead scales with the number of cached items. Trade‑offs include higher RAM cost versus CPU savings, and potential staleness if source data updates faster than cache refresh.

**Edge Cases**  
- **Cache stampede**: many workers miss a key simultaneously; mitigate with request coalescing or probabilistic backoff.  
- **Stale data**: when training data changes, cached predictions become invalid—use TTLs or versioned keys.  
- **Memory pressure**: sudden spike in unique inputs can exhaust cache; need graceful degradation to disk or recomputation.

**Optimize & Communicate**  
To improve hit rate, we can employ *prefetching* of likely next queries (e.g., sequential image IDs). Profiling shows that a 10 % increase in TTL reduces CPU load by ~30 %. I would present this as: “By shifting from per‑request recomputation to a shared cache with write‑through and LRU eviction, we cut inference latency from 200 ms to 40 ms on average, while keeping memory usage under 8 GB.” This narrative demonstrates structured reasoning, technical depth, and the business impact—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
