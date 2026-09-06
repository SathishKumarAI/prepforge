---
qid: ing_71ad1d8672__fp__local
question: 'Explain: a user has modified the client copy — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 486
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:06:02-05:00'
sources: []
---

**Operational Transformation (OT) vs Differential Synchronization**

*Fundamental problem*: Multiple users edit a shared document simultaneously, each with a local copy that may diverge from the server’s master due to latency or offline work. The system must reconcile all edits into a single, consistent state without sacrificing responsiveness.

### Why OT works

1. **Local autonomy**: Each client applies edits instantly to its own buffer (optimistic UI).
2. **Transformation rule**: When an edit `E₁` arrives at the server after another concurrent edit `E₂`, the server transforms `E₁` against `E₂` (`T(E₁, E₂)`) so that applying `T(E₁, E₂)` to the state *after* `E₂` yields the same result as applying `E₁` before `E₂`.  
   This is an **invertible, commutative** operation—essentially a group action on document states.
3. **Convergence guarantees**: Because transformation preserves intent and is consistent across all clients, every replica eventually converges to the same final state.

### Differential synchronization (DiffSync)

1. **State diffing**: Each client periodically sends *diffs* of its entire buffer relative to a known base revision.
2. **Merge by conflict resolution**: The server merges diffs using a simple “last-writer wins” or custom merge function, then pushes the merged state back to clients.
3. **Simplicity vs overhead**: DiffSync is easier to implement but sends larger payloads (full diff of potentially large documents) and may produce more conflicts in high‑conflict scenarios.

### Non‑obvious insight

Both OT and DiffSync are instances of *commutative replicated data types* (CRDTs) under the hood. The key difference is **where** commutativity is enforced: OT enforces it at the *operation level*, while DiffSync enforces it at the *state level*. This subtle shift means OT can handle fine‑grained concurrent edits with minimal conflict, whereas DiffSync trades bandwidth for a simpler merge model—an insight that guides design choice based on network constraints and edit patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
