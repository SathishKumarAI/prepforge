---
qid: ing_74688a5ea7__star__local
question: 'Explain: Create a sharding strategy — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 360
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:04-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with migrating the company’s product catalog from a monolithic PostgreSQL table into Elasticsearch to support real‑time search. The catalog had over 12 million SKUs and our query latency target was under 150 ms for 95 % of requests.

**Task:**  
Design an elasticsearch sharding strategy that balances write throughput, read performance, and storage limits while keeping shard count manageable.

**Action:**  
I started by profiling the index: average document size was ~1.2 KB and we expected a 30 % growth per year. Using Elasticsearch’s “shard‑size” recommendation (≈50–200 GB per shard for hot nodes), I calculated that 8–10 shards would suffice initially. To handle uneven SKU distribution, I introduced a deterministic hash on the product category + supplier ID to evenly spread documents across shards. For hot reads, I enabled index‑time routing so queries targeted only relevant shards. I also set up rollover policies: once a shard hit 75 GB or 90 days, it would roll over to a new “hot” index and move old data to a warm tier, keeping shard count stable.

**Result:**  
Post‑migration, search latency dropped from 320 ms to 95 ms on average, with 99 % of queries under the target. Write throughput increased by 40 %, and we avoided exceeding node capacity for at least three years. I learned that careful sizing based on realistic growth estimates and combining routing with rollover can keep Elasticsearch clusters efficient without over‑provisioning shards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
