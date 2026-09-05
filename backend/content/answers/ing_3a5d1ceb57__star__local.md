---
qid: ing_3a5d1ceb57__star__local
question: 'Explain: Query parameters — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 358
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:26-05:00'
sources: []
---

**Situation:**  
In a recent e‑commerce analytics project, the data science team was ingesting millions of product click logs into Elastic Search for real‑time dashboards. Our existing index template was too generic; queries were sluggish because the “timestamp” field wasn’t mapped as `date` and there were no keyword copies for filtering on category.

**Task:**  
I needed to create a new index that optimized search performance, ensured proper data types, and allowed quick aggregations on product categories while keeping the mapping flexible enough for future fields.

**Action:**  
Using the Elasticsearch REST API I sent a `PUT /product_clicks-2024` request with query parameters to enable automatic timestamp parsing (`?pretty=true`) and set the index’s `number_of_shards=5`. In the body, I defined mappings: `timestamp` as `date`, `category.keyword` as `keyword` (copy field from `category`), and added a dynamic template for any new string fields to be stored as `text` with an `analyzer="standard"`. I also set refresh interval to `1s` for near real‑time visibility. Finally, I used the `_bulk` API to reindex existing data into the new structure.

**Result:**  
Query latency dropped from 350 ms to under 80 ms on average, and aggregation times on category counts fell by 60%. The dashboards now refresh in <2 seconds, and we gained a scalable schema that supports future feature fields. I learned how fine‑tuned mapping and shard allocation directly translate into measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
