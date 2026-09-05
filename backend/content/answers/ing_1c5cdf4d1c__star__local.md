---
qid: ing_1c5cdf4d1c__star__local
question: 'Explain: LSM-Tree Databases — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 330
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:26:01-05:00'
sources: []
---

**Situation** – While leading the backend team for a real‑time analytics platform, we hit a bottleneck: read latency spiked to 250 ms when querying recent logs stored in an LSM‑Tree database (Apache Cassandra). The compaction process left us with many small SSTables and a high number of disk seeks.

**Task** – Reduce query latency below 80 ms for the top 5% most frequently accessed metrics without increasing storage cost or compromising write throughput.

**Action** – I introduced Bloom filters per SSTable to pre‑filter non‑existent keys. First, we instrumented the compaction pipeline to generate a compact Bloom filter (size ≈0.1 GB) alongside each new table, tuned with a false‑positive rate of 1%. Then I modified the read path: before disk seek, the engine checks the Bloom filter; if negative, it skips the lookup entirely. To keep write latency low, we used an in‑memory Bloom cache that syncs to disk asynchronously.

**Result** – Query latency dropped from 250 ms to 65 ms on average, and I/O traffic decreased by ~70%. The false‑positive rate remained below 1%, so correctness was unaffected. This experience taught me how a simple probabilistic data structure can dramatically improve LSM‑Tree read performance when integrated thoughtfully into the system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
