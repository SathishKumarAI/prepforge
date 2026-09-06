---
qid: ing_afaa621279__fp__local
question: 'Explain: Consistency — Acid Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 484
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:17:52-05:00'
sources: []
---

### Consistency – the “single‑view” guarantee of ACID

**Fundamental problem**  
When many processes write to a shared dataset simultaneously, the system must avoid producing an intermediate state that violates business rules (e.g., double‑spending). Each transaction is a *sequential* program fragment; the challenge is to make concurrent executions look as if they happened one after another.

**Why serializability works**  
The only way to guarantee that every read sees a “consistent” snapshot is to enforce **serializability**: treat all transactions as if they were ordered in some sequence and executed without overlap. Formally, let \(T_1,T_2,\dots,T_n\) be the set of active transactions. If there exists a permutation \(\pi\) such that executing \(T_{\pi(1)}\), then \(T_{\pi(2)}\), … yields the same final state as the concurrent run, we call it *serializable*. This property is necessary and sufficient for consistency: any violation would expose an intermediate, possibly invalid state to a reader.

**Connection to deeper principles**  
Serializability is a manifestation of *information‑theoretic isolation*: each transaction’s view must be a deterministic function of its own operations and the committed history. It also reflects *geometric convexity*—the set of all legal database states forms a convex polytope; serializable schedules stay within this polytope, while non‑serial schedules may wander outside.

**Non‑obvious insight**  
Most people think consistency merely means “no corruption.” In fact, **consistency is the guarantee that every transaction observes a *legal* snapshot**, not just any snapshot. Even if two concurrent writes never conflict on keys, an intermediate state can still be illegal if it temporarily violates referential integrity or business invariants. Thus, consistency demands more than atomicity; it requires that the *entire* state space reachable by the system remains within a pre‑defined safe region at all times. This subtle requirement is what drives sophisticated locking and multiversion techniques in modern databases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
