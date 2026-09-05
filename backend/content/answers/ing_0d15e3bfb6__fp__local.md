---
qid: ing_0d15e3bfb6__fp__local
question: 'Explain: Read Path — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 384
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:39-05:00'
sources: []
---

## Read Path – How LedgerStore Scales to Trillions of Indexes  

At its core the problem is *efficient point‑lookup* in a distributed key/value store that must serve billions of queries per second while guaranteeing strong consistency.  
The solution is a **two‑stage read path**:

1. **Local index lookup (in‑memory bloom + skip list)** – Each node keeps a tiny, highly compressed bloom filter for every shard’s key range and a deterministic skip list that maps the hash to a physical offset. This guarantees *O(log n)* locality with sub‑nanosecond latency because the data structure fits in L1/L2 cache.  
2. **Global consistency check (vector clock merge)** – Once an offset is found, the node streams the record to the client and simultaneously merges its vector clock into a lightweight *commit log* that spans the cluster. The commit log is partitioned by epoch; only the latest epoch is kept in RAM, while older epochs are archived on SSD.  

The deep principle at play is **information locality**: every read touches only a *constant‑size* amount of data regardless of the total number of indexes. This follows from the pigeonhole property of hash functions and the fact that bloom filters provide probabilistic guarantees without false positives in the critical path.

### Non‑obvious insight  
The trick isn’t just sharding; it’s **shard‑by‑hash + epoch‑partitioned commit log**. By decoupling the read index from the consistency log, LedgerStore can parallelize reads across thousands of cores while still guaranteeing that every record is globally ordered—essential for Uber’s real‑time routing and billing systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
