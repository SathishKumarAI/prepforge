---
qid: ing_06fa4c34ef__star__local
question: 'Explain: Avoid unnecessary mapped fields — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 301
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:54-05:00'
sources: []
---

**Situation** – In a product analytics platform I was tasked with ingesting over 5 million event documents per day into ElasticSearch to power real‑time dashboards for a SaaS client. The initial index mapping included dozens of optional string fields that were rarely queried, and the cluster was provisioned with 10 shards, each 2 GB in size.

**Task** – Reduce search latency and cost by eliminating wasted storage and ensuring the shard count matched the data volume without over‑sharding.

**Action** – I audited the mapping against query logs, removing unused fields and switching high‑cardinality strings to keyword types with `norms: false`. I reindexed into a new template using dynamic templates for common patterns. Then I calculated optimal shard size (≈40 GB per node) based on cluster RAM and write throughput, dropping from 10 to 4 shards. I updated the ingest pipeline to use `scripted_upsert` for deduplication and added a rollover policy tied to index age.

**Result** – Search latency dropped from 350 ms to 80 ms, storage usage fell by 35%, and monthly cluster costs decreased by 20%. I learned that thoughtful mapping coupled with shard sizing is critical for scaling ElasticSearch in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
