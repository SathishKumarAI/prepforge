---
qid: ing_bd08649111__star__local
question: 'Explain: Index per Time Frame — Time-Based Data | Elasticsearch: The Definitive
  Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 339
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:10-05:00'
sources: []
---

**Situation:**  
At my previous role we were building a real‑time fraud detection pipeline for a payment processor. The data volume was about 2 M events per day, and the ML model needed fresh training on recent behavior every hour.

**Task:**  
I had to design an ingestion strategy that kept query latency low while enabling the ML job to consume only relevant data without scanning terabytes of history.

**Action:**  
We adopted an “index per time frame” approach: each hour got its own index (`transactions-2024.09.05-14`), created via a daily rollover policy in Kibana and scripted with `PUT _template`. This let us shard aggressively (8 shards per index) and set a retention of 30 days through ILM. For the ML job, we used the `indices.query_by_query` pipeline to target the last 48 hours across these hourly indices, avoiding cross‑index scans. We also added a time‑field mapping (`@timestamp`) and enabled doc value sorting for fast aggregation.

**Result:**  
Query times dropped from ~1.2 s to 250 ms on average, while the ML training job processed only 96 GB of data per run instead of 2 TB. We reduced storage costs by 35% through automated deletion, and the fraud detection accuracy improved by 4% due to fresher models. I learned how sharding strategy and index lifecycle policies can directly impact both performance and cost in time‑series ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
