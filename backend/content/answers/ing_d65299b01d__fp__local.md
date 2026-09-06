---
qid: ing_d65299b01d__fp__local
question: 'Explain: Eventual consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 316
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:48-05:00'
sources: []
---

**Eventual consistency – why it’s the only sane choice for a distributed write‑heavy service**

A large‑scale system must let many nodes accept writes concurrently and still guarantee *global* correctness.  
The fundamental problem is that any two replicas cannot both be perfectly up‑to‑date without incurring an unbounded coordination cost (e.g., waiting for every node to acknowledge). This cost grows linearly with the number of replicas, violating availability and latency guarantees.

Eventual consistency resolves this by relaxing *immediate* correctness: each write is applied locally, then asynchronously propagated. The key insight is that *information flows in one direction*—from a new value toward all replicas—so every replica’s state can be described as a **join‑semilattice** of updates. By using commutative, associative, and idempotent merge functions (CRDTs or vector clocks), the system guarantees that any two diverging states will converge to a common superset when all updates have been delivered.

Thus, eventual consistency is not an arbitrary compromise; it is the only strategy that preserves *availability* while still ensuring *global convergence* under the CAP theorem.  

**Non‑obvious insight:** The *order* in which updates arrive does not matter as long as the merge operation is idempotent. This means you can safely drop duplicate messages or replay them without risking corruption—an advantage that many systems miss and therefore implement more complex, fragile protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
