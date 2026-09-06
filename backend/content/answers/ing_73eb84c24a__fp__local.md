---
qid: ing_73eb84c24a__fp__local
question: 'Explain: Single producer thread, no replication — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 407
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:27-05:00'
sources: []
---

### Why a single‑producer, no‑replication setup can hit 2 M writes/s on cheap hardware

Kafka is a *log‑structured*, append‑only system.  
When a producer writes a record it merely **appends** the payload to a file and updates an in‑memory index; there’s no disk seek, no lock contention, and no network hop to replicas.  
The bottleneck shifts from I/O to **serialization + batching**: each batch is written once, flushed when full or timed out, and the OS can page it out asynchronously.

On commodity nodes (e.g., 2 × Intel Xeon E5‑2630 v4, 64 GB RAM) a single thread can produce ~200 kB/s per core.  
By packing records into large batches (128 KB–1 MB), the producer amortizes the cost of `fsync` and network I/O, reaching >2 M records/s before the kernel’s write queue saturates.

**Deeper principle:** Kafka turns a high‑throughput problem into a *buffered streaming* one.  
The **law of diminishing writes per batch** (cost ≈ α + β·batch_size) means that beyond a threshold, adding more producers or replicas only increases contention without reducing per‑write latency.

#### Non‑obvious insight
Even with no replication, the **broker’s page cache** becomes the limiting factor.  
If you tune `io.file.enable_mmap` and allocate enough RAM for the log, the OS can keep all writes in memory; only a tiny fraction hits disk, making the system essentially *in‑memory* despite cheap SSDs. This explains why the benchmark remains stable on three inexpensive machines: the work is bounded by CPU and cache, not by spinning disks or network links.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
