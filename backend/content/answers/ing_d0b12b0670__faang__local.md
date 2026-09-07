---
qid: ing_d0b12b0670__faang__local
question: 'Explain: Caching Anti-Patterns — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 503
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:45:59-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of caching, why it matters in ML‑heavy systems, and what “anti‑patterns” (common pitfalls) look like when you add cache layers to model serving or data pipelines.

**Approach**  
1. Define caching as storing expensive results so subsequent requests hit fast memory instead of recomputing.  
2. Explain typical ML cache uses: pre‑computed embeddings, inference outputs, feature stores, or dataset shards.  
3. List anti‑patterns in three categories—*design*, *consistency*, and *operations*.  

**Depth**  
- **Design pitfalls**:  
  - *Unbounded caches*: let memory blow up; use size limits + eviction policies (LRU, LFU).  
  - *Stale data*: caching raw inputs but not model checkpoints leads to drift.  
  - *Over‑caching*: keeping every request result wastes space; cache only hot items via frequency analysis.  

- **Consistency pitfalls**:  
  - *Write‑through vs read‑through misconfig*: updates may bypass cache, causing race conditions.  
  - *Cache invalidation gaps*: forgetting to evict on model retrain or data refresh results in wrong predictions.  

- **Operational pitfalls**:  
  - *Hotspotting*: a single key (e.g., popular user ID) overwhelms the cache node. Shard by hash or use consistent hashing.  
  - *Versioning neglect*: serving different model versions from the same cache can mix outputs; embed version in key.  

Complexity: O(1) lookup with hash map, but eviction adds O(log n). Trade‑offs between hit‑rate and memory cost must be measured.

**Edge Cases**  
- Zero‑latency requests (e.g., real‑time bidding) where any miss is unacceptable.  
- Highly skewed feature distributions; test cache under bursty traffic.  

**Optimize & Communicate**  
Use metrics—cache hit ratio, latency percentiles—to iterate. Explain that a robust ML cache blends *TTL* with *event‑driven invalidation*, sharding for scale, and version‑aware keys to avoid stale predictions. This narrative shows structured thinking, technical depth, and awareness of operational realities—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
