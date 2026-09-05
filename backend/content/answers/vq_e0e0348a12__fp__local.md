---
qid: vq_e0e0348a12__fp__local
question: WHAT ARE PRIMARY AND FOREIGN KEYS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 316
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:52-05:00'
sources: []
---

**Primary vs. foreign keys – a geometric view of relational consistency**

A table is a *set of tuples* in a Cartesian product of attribute domains.  
The **primary key** is the minimal subset of attributes that uniquely identifies every tuple; it’s the *projection* that collapses the set into distinct points, ensuring injectivity.  Without this map, two rows could be indistinguishable, breaking referential integrity.

A **foreign key** is a constraint that enforces *image inclusion*: the projection of one table’s rows onto its foreign‑key attributes must lie within the image of the primary‑key projection of another table.  In other words, every point in the “source” space must map to an existing point in the “target” space.

Why must they behave this way?  
* **Optimization** – indexing a primary key gives O(log n) lookup; foreign keys rely on those indices for join efficiency.  
* **Information theory** – the primary key carries maximal entropy (no duplicates), while the foreign key carries *conditional* information: given the target’s state, it predicts the source’s reference.

A non‑obvious insight: a composite primary key that includes a timestamp can enforce *temporal uniqueness*, turning the table into a versioned entity.  This lets you reconstruct historical states without separate audit tables, simply by treating time as part of the identity geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
