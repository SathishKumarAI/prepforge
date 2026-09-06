---
qid: ing_daf2887175__think__local
question: 'Explain: Sort values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 473
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:24:19-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   - Confirm that the user wants a conceptual explanation, not code.  
   - Assume familiarity with basic search concepts (index, query).  
   - Note that “sort values” refers to ordering documents by field(s) in Elasticsearch.

**2. Adopt the “Elasticsearch‑centric” mental model**  
   - Think of a query as two stages: *scoring* (relevance) and *sorting*.  
   - Sorting can override relevance or be combined with it.  
   - Remember the three sort types: field value, script, _score.

**3. Step‑by‑step reasoning**  
   1. **Field sorting** – explain how a numeric/date/string field is read from each doc; mention missing values handling and default order (asc/desc).  
   2. **Script sorting** – show that a painless or other script can compute a value per document; caution about performance.  
   3. **Score sorting** – default when no sort clause, uses BM25 or custom similarity.  
   4. **Multiple‑field sorting** – tie‑breaking order and how Elasticsearch chains them.  
   5. **Pagination implications** – deep pagination costs, use `search_after` for large offsets.

**4. Common pitfalls to avoid**  
   - Forgetting that `_score` is not a field; you must reference it explicitly (`"_score" : { "order": "desc" }`).  
   - Ignoring the impact of doc values: only fields with doc values can be sorted efficiently.  
   - Over‑using scripts, leading to slow queries.

**5. Sanity‑check & communicate**  
   - Verify that each sort type is correctly described and distinct.  
   - Use a concise example (e.g., `{"sort": [{"price": {"order":"asc"}}, {"_score":{"order":"desc"}}]}`) to illustrate chaining.  
   - Summarize: “Elasticsearch sorts by reading field values or computed scripts, can override relevance, and must consider performance trade‑offs.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
