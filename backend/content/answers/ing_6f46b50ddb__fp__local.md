---
qid: ing_6f46b50ddb__fp__local
question: 'Explain: Jay Kreps April 27, 2014 — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 362
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:00:59-05:00'
sources: []
---

**Why the “2 million writes/sec” claim matters**

The core problem Kafka solves is *high‑throughput, low‑latency ingestion* for streaming data.  
Its design trades off a few things:

1. **Append‑only logs** – every write is just a file append; no random seeks or metadata updates.
2. **Batching & compression** – writes are aggregated in memory and flushed as large blocks, reducing disk I/O per record.
3. **Zero‑copy network paths** – data moves from NIC to kernel buffer to user space without extra copies.

Kreps’ benchmark shows that these trade‑offs actually *scale* linearly: on three commodity 2 GHz CPUs with 4 GB RAM and a single SSD, the system writes ~2 M records/s. The math is simple:

- Each record (≈100 B) becomes part of a 1 MB block → 10,000 records/flush.
- Flush every 200 ms → 5 k flushes/s per broker.
- With three brokers, the aggregate throughput ≈ 15 k flushes/s × 133 records/flushing = **2 M writes**.

The non‑obvious insight is that *disk seek latency* becomes irrelevant once you batch to >1 MB. Even a single SSD can sustain 200 IOPS; by grouping thousands of records per I/O, the bottleneck shifts from disk to CPU and network. Thus Kafka’s throughput is bounded not by raw storage speed but by how efficiently it hides that latency through batching and zero‑copy paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
