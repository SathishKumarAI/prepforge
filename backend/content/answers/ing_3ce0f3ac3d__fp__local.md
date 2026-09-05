---
qid: ing_3ce0f3ac3d__fp__local
question: 'Explain: LRU (Least Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 472
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:13:47-05:00'
sources: []
---

**LRU – the de‑facto gold standard for cache eviction**

The fundamental problem is: *given a fixed‑size buffer and an unpredictable stream of references, keep as many future accesses in memory as possible*. The optimal offline algorithm (Belady’s MIN) evicts the item whose next use is farthest in the future. Since we never know the future, we look for a cheap online proxy.

*Why LRU works.*  
If an object has been accessed recently, it is statistically more likely to be used again soon—this is the “recency” principle from temporal locality. Conversely, objects that have sat idle for a long time are less valuable; they are the most probable candidates for future misses. Thus, evicting the least recently used item approximates Belady’s MIN under the assumption of a Markov‑like access pattern: each request is independent of past requests except through the recency of its key.

*Implementation insight.*  
A doubly linked list with hash table gives O(1) updates and evictions. The list head holds the most recent item; tail the least. On every hit, move the node to the head; on a miss, insert at the head and drop the tail if full.

*Non‑obvious nuance.*  
LRU’s optimality hinges on *strict* recency: an object accessed once but not again is as good a candidate for eviction as one that has never been seen. In workloads with long “cold” periods (e.g., paging of infrequently used files), LRU can thrash because it discards items that will be reused after a long delay. A subtle hybrid, **LRU‑K** (evict based on the *k*‑th future reference) or **ARC** (adaptive replacement cache) mitigates this by blending recency with frequency.

In short, LRU is top because it’s simple, fast, and mathematically grounded in temporal locality—yet practitioners must guard against its blind spot for long‑term reuse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
