---
qid: ing_50c2b697bb__fp__local
question: 'Explain: Kafka in 30 seconds — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 389
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:56:47-05:00'
sources: []
---

**Kafka in 30 seconds – the “2 M writes/s on three cheap machines” benchmark**

The core problem Kafka solves is *high‑throughput, low‑latency event ingestion* for distributed systems.  
Its design reduces write latency to a few milliseconds by:

1. **Append‑only log** – data is written once at the tail; no random seeks or index updates are needed, so disk I/O stays sequential.
2. **Batching & compression** – writes arrive in large blocks (often > 64 KB) and are compressed before persisting, cutting both I/O bandwidth and CPU cost.
3. **Zero‑copy kernel tricks** – the OS can hand off buffers directly to disk or network sockets without copying into user space.

The benchmark demonstrates that with *three commodity servers* (4 GB RAM, 2 CPU cores each) you can hit ~2 million writes per second by:

- Using a single topic with many partitions so that each broker handles only a fraction of the load.
- Tuning `linger.ms` to allow larger batches before sending.
- Writing small records (~100 bytes) but grouping them into large batch files (≈ 8 MB).

**Why it works:** The system is bounded by the disk’s sequential write speed and the network’s aggregate throughput. By keeping writes sequential and batching, Kafka keeps both bottlenecks well below their theoretical limits.

**Non‑obvious insight:** The *partition count* is not just a scaling knob; it determines how many independent append streams each broker handles. With too few partitions, a single broker becomes the choke point regardless of hardware. With too many, metadata overhead grows and GC pressure spikes. Thus, optimal throughput is achieved by balancing partition granularity against per‑broker I/O capacity—an insight often overlooked when scaling Kafka clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
