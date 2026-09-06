---
qid: ing_6e4665166d__fp__local
question: 'Explain: The Setup — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 542
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:59:07-05:00'
sources: []
---

**Why the Benchmark Matters**

A messaging system is essentially a *high‑throughput buffer* that must guarantee ordering and durability while staying lightweight.  
The fundamental challenge for Kafka is to **decouple producer latency from consumer processing** without letting disk I/O become a bottleneck.  
If we model each write as a *transaction* that appends a record to an immutable log, the cost per transaction consists of three components:

1. **CPU & memory serialization** – turning the payload into bytes.  
2. **Disk seek‑latency & write‑back pressure** – controlled by batching and OS page cache.  
3. **Network I/O** – sending the batch to the broker.

Kafka’s design pushes most of the cost into the *batch* (≈ 64 KB) and relies on **zero‑copy** writes, so the per‑record overhead drops below 10 µs once the batch size is saturated.

**Setting up “2 M writes/sec on three cheap machines”**

| Element | Reasoning |
|---------|-----------|
| **Three nodes** | Provides fault tolerance (replication factor = 3) while keeping intra‑cluster traffic minimal. |
| **Consumer‑only mode** | Keeps the cluster idle; all throughput is producer‑side, revealing the raw write capacity. |
| **Bulk producer with 64 KB batches** | Maximizes disk utilisation and leverages OS page cache, ensuring each write triggers only one sync. |
| **SSD‑backed storage** | SSD seek time ≈ 50 µs; batching turns this into a negligible fraction of the total latency. |
| **Minimal configuration** (default log compaction, no encryption) | Removes any extraneous overhead that would mask the raw performance ceiling. |

Running the benchmark on commodity 2‑core, 8 GB RAM servers demonstrates that *Kafka’s asymptotic throughput is governed by disk I/O and batch size*, not by network or CPU.  
The non‑obvious insight: **the bottleneck shifts from “how fast can we write a single record?” to “how many records can we squeeze into one I/O operation?”** Once you hit the optimal batch size, adding more cores yields diminishing returns because the disk becomes the limiting factor. This explains why 2 M writes/sec is attainable on three inexpensive machines—Kafka’s architecture deliberately turns the throughput problem into a simple batching‑plus‑SSD exercise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
