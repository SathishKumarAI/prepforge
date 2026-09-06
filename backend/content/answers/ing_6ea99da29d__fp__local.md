---
qid: ing_6ea99da29d__fp__local
question: 'Explain: do a cycle test a cycle test — \"Testing Distributed Systems w/
  Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 356
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:59:54-05:00'
sources: []
---

### Why a **cycle test** is essential for deterministic simulation

Distributed systems expose *partial observability*: each node only sees its own state and messages it receives. To reason about the whole system we must reconstruct a global trace that respects causality. A cycle test guarantees that such a reconstruction exists by checking whether the local histories can be arranged into a directed acyclic graph (DAG) of events.

#### From first principles

1. **Causality as partial order** – every event has a “happened‑before” relation; cycles would imply contradictory ordering (A before B and B before A).  
2. **Determinism** – if the simulation is deterministic, any two executions with identical initial state and message histories must produce the same global trace.  
3. **Observability** – nodes only report their local event streams; we must infer a global order from these streams.

The cycle test takes each node’s stream, builds edges for “sent‑before‑received” pairs, and then checks if the resulting graph contains a directed cycle. If it does, no consistent global ordering exists, so the simulation cannot be deterministic.

#### Non‑obvious insight

Most people think cycles are *rare* in well‑designed protocols, but **message reordering** (e.g., out‑of‑order delivery) can create *spurious* cycles that only vanish after a careful *topological sort*. Thus, the cycle test is not just a sanity check; it forces protocol designers to model message ordering explicitly and to understand how local nondeterminism propagates globally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
