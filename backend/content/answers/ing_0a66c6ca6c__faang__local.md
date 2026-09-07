---
qid: ing_0a66c6ca6c__faang__local
question: 'Explain: Cons : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 666
total_tokens: 903
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:08:22-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise yet thorough rundown of the seven most common cache‑eviction policies used in high‑performance systems (e.g., LRU, LFU, FIFO, ARC, etc.). I’ll assume we’re talking about in‑memory caches where eviction decisions directly impact latency and throughput.

---

**Approach**

1. List each strategy with a one‑sentence definition.  
2. For each:  
   * typical use case (when it shines)  
   * key data structure(s) required  
   * complexity of `get/put` operations  
3. Highlight trade‑offs (memory overhead vs. hit‑rate).  

---

**Depth**

| Strategy | Definition | Use Case | Data Structure | Complexity |
|----------|------------|----------|----------------|------------|
| **LRU** (Least Recently Used) | Evicts the entry accessed longest ago. | Page replacement, web caching. | Doubly linked list + hash map. | O(1) `get/put`. |
| **LFU** (Least Frequently Used) | Removes the entry with fewest accesses. | Cache where hot items stay long. | Frequency‑bucketed priority queue or tree. | O(log n). |
| **FIFO** (First In First Out) | Evicts the oldest inserted item. | Simple, low‑overhead caches. | Queue + hash map. | O(1). |
| **ARC** (Adaptive Replacement Cache) | Combines LRU and LFU, adapts to workload. | Systems with bursty access patterns. | Two LRU lists + ghost lists. | O(1). |
| **LRFU** (Least Recently/Frequently Used) | Parameterized blend of LRU & LFU. | Tunable cache policies. | Similar to ARC but with decay factor. | O(log n). |
| **Random Replacement** | Picks a random entry to evict. | Extremely low overhead, when all items roughly equal value. | Array or hash set. | O(1). |
| **Clock (Second Chance)** | Approximate LRU using a circular list and reference bits. | Operating‑system page tables. | Circular array + bitmap. | O(1) amortized. |

---

**Edge Cases**

* Hot‑spot data causing LFU to starve new items.  
* Memory pressure spikes where FIFO may thrash.  
* ARC’s ghost lists can grow unbounded if not capped.

Test by simulating bursty vs. steady workloads and measuring hit ratios, eviction counts, and memory overhead.

---

**Optimize & Communicate**

Explain that choosing a policy is a *system‑level decision*: LRU offers simplicity but can underperform on skewed data; LFU gives better long‑term hit rates at higher CPU cost. ARC/​LRFU provide adaptive behavior but add implementation complexity. In practice, start with FIFO or Random for baseline, then profile and migrate to LRU/LFU/ARC as needed. This demonstrates structured thinking, depth in trade‑offs, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
