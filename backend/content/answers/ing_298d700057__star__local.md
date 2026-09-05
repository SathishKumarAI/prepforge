---
qid: ing_298d700057__star__local
question: 'Explain: Sort order — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 371
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:36-05:00'
sources: []
---

**Situation**  
At my last role I was working on a product‑search feature for an e‑commerce platform that had over 250,000 SKUs. The existing query returned relevant items but the order was arbitrary, causing users to miss high‑margin products and lowering conversion rates.

**Task**  
I needed to implement a deterministic sort that prioritized items by relevance score while also respecting business rules: top sellers first, then by recency of stock, and finally alphabetically for ties. The goal was to increase average order value by at least 5 % over the next quarter.

**Action**  
I rewrote the query using Elasticsearch’s `function_score` with a custom script that combined the relevance score (`_score`) with a weighted field from the document: `seller_rating`, `last_stocked_date`, and `name`. The script was written in Painless, leveraging `doc['field'].value`. I also added a `sort` array to enforce fallback ordering. To keep latency low, I tuned the index mapping by setting `index.sort.field` for `last_stocked_date` and used a `search_type=dfs_query_then_fetch` only when necessary. Finally, I wrote unit tests with mocked Elasticsearch responses and ran performance benchmarks on a staging cluster.

**Result**  
After deployment, the top‑ranked products saw a 12 % increase in click‑through rate and overall conversion rose by 6 %. The average order value grew from $68 to $72.4. I learned that careful weighting of business fields inside a sort script can deliver measurable revenue gains while keeping query response times under 120 ms for 95 % of requests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
