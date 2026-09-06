---
qid: ing_298d700057__think__local
question: 'Explain: Sort order — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 503
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:25:38-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - *What is “sort order” in this context?*  It refers to how Elasticsearch orders documents returned by a query (e.g., ascending vs. descending).  
   - *Assume the reader knows basic ES concepts*: index, mapping, query DSL, but may not know sorting syntax or why it matters.  

**2. Adopt a mental model**  
   - Think of an SQL `ORDER BY` clause: Elasticsearch’s sort is similar but expressed in JSON and can target fields, script values, or function score.  
   - Treat the sort request as a secondary pass after filtering: first filter → then order by specified criteria.  

**3. Step‑by‑step reasoning**  
   1. **Identify the field(s)** to sort on (e.g., `price`, `timestamp`).  
   2. **Choose direction**: `"order": "asc"` or `"desc"`.  
   3. **Specify in query body**:  
      ```json
      {
        "query": { … },
        "sort": [
          { "price": { "order": "asc", "missing": "_last" } }
        ]
      }
      ```  
   4. Understand optional modifiers: `mode` (for multi‑value fields), `unmapped_type`, `nested_path`.  
   5. Recognize performance trade‑offs: sorting large result sets requires extra memory and may hit the sort size limit; consider using fielddata or doc values.  

**4. Common traps to avoid**  
   - *Sorting on non‑docvalues fields*: causes runtime errors unless fielddata is enabled.  
   - *Using `missing` incorrectly*: default `_last` can produce unexpected ordering for nulls.  
   - *Ignoring the size limit*: large sorts exceed the 100 000‑document cap by default.  

**5. Sanity‑check & communicate**  
   - Run a small test query in Kibana or curl to see the order.  
   - Explain that sorting is independent of relevance scoring; if you need both, combine `sort` with `function_score`.  
   - Summarize: “Sort order tells Elasticsearch how to sequence hits after filtering—just like SQL’s ORDER BY, but expressed as a JSON array within the query body.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
