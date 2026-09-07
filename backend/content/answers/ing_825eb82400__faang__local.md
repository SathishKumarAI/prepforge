---
qid: ing_825eb82400__faang__local
question: 'Explain: and all the histories or the updates — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 512
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:47:57-05:00'
sources: []
---

**Clarify**  
You’re asking about how Google Docs keeps a single document consistent across many editors in real‑time. We need to explain: (1) the data model for version history, (2) how Operational Transformation (OT) or Differential Synchronization (DS) resolves conflicts, and (3) what “updates” look like on the server.

**Approach**  
1. Model the document as a linear sequence of characters with an immutable revision counter.  
2. When a client edits, it emits a *delta* (insert/delete/replace) tagged with its local revision.  
3. The server transforms incoming deltas against all concurrent operations to produce a new global state and broadcasts the transformed delta.

**Depth**  
- **Operational Transformation**: each operation `op` is defined as `(type, position, content, rev)`; the server receives `op_i@rev_i`. For every stored op_j with `rev_j > rev_i`, we compute `transform(op_i, op_j)` to adjust positions. This guarantees convergence (all replicas see the same final state).  
- **Differential Synchronization**: clients periodically send a diff of their current buffer and a *base* hash. The server merges diffs using a three‑way merge (client base ↔ client new ↔ server current), resolving conflicts by priority or user prompts.  
- **History**: every applied operation is stored in a log with its revision, enabling undo/redo and audit trails.

**Edge Cases**  
- Simultaneous insertions at the same index → OT resolves via deterministic ordering (e.g., client ID).  
- Network partitions → clients keep local ops; upon reconnection, they send their diff; server replays missing ops.  
- Large documents → use *patch* streaming to avoid O(N²) diffs.

**Optimize & Communicate**  
- Use a *vector clock* instead of a single counter for better concurrency handling.  
- Compress the operation log (e.g., run‑length encoding).  
- Explain that OT guarantees *convergence*, *intention preservation*, and *causal ordering*.  

This structured explanation shows clear problem framing, algorithmic depth, complexity analysis (`O(k·m)` where `k` is concurrent ops and `m` edits per op), and robustness to edge cases—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
