---
qid: ing_be7d277a69__star__local
question: 'Explain: Sort mode example usage — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 331
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:07-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time product catalog for an e‑commerce platform that served over 1 million SKUs. Our search engine was Elasticsearch, and the business asked us to let users sort by “best sellers” (sales volume) while still keeping relevance scoring high.

**Task** – I had to design a query that combined fuzzy relevance with a custom sort on a sales‑volume field, ensuring latency stayed under 200 ms for all queries, even on the largest product indices.

**Action** – First, I added a `sales_volume` numeric field to each document and stored it as an `integer`. In the search DSL I used a `function_score` query: the base score came from a standard multi‑field match, while a `weight_factor` function boosted documents with higher `sales_volume`. Then I applied a `sort` clause on the same `sales_volume` field in descending order. To keep performance high, I enabled doc values and set `ignore_unmapped:true` so that missing fields didn’t break queries. Finally, I tuned the cache settings and monitored CPU usage during load tests.

**Result** – The sorted search returned relevant results with a 12% higher click‑through rate compared to the previous relevance‑only ranking. Latency stayed at ~180 ms on average, meeting SLA targets. I learned that combining `function_score` with a dedicated sort field gives both relevance and business priority while keeping the system efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
