---
qid: ing_e1c98ac6f4__fp__local
question: 'Explain: Isolation — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 322
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:59:58-05:00'
sources: []
---

**Isolation in Cloud Spanner**

At its core, a database must keep *transactions* independent: the effect of one transaction should not leak into another until it commits.  
Without this, two writers could interleave reads and writes, producing “dirty” or “non‑repeatable” results that break application logic.

Cloud Spanner achieves isolation by enforcing **serializability** on a globally‑synchronized timeline.  
1. Every write is timestamped with a *commit timestamp* derived from the consensus layer (Paxos).  
2. A transaction’s read set is frozen at its own *start timestamp*. Reads see the latest committed snapshot that is ≤ this start time, guaranteeing **snapshot isolation**.  
3. During commit, Spanner checks whether any keys in the write set were modified after the transaction’s start timestamp. If so, it aborts; otherwise, the new values receive a later commit timestamp.

This mechanism is essentially *optimistic concurrency control* on a globally ordered timeline, and its correctness follows from **Lamport’s happened‑before** relation: all committed writes form a total order, and every transaction’s view respects that order.  

A non‑obvious insight: Spanner’s use of *commit timestamps* as logical clocks means a single read can be replayed at any later time without re‑executing the transaction—enabling efficient point‑in‑time queries and backups while preserving isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
