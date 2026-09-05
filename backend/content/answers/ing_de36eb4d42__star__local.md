---
qid: ing_de36eb4d42__star__local
question: 'Explain: Shard distribution guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 366
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:58-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a legacy log‑analytics platform into ElasticSearch for real‑time dashboards. The data set grew to over 2 TB per month and we had to keep query latency below 300 ms while staying within a $30k yearly budget.

**Task** – Design the shard layout: determine how many primary shards per index, their size, and allocation across three commodity nodes so that the cluster would be balanced, fault‑tolerant, and cost‑effective.

**Action** – I first sampled 10 % of the log data to estimate document size (~3.2 KB each). Using Elastic’s guideline “shard size < 50 GB”, I calculated we needed ~80 primary shards for a single index. To avoid the overhead of too many tiny shards, I consolidated them into 20 large shards (≈10 GB each) and set `index.routing.allocation.total_shards_per_node: 30` to keep per‑node load reasonable. I also enabled shard “shrink” on older indices and used the `_shard_path` API to monitor disk usage. For fault tolerance, I set a custom allocation filter that spread shards across all three nodes and kept two replicas.

**Result** – The cluster handled 4 k queries per second with average latency of 210 ms and maintained 99.9% uptime during peak traffic. Storage cost dropped by 18% compared to the naive 200‑shard design, and I documented a shard sizing template that has been reused for subsequent projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
