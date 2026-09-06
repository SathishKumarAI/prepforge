---
qid: ing_d5221f6d86__fp__local
question: 'Explain: Uh, if--if you get a key event — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 373
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:36-05:00'
sources: []
---

**Why Google Wave worked the way it did**

At its core, a *wave* is a **distributed, conflict‑free data structure** whose state can be reconstructed from a stream of operations.  
The fundamental problem it solves is *real‑time collaborative editing*: many users simultaneously modify a shared document while each user sees a consistent view without locking or long‑running transactions.

1. **Operational Transformation (OT)** – Each edit is an operation that transforms the document’s state. OT guarantees convergence: if two operations \(O_a\) and \(O_b\) occur concurrently, the transformed versions \(\mathsf{trans}(O_a,O_b)\) and \(\mathsf{trans}(O_b,O_a)\) lead to identical final states.  
2. **Event Sourcing** – Instead of storing snapshots, Wave stores a *log* of operations (events). The current state is the result of replaying this log. This aligns with the principle that probability distributions over histories are more informative than static states.  
3. **Hierarchical JSON model** – Waves are trees of *blips*, each identified by a unique ID and containing nested elements. Operations act on these IDs, enabling fine‑grained concurrency control without global locks.

**Non‑obvious insight:** The wave’s *undo* feature is not an inverse operation but a *replay* of the event log up to a checkpoint. Because OT preserves commutativity, removing past events and replaying from scratch yields exactly the same view that would have been produced by applying “undo” locally. Thus, consistency is achieved through reconstruction rather than mutation, making rollback trivial even in a highly concurrent environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
