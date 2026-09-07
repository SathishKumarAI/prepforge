---
qid: ing_996c2ed8d8__faang__local
question: 'Explain: LFU (Least Frequently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 794
total_tokens: 1034
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:41:18-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the **LFU (Least‑Frequently‑Used)** cache eviction strategy and list the eight most common eviction policies used in industry.  
Assumptions: *Cache is a key‑value store with limited capacity; eviction happens when inserting a new item exceeds capacity.*  

---

### 1. LFU – Core Idea
* **Definition**: Evict the entry that has been accessed the fewest times over its lifetime.  
* **Implementation sketch**:
  1. Maintain a frequency counter per key (e.g., hash map `key → freq`).  
  2. Keep a min‑heap or bucket list keyed by frequency to locate the lowest‑frequency item in *O(log n)* (or *O(1)* with two‑level hashing).  
  3. On each access, increment the counter and move the key to the appropriate bucket.  
* **Complexity**:  
  *Access*: O(1) amortized with bucket list; O(log n) if using a heap.  
  *Eviction*: O(1) to pop the min‑frequency bucket head.  

---

### 2. Top 8 Cache Eviction Strategies

| # | Strategy | Key Idea | Typical Use‑Case |
|---|----------|----------|------------------|
| 1 | **LRU** (Least Recently Used) | Evict item whose last access was furthest in the past. | Web browsers, OS page replacement. |
| 2 | **LFU** | Evict least frequently accessed item. | CDN edge caches, recommendation systems. |
| 3 | **FIFO** (First In First Out) | Evict oldest inserted entry regardless of usage. | Simple hardware buffers. |
| 4 | **Random Replacement** | Pick a random slot to evict. | Small in‑memory caches where simplicity matters. |
| 5 | **ARC** (Adaptive Replacement Cache) | Dynamically balances LRU and LFU components. | Operating systems, SSD firmware. |
| 6 | **LRFU** (Least Recently/Frequently Used) | Combines recency and frequency via a weighted score. | Database buffer pools. |
| 7 | **Clock (Second Chance)** | Circular list with reference bit; gives second chance to recently accessed items. | Kernel page replacement. |
| 8 | **N‑FIFO / N‑LRU** | Multiple FIFO or LRU queues to approximate LFU/LRU without full tracking. | High‑throughput caching layers. |

---

### 3. Edge Cases & Testing

* **Cold start**: All frequencies zero → tie-breaking needed (e.g., use recency).  
* **Burst traffic**: Rapid frequency changes can cause “hot” items to be evicted if counters are not updated atomically.  
* **Memory overhead**: LFU needs per‑key counters; test memory usage vs benefit.  

---

### 4. Optimizations & Communication

1. **Approximate LFU** – use count‑min sketch or exponential decay to reduce storage.  
2. **Hybrid policies** – combine LFU with recency (e.g., LRFU) for better hit rates.  
3. **Explain trade‑offs**: LFU is great when access frequency correlates with future use, but can hurt latency‑sensitive workloads where recentness matters more.  

When presenting, I’d first outline the problem and assumptions, then walk through the LFU algorithm, discuss its complexity, list the eight strategies in a concise table, address edge cases, and finish by highlighting practical optimizations and when to choose each policy. This structured flow demonstrates clear reasoning, depth, and communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
