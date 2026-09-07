---
qid: ing_e188f9e639__faang__local
question: 'Explain: How it Works — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 793
total_tokens: 1031
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:23:52-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise rundown of the seven most common cache‑eviction policies (LRU, LFU, FIFO, Random, ARC, CLOCK, and NRU) and how each works in practice. I’ll assume we’re talking about an in‑memory key/value store or web‑cache where items have size, access timestamps, and optionally a “hotness” counter.

**Approach**  
1. List each strategy with its core idea.  
2. Show the data structures needed (linked list, hash map, counters).  
3. Give the eviction cost per operation and typical use‑case.  
4. Highlight trade‑offs (memory overhead vs hit‑rate).

**Depth**

| Strategy | Core Idea | Data Structures | Eviction Cost | Typical Use |
|----------|-----------|-----------------|---------------|-------------|
| **LRU** | Remove least recently used item. | Hash map + doubly linked list (move to head on access). | O(1) per op. | Page replacement, CDN edge cache. |
| **LFU** | Evict item with lowest frequency count. | Frequency buckets (array of lists) + hash map. | O(1) amortized if using counters; otherwise O(log n). | Work‑load skewed systems where “hot” items stay longer. |
| **FIFO** | First‑in, first‑out: evict oldest inserted item. | Simple queue + hash map for lookups. | O(1). | Very low overhead caches where access pattern is unpredictable. |
| **Random** | Pick a random entry to evict. | Array or list of keys; hash map for values. | O(1). | When eviction cost must be minimal, e.g., IoT buffers. |
| **ARC (Adaptive Replacement Cache)** | Combines LRU and LFU adaptively via 4 lists (T1,T2,B1,B2). | Four doubly linked lists + hash map + hit‑rate counters. | O(1) amortized; higher memory overhead. | Systems needing near‑optimal performance without tuning. |
| **CLOCK** | Approximate LRU using a circular list with reference bits. | Circular array, pointer, ref bit per entry. | O(1) average (may scan a few entries). | Operating system page replacement, low‑memory environments. |
| **NRU (Not Recently Used)** | Periodically clears “referenced” bits; evicts unreferenced pages first. | Bit vectors for referenced/modified flags + hash map. | O(1) per access, periodic sweep cost. | Batch eviction in large memory pools. |

**Edge Cases**  
- *High‑write workloads*: LRU can thrash if every write updates the list.  
- *Very skewed access patterns*: LFU may lock hot items forever; use aging to decay counts.  
- *Memory constraints*: ARC and CLOCK consume extra pointers; Random is cheapest but offers no hit‑rate guarantee.  
- *Concurrency*: All need fine‑grained locks or lock‑free structures (e.g., concurrent hash maps) to avoid contention.

**Optimize & Communicate**  
Start with the simplest (FIFO/Random) for prototypes, then profile hit rates. If latency is critical and workloads show hot spots, switch to LRU or LFU. ARC is a great “auto‑tune” fallback when you can afford extra memory. Communicate that choosing a policy depends on *access pattern*, *memory budget*, and *latency sensitivity*. In an interview, I’d finish by saying: “I’d instrument the cache to log hit/miss ratios for each strategy, then pick the one that meets SLA while staying within our resource envelope.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
