---
qid: ing_4cb9fde2b3__star__local
question: 'Explain: Time-Based Data | Elasticsearch: The Definitive Guide [2.x] |
  Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 339
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:49-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building a real‑time analytics dashboard for an IoT platform that streamed over 5 million sensor events per day into Elastic Stack 7.x. The data had to be searchable by timestamp and support near‑real‑time aggregation.

**Task**  
Design a scalable index strategy that keeps query latency under 200 ms while enabling efficient roll‑ups and long‑term retention without manual shard reallocation.

**Action**  
I chose a time‑series index template with daily shards, using the `date_histogram` aggregation to bucket events. I leveraged the `time_field` mapping (`@timestamp`) and set the `index.lifecycle.name` policy to rollover after 50 GB or 7 days, automatically creating a new shard and deleting data older than 90 days. To improve query speed I enabled the `doc_values` fielddata cache on the timestamp field and added a `runtime` field for derived metrics (e.g., event age). For search I used the `_search/scroll` API with a keep‑alive of 1 h, ensuring deep pagination without performance hits.

**Result**  
Query latency dropped from 650 ms to 120 ms on average. The rollover policy reduced manual maintenance by 100% and saved us $3K/month in storage costs. I learned that proper time‑based sharding coupled with lifecycle policies turns a growing data lake into a lean, query‑friendly resource.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
