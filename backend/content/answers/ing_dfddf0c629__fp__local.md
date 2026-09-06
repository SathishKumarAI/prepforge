---
qid: ing_dfddf0c629__fp__local
question: 'Explain: Consistency — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 455
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:55:51-05:00'
sources: []
---

### Consistency: the *invariant‑preserving* pillar of ACID

At its core a database transaction is an **optimization problem**: we want to change state so that some objective (e.g., “total balance = sum of individual balances”) holds, while respecting constraints (primary keys, foreign keys, business rules).  
The **consistency property** guarantees that every committed transaction leaves the database in a *valid* state—i.e., all invariants are preserved. Formally, if the system starts in a state \(S_0\) satisfying invariant \(I\), and a transaction \(T\) is applied to produce \(S'\), then \(I(S')\) must hold; otherwise the commit fails.

Why must this be enforced?  
1. **Information integrity**: If invariants could be violated, subsequent queries would return contradictory results, eroding trust in the system.  
2. **Optimistic concurrency**: Modern DBMSs allow many concurrent transactions to proceed without locking every row. Consistency acts as a *global guard*: if any transaction’s intermediate state breaks an invariant, it is rolled back before others see its effects.  
3. **Probabilistic safety**: In probabilistic terms, consistency ensures that the probability distribution over database states remains supported only on valid configurations; otherwise, the system could drift into impossible worlds.

#### Non‑obvious insight
Most people think of consistency as a “check after commit.” In reality it is a *pre‑commit* constraint: the DBMS must **predict** whether applying \(T\) will violate any invariant, even when other concurrent transactions are still in flight. This prediction requires sophisticated dependency tracking (e.g., write–read graphs) and often relies on *constraint propagation*, which is a form of forward‑chaining inference akin to that used in logic programming.

In short, consistency is the algebraic backbone that turns a set of arbitrary updates into a coherent, trustworthy state space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
