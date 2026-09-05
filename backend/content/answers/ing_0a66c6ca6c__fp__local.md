---
qid: ing_0a66c6ca6c__fp__local
question: 'Explain: Cons : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 619
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:27:41-05:00'
sources: []
---

**Cache eviction – the core problem**

A cache stores a limited set of items that are expensive to fetch.  
When it is full we must choose one item to discard so that future requests
are satisfied as often as possible.  This is an online decision‑making
problem: we only know past requests, not the future.

**Why different strategies exist**

1. **FIFO (First In → First Out)** – removes the oldest entry.  
   *Assumption:* age ≈ utility. Simple but ignores access patterns.

2. **LRU (Least Recently Used)** – evicts the item whose last use is farthest
   in the past.  
   *Reasoning:* If an item was used recently, it’s likely to be needed again soon.
   LRU implements a recency‑based priority queue.

3. **LFU (Least Frequently Used)** – discards the least accessed item.  
   *Principle:* frequency correlates with future demand; requires
   counting accesses and aging counts to avoid “stale” popularity.

4. **CLOCK / Second Chance** – a memory‑efficient approximation of LRU.
   Items are tagged with a reference bit that is cleared on eviction,
   giving a second chance if they were used recently.

5. **Random** – selects an entry uniformly at random.  
   *Insight:* In highly dynamic workloads, randomness can outperform
   deterministic heuristics because it avoids pathological patterns.

6. **MRU (Most Recently Used)** – opposite of LRU; useful when the newest
   items are transient (e.g., prefetching).

7. **ARC (Adaptive Replacement Cache)** – blends LRU and LFU by maintaining
   two LRU lists (one for recently used, one for frequently used) and a
   learning mechanism that adjusts their relative sizes based on hit/miss
   feedback.  
   *Deeper principle:* ARC implements an online approximation of the
   optimal offline algorithm (Belady’s MIN) without knowing future requests.

**Non‑obvious insight**

ARC’s success stems from treating *recency* and *frequency* as two orthogonal
dimensions of value rather than a single scalar.  By dynamically shifting
weight between them, ARC adapts to workloads that oscillate between
“cache‑heavy” (many long‑lived items) and “cache‑light” (short bursts),
something pure LRU or LFU cannot do without manual tuning.

In short, each eviction policy is a different heuristic for estimating the
future utility of cached objects; their design reflects fundamental trade‑offs
between simplicity, memory overhead, and adaptability to workload patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
