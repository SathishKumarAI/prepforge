---
qid: ing_f6f0e4c1ba__star__local
question: 'Explain: Multiple reference points — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 369
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:25-05:00'
sources: []
---

**Situation** – In a retail analytics platform we had to rank product recommendations for users visiting the mobile app during peak holiday traffic. The search index already stored popularity scores and user‑specific click data, but our existing single‑criterion sort was returning stale results that ignored seasonality and real‑time inventory.

**Task** – Build a dynamic ranking that blends three reference points—historical sales velocity, current stock levels, and the user’s past purchase behavior—so that the top 10 products displayed in the search results were both relevant and immediately available.

**Action** – I extended the Elasticsearch query DSL by adding a `script_score` function. The script combined the three metrics:  
1) `doc['sales_velocity'].value * 0.4`,  
2) `params.stock > 0 ? 1 : 0 * 0.3`, and  
3) `params.user_behavior_score * 0.3`.  
I passed the user’s behavior vector via a `script` parameter, used `painless` to compute the weighted sum, and set `track_scores=true` for accurate ordering. I also added a filter to exclude out‑of‑stock items when inventory hit zero. The index was re‑optimized nightly with a custom analyzer to keep term vectors fresh.

**Result** – After rollout, click‑through rate on the recommendation list rose 18 % and conversion increased by 12 %. Inventory turnover improved because high‑stock items were promoted automatically. I learned how to balance multiple business signals in Elasticsearch’s scoring engine while keeping latency under 200 ms during peak load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
