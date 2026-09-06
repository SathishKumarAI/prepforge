---
qid: ing_a3d4774361__fp__local
question: How does shard size affect performance? — How many shards should I have
  in my Elasticsearch cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 449
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:49-05:00'
sources: []
---

**Why shard size matters**

When a document is indexed, Elasticsearch writes it into one of its *shards*—essentially a Lucene index. Each shard runs in its own thread‑pool and consumes memory for term dictionaries, postings lists, and cache. The fundamental trade‑off is between **parallelism** (more shards → more concurrent search/merge threads) and **overhead** (each shard incurs its own file handles, heap usage, and merge scheduler contention).

*Parallelism*: With *k* primary shards, a query can hit up to *k* segments simultaneously. If the cluster has 4 CPU cores, having 8 shards gives each core two “virtual” shards to work on, potentially improving throughput when the data set is large enough that the index can be split into many small segments.

*Overhead*: Every shard brings a ~200 MB Lucene heap footprint (term dictionary + postings). With 100 shards you waste >20 GB of RAM that could otherwise hold hot caches. Moreover, each merge operation must coordinate across all shards, increasing latency and CPU load.

**Rule of thumb**

- Keep the *average segment size* between **30–50 GB**; this balances cache hit rates against merge costs.
- Aim for **≤ 1 shard per 10 GB of data** on a node that has at least 2× the RAM needed for hot caches.  
  For example, a node with 64 GB RAM can comfortably host 5–6 shards (≈12–13 GB each) while leaving room for JVM metaspace and OS buffers.

**Non‑obvious insight**

A single shard that is too large forces Lucene to merge its own segments aggressively, creating “merge storms” that stall all queries. Splitting a massive index into 3–4 shards can reduce the total merge time by an order of magnitude because each shard’s segment pool is smaller and merges happen in parallel. Thus, *shard size* is not just about memory—it directly controls Lucene’s internal optimization schedule.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
