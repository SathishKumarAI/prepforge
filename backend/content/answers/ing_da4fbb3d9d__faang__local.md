---
qid: ing_da4fbb3d9d__faang__local
question: 'Explain: the same line so it''s a little — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 664
total_tokens: 913
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:26-05:00'
sources: []
---

**Clarify**

> *Question*: “Explain how Operational Transformation (OT) works for real‑time collaborative editing, e.g., Google Docs, and why it’s preferred over naïve synchronization.”  
> **Assumptions to confirm**: we’re focusing on the algorithmic core (conflict resolution), not the networking stack or persistence layer.

---

**Approach**

1. Model each user edit as an *operation* (insert/delete) with a unique timestamp/sequence number.  
2. Maintain a *shared state* and a *history list* of operations applied to it.  
3. When a client sends an operation, transform it against all concurrent ops that the server has not yet seen by that client.  
4. Apply the transformed op locally and broadcast it to others.

---

**Depth**

- **Transformation function `T(op1, op2)`**: returns an adjusted version of `op1` that preserves its intent after `op2`.  
  - *Insert vs Insert*: shift index if second insert precedes first.  
  - *Delete vs Delete*: adjust range; if overlapping, collapse to a single delete.  
  - *Insert vs Delete*: if delete removes text before the insertion point, shift left; if delete covers the insertion point, drop the insert.

- **Operational Flow**:  
  1. Client generates op `o` → sends to server with its last known state vector.  
  2. Server receives `o`, computes `T(o, {all ops newer than client’s vector})`.  
  3. Server applies transformed op to the document, updates history, broadcasts it.  
  4. All clients receive and apply ops in order; because each transformation is *convergent*, all replicas converge to the same state.

- **Complexity**: Each transform is O(1) for simple ops, but overall per‑op cost grows linearly with concurrent operations (`O(k)` where `k` is number of unseen ops). Optimizations like *operation batching* and *buffering* keep k small.

---

**Edge Cases**

| Scenario | Issue | Test |
|----------|-------|------|
| Two users insert at the same index simultaneously | Index conflict | Simulate two inserts; verify final order deterministic. |
| Delete overlapping with an insert that happened later | Lost character | Verify delete correctly skips inserted char if it’s inside deletion range. |
| Network lag → out‑of‑order ops | Transformation against wrong context | Replay ops in different orders; ensure convergence. |

---

**Optimize & Communicate**

- **Optimizations**:  
  - Use *state vectors* to limit transformations only to truly concurrent ops.  
  - Cache transformation results for common patterns (e.g., adjacent inserts).  
  - Persist operations with a global sequence number to aid crash recovery.

- **Narrative**: “OT guarantees that every client’s intent is preserved regardless of the order in which edits arrive, by locally adjusting each operation against concurrent ones. This lets Google Docs deliver instant feedback without waiting for all clients to sync, while still ensuring eventual consistency across millions of users.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
