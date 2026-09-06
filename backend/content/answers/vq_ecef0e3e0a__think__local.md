---
qid: vq_ecef0e3e0a__think__local
question: WHAT IS A COMPOSITE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 430
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:38:42-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What* is a “composite index” in SQL/DB context?  
   - Assume we’re talking about relational databases (e.g., MySQL, PostgreSQL).  
   - Note that “index” refers to a data structure that speeds up queries.

**2. Pick a mental model / framework**  
   - Think of an index as a *lookup table* that maps column values to row locations.  
   - A composite index = lookup on **multiple columns at once** (multi‑column key).  
   - Visualize it like a sorted list of tuples `(col1, col2, …)` pointing to rows.

**3. Step‑by‑step reasoning**  
   1. List the columns that appear together in `WHERE`, `JOIN`, or `ORDER BY`.  
   2. Decide the order: most selective first → better pruning.  
   3. Explain that a composite index can satisfy predicates on any *prefix* of its columns (e.g., `(a,b)` covers `WHERE a=…` and `WHERE a=… AND b=…`).  
   4. Mention that it also helps with sorting (`ORDER BY`) if the order matches.

**4. Common traps to avoid**  
   - Confusing “composite” with “clustered” or “covering”.  
   - Assuming a composite index automatically covers all queries; it only covers predicates matching its prefix.  
   - Ignoring column data types and nullability that affect index viability.

**5. Sanity‑check & verbalize**  
   - Re‑phrase: “It’s an index built on two or more columns, stored together in a single structure.”  
   - Check that the explanation covers *why* it matters (performance) and *how* to use it (prefix rules).  
   - If possible, give a quick example query and show how the composite index would be used.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
