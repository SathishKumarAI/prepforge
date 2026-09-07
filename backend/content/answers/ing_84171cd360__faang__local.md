---
qid: ing_84171cd360__faang__local
question: 'Explain: Explicit Removals — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 462
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:03-05:00'
sources: []
---

**Explicit Removals – What and Why?**

| **Clarify** | We’re discussing Guava’s *Cache* interface, specifically the `invalidate(K key)` / `invalidateAll()` methods that let callers explicitly drop entries before they expire. Confirm:  
• Cache type (e.g., `LoadingCache` vs. `Cache`).  
• Whether eviction policy is size‑based or time‑based. |  

| **Approach** | 1️⃣ Outline the API contract. 2️⃣ Explain scenarios where explicit removal matters. 3️⃣ Discuss implementation details and complexity. |  

| **Depth** | *API:*  
- `void invalidate(K key)` – O(1) amortized, removes the entry if present.  
- `void invalidateAll()` – O(n) to clear all entries (or O(1) if using a version stamp).  
*Use‑cases:*  
• **Invalidation after external update**: A cache of user profiles must be refreshed when a profile changes elsewhere.  
• **Memory pressure handling**: Explicitly drop hot but stale data during GC spikes.  
Implementation uses a *ConcurrentHashMap* plus a *linked list* for LRU; invalidation updates both structures atomically, ensuring thread safety and maintaining the eviction policy. |  

| **Edge Cases** | • Concurrent invalidate & get: `getIfPresent` may return an entry that is being removed—handled via atomic references.  
• Re‑insertion race: after invalidating, a `putIfAbsent` can reinsert immediately; must be acceptable.  
• Bulk eviction on shutdown: `invalidateAll()` should not block long‑running background tasks. |  

| **Optimize & Communicate** | For high‑throughput caches, consider *lazy* invalidation (marking entries as stale and purging during next access) to avoid lock contention. Explain trade‑offs: eager removal guarantees no stale reads but costs immediate synchronization; lazy saves CPU but may temporarily expose stale data. Conclude with a recommendation: use explicit removes when correctness outweighs performance, otherwise rely on time‑based eviction. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
