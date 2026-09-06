---
qid: ing_ee43d30782__fp__local
question: 'Explain: Data Integrity and Consistency — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 389
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:25:37-05:00'
sources: []
---

### Why a database must obey *ACID*

In a distributed system every transaction is a bundle of **state changes** that an application wants applied atomically: either all its updates survive or none do.  
If this promise fails, the data can drift into impossible configurations (e.g., money disappears).  
Thus we formulate four guarantees:

| Property | Fundamental principle | What it prevents |
|----------|-----------------------|------------------|
| **Atomicity** | *Zero‑one law* of discrete events | Partial updates that leave the database in an intermediate, inconsistent state. |
| **Consistency** | *Constraint satisfaction*: every transaction must map a valid state to another valid state | Violating domain rules (foreign keys, checks) or invariants. |
| **Isolation** | *Conflicting operations are serializable* (order‑independence of concurrent actions) | Lost updates, dirty reads, phantom reads that would otherwise break consistency. |
| **Durability** | *Write‑ahead logging + crash‑consistency*: once a commit is acknowledged, its effect survives failures | Data loss after crashes or power cuts. |

These properties are not arbitrary; they encode the information‑theoretic requirement that a database’s observable state be a *deterministic* function of the sequence of committed transactions, regardless of interleaving or system faults.

#### Non‑obvious insight  
Most people think **Isolation** is only about “no dirty reads.” In reality, isolation is what guarantees that the *set* of possible end states remains the same as if all transactions had executed serially. Even a single lost update (a phantom) can collapse a global invariant. Thus, proper transaction scheduling or multiversion concurrency control is essential for preserving *global* consistency, not just local atomicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
