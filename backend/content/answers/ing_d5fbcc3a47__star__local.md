---
qid: ing_d5fbcc3a47__star__local
question: 'Explain: Performance Tuning of ElasticSearch — Performancetuning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:39-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the product’s search feature was hitting 2 s latency on average during peak trading hours, and our SLA demanded sub‑300 ms responses for 95% of queries.

**Task:**  
I had to reduce overall query latency by at least 50%, while keeping the cluster cost within the $5k/month budget and ensuring no data loss during reindexing.

**Action:**  
First, I profiled queries with Elastic’s slow‑log and identified heavy aggregation hits on a “transactions” index. I then redesigned the mapping: switched `text` fields to `keyword` where possible, added a custom analyzer for ticker symbols, and removed unused fields from `_source`. Next, I tuned shard allocation—sharded 5 shards per node instead of 10—to reduce inter‑node traffic, and set up an index lifecycle policy that moved older data to cheaper hot/cold tiers. I also enabled the `request_cache` on frequent aggregation queries and increased JVM heap to 4 GB with a proper garbage collection setting. Finally, I scripted a rolling reindex operation using the `_reindex` API to apply changes without downtime.

**Result:**  
Post‑tuning, average query latency dropped to 120 ms (a 40% improvement) and 98% of queries stayed below 300 ms. The cluster size reduced from 8 nodes to 5, saving ~$1k/month. I learned that a mix of mapping optimization, shard management, and lifecycle policies can deliver measurable performance gains while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
