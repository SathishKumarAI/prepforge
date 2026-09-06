---
qid: ing_6955c49125__fp__local
question: How to update the distributed counter? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 445
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:48:14-05:00'
sources: []
---

**Why a distributed counter needs a special update protocol**

A counter is *stateful* but its value is **idempotent**: applying the same increment twice must not double‑count. In a single node this is trivial, but in a distributed system we face *concurrency*, *partial failures*, and *network partitions*. The fundamental problem is to guarantee that every increment eventually reaches *every* replica while avoiding duplicate application.

---

### 1. Conflict‑free Replicated Data Type (CRDT)

The counter must be a **CRDT**: its merge operation (`⊔`) must be associative, commutative, and idempotent.  
For an additive counter:

```text
replica_i.counter = ⟨id_i, local_inc⟩
global_counter = Σ local_inc
```

Each replica tags increments with a unique identifier (e.g., node‑ID + sequence number). When two replicas merge, they union the sets of identifiers; duplicates automatically cancel because set membership is idempotent.

---

### 2. Update Flow

1. **Local increment** – Increment `local_inc` and generate an ID (`node_id:seq`).  
2. **Persist locally** – Write to local log (ensures durability).  
3. **Propagate asynchronously** – Gossip or stream the new entry to peers.  
4. **Merge on receipt** – Add the incoming identifier to the local set; recompute `global_counter`.

Because each increment is unique, re‑synchronizing after a partition simply unions the sets—no double counting.

---

### 3. Non‑obvious Insight

*The counter’s correctness hinges not on network latency but on **identifier uniqueness**.* Even if updates arrive out of order or are replayed (e.g., due to retries), the set union guarantees that each logical increment is counted once. Thus, we can relax consistency guarantees (CAP‑theorem) while preserving exact counts—an elegant trade‑off between availability and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
