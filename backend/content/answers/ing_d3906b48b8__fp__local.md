---
qid: ing_d3906b48b8__fp__local
question: 'Explain: First In, First Out (FIFO) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 523
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:45-05:00'
sources: []
---

### Why a cache needs an *eviction policy*

A cache stores the most recent or frequently accessed items in limited space.  
When it becomes full, we must decide **which item to drop** so that future
look‑ups remain fast.  
The choice can be formalized as minimizing expected access cost under a
probabilistic model of requests.  Different policies embody different
assumptions about the request stream (recency, frequency, locality).

---

## FIFO and its seven variants

| # | Policy | Core idea | Typical use |
|---|--------|-----------|-------------|
| **1** | **FIFO** | Remove the *oldest* item in insertion order. | Simple hardware buffers where order matters. |
| **2** | **LRU (Least Recently Used)** | Evict the item whose last access is farthest back. | General-purpose caches; approximates optimality when requests are temporally local. |
| **3** | **LFU (Least Frequently Used)** | Remove the item with the smallest hit count. | Works well for workloads with skewed frequency distributions. |
| **4** | **ARC (Adaptive Replacement Cache)** | Dynamically balances between LRU and LFU using two lists. | Adaptive to changing access patterns. |
| **5** | **CLOCK** | A circular list that gives each item one “second” of grace before eviction. | Hardware-friendly approximation of LRU. |
| **6** | **2Q (Two Queues)** | Keeps a small “short-term” queue and a larger “long-term” queue; items promoted on re‑access. | Handles mix of short‑lived and long‑term references. |
| **7** | **Random Replacement (RR)** | Pick a random item to evict. | Baseline for comparing other strategies; surprisingly effective when cache size is large relative to working set. |

---

### One non‑obvious insight

All these policies are *greedy*: they make the locally optimal choice
without considering future requests.  Yet, **ARC and 2Q achieve near‑optimality** by keeping a *shadow history* of evicted items (ARC’s “ghost lists” or 2Q’s promotion logic).  
This extra bookkeeping captures long‑term locality without explicit frequency counters, reconciling the LRU vs. LFU trade‑off in one lightweight structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
