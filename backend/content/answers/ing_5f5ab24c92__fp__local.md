---
qid: ing_5f5ab24c92__fp__local
question: 'Explain: Example: Orchestration-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 379
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:28:06-05:00'
sources: []
---

**Why a Saga?**

Distributed systems must preserve *consistency* even when some services fail.  
If we naïvely split an operation into micro‑steps and commit each one
immediately, a failure after the second step leaves the system in a
partially‑updated state that can never be reconciled without external
cleanup.  The saga principle says: *perform all steps; if any fails,
undo the ones already done*.  

**From first principles**

1. **Optimization of resources** – Each step is an atomic transaction on its own service; we avoid holding global locks, keeping latency low and throughput high.  
2. **Information‑theoretic balance** – We trade off a *small* amount of extra data (a log of completed steps) for the ability to reconstruct the exact rollback path.  
3. **Geometry of state space** – The system’s possible states form a DAG; a saga traces a directed path and guarantees that every node has an inverse edge, so we can always return to the root.

**Orchestration‑based saga**

A central orchestrator sends commands (step 1 → step 2 → …).  
If any command fails, it emits compensating actions in reverse order.  
The orchestrator knows *exactly* which steps succeeded, so it can
replay only those compensations, avoiding unnecessary work.

**Non‑obvious insight**

Compensating actions are **not** mere “undo” operations; they must be
idempotent and safe to run multiple times.  This subtlety turns a saga
from a brittle rollback scheme into a robust *eventually consistent*
protocol that can survive arbitrary failures without sacrificing the
principle of minimal coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
