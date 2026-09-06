---
qid: ing_683ae71d00__fp__local
question: 'Explain: Statistics — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 486
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:46:16-05:00'
sources: []
---

**Caches Explained – a Guava‑centric view**

A cache is a *finite* associative memory that stores key–value pairs for quick retrieval, trading off space for speed.  
At its core the problem is **optimizing hit probability under capacity constraints**: given an access stream \(a_t\) with unknown distribution, we want to keep as many “useful” items in memory so that \(\Pr[a_t\in C]\) is maximised.

1. **Optimality principle**  
   The *Belady* optimal algorithm shows that, if the future were known, we should evict the item whose next use is farthest away.  In practice we approximate this by estimating *recency* and *frequency*.  

2. **Guava’s approach**  
   Guava implements an LRU‑style cache with a configurable `CacheBuilder`. Internally it uses a **hash table + doubly linked list** for O(1) get/put, plus a *write‑behind* eviction policy that keeps the list sorted by last access. The eviction logic is a lightweight implementation of Belady’s rule: when size exceeds `maximumSize`, the least‑recently used entry (tail of the list) is removed.

3. **Statistics**  
   Guava exposes a `CacheStats` object, counting hits, misses, load successes/failures, and evictions. These metrics are derived from the same access counters that drive eviction: each `get()` updates hit/miss counts; each `put()` or expiration triggers an eviction count. The statistics therefore satisfy:

   \[
   \text{hitRatio} = \frac{\text{hits}}{\text{hits}+ \text{misses}}
   \]

4. **Non‑obvious insight**  
   Many think a cache is purely about speed, but its *statistical* interface turns it into an online learning system: the hit ratio itself becomes a feedback signal that can trigger adaptive resizing or policy changes. In other words, Guava’s statistics are not just diagnostics—they’re the data that could enable self‑tuning caches.

Thus, Guava’s cache is a concrete instantiation of optimal eviction theory, wrapped in a simple API that exposes its internal performance via precise statistics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
