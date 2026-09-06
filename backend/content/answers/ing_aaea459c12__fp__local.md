---
qid: ing_aaea459c12__fp__local
question: 'Explain: FIFO (First In First Out) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 544
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:57-05:00'
sources: []
---

**The fundamental problem:**  
A cache can hold only *k* items while the working set of a program may be arbitrarily large. When a new item arrives and the cache is full we must decide which resident to evict so that future accesses are minimized. The decision is local, yet it must reflect global access patterns—an optimization over all possible eviction sequences.

**Why FIFO works (and why it often fails):**  
FIFO treats every item equally: the oldest entry is removed first. It assumes *time locality*—that recent items will be reused before older ones. This holds only if the workload has a clear “clock” of usage; otherwise, an item that was just used can still be evicted immediately, leading to thrashing.

**Other strategies and their geometric intuition:**

| Strategy | Core principle | Typical use‑case |
|----------|----------------|------------------|
| **LRU (Least Recently Used)** | Keeps the “most recent” axis; items form a stack sorted by last access. | Workloads with strong temporal locality. |
| **MRU (Most Recently Used)** | The opposite of LRU; useful when hot data is short‑lived. | Page replacement in OSes that favor cold pages. |
| **LFU (Least Frequently Used)** | Counts accesses—items lie on a frequency axis. | Workloads where popularity stabilizes over time. |
| **ARC (Adaptive Replacement Cache)** | Dynamically balances LRU and LFU via two windows. | General‑purpose caches needing robustness. |
| **CAR (Clock with Adaptive Replacement)** | A lightweight ARC variant using the “clock” algorithm. | Memory‑constrained systems. |
| **NRU (Not Recently Used)** | Marks pages as modified or accessed; evicts based on 4 classes. | Operating‑system page replacement with write‑back caches. |
| **Random** | Picks an entry uniformly at random. | Baseline, useful when eviction cost dominates. |

**Non‑obvious insight:**  
All these strategies are *online approximations* of the offline optimal algorithm (Belady’s MIN). The key is that the eviction decision must be made without knowledge of future requests; hence each strategy embeds a heuristic proxy for “future usefulness” (recency, frequency, or both). Understanding this trade‑off reveals why no single policy dominates: the underlying workload geometry dictates which axis—time or popularity—is more informative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
