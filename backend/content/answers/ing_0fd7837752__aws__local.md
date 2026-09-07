---
qid: ing_0fd7837752__aws__local
question: 'Explain: LSM-Tree — B-Tree vs. LSM-Tree'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 493
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:13-05:00'
sources: []
---

**Situation & Task**  
I was leading the design of a real‑time analytics layer for our ad‑tech platform (5 M users/day). The team needed a log store that could ingest high write throughput and serve low‑latency point queries, while staying within a $1.2 M yearly budget.

**Action – Technical Design**  
I compared **B‑Tree** (e.g., DynamoDB) vs. **LSM‑Tree** (used by DynamoDB’s underlying storage, RocksDB, and Amazon Timestream).  
* **Write path**: LSM merges small sorted runs into larger SSTables on background compaction—writes are append‑only to a memtable, O(1) amortized. B‑Trees split pages at write time, causing frequent disk seeks (O(log N)).  
* **Read path**: For point reads, both need index lookups; LSM adds a Bloom filter and in‑memory memtables for hit rates >95 %.  
* **Scalability & Availability**: With DynamoDB Global Tables + automatic sharding, we achieved 99.999% availability. The LSM design let us partition by time window (e.g., hourly) to keep compaction bounded.  
* **Cost**: Using DynamoDB’s on‑demand mode for the write hotspot saved ~30 % vs. provisioning RCU/WCU for a B‑Tree model.

**Result**  
We deployed an LSM‑backed stream ingestion pipeline (using Kinesis Data Streams → Lambda → DynamoDB) that handled 120 k writes/sec with <5 ms latency, and query cost dropped from $0.18 to $0.12 per million reads—saving ~$30 K annually.

**Reflection & Learning**  
I owned the trade‑off analysis, dug into compaction graphs (Dive Deep), and iterated on partition keys after an early failure where a hot shard caused 2 s latency spikes. The lesson: always model real write patterns before picking storage primitives.

> **Leadership Principles:** *Customer Obsession* (delivered low‑latency data for analysts), *Ownership* (led the end‑to‑end design), and *Dive Deep* (validated with metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
