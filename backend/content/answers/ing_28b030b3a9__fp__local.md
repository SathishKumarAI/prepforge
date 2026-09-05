---
qid: ing_28b030b3a9__fp__local
question: 'Explain: override and delete one at position in — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 460
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:42-05:00'
sources: []
---

**Operational Transformation (OT) in real‑time Google Docs**

*Problem*: Multiple users edit the same text simultaneously. If two operations (e.g., insert “a” at position 5 and delete character at position 7) are applied in different orders, the final document diverges. We need a rule that guarantees *convergence*—every replica ends up with identical content regardless of network delays.

*Derivation*:  
1. **State & Operation**: Represent the document as a linear sequence \(S\). An operation \(op = (type, pos, payload)\) mutates \(S\).  
2. **Transformation Function \(T(op_i, op_j)\)**: Adjusts \(op_i\) to be applied after \(op_j\).  
   - If both are inserts at the same position, tie‑break by user ID or timestamp.  
   - If one is a delete and the other an insert at the same index, the delete must shift past the inserted character.  
   - General rule: any operation that *shifts* indices (inserts/deletes before \(pos\)) updates its own \(pos\) accordingly.

3. **Correctness**: Show by induction that for any pair of operations \(o_i, o_j\), applying \(\{o_i, T(o_j,o_i)\}\) yields the same state as \(\{T(o_i,o_j), o_j\}\). Thus all replicas, after transforming against every concurrent operation, converge.

*Non‑obvious insight*: OT is essentially a *group action* on the set of operations. The transformation function defines a **cocycle** that guarantees associativity up to commutation. This hidden algebraic structure explains why seemingly ad hoc rules (like “shift deletes past inserts”) work universally: they are manifestations of the same underlying group law.

In Google Docs, each client sends its local operation to the server; the server rebroadcasts transformed operations so every client applies them in a consistent order, achieving real‑time collaborative editing without locking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
