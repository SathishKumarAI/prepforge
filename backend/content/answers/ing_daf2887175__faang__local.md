---
qid: ing_daf2887175__faang__local
question: 'Explain: Sort values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 568
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:07:32-05:00'
sources: []
---

**Clarify**  
We’re asked how to *sort* values in search results when using **Elasticsearch**.  
Key assumptions to confirm:  

1. Are we sorting by a single field (e.g., `price`) or a compound of fields?  
2. Is the field indexed as numeric, date, keyword, etc.?  
3. Do we need to support pagination (`from/size`) and large result sets?  
4. Should the sort be deterministic when values tie (e.g., secondary sort on `_id`)?  

**Approach**  
1. **Verify mapping** – ensure the field is *indexed* and has a sortable type.  
2. **Build a `sort` clause** – specify ascending/descending, handling missing values (`missing: "_last"`).  
3. **Handle compound sorts** – list multiple fields in order of priority.  
4. **Add `_score` or `_doc` fallback** if needed for deterministic ordering.  
5. **Test with pagination and `search_after`** to avoid deep‑scroll slowness.  

**Depth**  
```json
GET /products/_search
{
  "size": 10,
  "_source": ["name","price"],
  "sort": [
    { "price": { "order": "asc", "missing": "_last" } },
    { "_id":   { "order": "desc" } }
  ],
  "query": {
    "match_all": {}
  }
}
```
- **Complexity**: Sorting is O(n log n) in the shard, but Elasticsearch optimizes by using pre‑sorted postings for numeric fields.  
- **Trade‑offs**: Sorting on large result sets can be expensive; prefer `search_after` + `sort` for deep pagination instead of `from/size`.  

**Edge Cases**  
- Missing values → unsorted if not handled (`missing: "_first"`).  
- Non‑indexed fields → runtime error.  
- Very large numeric ranges → precision loss on floating point types.  
- Tie‑breakers missing → inconsistent ordering across shards.

**Optimize & Communicate**  
1. **Use `search_after`** for deep pagination, reducing latency.  
2. **Cache frequent sort queries** via search templates or query cache.  
3. **Explain** to the interviewer: “We first confirm field mapping, then construct a deterministic sort clause, and finally test edge cases such as missing values and tie‑breakers.”  

This structured plan shows clear problem framing, concrete implementation steps, complexity awareness, and consideration of real‑world pitfalls—all key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
