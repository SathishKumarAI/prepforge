---
qid: ing_492bb02afe__faang__local
question: 'Explain: Track scores — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 499
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:34:13-05:00'
sources: []
---

**Clarify**  
You want to rank documents in an ElasticSearch index by a *track score*—the relevance of each hit relative to the query—and then sort the hits accordingly. Confirm:  
1) Are we only re‑ordering hits returned by ES, or do we need to influence scoring during query time?  
2) Is this for a single field (e.g., `title`) or multi‑field with boosts?  
3) Do you need deterministic ordering when scores tie?

**Approach**  
1. Let ElasticSearch compute the default Lucene score (`_score`).  
2. If custom logic is required, create a *script_score* function that returns the desired numeric value.  
3. Use `sort: [{ _score: { order: "desc" } }]` to sort by that score.  
4. For tie‑breaking, add secondary fields (e.g., date, popularity).  

**Depth**  
```json
GET /books/_search
{
  "query": {
    "function_score": {
      "query": { "match_all": {} },
      "script_score": {
        "script": {
          "source": "Math.log(doc['popularity'].value + 1) * params.factor",
          "params": { "factor": 2.0 }
        }
      }
    }
  },
  "sort": [
    { "_score": { "order": "desc" } },
    { "publish_date": { "order": "desc" } }
  ]
}
```
Complexity: O(N log N) for sorting in the client; ES handles scoring in linear time over matching docs.  
Trade‑offs: Script scores are slower than pre‑computed fields but flexible.

**Edge Cases**  
- No hits → return empty array.  
- All scores equal → secondary sort must provide deterministic order.  
- Very large result sets → use `search_after` or `scroll`.

**Optimize & Communicate**  
Pre‑compute heavy scoring components into a dedicated field (e.g., `cached_score`) and index it; then simply `sort: [{ "cached_score": { "order":"desc" } }]`. Explain to interviewers that this reduces runtime cost while preserving flexibility, showcasing both algorithmic understanding and system‑level optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
