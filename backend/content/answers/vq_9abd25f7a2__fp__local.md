---
qid: vq_9abd25f7a2__fp__local
question: What are the three degrees of normalization and how is normalization done
  in each degree?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 404
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:47:56-05:00'
sources: []
---

**Why normalize at all?**  
In a relational database every row is a *record* that encodes information about real‑world entities. When the same piece of data appears in several columns, updates must be repeated in many places—an explosion of **redundancy** and an attack vector for anomalies (insertion, deletion, update). The goal of normalization is to reorganize the schema so that each *atomic* fact is stored once, while still allowing efficient queries.  

| Degree | Core idea | How it’s enforced |
|--------|-----------|------------------|
| **1NF** | Every attribute is indivisible (no sets or lists) and a primary key uniquely identifies rows. | Strip multi‑valued columns; create surrogate keys if necessary. |
| **2NF** | In 1NF, every non‑key attribute depends *fully* on the whole primary key (no partial dependency). | Decompose tables where a composite key exists: move attributes that depend only on part of the key into separate tables linked by that part of the key. |
| **3NF** | No transitive dependencies among non‑key attributes (every non‑key depends only on the key, not via another non‑key). | Identify chains like `A → B → C` and split so that `B` becomes a key in its own table; join through foreign keys. |

**Non‑obvious insight:**  
Normalization is *not* merely about eliminating duplicates—it’s about enforcing a *dependency hierarchy*. Each normal form guarantees that the dependency graph of attributes is acyclic, turning the relational model into a set of independent “facts” linked by well‑defined keys. This structure is what allows algebraic query optimizers to safely reorder joins and push predicates without altering semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
