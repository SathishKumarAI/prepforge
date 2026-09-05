---
qid: ing_36a7adfbce__star__local
question: 'Explain: ILM availability — Index lifecycle management (ILM) in Elasticsearch
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 372
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:34-05:00'
sources: []
---

**Situation** – In my last role, our data science team was ingesting over 1 TB of daily log events into Elastic Stack for anomaly detection. The index grew quickly, and the cluster started hitting storage limits; search latency climbed from 120 ms to 2 s within a week.

**Task** – I needed to design an automated lifecycle that moved older data to cheaper storage tiers while keeping the most recent logs searchable in real time, all without manual intervention or downtime.

**Action** – I created a custom ILM policy:  
1. *Hot phase* kept the last 7 days on SSD with a 30‑day rollover; we used `max_size=200GB` and `max_age=7d`.  
2. *Warm phase* transitioned indices to hot tier’s “warm” nodes, reducing replicas from 2 to 1 and enabling fast field data caching for analytics queries.  
3. *Cold phase* moved data to the “cold” tier (magnetic disks), disabled indexing, and set `shrink` to reduce shard count by 50% before a final delete after 90 days.  
I scripted the policy in Kibana, added it to each index template, and used `ilm.explain()` to validate the rollout.

**Result** – Storage usage dropped from 1 TB to 350 GB within two weeks, search latency returned to <150 ms for hot data, and we avoided manual reindexing costs. I learned that fine‑tuning ILM phases with realistic size/age thresholds can dramatically balance performance and cost in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
