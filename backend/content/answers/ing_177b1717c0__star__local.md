---
qid: ing_177b1717c0__star__local
question: 'Explain: When to choose sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 329
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:41-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we launched a real‑time fraud detection service that ingested 2 million transactions per day across three regions. Our single‑instance MongoDB cluster was hitting 80 % RAM usage and query latency spiked to 350 ms during peak hours.

**Task:** I needed to scale the database horizontally while keeping read/write latency under 100 ms and ensuring data sharding didn’t break our existing aggregation pipelines or real‑time dashboards.

**Action:** I performed a shard key analysis, choosing `{userId: 1}` after profiling with `explain()` to confirm high cardinality and even distribution. I set up a three‑node config server replica set and deployed five shards, each on dedicated hardware with SSDs. Using the MongoDB Ops Manager I automated balancing and introduced TTL indexes for archived data. I rewrote critical aggregation queries to use `$facet` pipelines that leveraged shard locality, reducing cross‑shard traffic.

**Result:** Post‑deployment, read latency dropped to 45 ms, write throughput increased by 3×, and the cluster handled 5 million daily transactions with a 99.9% uptime SLA. I learned that careful shard key selection and continuous monitoring are essential; sharding isn’t a silver bullet but a powerful tool when data volume outpaces single‑node capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
