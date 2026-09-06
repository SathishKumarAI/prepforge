---
qid: ing_d150060a64__fp__local
question: 'Explain: This Benchmark — Benchmarking Apache Kafka: 2 Million Writes Per
  Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 420
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:25:36-05:00'
sources: []
---

**Why the “2 M writes/sec” claim is not a gimmick**

At its core, Apache Kafka is a *distributed log* that guarantees **exact‑once delivery** by appending immutable records to disk and replicating them across brokers. Throughput therefore hinges on two orthogonal bottlenecks:

1. **Disk write bandwidth** – each record must be flushed to stable storage at least once (the leader).  
2. **Network serialization & replication** – replicas receive the same payload, so network I/O scales with message size.

The LinkedIn benchmark pushes both limits by exploiting three inexpensive machines, each equipped with 4 × SSD and a gigabit NIC. They configure:

* **Zero‑copy writes** (Linux `sendfile` / `mmap`) to avoid user‑space copying.  
* **Large batch sizes** (≈ 64 kB) so the cost of a single I/O operation is amortized over many records.  
* **Minimal compression** – lossy codecs save CPU but increase bandwidth; here they use LZ4, a sweet spot for speed vs. size.  
* **Replication factor = 1** (no follower traffic), thus the 2 M figure represents *pure leader* throughput.

The non‑obvious insight: *write amplification is dominated by log compaction, not per‑record I/O*. By batching and pre‑allocating contiguous log segments, Kafka turns every write into a single sequential disk operation. Consequently, even cheap hardware can deliver millions of writes per second because the algorithmic design reduces per‑message overhead to the bare minimum required for durability and ordering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
