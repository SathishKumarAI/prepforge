---
qid: ing_f6f0e4c1ba__think__local
question: 'Explain: Multiple reference points — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 443
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:17:37-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *What exactly is “multiple reference points” in this context?*  Assume it refers to using several fields or custom sort criteria when ordering search hits (e.g., score, date, popularity).  
   - *Which version of Elasticsearch and what kind of data?*  Assume a recent ES cluster with typical JSON documents.

**2️⃣ Mental model / framework**  
   - Think of the query pipeline: **query → scoring → sorting**.  
   - Sorting can be *default* (by `_score`) or *custom* using `sort` clauses, possibly combining multiple fields (`{fieldA: {order:'desc'}}, {fieldB:{order:'asc'}}`).  
   - “Reference points” are the sort keys that anchor the ordering.

**3️⃣ Step‑by‑step reasoning**  
   1. Build a basic query (match or bool).  
   2. Add a `sort` array with multiple objects, each specifying a field and order.  
   3. If you need dynamic reference points (e.g., user’s location), use script sort (`_geo_distance`) or function score.  
   4. Test the query in Dev Tools; inspect `_source`, `_score`, and `sort` values in hits.

**4️⃣ Common traps to avoid**  
   - *Assuming all fields are numeric:* string sorts behave lexicographically unless specified with a custom collator.  
   - *Over‑sorting:* too many sort keys can degrade performance.  
   - *Ignoring `_score`:* if you override sorting, ES will drop the relevance score unless explicitly requested.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that the first hit matches the highest priority reference point (e.g., newest date).  
   - Explain: “We’re instructing Elasticsearch to order by field A descending; if ties occur, fall back to field B ascending.”  
   - Share the query JSON and highlight the `sort` array for clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
