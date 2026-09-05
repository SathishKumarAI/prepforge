---
qid: ing_9d2aa0f90f__star__local
question: How many shards should I have in my Elasticsearch cluster?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 357
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:22-05:00'
sources: []
---

**Situation** – While migrating our product analytics pipeline from a legacy SQL store to an ElasticSearch cluster, the team noticed query latency spiking after ingesting about 10 million documents. The cluster had 5 nodes with a default of 1 shard per index, but the indices were growing beyond the optimal size for each node’s heap.

**Task** – I was tasked with determining an appropriate shard count that balanced write throughput, search speed, and memory usage so the cluster could scale to 50 million documents without hitting JVM GC pauses or disk thrashing.

**Action** – First, I ran a “shard sizing” script: for each index I calculated the document size (~1.2 KB), estimated total size, and used Elastic’s recommendation formula (index_size / 30 GB per shard). That suggested 10 shards per primary index. I then created an index template with 10 primary shards and 1 replica, re‑indexed a sample set, and monitored the cluster health, GC pause times, and average query latency over a 48‑hour period. The new configuration kept heap usage under 60 % and reduced average search latency from 750 ms to 120 ms.

**Result** – With 10 shards per index, we achieved a 6× improvement in read performance while maintaining write throughput of ~2000 ops/sec. The cluster now comfortably supports 50 million documents with room for future growth. I learned that shard sizing is data‑driven and that continuous monitoring after changes is essential to avoid “shard starvation” or “over‑fragmentation.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
