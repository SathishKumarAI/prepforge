---
qid: ing_bb59574d55__think__local
question: 'Explain: the same state now the diff is — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 442
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:19:04-05:00'
sources: []
---

**Thinking process for explaining OT vs Differential Synchronization**

1. **Clarify scope & assumptions**
   - Assume the audience knows basic collaborative‑editing concepts (multiple users, shared document).
   - Focus on *how* each system reconciles concurrent edits, not on implementation details.

2. **Mental model / framework**
   - Treat each edit as a transformation on a *state vector* (the document).
   - OT: “transform” operations against one another.
   - Differential sync: “diff → patch” approach – compute deltas from a common ancestor.

3. **Step‑by‑step reasoning**
   1. **OT**  
      - When User A sends op a, and User B sends op b concurrently, the server receives both.
      - It *transforms* one operation against the other: `transform(op_a, op_b)` → `op_a'`.
      - Each client applies the transformed ops so all see the same final state.
   2. **Differential sync**  
      - Clients keep a local copy and periodically send a *diff* relative to the last known server snapshot.
      - Server merges diffs by applying them in order, often using conflict‑resolution rules (e.g., “last write wins” or merging).
      - No explicit transformation logic; relies on diff/patch semantics.

4. **Common traps**
   - Mixing up “operations” vs “deltas”; OT operates on ops, differential sync on diffs.
   - Assuming OT guarantees linearizability – it only ensures convergence, not a total order.
   - Overlooking that differential sync can be simpler but may need heavier conflict resolution.

5. **Sanity‑check & communicate**
   - Verify: both methods aim for *eventual consistency* but differ in how they reconcile conflicts.
   - Explain with a concrete example (two users inserting text at the same position) to illustrate the transformation vs diff application.

By following this structure you can clearly convey the conceptual difference while keeping the explanation concise and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
