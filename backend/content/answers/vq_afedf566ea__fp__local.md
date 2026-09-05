---
qid: vq_afedf566ea__fp__local
question: WHAT ARE UNION AND UNION ALL, AND HOW DO THEY DIFFER?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 370
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:43-05:00'
sources: []
---

**Union vs Union All – the optimization behind set‑like joins**

When a query returns rows from several sources we must decide *how many copies of each row are allowed*.  
*Union* enforces **set semantics**: it removes duplicates after merging. That is, for every tuple `t` that appears in at least one subquery, only one copy survives. The operation is equivalent to a **relational union** in the mathematical sense—an element’s multiplicity is reduced to 1.

*Union All*, by contrast, keeps **multiset semantics**: every occurrence from each sub‑query is preserved. It simply concatenates the result sets without any deduplication step. In SQL terms it behaves like a Cartesian union of the *bags* produced by the individual queries.

Why this matters?  
1. **Cost model:** Deduplication requires hashing or sorting, which can be expensive on large result sets. `UNION ALL` avoids that overhead, making it faster when duplicates are unlikely or irrelevant.  
2. **Correctness semantics:** If your application cares about exact counts (e.g., inventory tallies), you must use `UNION ALL`. If only distinct items matter, `UNION` is the right choice.

**Non‑obvious insight:** The *order* of evaluation in a query plan can drastically change performance. A planner that pushes a filter **before** a `UNION` can reduce the deduplication cost, whereas a filter applied after will force the engine to sort the entire merged set first. Thus, understanding whether you need duplicates influences not just the operator choice but also how you structure predicates around it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
