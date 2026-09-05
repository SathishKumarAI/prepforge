---
qid: ing_daf2887175__star__local
question: 'Explain: Sort values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 326
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:50-05:00'
sources: []
---

**Situation**  
At my last role I was building a product catalog for an e‑commerce client that had over 2 million SKUs. The search feature on their site was slow and the top results weren’t ordered by relevance or price, causing poor conversion rates.

**Task**  
I needed to redesign the query layer so that search results were sorted first by a custom “popularity” score (derived from click‑through data) and second by price ascending, all while keeping latency under 200 ms for 95% of queries.

**Action**  
I leveraged Elasticsearch’s `function_score` query with a `field_value_factor` on the `popularity` field, then added a `sort` clause that first used that score and fell back to the `price` field. I also switched the index mapping to use `doc_values` for price and enabled the `search_as_you_type` analyzer for fuzzy matching. To keep latency low I tuned the shard count (3 primary shards) and set `request_cache:true` on frequent queries. Finally, I added a background job that updates popularity scores nightly via bulk API.

**Result**  
The new sorting logic cut average search latency from 350 ms to 120 ms and boosted conversion by 18% in the first month. I learned how to combine function scoring with multi‑field sorting to meet strict performance targets while delivering business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
