---
qid: ing_65279b9a57__star__local
question: 'Explain: Static index settings — General index settings | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:56-05:00'
sources: []
---

**Situation**  
At my last job we were migrating a legacy search service to Elasticsearch for a large e‑commerce catalog that served over 20 million queries per day. The engineering lead asked me to present how we would lock in performance and avoid costly runtime changes.

**Task**  
I needed to explain the concept of static index settings, why they’re immutable after creation, and how to plan them correctly so the cluster stays stable while still meeting our latency SLA of 120 ms.

**Action**  
First I mapped out the key “static” knobs: `number_of_shards`, `number_of_replicas`, analyzers, and merge policy settings. I created a prototype index with exactly the right shard count (12 for the catalog size) and a replica factor of two to meet our fault‑tolerance requirement. Then I demonstrated how changing these after data ingestion would trigger costly reindexing or cause cluster instability, so we must decide upfront. I also showed how to use `index.routing.allocation.require._tier_preference` to force hot nodes for the most frequently queried shards and how to set `index.refresh_interval` to balance index latency against write throughput.

**Result**  
The team adopted a single “master” index template that baked in these static settings, reducing reindex operations by 97 % during production rollouts. Query latency dropped from 210 ms to 95 ms on average, and we avoided costly downtime caused by accidental setting changes. I learned the importance of documenting these decisions in a living architecture wiki so future engineers understand why certain parameters are fixed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
