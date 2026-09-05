---
qid: ing_a40ae7ecbf__star__local
question: 'Explain: Body — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:28-05:00'
sources: []
---

**Situation**  
During a product launch for our recommendation engine, the data team realized that our search layer was bottlenecked by stale indices—search latency spiked to 400 ms and hit rates dropped 12% in the last week.

**Task**  
I needed to rebuild the product catalog index from scratch, ensuring field mappings were optimized for keyword lookups and nested attributes, while keeping downtime under two minutes.

**Action**  
Using Kibana Dev Tools, I first drafted a mapping with `keyword` and `text` fields, added `nested` for variants, and set `index.refresh_interval: -1` to disable auto‑refresh. I then executed:
```bash
PUT /product_catalog_v2
{
  "settings": { "number_of_shards": 3, "analysis": { ... } },
  "mappings": { ... }
}
```
After confirming the index was green, I ran a bulk ingest script (Python `elasticsearch-py`) to stream 1.8 M documents in batches of 10k, monitoring progress via `_bulk` response stats. Once complete, I re‑enabled refresh and ran an update‐by‑query to add a computed popularity field.

**Result**  
Search latency dropped from 400 ms to 95 ms (a 76% improvement), and click‑through rate on search results increased by 18%. I learned the importance of pre‑defining mappings and controlling refresh intervals during mass reindexing, which saved us a full‑day outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
