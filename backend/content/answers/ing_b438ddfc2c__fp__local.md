---
qid: ing_b438ddfc2c__fp__local
question: 'Explain: it''s not possible at all now I — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 357
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:27:16-05:00'
sources: []
---

**Why “Google‑Docs‑style” collaboration can’t be built on a simple diff‑sync engine**

At the heart of a live editor is *concurrency control*: many users generate edits that must all appear in every copy of the document, regardless of network delays or failures.  
An operational transformation (OT) system solves this by treating each edit as an **operation** and applying a **transform function** that reorders operations so they become commutative. The transform guarantees *convergence* (all replicas end up identical) while preserving user intent.

A naive differential‑sync approach, on the other hand, merely exchanges whole document deltas or patches. When two users edit overlapping ranges simultaneously, a patch from one client may **overwrite** the other's changes, because the system has no notion of *intent*. The only way to avoid this is to lock the entire document, which destroys responsiveness.

The deeper principle at play is **causal consistency**: every replica must respect the partial order of causally related operations. OT enforces this by explicitly propagating and transforming each operation; diff‑sync cannot because it discards that causal information. Thus, without OT (or a similarly principled algorithm like CRDTs), a truly real‑time collaborative editor is impossible.

**Non‑obvious insight:** Even if you store *full* snapshots at every tick, the problem remains: you still need to decide which snapshot wins when conflicts arise. The only way to make that decision without sacrificing intent is to transform operations, not merely compare snapshots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
