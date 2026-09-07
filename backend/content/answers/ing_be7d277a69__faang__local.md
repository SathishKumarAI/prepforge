---
qid: ing_be7d277a69__faang__local
question: 'Explain: Sort mode example usage — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:40-05:00'
sources: []
---

**Clarify**  
The question asks how the *sort* mode in Elasticsearch’s “search” API is used—specifically when you want search results ordered by a field (e.g., relevance first, then date). I’ll assume we’re working with an index of documents that have numeric or date fields and that the user wants deterministic ordering beyond the default score.

**Approach**  
1. Show the JSON body for a search request.  
2. Add a `sort` array specifying field name(s) and direction.  
3. Explain optional parameters (`order`, `mode`, `missing`, etc.) that fine‑tune sorting.  
4. Mention how multiple sort keys create tie‑breakers.

**Depth**  
```json
GET /articles/_search
{
  "query": { "match_all": {} },
  "sort": [
    { "publish_date": { "order": "desc" } },   // newest first
    { "_score": { "order": "desc" } }          // then relevance
  ],
  "size": 10
}
```
- `order`: `"asc"` or `"desc"`.  
- `mode`: aggregates multi‑value fields (`min`, `max`, etc.).  
- `missing`: places docs with no value at the start/end.  
Elasticsearch evaluates each sort field in order; if two docs tie on one, it falls back to the next.

**Edge Cases**  
- **Missing values**: without `missing`, docs lacking the field may be omitted or placed arbitrarily.  
- **Numeric vs date fields**: ensure correct mapping type; otherwise sorting fails.  
- **Large result sets**: deep pagination with sort can hit performance limits (use `search_after`).

**Optimize & Communicate**  
For high‑traffic indices, index a dedicated “sort” field (e.g., epoch seconds) to avoid on‑the‑fly conversions. Explain trade‑offs: sorting on expensive fields can slow queries; caching sorted segments helps but consumes memory. In an interview, I’d note that using `search_after` is more efficient than traditional `from/size` pagination when combined with deterministic sort keys.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
