---
qid: ing_21f7f4c3e1__fp__local
question: 'Explain: FULL OUTER JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 498
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:18:14-05:00'
sources: []
---

## From First Principles: Why a *Full Outer Join* Exists

Imagine two sets of records, **A** (customers) and **B** (orders).  
Each record in A has at most one key (`customer_id`), each in B may or may not share that key.  
We want to *pair* every customer with his/her orders **and** keep customers without orders and orders without a customer.

### 1. The Problem
- **Inner join** keeps only pairs where keys match → loses unmatched rows.
- **Left (or right) outer join** keeps all rows from one side, discarding the other’s unmatched rows.

To preserve *all* information we need to combine both views:  
`(A left‑outer JOIN B) UNION (B left‑outer JOIN A)`.

### 2. Formal Definition
For each key `k`,
- If `k ∈ keys(A)` and `k ∈ keys(B)` → output all `(a,b)` pairs.
- If `k ∈ keys(A)` but not in `keys(B)` → output `(a, NULL)`.
- If `k ∈ keys(B)` but not in `keys(A)` → output `(NULL, b)`.

This is a *Cartesian product* of the two tables filtered by equality on the join columns and then padded with `NULL`s where no match exists.

### 3. Deeper Insight
A full outer join is essentially a **union of two projections** over the Cartesian product.  
It preserves the *information content* of both sides, which aligns with the principle of *maximal data retention* in relational algebra: every tuple that could be reconstructed from either table remains visible.

### 4. Non‑Obvious Tip
Many SQL engines implement full outer joins via two subqueries and a `UNION ALL`.  
If you need to filter after the join, apply the predicate *inside* each subquery (before the union) rather than after; otherwise you may lose rows that would have matched the filter only on one side.

---

**In short:** A full outer join is the “complete” way to align two datasets, keeping every record from both sides by padding unmatched pairs with `NULL`s—exactly what you need when no data loss is acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
