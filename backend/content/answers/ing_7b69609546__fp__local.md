---
qid: ing_7b69609546__fp__local
question: 'Explain: And later on, they converge again when — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 385
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:27:05-05:00'
sources: []
---

**Why does Google Wave “converge again” after a split?**

At its core, a Wave is a *distributed data structure* whose state is edited by many users simultaneously. The fundamental problem is **consistency under concurrent updates**: if two replicas apply edits in different orders, they may diverge forever unless the system guarantees that all paths lead to the same final value.

Google Wave solves this with **Conflict‑Free Replicated Data Types (CRDTs)**, specifically *Operational Transformation* (OT). OT guarantees that any sequence of operations can be reordered locally and still produce an equivalent result. The key property is *convergence*: after every replica has received all operations, they all hold the same state.

The “converge again” moment occurs when a client, having gone offline or lagging behind, reconnects and receives a backlog of edits that it missed. Each incoming edit is **transformed against** any local changes that have already been applied but not yet acknowledged by the server. Because OT’s transformation functions are mathematically proven to be *convergent* (they satisfy inclusion–exclusion laws), the client’s state will, after applying all transformed operations, match the server’s authoritative state.

A non‑obvious insight: convergence is not a magic “undo” of lost edits; it is an algebraic property of the operation set. Every edit carries enough metadata (site ID, sequence number) to express its causal relationships, allowing the transformation function to decide whether two operations are *independent* or *conflicting*. Thus, even in highly concurrent, partially disconnected environments, Wave’s data model guarantees that all replicas will “converge again” without any central reconciliation step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
