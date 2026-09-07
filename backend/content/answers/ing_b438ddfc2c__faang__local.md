---
qid: ing_b438ddfc2c__faang__local
question: 'Explain: it''s not possible at all now I — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 444
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:43:02-05:00'
sources: []
---

**Clarify**  
The interview asks why *Google Docs* cannot be built using a simple operational‑transform (OT) approach that also supports differential synchronization. We need to confirm the assumptions:  
1. OT must converge for all replicas.  
2. Differential sync relies on sending only changes between two versions.  
3. The system must support real‑time collaboration, offline edits, and conflict resolution.

**Approach**  
Explain the theoretical limits of OT + diff sync, then illustrate with a concrete scenario that breaks convergence or consistency.

**Depth**  
OT works by transforming concurrent operations into an equivalent sequence, guaranteeing convergence. Differential sync compresses deltas between two *known* states. The problem is that in a highly concurrent environment the delta can become ambiguous: two users edit overlapping regions simultaneously, producing non‑commutative operations. OT would need to transform each operation against every other, which becomes O(n²). Differential sync cannot capture this because it only sends the final delta; the receiver has no knowledge of intermediate conflicts. Consequently, a replica may apply a delta that was generated under a different ordering, violating convergence and leading to divergent documents.

**Edge Cases**  
- Simultaneous insert/delete at the same index.  
- Offline edits merging after many concurrent changes.  
- Large-scale collaboration where n is huge; quadratic transforms become infeasible.  
Testing would involve generating random edit streams with overlapping operations and verifying convergence across replicas.

**Optimize & Communicate**  
A practical solution replaces pure OT + diff sync with a hybrid model: use *CRDTs* (Conflict‑Free Replicated Data Types) that inherently converge, while differential sync is employed only for non‑conflicting “shallow” edits. Communicate this by framing the trade‑off: OT guarantees convergence but scales poorly; CRDTs provide linear merge cost at the expense of larger per‑replica state. In a production system like Google Docs, we use CRDT‑style operational logs combined with efficient diff compression to achieve both real‑time collaboration and offline support.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
