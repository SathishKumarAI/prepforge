---
qid: ing_7db4a47230__star__local
question: 'Explain: Sorting numeric fields — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 293
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:15-05:00'
sources: []
---

**Situation:** At my previous company we launched a real‑time analytics dashboard for e‑commerce sales. The product team wanted the “Top Sellers” list sorted by revenue, but our Elasticsearch queries were returning documents in relevance order instead of numeric value.

**Task:** I had to reconfigure the search so that results were ordered by the `total_sales` field without sacrificing performance or breaking existing filters.

**Action:** First, I added a custom mapping for `total_sales` as a `double`. Then I used the `sort` clause in the query, specifying `order: desc` and `missing: 0` to handle nulls. To keep latency low, I enabled the `docvalue_fields` option so Elasticsearch could sort directly from stored values rather than re‑indexing. I also created a small benchmark script that compared query times before and after adding the fielddata cache. Finally, I updated our Kibana dashboard’s visualizations to use this sorted query.

**Result:** The “Top Sellers” list now appears correctly sorted by revenue in under 120 ms per request, up from the previous 350 ms. Adoption across three product teams increased usage of the analytics feature by 25%, and we learned that proper field mapping and docvalues are essential for numeric sorting at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
