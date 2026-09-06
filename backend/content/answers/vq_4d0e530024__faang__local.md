---
qid: vq_4d0e530024__faang__local
question: WHAT ARE THE DIFFERENT TYPES OF DATABASE RELATIONSHIPS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 476
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:40-05:00'
sources: []
---

**Clarify**  
The interview asks for the *types of relationships* that can exist between tables in a relational database. I’ll assume we’re talking about cardinality (one‑to‑many, many‑to‑many, etc.) and referential integrity constraints.

---

**Approach**  
1. List each relationship type.  
2. Explain its cardinality and how it’s enforced (foreign keys, junction tables).  
3. Mention any nuances or common pitfalls.

---

**Depth**

| Relationship | Cardinality | Typical Implementation |
|--------------|-------------|------------------------|
| **One‑to‑One (1:1)** | One row in *A* maps to at most one row in *B*, and vice versa. | A foreign key on either table that is also unique, or a shared primary key. |
| **One‑to‑Many (1:N)** | One row in *A* can link to many rows in *B*. | A foreign key in *B* referencing the primary key of *A*. |
| **Many‑to‑Many (M:N)** | Rows in *A* can relate to multiple rows in *B*, and vice versa. | A junction table with composite primary keys (or surrogate PK) holding two FKs. |
| **Self‑Reference** | A table references itself (e.g., employees reporting to managers). | A FK that points back to the same table’s PK. |

*Complexity*: All relationships are O(1) for lookups once indexes exist; joins on many-to-many can be expensive without proper indexing.

---

**Edge Cases**

- **Circular dependencies**: 1:N and self‑reference can create cycles; use deferred constraints or cascade rules carefully.
- **Nullable FKs**: Allowing nulls turns a mandatory relationship into an optional one.
- **Composite keys**: M:N junction tables may need surrogate PKs for performance.

---

**Optimize & Communicate**

I’d highlight that choosing the right cardinality reduces join complexity and improves query performance. I’d also note that modern ORMs often abstract these relationships, but understanding the underlying schema is crucial for database tuning and avoiding anomalies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
