---
qid: vq_99846a278b__fp__local
question: WHAT IS THE DIFFERENCE BETWEEN A PRIMARY KEY AND A UNIQUE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 343
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:47:40-05:00'
sources: []
---

**Why a primary key differs from a unique key**

At the heart of relational modeling is *identification*: each row must be distinguishable by some attribute(s).  
A **primary key** is the *chosen* identifier for a table; it carries two obligations:

1. **Uniqueness** – no two rows can share the same value (or tuple) on that column set.  
2. **Non‑nullness** – every row must supply a value, because a missing value would break referential integrity.

A **unique key**, by contrast, is simply an *additional* uniqueness constraint. It guarantees distinctness but does not forbid `NULL`s and can be declared multiple times on the same table.  

The deeper principle is that the primary key becomes the target of foreign keys: it must be a stable, guaranteed reference for other tables. The database engine enforces this by creating an *index* (often clustered) that underpins both constraints, but only the primary key receives the “referential anchor” semantics.

**Non‑obvious insight:**  
If you allow `NULL`s in a unique key, two rows with `NULL` are considered distinct—because SQL’s definition of uniqueness treats `NULL` as unknown. Thus a unique key can be *partially* non‑unique if you rely on `NULL` values, whereas a primary key cannot. This subtlety is why many designers choose a surrogate (e.g., an auto‑increment integer) as the primary key and reserve natural attributes for unique keys.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
