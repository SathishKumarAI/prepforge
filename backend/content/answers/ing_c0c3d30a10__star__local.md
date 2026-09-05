---
qid: ing_c0c3d30a10__star__local
question: 'Explain: Step 1 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 328
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:55:50-05:00'
sources: []
---

**Situation**  
At a large search‑engine partner I was responsible for the crawl scheduler that fed billions of URLs into our indexing pipeline daily. A recent surge in user‑generated content meant many URLs differed only by query parameters or tracking tokens, causing redundant fetches and wasting bandwidth.

**Task**  
Design a scalable deduplication layer so that each unique page is crawled once per day while keeping latency low and respecting the crawl budget.

**Action**  
I introduced a two‑stage filter. First, a Bloom filter in memory hashed canonicalized URLs (removed known tracking patterns and normalized query order) to drop obvious duplicates instantly. Second, for collisions we stored a probabilistic HyperLogLog sketch keyed by domain to estimate per‑domain cardinality; if the sketch indicated a high probability of duplication we routed the URL to a “dedupe queue” that ran an exact hash comparison against a sharded RocksDB instance. The system was built in Go, deployed behind a Kubernetes cluster, and leveraged gRPC for low‑latency inter‑service calls. I also added telemetry to expose duplicate rates per shard.

**Result**  
Duplicate fetches dropped from 35 % of the crawl budget to <5 %, freeing 1.2 TB of bandwidth monthly and improving index freshness by 12 %. The team learned that a hybrid probabilistic‑exact approach balances speed and accuracy at Google scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
