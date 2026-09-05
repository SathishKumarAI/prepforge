---
qid: ing_732b69542f__star__local
question: 'Explain: Aggregations | Elasticsearch: The Definitive Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 337
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:53-05:00'
sources: []
---

**Situation:**  
While leading a data‑science project for a retail client, we had to surface real‑time insights on product performance from millions of sales records stored in Elasticsearch. The dashboard required dynamic filters and multi‑level drill‑downs—something raw queries couldn’t deliver efficiently.

**Task:**  
I needed to design an aggregation strategy that would let end users slice data by time, category, and region while keeping response times under 200 ms for any filter combination.

**Action:**  
First, I mapped the query flow: a `bool` query for filtering, then a `date_histogram` bucket on `sale_date` to segment weekly sales. Inside each date bucket, I added a `terms` aggregation on `category.keyword`, and nested another `terms` on `region.keyword`. For each leaf bucket, I computed `sum` of `revenue` and an `avg` of `unit_price`. To avoid cardinality explosion, I used the `composite` aggregation for category/region pairs with pagination. I also leveraged the `pipeline` aggregation to calculate a moving average trend over weeks. Finally, I tuned shard allocation and increased `shard.size` on the index template to balance load.

**Result:**  
The dashboard now returns aggregated views in ~150 ms, even when users apply complex filters. Sales insights surfaced instantly, boosting marketing ROI by 18% through quicker campaign adjustments. I learned how careful bucket design and pipeline usage can turn heavy data sets into actionable, low‑latency analytics in Elasticsearch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
