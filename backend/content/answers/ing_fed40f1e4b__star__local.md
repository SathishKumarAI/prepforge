---
qid: ing_fed40f1e4b__star__local
question: 'Explain: Combine smaller indices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 371
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:30-05:00'
sources: []
---

**Situation** – At my previous company we migrated a legacy product catalog from a single monolithic Elasticsearch index into multiple domain‑specific indexes (products, reviews, pricing). The original index had 10 GB of data and 50 shards, causing slow search latency (~1.2 s) during peak traffic.

**Task** – I was tasked to reduce query latency below 500 ms while keeping indexing throughput high, without exceeding the cluster’s storage budget or over‑provisioning memory.

**Action** – First, I ran an index analysis using `cat/shards` and `fielddata` metrics to identify hot shards. I then merged smaller “hot” indexes (e.g., price updates) into a single “pricing‑updates” shard set, reducing the total number of shards from 50 to 18. I re‑sharded each domain to match its average document size: product docs (~1 KB) got 5 shards, reviews (~2 KB) got 3, and pricing (~0.5 KB) got 4. I also enabled the `doc_values` format on numeric fields to cut memory usage by ~30 %. Finally, I set up index lifecycle policies to delete outdated review data after six months.

**Result** – Search latency dropped to 320 ms (a 73 % improvement), indexing throughput increased by 40 %, and total disk usage fell from 12 GB to 9.5 GB. The exercise taught me the importance of aligning shard count with document size and access patterns, as well as leveraging lifecycle policies for long‑term maintenance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
