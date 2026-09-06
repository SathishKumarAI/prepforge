---
qid: ing_7db4a47230__think__local
question: 'Explain: Sorting numeric fields — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 561
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:19:55-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - *What is “sorting numeric fields” in this context?* Assume we’re dealing with Elasticsearch query DSL where results can be sorted by a field’s numeric value.  
   - *Which numeric types matter?* Integer, long, float, double, etc.  
   - *Do we need to consider nulls or missing values?* Yes—Elasticsearch has `missing`, `unmapped_type`, and `order` options.

**2. Adopt a mental model: Elasticsearch’s sort API**  
   - Think of the sort clause as an array of objects: `{ "field_name": { "order": "asc"/"desc", ... } }`.  
   - Each field can specify additional parameters (`missing`, `unmapped_type`).  
   - Underlying mechanism: the index stores numeric values in a sorted order; Elasticsearch fetches and orders by those values.

**3. Step‑by‑step reasoning toward an answer**  
   1. Identify the target field (must be mapped as a numeric type).  
   2. Decide ascending or descending (`"asc"` or `"desc"`).  
   3. Optionally set `missing` to control where documents lacking the field appear.  
   4. If the field might be unmapped in some indices, set `unmapped_type: "long"` (or appropriate type) so sorting doesn’t fail.  
   5. Build the query:  
      ```json
      {
        "sort": [
          { "price": { "order": "asc", "missing": "_last" } }
        ]
      }
      ```
   6. Execute and observe that results are ordered by numeric value, with missing values placed at the end.

**4. Common pitfalls to avoid**  
   - *Mixing string vs numeric sorts*: a field mapped as `keyword` will sort lexicographically, not numerically.  
   - *Neglecting `missing` handling*: documents without the field may default to the start or cause errors if unmapped.  
   - *Using wrong type in `unmapped_type`*: mismatch leads to runtime exceptions.

**5. Sanity‑check & verbalize**  
   - Verify that the mapping shows a numeric data type for the field.  
   - Run a small sample query and inspect `_source` vs sorted order.  
   - Explain: “Elasticsearch stores numbers in an efficient, sortable format; by specifying the sort clause with correct ordering and missing‑value handling, we get deterministic numeric sorting.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
