---
qid: ing_76b53963d0__star__local
question: 'Explain: Sort mode option — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:15-05:00'
sources: []
---

**Situation:** While working on a real‑time analytics dashboard for an e‑commerce platform, the search feature was returning product listings that were not ordered by relevance when users queried highly ambiguous terms like “wireless earbuds.” The UI team complained that customers were clicking through multiple pages to find best sellers.

**Task:** I needed to reconfigure Elasticsearch so that search results would be sorted primarily by a custom “popularity_score” field, but still respect the built‑in BM25 relevance ranking when two items had identical scores. The goal was to improve click‑through rates by at least 15 % within one month.

**Action:** I added a `sort_mode` parameter to the query’s `script_sort` function:  
```json
{
  "query": { ... },
  "sort": [
    {
      "_score": {"order":"desc"},
      "popularity_score": {"order":"desc", "mode":"max"}
    }
  ]
}
```
I used the `max` mode so that if multiple documents share the same popularity, Elasticsearch falls back to BM25. I also tuned the `b` and `k1` values for the field boost in the mapping to balance relevance versus popularity.

**Result:** After deploying the updated query, the dashboard’s click‑through rate jumped from 32 % to 48 % (a 50 % lift). The latency stayed under 200 ms per request, and I documented the approach so the data team could reuse it for other facets. This taught me how to blend custom metrics with native relevance scoring while keeping performance in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
