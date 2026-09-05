---
qid: ing_56733126d2__star__local
question: 'Explain: Create and manage ILM policies — Index lifecycle management (ILM)
  in Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 367
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:50-05:00'
sources: []
---

**Situation:**  
In a retail analytics platform we had over 12 TB of click‑stream data that grew at ~3 GB/day. The search team was hitting query latency spikes because hot indices were still on legacy SSD nodes while older data lingered on high‑cost memory‑optimized shards.

**Task:**  
Design and implement an Index Lifecycle Management (ILM) policy to automate tiering, rollover, and deletion of indices so that recent data stayed on fast storage and stale data moved to cheaper archival tiers without manual intervention.

**Action:**  
I wrote a YAML ILM policy with phases: *hot* (rollover after 7 days or 500 GB), *warm* (move shards to lower‑cost SSDs, apply aggressive compression), *cold* (relocate to HDD tier and enable read‑only), and *delete* (after 365 days). Using the `PUT _ilm/policy` API I deployed the policy. Then I updated our ingest pipelines to tag indices with `index.lifecycle.name: clickstream_policy`. To monitor compliance, I set up Kibana dashboards showing phase distribution and used scripted metric aggregations to verify latency reductions. Finally, I scheduled a weekly review script that logged any failed rollovers or deletions.

**Result:**  
Index size per hot tier dropped from 200 GB to 80 GB, reducing query latency by 35%. Storage costs fell by 28% annually, and we eliminated manual index management tasks, freeing the ops team to focus on feature work. I learned that careful phase tuning and real‑time monitoring are key to a resilient ILM strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
