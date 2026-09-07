---
qid: ing_cd0cbabc03__faang__local
question: 'Explain: Q64: Design a semantic cache that actually works in production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:36:58-05:00'
sources: []
---

**Clarify**  
We need a caching layer that stores *semantic* representations of data (e.g., embeddings, graph nodes) so that queries can be answered faster while remaining correct for downstream consumers. Key assumptions: the cache must support high‑throughput read/write, consistency with an immutable source (e.g., database or ML model output), and automatic invalidation when underlying data changes.

**Approach**  
1. **Key design** – hash the semantic vector (e.g., via locality‑sensitive hashing) to generate a compact key.  
2. **Value storage** – store the full vector, metadata (timestamp, source ID), and optional compression.  
3. **Indexing** – maintain an approximate nearest neighbor index (FAISS/Annoy) over cached vectors for similarity queries.  
4. **Consistency layer** – use a publish‑subscribe channel that emits “update” events; the cache subscribes and refreshes or evicts entries.  
5. **Eviction policy** – combine LRU with semantic relevance: if a vector hasn’t been queried in N days *and* its similarity score to recent queries is below a threshold, evict it.

**Depth**  
- **Complexity:** Query latency ≈ O(log N) for ANN lookup; write latency ≈ O(1).  
- **Trade‑offs:** Hash collisions may cause stale results—mitigate with double‑hash verification.  
- **Persistence:** Persist the index to disk on checkpoint, reload at startup.

**Edge Cases**  
- Rapidly changing data → burst of invalidations; back‑pressure queue needed.  
- High dimensionality → curse of dimensionality; test with different LSH families.  
- Cache miss → fallback to source and warm cache asynchronously.

**Optimize & Communicate**  
Start with a small prototype using Redis + FAISS, measure hit‑rate and latency. Gradually shard the index horizontally for scale. Explain that this design balances *semantic accuracy* (via ANN) with *operational robustness* (event‑driven invalidation), which is why it can survive in production at large companies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
