---
qid: ing_35d7aaa084__star__local
question: 'Explain: Geo queries — Geo queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 321
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:55-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a real‑time location‑based recommendation feature for our travel app. Our user base grew to over 1.2 million daily active users, and we needed to deliver relevant points of interest within a 10‑km radius in under 200 ms per request.

**Task:**  
I had to design an efficient geo‑query pipeline that could handle high traffic while keeping latency low, using Elasticsearch’s geo capabilities.

**Action:**  
I indexed each POI with a `geo_point` field and enabled the `geohash_prefix` tree for faster prefix pruning. For queries I used the `geo_distance` filter combined with a `must_not` clause to exclude previously visited locations. To further reduce payload, I switched from `geo_shape` (which was too heavy) to `geo_bounding_box` when only a rough area was needed, and cached the most common bounding boxes in Redis. I also tuned the shard allocation by spreading geo‑data across nodes with a custom routing key based on latitude/longitude buckets.

**Result:**  
The new implementation cut average query latency from 650 ms to 140 ms, and we saw a 35% reduction in CPU usage during peak hours. User engagement on the recommendation page rose by 22%, and I documented the strategy so the team could reuse it for other geo‑search features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
