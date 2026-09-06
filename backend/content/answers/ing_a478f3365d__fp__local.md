---
qid: ing_a478f3365d__fp__local
question: 'Explain: And this stuff can also be used — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 348
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:06-05:00'
sources: []
---

**Google Wave (2009)** was a real‑time collaborative platform whose “under the hood” design solved a classic optimization problem: **maintain a consistent shared state across many clients with minimal latency and bandwidth, while tolerating network partitions**.

At its core Wave used *Conflict‑Free Replicated Data Types* (CRDTs).  
A CRDT is an algebraic structure that guarantees convergence: if every replica applies the same set of operations in any order, the final state will be identical. This property follows from commutativity and associativity—deep principles from algebra—so the system never needs a central lock or heavy locking protocol.

Wave’s data model (waves → wavelets → blobs) is a *graph* where edges encode dependencies; updates are propagated as small diffs, exploiting **information‑theoretic compression**: only the delta and its causal context travel. Clients perform *optimistic replication*: they apply local edits immediately, then reconcile with the server’s global state via CRDT merges. This yields sub‑100 ms latency even over lossy links.

A non‑obvious insight: by treating **time as a partial order** (via Lamport clocks) rather than a strict sequence, Wave allows parallel editing without “edit wars.” The system’s correctness hinges on the *causal consistency* of CRDTs, not on any ordering of messages—an elegant marriage of geometry (graphs), probability (error resilience), and optimization (minimal synchronization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
