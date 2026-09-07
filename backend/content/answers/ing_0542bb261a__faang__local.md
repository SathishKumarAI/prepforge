---
qid: ing_0542bb261a__faang__local
question: 'Explain: Interval Merging and Processing — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 455
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:56:39-05:00'
sources: []
---

**Clarify**

You’re asked to design a system that receives many time‑interval requests (e.g., booking slots, sensor windows) and must quickly determine whether a new interval overlaps any existing one.  
Assumptions: intervals are half‑open `[start, end)`, all timestamps fit in 64‑bit ints, writes/reads are concurrent, high throughput is required.

**Approach**

1. **Data structure** – an *interval tree* (augmented BST or segment tree).  
2. **Operations**  
   - `insert(start,end)` → split existing nodes if necessary and update max‑end values.  
   - `query(start,end)` → traverse tree using the max‑end heuristic to prune subtrees that cannot overlap.  
3. **Concurrency** – use fine‑grained locks or lock‑free techniques (e.g., compare‑and‑swap on node pointers) so reads are wait‑free.

**Depth**

- **Insert**: O(log n) average, O(n) worst if many splits; maintain balance via AVL/Red‑Black.  
- **Query**: O(log n + k), where *k* is number of overlapping intervals returned.  
- The tree stores `maxEnd` at each node to skip entire subtrees that start after the query’s end.

**Edge Cases**

- Adjacent intervals (`end == start`) should not be considered overlapping.  
- Extremely long intervals (covering all time) cause imbalance; handle by capping depth or using a separate “global” flag.  
- Time skew between clocks: normalise timestamps before insertion.

**Optimize & Communicate**

- Persist the tree in a B‑Tree on disk for fault tolerance, backing it with an LRU cache of hot nodes to reduce I/O.  
- Batch inserts/queries via bulk‑load or micro‑transactions to amortize lock overhead.  
- Profile hit‑rate; if reads dominate, consider a read‑optimized structure like an interval skip list.

Explain that the chosen design gives logarithmic performance for both operations while supporting high concurrency and easy scaling across machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
