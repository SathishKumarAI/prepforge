---
qid: ing_5a93f1f19e__faang__local
question: 'Explain: Most Recently Used (MRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 641
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:08-05:00'
sources: []
---

**Clarify**  
The question asks for an overview of the *seven most common cache‑eviction strategies* that use a “Most Recently Used” (MRU) policy as a baseline. I’ll assume we’re talking about **in‑memory LRU‑style caches** (e.g., Redis, Memcached) where eviction is triggered when capacity is exceeded.

**Approach**  
1. List the seven strategies in order of popularity.  
2. For each, describe its core idea, typical use case, and complexity trade‑offs.  
3. Highlight how MRU serves as a reference point (always evict the *least* recently used entry).  

**Depth**  

| Strategy | Core Idea | Typical Use | Complexity |
|----------|-----------|-------------|------------|
| **LRU** (Least Recently Used) | Evict entry with oldest access timestamp. | Workloads with temporal locality. | O(1) with doubly‑linked list + hash map. |
| **LFU** (Least Frequently Used) | Evict entry with lowest hit count. | Workloads where popularity is stable over time. | O(log n) with min‑heap or counters; heavier bookkeeping. |
| **MRU** | Opposite of LRU: evict most recently accessed item. | Page‑replacement in certain OS kernels, cache for “cold” data. | Same as LRU (O(1)) but different priority. |
| **ARC** (Adaptive Replacement Cache) | Dynamically balances between LRU and LFU via two LRU lists. | Variable workloads; self‑tuning. | O(1) amortized; more memory overhead. |
| **CLOCK** (second‑chance) | Approximate LRU using a circular buffer of reference bits. | Low‑overhead systems where exact LRU is too expensive. | O(1) per eviction; simple bit manipulation. |
| **Random Replacement** | Evict a randomly chosen entry. | Extremely fast, low‑complexity scenarios (e.g., large distributed caches). | O(1); no metadata needed. |
| **Least Recently Written (LRW)** | Evicts entries that were most recently written to, not read. | Write‑heavy workloads where old writes are stale. | Similar to LRU but tracks write timestamps. |

**Edge Cases**  
- *Cold starts*: Random or MRU can outperform LRU when cache is empty.  
- *High churn*: LFU may over‑penalize items that become popular after a long idle period.  
- *Memory constraints*: CLOCK and Random avoid extra per‑item metadata.

**Optimize & Communicate**  
When recommending a policy, first profile access patterns (temporal vs. frequency locality). For most web caches, LRU or ARC yields the best hit ratios with acceptable overhead. If latency is paramount and memory tight, consider CLOCK or Random. Always present empirical data (hit‑rate graphs) to back the choice.

*Word count: ~220*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
