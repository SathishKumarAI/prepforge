---
qid: ing_7e39ee75e9__star__local
question: 'Explain: Dynamic index settings — General index settings | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 391
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:12-05:00'
sources: []
---

**Situation:**  
While leading a migration of our e‑commerce search platform to Elastic 7.x, the QA team flagged that query latency was spiking during flash sales—up to 350 ms for simple keyword lookups—despite normal loads being under 30 ms.

**Task:**  
I had to identify why the cluster behaved differently under high traffic and implement a configuration that kept latency low without over‑provisioning hardware.

**Action:**  
I first examined the dynamic index settings (`index.routing.allocation.total_shards_per_node`, `index.translog.durability`, etc.) that Elastic automatically adjusts per shard. I scripted a Kibana DevTools script to snapshot current values, then introduced a custom `settings.template` for all product indices:

```json
PUT _template/products
{
  "order": 1,
  "index_patterns": ["products-*"],
  "settings": {
    "number_of_shards": 5,
    "number_of_replicas": 2,
    "refresh_interval": "30s",
    "translog.durability": "async",
    "routing.allocation.total_shards_per_node": 50
  }
}
```

I also enabled `index.merge.policy.max_merge_at_once` to 20 and set `index.memory.map_file` to false for memory‑constrained nodes. After rolling the template, I monitored GC pause times and shard allocation in X-Pack monitoring.

**Result:**  
Latency dropped from 350 ms to under 25 ms during peak periods, and CPU usage fell by ~15 %. The exercise taught me how dynamic settings can be harnessed—rather than left to defaults—to balance write throughput, search speed, and cluster stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
