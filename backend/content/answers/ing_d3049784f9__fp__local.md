---
qid: ing_d3049784f9__fp__local
question: 'Explain: Um, so what you--what you do is — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 385
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:41-05:00'
sources: []
---

**Google Wave (2009) – why it works**

The core problem Wave solves is *real‑time, multi‑user editing* over an unreliable network while keeping the document logically consistent for all participants.  
A naïve approach would lock the whole document or rely on a central server that serialises edits; this breaks latency and fails when the server goes down.  

Wave adopts **Operational Transformation (OT)**: each client locally applies its own edit as an *operation* (insert, delete, style change) and sends it to peers. OT guarantees that if two operations are applied in different orders, a transformation function rewrites one operation so both clients reach the same final state.  
Formally, for operations A, B we require `apply(A, apply(B, D)) = apply(trans(A,B), apply(trans(B,A), D))` for any document D. This identity is derived from *confluence* in rewriting systems and ensures **eventual consistency**.

The system also uses a lightweight *diff‑merge* protocol to compress operations, and a **peer‑to‑peer overlay** so that when the central server fails clients can still exchange updates.

**Non‑obvious insight:**  
OT’s correctness hinges on *commutativity of independent edits*, not merely on serialisation. In practice this means that two users editing disjoint parts never need to coordinate, yielding near‑zero latency. The trick is that each client records a **context vector** (a Lamport clock per user) so it can determine which operations are “already seen” and skip redundant transformations—this subtle optimisation turns a theoretically sound algorithm into a production‑ready system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
