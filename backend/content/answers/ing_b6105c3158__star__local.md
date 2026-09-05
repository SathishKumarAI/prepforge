---
qid: ing_b6105c3158__star__local
question: Your index will not fit on one machine. How do you shard it, and what breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 329
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:17-05:00'
sources: []
---

**Situation:** In a recommendation platform I was building an inverted index for user interactions that grew to 5 TB of raw data; the single‑node Lucene cluster ran out of heap and the query latency spiked to 1.2 s per request.

**Task:** Partition the index across multiple machines so that each shard stays under 500 GB, maintain sub‑100 ms search latency, and keep update throughput above 10k writes/sec.

**Action:** I implemented a two‑level sharding scheme: first by user ID hash to evenly distribute documents, then within each bucket I used Lucene’s “index per shard” approach with shared segment files on a distributed file system (Ceph). I added a lightweight Bloom filter per shard to pre‑filter out non‑matching shards during queries. For writes I switched from single‑threaded indexing to a producer‑consumer queue that batched 1k documents and sent them to the appropriate shard’s indexer process. I also introduced an “index refresh” policy of every 5 seconds to keep search results fresh while preventing large segment merges.

**Result:** The cluster scaled to 12 nodes, each holding ~400 GB. Query latency dropped from 1.2 s to 80 ms on average, and write throughput increased to 15k ops/sec. I learned that sharding a Lucene index requires careful balance between shard size, segment merging overhead, and pre‑filtering; otherwise you trade off consistency for speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
