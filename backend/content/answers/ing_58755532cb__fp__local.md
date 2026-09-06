---
qid: ing_58755532cb__fp__local
question: 'Explain: So we want to be able to — Google I/O 2009 - Google Wave: Under
  the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 514
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:12:15-05:00'
sources: []
---

**Why Google Wave needed a new engine**

When users type in a document simultaneously, their edits must merge without loss or conflict.  
The naive solution—send every keystroke to a central server and lock the whole file—is O(N) latency and a single point of failure.  
Instead we want *any* pair of concurrent edits to be composable locally and then reconciled globally.

**Local Operational Transformation (OT)**

1. **Model**: Every edit is an *operation* \(o\) that transforms a state \(S\) into \(S' = o(S)\).  
2. **Convergence condition**: For any two concurrent operations \(a,b\), there exists a transformation function \(T\) such that  
   \[
   a(T(a,b)) \;=\; b(T(b,a))
   \]
   This guarantees all replicas reach the same final state regardless of network order.

3. **Derivation**: Suppose users A and B both edit at position 5, inserting “x” and “y”.  
   - If we naively apply A then B, the document becomes “…xy…”.  
   - Transforming \(b\) against \(a\) shifts its index to 6; applying \(b(T(b,a))\) yields “…yx…”.  
   The transformation function is *local*, computed on each client, so latency stays constant.

**Why OT works**

OT leverages the *commutativity* of independent edits: operations that affect disjoint ranges commute. By explicitly transforming dependent ops, we restore commutativity. This is an instance of **deferred conflict resolution**, a core idea in distributed systems: resolve conflicts only when merging, not during local editing.

**Non‑obvious insight**

OT’s correctness hinges on *invertibility*: each operation must be reversible. That allows the server to replay operations from any point and recover lost updates. Many “conflict‑free replicated data types” (CRDTs) ignore invertibility for simplicity, but Google Wave chose OT precisely because it guarantees lossless undo/redo—a critical feature for collaborative editing.

In short, Google Wave’s under‑the‑hood design is a carefully engineered OT engine that lets users feel instant, seamless collaboration while guaranteeing eventual consistency across thousands of replicas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
