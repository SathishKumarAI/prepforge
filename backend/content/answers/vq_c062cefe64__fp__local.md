---
qid: vq_c062cefe64__fp__local
question: Which of the following is not correct about the “TABLE” datatype ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 449
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:24-05:00'
sources: []
---

The **TABLE** collection in PL/SQL is a *homogeneous* array of elements that lives entirely inside the PL/SQL engine.  
From an optimization standpoint it is essentially a contiguous block of memory; every element is stored one after another, so access by position (`table(idx)`) is O(1).  Because of this layout Oracle can only expose it to SQL through **pipelined table functions**—the collection itself cannot be the target of a plain `SELECT`.  

In other words:  
- It is *not* a relational type; you cannot declare a column as TABLE or use it in a `FROM` clause.  
- It does not support associative (hash) indexing unless you explicitly declare it as an **INDEX‑BY** table.  
- Its elements must all be of the same datatype, so it cannot hold heterogeneous data.

The non‑obvious insight is that the “TABLE” type is really a lightweight in‑memory array; its inefficiency arises only when you force Oracle to materialise it for SQL, which defeats the purpose of using PL/SQL collections in the first place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
