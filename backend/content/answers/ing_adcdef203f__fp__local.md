---
qid: ing_adcdef203f__fp__local
question: 'Explain: Master-eligible nodes should have at least 1GB of heap per 3000
  indices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 490
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:14:07-05:00'
sources: []
---

In a distributed search cluster each master‑eligible node must keep the *global* view of all shards while still being able to service queries that touch those shards.  
The rule “at least 1 GB heap per 3 000 indices” comes from a simple memory‑budget equation:

```
heap ≈ (metadata per index) × (#indices) + (shared overhead)
```

* **Metadata**: for every index the master stores routing tables, shard allocations, and cluster state snapshots. A typical Lucene‑based metadata block is ~ 200 kB.  
* **Shared overhead**: the JVM itself, thread stacks, and cached buffers add a fixed cost (~ 100 MB).

Setting 1 GB for every 3 000 indices gives

```
200 kB × 3 000 ≈ 600 MB
+ 400 MB shared ≈ 1 GB
```

This leaves a safety margin for spikes (e.g., cluster‑state updates, node failures).  

**Why it must work this way:**  
If the heap is too small, GC pauses will occur while the master rebuilds its state after every shard relocation. The system then stalls, violating the *single‑source‑of‑truth* property that guarantees consistent routing.

**Deeper principle:** This balances **information density** (how much metadata you can pack) against **temporal locality** of cluster changes—an optimization problem where the cost function is GC latency versus heap size.

**Non‑obvious insight:** The 3 000‑index threshold is not arbitrary; it stems from the *shard‑count* limit that keeps the master’s routing table linear in the number of indices. Exceeding this inflates the master’s lookup tables, causing exponential growth in GC time even if raw heap size remains constant.

Thus, 1 GB per 3 000 indices is a pragmatic, data‑driven bound that ensures masters remain responsive while managing the combinatorial complexity of large clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
