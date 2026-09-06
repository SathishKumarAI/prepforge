---
qid: ing_a7c87fb484__fp__local
question: 'Explain: so we let''s from 0 1 so — Google Docs System design | Part 1|
  Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 468
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:06-05:00'
sources: []
---

**Operational Transformation (OT) vs. Differential Synchronization**

*Fundamental problem:*  
Multiple users edit the same text concurrently. Each user’s local edits must be merged with others’ without losing intent or corrupting the document.

### Why OT works

1. **Transformation function** – For any two concurrent operations *a* and *b*, OT defines a transformation `T(a,b)` that rewrites *a* as if *b* had already been applied.  
2. **Convergence property** – If all clients apply the same set of transformed operations, they reach identical states.  
3. **Causality preservation** – Operations are ordered by timestamps; causally dependent ops never conflict.

*Why this is necessary:* Without transforming, two inserts at the same index would overwrite each other. OT guarantees that every operation’s effect is preserved relative to all others, a direct application of *commutativity in a partially ordered set* (the DAG of edits).

### Differential Synchronization

1. **State diffs** – Each client periodically sends its entire document state (or a delta) to the server.  
2. **Merge by hashing** – The server computes a diff against the latest canonical state and applies it if no conflict; otherwise, it resolves by merging linearly or using last‑write‑wins.

*Why this is simpler:* It avoids per‑operation transformation logic but requires larger payloads and can suffer from “lost updates” in high‑latency scenarios. It relies on *stateless reconciliation*, essentially a brute‑force application of the principle that “the most recent state dominates”.

### Non‑obvious insight

Both schemes ultimately implement **a form of conflict‑free replicated data type (CRDT)**: OT enforces commutativity by transforming operations; differential sync achieves it by always converging to the same canonical state. The deeper principle is *information consistency*: regardless of operation ordering, the system preserves the same set of edits—exactly what a CRDT guarantees. Thus, OT and diff‑sync are two operationalizations of the same mathematical guarantee: **commutative, associative merging of changes**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
