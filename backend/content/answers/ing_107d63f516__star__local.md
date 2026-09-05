---
qid: ing_107d63f516__star__local
question: 'Explain: Create an index Generally available — Create an index | Elasticsearch
  API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 352
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:12-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a new product‑search feature for an e‑commerce platform that handled over 10 million SKUs. The existing search cluster had only a single “products” index, which was getting overwhelmed by high query latency during flash sales.

**Task** – My goal was to create a fresh, highly‑optimized index (the “products_v2” index) that would support advanced aggregations and geo‑filtering while keeping downtime under 30 minutes. I had to design the mapping, set up replicas for fault tolerance, and migrate data without affecting user experience.

**Action** – Using the Elasticsearch REST API, I first defined a dynamic template in JSON that mapped numeric fields (price, stock) as `double` and text fields (title, description) with an analyzer tuned for German/English. I scripted a bulk reindex operation (`_reindex`) to copy data from “products” to “products_v2”, adding an ingest pipeline to normalize timestamps. I set `number_of_shards=5`, `number_of_replicas=1`, and enabled `auto_expand_replicas`. To keep the cluster healthy, I ran a rolling upgrade: closed one shard at a time, reindexed, then reopened.

**Result** – The new index lowered average query latency from 350 ms to 90 ms during peak traffic. Search relevance improved by 12% as measured by click‑through rate. I learned that careful mapping and staged reindexing can dramatically boost performance while minimizing risk in a production environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
