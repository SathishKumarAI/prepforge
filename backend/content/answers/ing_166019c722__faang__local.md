---
qid: ing_166019c722__faang__local
question: 'Explain: Random Replacement (RR) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 725
total_tokens: 965
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:36:31-05:00'
sources: []
---

**Random Replacement (RR)**  
*What is it?* – When a cache becomes full, RR evicts an entry chosen uniformly at random from the current set of cached items. It requires no bookkeeping beyond keeping track of the occupied slots.

---

## 1️⃣ Clarify
- **Goal:** Explain RR and the other *seven* common eviction policies.
- **Assumptions to confirm:**  
  - Cache size is fixed.  
  - All cache lines are equally likely to be accessed (no skew).  
  - We care about hit‑rate, not latency or power.

## 2️⃣ Approach
1. List the seven strategies in a table.  
2. For each: state its principle, required data structures, and complexity.  
3. Highlight RR’s trade‑offs relative to others.

## 3️⃣ Depth

| Strategy | Principle | Data Structure | Avg. Complexity |
|----------|-----------|----------------|-----------------|
| **LRU** (Least Recently Used) | Evict entry with oldest access time | Doubly linked list + hash map | O(1) |
| **LFU** (Least Frequently Used) | Evict entry with lowest hit count | Frequency counters, min‑heap or bucketed lists | O(log n) |
| **ARC** (Adaptive Replacement Cache) | Combines LRU and LFU; adapts to workload | Two LRU queues + hash maps | O(1) amortized |
| **CLOCK** (Second Chance) | Approximate LRU with reference bits | Circular list, ref bit per slot | O(1) |
| **FIFO** (First In First Out) | Evict the oldest inserted item | Queue | O(1) |
| **Random Replacement (RR)** | Randomly pick any cached entry | Simple array or linked list | O(1) |
| **Segmented LRU (SLRU)** | Split cache into hot & cold segments | Two queues + hash map | O(1) |

- **Complexity notes:** RR is the cheapest—no metadata, no maintenance cost.  
- **Performance:** In uniform access patterns, RR’s hit‑rate ≈ 1 – (size/total items). For skewed workloads (e.g., Zipf), RR can be 20‑30% worse than LRU.

## 4️⃣ Edge Cases
- *Cache size = 1:* RR becomes trivial; same as any policy.  
- *Highly skewed access:* RR may evict hot items, leading to thrashing.  
- *Very large cache:* Random selection overhead negligible; memory locality can suffer.

## 5️⃣ Optimize & Communicate
- **When to use RR:** Very low‑overhead systems (e.g., IoT edge devices) where bookkeeping cost dominates.  
- **Hybrid approach:** Start with RR, switch to LRU if hit‑rate drops below threshold.  
- **Narration tip:** Emphasize that RR trades optimality for simplicity; in practice it’s a useful baseline and can be surprisingly competitive when access patterns are close to random.

> *Takeaway:* Random Replacement is the simplest eviction strategy—O(1) with no metadata—but should be chosen only when the cost of tracking usage outweighs the hit‑rate penalty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
