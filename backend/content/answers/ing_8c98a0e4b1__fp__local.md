---
qid: ing_8c98a0e4b1__fp__local
question: 'Explain: a bug in our database doing this — \"Testing Distributed Systems
  w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 403
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:00-05:00'
sources: []
---

**Why the “deterministic simulation” is fragile**

In a distributed simulator every event (message send, timer expiry) must be replayed in *exact* order for reproducibility.  
The bug shows up when the database layer injects *non‑deterministic* timestamps or auto‑increment keys that change between runs.  

1. **Fundamental problem** – The simulator’s state is a pure function of the input trace and the deterministic scheduler. If the DB writes a fresh row id (e.g., `AUTO_INCREMENT`) or a system clock value, two executions diverge even though all other inputs are identical.

2. **Why it must be deterministic** – Reproducibility is a *confluence* property: any two execution paths that start from the same state and process the same events must end in the same final state.  
   A database side‑effect breaks confluence because the DB’s internal clock or key generator is an external source of entropy.

3. **Deeper principle** – This is a classic *information‑leak* problem: the simulator leaks information about its environment (the DB’s current counter) into the model, violating the Markov property that all relevant state must be explicitly represented in the simulation state.

4. **Non‑obvious insight** – The fix isn’t just “make the DB read‑only.” It is to *materialise* the deterministic values inside the simulator: generate a pseudo‑random but repeatable key (e.g., hash of the event sequence) and store it locally, or use an in‑memory key generator that seeds from a fixed seed.  
   That keeps the DB truly deterministic while preserving the illusion of persistence.

In short, the bug arises because the database injects hidden state; solving it requires moving that state into the simulator’s explicit, repeatable domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
