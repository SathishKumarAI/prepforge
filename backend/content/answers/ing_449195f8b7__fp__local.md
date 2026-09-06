---
qid: ing_449195f8b7__fp__local
question: 'Explain: Database PACELC ratings — Cap Pacelc Theorems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 580
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:31:49-05:00'
sources: []
---

**PACELC – the “What if everything works?” extension of CAP**

> **P**‑robability (consistency) **A**‑vailability **C**‑partition tolerance  
> **L**atency vs. **E**‑ventual consistency, **C**‑on‑us when *everything* is fine.

---

### 1. The fundamental problem
In a replicated database the system must decide how to route writes and reads when network partitions occur. A partition is inevitable; the trade‑off is between **consistency** (every node sees the same data) and **availability** (the system keeps responding). CAP formalises this: *you can only guarantee two of the three*.

But CAP ignores what happens *when there are no partitions*. In practice, most of the time a distributed store operates normally. The real question then is: **given low latency, should we sacrifice consistency or not?** PACELC answers that by adding an extra clause:

> **P**ACELC = **P**robability + **A**vailability + **C**onsistency  
> **L**atency vs **E**ventual consistency + **C**on‑us when everything is fine.

---

### 2. Why it *must* work that way

- **Optimization principle**: The objective function of a distributed system is often *expected latency* under normal conditions, plus a penalty for inconsistency during partitions. PACELC captures the two regimes (partitioned vs non‑partitioned) as separate terms in this objective.
  
- **Information theory view**: Consistency requires synchronising all replicas; that incurs communication entropy \(H\). Availability demands local reads/writes with zero extra entropy. PACELC essentially trades off *expected* entropy per operation against the cost of waiting for consensus.

---

### 3. One non‑obvious insight

Most people equate “eventual consistency” with *slow* writes, but in many workloads it is actually **faster** because updates can be applied locally and propagated asynchronously. The real bottleneck is not the replication itself but the *coordination* needed for strong consistency (e.g., Paxos). Thus a system that tolerates eventual consistency during partitions may still offer lower latency overall, even if it occasionally serves stale data.

---

In short, PACELC reframes CAP as an optimisation problem: **choose the right balance of consistency and availability in each regime to minimise expected latency while keeping error rates acceptable.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
