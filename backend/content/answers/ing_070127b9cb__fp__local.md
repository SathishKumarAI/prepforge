---
qid: ing_070127b9cb__fp__local
question: 'Explain: Producer and Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 412
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:49-05:00'
sources: []
---

### Why the “Producer‑Consumer” benchmark matters

At its core Kafka is a **high‑throughput log**: producers append records and consumers read them in order.  
The LinkedIn Engineering post demonstrates that, with **three inexpensive servers**, you can sustain **≈2 M writes/s** by exploiting two facts:

1. **Batching & compression** – a producer groups thousands of small messages into one network round‑trip and compresses the batch (e.g., Snappy).  
2. **Log‑structured storage + zero‑copy** – Kafka writes to an append‑only file on SSD; the OS pages it, so appends are *O(1)*. Consumers read sequentially, benefiting from CPU cache and prefetch.

### Deeper principle: *Throughput = Bandwidth / Latency × Parallelism*

The benchmark is essentially a **bandwidth test**.  
- **Bandwidth** is limited by the SSD write speed (~600 MiB/s per drive).  
- **Latency** (network, serialization) determines how many messages fit in a batch.  
- **Parallelism** comes from running multiple producer/consumer threads across cores.

By maximizing batch size and aligning it with the SSD’s block size, you squeeze maximum throughput; any deviation reduces effective bandwidth.

### Non‑obvious insight

Most people focus on *message size* or *number of partitions*. The critical hidden factor is **the interaction between log‑segment rollover and consumer lag**. If a producer writes faster than the segment can be closed (i.e., roll‑over), disk seeks increase dramatically, throttling throughput. Ensuring that `log.segment.ms` and `flush.messages` are tuned so that roll‑overs happen *before* consumers catch up keeps the system in a steady state—essential for sustained 2 M writes/s on cheap hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
