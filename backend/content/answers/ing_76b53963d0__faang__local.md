---
qid: ing_76b53963d0__faang__local
question: 'Explain: Sort mode option — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 442
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:19:37-05:00'
sources: []
---

**Clarify**  
You’re asking about the *sort* feature in an Elasticsearch query—how to order hits when a user searches for documents. I’ll assume we’re using the REST API or a client library, and that the index already contains sortable fields (e.g., dates, numbers).  

**Approach**  
1. Identify the field(s) to sort on.  
2. Decide the direction (`asc`/`desc`) and any missing‑value handling.  
3. Build a query with a `sort` clause (or use `search_after` for deep pagination).  

**Depth**  
```json
GET /products/_search
{
  "query": { "match_all": {} },
  "sort": [
    { "price":   { "order": "asc",  "missing": "_last" } },
    { "_score":  { "order": "desc" } }
  ]
}
```
- **Field type**: numeric, date, keyword, or script.  
- **Missing values**: `_first` or `_last`.  
- **Multiple fields**: cascade ordering.  
- **Performance**: Sorting is O(n log n) per shard; avoid sorting on high‑cardinality text unless you have a `keyword` subfield. Use *composite* aggregations for efficient deep pagination instead of `from/size`.  

**Edge Cases**  
- Non‑indexed fields → query fails.  
- Large result sets + deep page (`from > 10k`) leads to performance hits; use `search_after`.  
- Sorting on `_score` alone can return unsorted docs if tie‑scores occur.  

**Optimize & Communicate**  
- For frequent sorts, add a doc‑level *sort field* (e.g., pre‑computed numeric).  
- Leverage *fielddata* only for keyword fields; enable `doc_values`.  
- Explain to the interviewer that while Elasticsearch handles sorting transparently, careful schema design and pagination strategy are key to maintaining speed at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
