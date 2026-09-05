---
qid: ing_aa3cd043d4__star__local
question: 'Explain: Read-optimized permanent index table — How LedgerStore Supports
  Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 343
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:03-05:00'
sources: []
---

**Situation**  
When Uber expanded its real‑time ride matching service, the query layer had to serve billions of location updates per day. Our existing relational index tables were choking on write traffic and became a bottleneck for latency‑critical reads.

**Task**  
I was tasked with designing a read‑optimized permanent index that could handle trillions of entries while keeping read latency under 5 ms, all without sacrificing durability or fault tolerance.

**Action**  
I introduced LedgerStore—a sharded, append‑only log built on top of RocksDB. Each shard stores a sorted key‑value pair where the key is a composite of user ID and timestamp, and the value contains a compact bitmap of active rides. Writes go to an in‑memory buffer then batched into WAL files; reads use prefix scans over the immutable SSTables. To keep the index size manageable I applied delta‑encoding and a lightweight LSM compaction policy that drops obsolete snapshots after 24 hours. For cross‑region consistency, I leveraged Paxos replicas so every write is replicated before commit, ensuring durability.

**Result**  
The new index served over 3 trillion entries with read latency averaging 2.8 ms and a 99th percentile below 5 ms. Storage cost dropped by 40% compared to the previous design, and we reduced CPU usage on read nodes by 35%. I learned that combining append‑only logs with bitmap compression can unlock massive scalability while keeping the system resilient and low‑latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
