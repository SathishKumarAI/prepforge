---
qid: ing_43ab083efe__star__local
question: 'Explain: Highlights — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 362
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:25-05:00'
sources: []
---

**Situation:**  
At Uber I was part of the data infrastructure team that had to serve real‑time trip pricing to millions of riders each day. Our pricing model relied on a massive graph of over 3 trillion index entries—each representing a possible combination of pickup zone, time window, vehicle type, and dynamic demand signals. The existing key‑value store could not keep up with the read latency (average 120 ms) during peak hours.

**Task:**  
I was tasked to redesign the storage layer so that queries for pricing could return under 30 ms while still allowing us to update indexes in near real time, all without blowing our on‑prem hardware budget.

**Action:**  
I introduced LedgerStore, a custom append‑only log architecture built on top of Apache Kafka and RocksDB. Each index entry was serialized into a compact binary format (Protocol Buffers) and written to a partitioned ledger keyed by the hash of its composite attributes. To enable fast point lookups, I added an in‑memory Bloom filter per partition plus a lightweight LSM‑tree for recent updates. For queries, we streamed only the relevant partitions, applied a probabilistic cache hit check, and fetched from RocksDB if necessary. We also implemented a background compaction job that merged older ledger segments to keep read amplification low.

**Result:**  
The new system reduced average query latency from 120 ms to 18 ms during peak demand, while supporting 10× more concurrent pricing requests. Index updates were handled in under 5 seconds, keeping our model fresh. I learned how careful partitioning and a hybrid log‑plus‑LSM design can scale trillions of indexes without sacrificing performance or cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
