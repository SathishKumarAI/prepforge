---
qid: vq_793bdd839b__fp__local
question: WHAT IS A COMPOSITE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 366
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:00-05:00'
sources: []
---

A **composite key** is a set of two or more columns that together enforce uniqueness for each row in a table.  
Why must we combine attributes? In many real‑world entities the natural identifier is not a single field: a *student* is uniquely identified by the pair *(school_id, student_number)* because the same number may appear in different schools. Formally, a key \(K\) is a minimal set of columns such that for any two distinct rows \(r_1, r_2\),  
\[
\forall k \in K,\; r_{1k} = r_{2k}\;\Longrightarrow\; r_1 = r_2 .
\]
A composite key satisfies this by construction: the mapping from tuples of column values to row identities is injective.  

From an optimization perspective, indexing a composite key allows the database engine to navigate a B‑tree where each node stores the concatenated key value, yielding logarithmic search time without scanning the whole table. Moreover, when foreign keys reference a composite primary key, referential integrity guarantees that *all* parts of the referenced entity are matched, preventing orphaned partial references.  

**Non‑obvious insight:** A composite key is not merely a trick to avoid surrogate columns; it preserves *semantic meaning*. The tuple itself carries business logic (e.g., “order_id + product_id” uniquely identifies an order line), which can be exploited in queries and constraints that would otherwise require expensive joins or redundant data. Thus, composite keys are both a mathematical necessity for uniqueness and a design choice that embeds domain rules directly into the schema.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
