---
qid: ing_18d54be639__fp__local
question: 'Explain: Atomicity — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 420
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:46-05:00'
sources: []
---

**Atomicity in Cloud Spanner – a first‑principles view**

At its core, a database is an *information store* that must keep data consistent across many replicas so that every client sees the same world.  
The *fundamental problem* is: when a transaction touches several keys, how can we guarantee that either **all** updates become visible or **none** do? If we allowed partial commits, replicas would diverge and queries could return contradictory answers.

Cloud Spanner solves this with **2‑phase commit (2PC)** over its globally‑synchronized clocks.  
1. The transaction’s *prepare* phase collects locks on all keys, records a *commit timestamp* derived from TrueTime, and writes a *pre‑image* to each replica’s log.  
2. The *commit* phase publishes the same timestamp to every replica. Because all replicas agree on that single logical instant, they can apply the update atomically: either the commit record is visible at that time everywhere or it never appears.

Why must the timestamp be globally agreed?  
- **Causality**: if two transactions touch the same key, the one with the later commit timestamp must see the earlier one’s effect.  
- **Linearizability**: clients observe a total order of commits that respects real‑time ordering within ±ε bounds.

A non‑obvious insight is that Spanner’s *atomicity* hinges on **synchronizing time rather than locking state**. By anchoring all commits to the same logical clock, it sidesteps the classic “locking deadlock” problem and allows replicas to apply changes in lock‑free, parallel fashion while still guaranteeing isolation.

Thus, atomicity in Spanner is not just a safety net—it’s an elegant exploitation of globally synchronized time to turn a distributed consistency nightmare into a clean, deterministic update protocol.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
