---
qid: vq_8d749fe3db__fp__local
question: WHAT IS A UNIQUE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 337
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:43-05:00'
sources: []
---

A **unique index** is the database’s way of enforcing that a column (or set of columns) never repeats any value.  
Why must this exist? In relational theory, each row represents an atomic record; to refer to it unambiguously we need a *key*. A key is simply a set of attributes whose combination uniquely identifies a tuple. The unique index materialises this key in the storage engine: it builds a B‑tree (or hash) where every leaf entry maps one-to-one with a row’s key values.  

When an insert or update occurs, the engine checks the index tree for an existing key equal to the new value. If found, the operation aborts with a constraint violation; otherwise the new key is inserted into the tree. This guarantees **referential integrity** without having to scan the entire table each time—an \(O(\log n)\) check instead of linear.

The deeper principle is *information theory*: a unique index compresses the row space by ensuring no two rows share the same key, thereby reducing redundancy. It also provides an optimal lookup structure for joins and queries that filter on those columns, because the B‑tree guarantees balanced access paths.

**Non‑obvious insight:** A unique index can be *partial*—it applies only to non‑NULL values. This allows you to enforce uniqueness among real entries while permitting multiple NULLs (since SQL treats NULL as “unknown” rather than a value). It’s a subtle trick that lets designers balance strictness with flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
