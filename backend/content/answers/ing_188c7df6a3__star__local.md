---
qid: ing_188c7df6a3__star__local
question: 'Explain: Delete indices, not documents — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:57-05:00'
sources: []
---

**Situation:**  
At a fintech startup we had an aging analytics cluster that grew from 10 TB to 45 TB over two years. Queries for fraud reports were running >15 s, and the Kibana dashboards were lagging. The ops team kept deleting old indices nightly, but the cluster still bloat‑ed because each index carried its own shards.

**Task:**  
I was tasked with cutting query latency to under 3 s while keeping the data store within a 30 TB budget and ensuring high availability during the migration.

**Action:**  
First, I mapped the shard usage: many indices had only 5–10 GB but were allocated 7 shards each, causing excessive file handles. I re‑architected the index lifecycle by consolidating related time‑series data into larger “daily” indices, setting `index.max_shard_size` to ~50 GB and limiting each index to 4 shards. I then used `_reindex` with a script that removed unnecessary fields, effectively deleting documents at ingestion time rather than via bulk delete calls. Finally, I updated the ingest pipeline to drop obsolete records before indexing, reducing write traffic by 35 %.

**Result:**  
Query times dropped from 15 s to 2.3 s, and the cluster size shrank to 28 TB—below our budget target. The exercise taught me that managing shard count and pre‑processing data at ingest is far more efficient than mass index deletions, and that a proactive lifecycle policy can prevent long‑term bloat.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
