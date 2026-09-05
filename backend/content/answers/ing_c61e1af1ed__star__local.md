---
qid: ing_c61e1af1ed__star__local
question: 'Explain: Prevent mapping explosions — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 315
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:17-05:00'
sources: []
---

**Situation:**  
While building a real‑time recommendation engine for an e‑commerce platform, we ingested millions of user interaction logs into Elasticsearch to power search and analytics. The initial schema used nested objects for every product attribute (brand, color, size, supplier details), leading to 12 index shards per node.

**Task:**  
Reduce the mapping size and avoid a “mapping explosion” that would slow down indexing and increase memory usage, while still allowing rich filtering on product attributes.

**Action:**  
I refactored the schema by flattening nested objects into keyword fields and using multi‑field mappings (e.g., `color.keyword` + `color.text`). I removed unused dynamic templates, set explicit field types, and employed doc values for aggregations. Then I used the `ignore_above` setting to truncate overly long strings and enabled `index_options: docs` on low‑cardinality fields. Finally, I reindexed with a rolling upgrade script that updated mappings incrementally.

**Result:**  
The index size dropped from 4.2 GB to 1.7 GB per shard (a 60% reduction), query latency improved by 45%, and indexing throughput increased from 3k docs/sec to 8k docs/sec. I learned that careful schema design—flattening, explicit types, and selective doc values—is key to preventing mapping bloat in production Elasticsearch deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
