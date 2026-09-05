---
qid: vq_ecef0e3e0a__fp__local
question: WHAT IS A COMPOSITE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 410
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:44-05:00'
sources: []
---

**Composite (or composite key) index – a first‑principles view**

A database query engine must decide which rows satisfy a *predicate* such as  
`WHERE (a = 5 AND b < 10)`.  
The most efficient way to locate those rows is to keep them sorted on the
attributes that appear in the predicate.  
If only `a` were indexed, the engine could binary‑search for all rows with
`a = 5`, then scan each of them to test `b < 10`.  
A *composite index* stores tuples `(a,b)` in lexicographic order; thus the
first component (`a`) is still searchable, but once a match on `a` is found,
the engine can immediately jump to the block where `b` changes, eliminating the
need to examine unrelated rows.  

Formally, if \(I = (X_1,\dots,X_k)\) is an index on columns \((X_1,\dots,X_k)\),
then for any predicate that fixes a prefix of these columns,
the search cost reduces from \(O(\log N + M)\) to \(O(\log N + M')\) where
\(M'\ll M\).  
This follows from the principle of *partial order* in sorted data:
a lexicographic ordering gives a total preorder that respects all prefixes.

**Non‑obvious insight:**  
Composite indexes are most powerful when the *selectivity* of earlier columns
is high.  If `a` is very common, the index may still require scanning many
entries before narrowing on `b`.  In such cases, adding a *covering* column
or reordering the composite to put the most selective attribute first can
dramatically cut cost—an optimization that often surprises developers who
tend to mirror table order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
