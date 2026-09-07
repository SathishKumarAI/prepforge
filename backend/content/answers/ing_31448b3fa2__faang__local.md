---
qid: ing_31448b3fa2__faang__local
question: 'Explain: Sort search results — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 510
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:38:46-05:00'
sources: []
---

**Clarify**  
You’re asking how to *sort* documents returned by an Elasticsearch query. The goal is to reorder hits according to a field or function (e.g., date, popularity). I’ll assume we’re working with the standard REST API, using JSON bodies, and that the index already contains the fields you want to sort on.

**Approach**  
1. Build a `search` request (`GET /index/_search`).  
2. Include a `sort` clause in the body (or query string).  
3. Specify field(s) and direction; optionally use script‑based or custom scoring.  
4. Optionally set `size`, `from`, and `track_total_hits`.

**Depth**  
```json
GET /products/_search
{
  "query": { "match_all": {} },
  "sort": [
    { "price": { "order": "asc" } },           // field sort
    { "_score": { "order": "desc" } },          // relevance (default)
    {
      "_script": {                              // custom sort
        "type": "number",
        "script": {
          "source": "doc['rating'].value * 0.8 + doc['popularity'].value"
        },
        "order": "desc"
      }
    }
  ],
  "size": 10
}
```
Elasticsearch evaluates the `sort` array left‑to‑right; ties fall back to `_score`, then `_doc`. Sorting uses Lucene’s quick sort, so it’s O(n log n) per shard. For large result sets, consider `search_after` or the scroll API instead of deep pagination.

**Edge Cases**  
- Missing field values → treated as null and sorted last by default.  
- Multi‑field sorting can yield unstable results if fields have identical values; add a deterministic tie‑breaker like `_id`.  
- Scripted sorts are slower; cache scripts or precompute the value.  

**Optimize & Communicate**  
To reduce latency, keep `size` small and use `track_total_hits: false`. For frequently sorted queries, create a dedicated sort index or store the computed sort key in the document. When explaining to an interviewer, I’d emphasize understanding Lucene’s sorting mechanics, trade‑offs between script vs field sort, and how pagination impacts performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
