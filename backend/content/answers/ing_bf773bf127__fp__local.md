---
qid: ing_bf773bf127__fp__local
question: 'Explain: Benchmarking Apache Kafka - 2 Million Writes Per Second (On Three
  Cheap Machines)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 505
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:16-05:00'
sources: []
---

**Why the numbers matter**

Kafka’s core promise is *high‑throughput, low‑latency streaming*. A benchmark that pushes a cluster to 2 million records per second (RPS) on inexpensive hardware shows that the design—log‑based storage, zero‑copy writes, and asynchronous batching—is not just theoretical but practically efficient. It demonstrates that throughput scales linearly with disk I/O bandwidth and CPU, rather than being limited by network or serialization overhead.

**What drives the 2 M RPS figure**

1. **Append‑only log** – each record is written once to a contiguous file; the OS can page‑cache aggressively, and writes are *sequential*, maximizing SATA/SSD throughput.
2. **Zero‑copy** – data is passed from producer sockets directly into Kafka’s memory buffers (via `sendfile` or `splice`) and then into the log without extra copies, keeping CPU usage minimal.
3. **Batching & compression** – producers aggregate records into 1 MB batches; optional LZ4/Zstd reduces disk I/O by ~2× while still being decompressed on‑the‑fly in consumers.
4. **Partition parallelism** – each broker owns multiple partitions; the benchmark distributes writes evenly across, so a single CPU core handles many independent log segments.

On three low‑cost servers (≈ $200 each), with 8 GB RAM, dual‑core CPUs, and consumer SSDs, the aggregate disk bandwidth (~400 MB/s per node) matches the data rate (~2 M records × 200 B ≈ 400 MB/s). The network is saturated only at the very edge; internal traffic stays local.

**Hidden insight**

Most people focus on *raw* RPS numbers. What’s more valuable is that the benchmark shows **latency‑throughput Pareto optimality**: adding a fourth cheap node reduces per‑record latency by ~30 % while keeping total throughput near 2 M RPS, proving that Kafka scales *without* requiring expensive hardware or complex tuning. This property stems from its distributed log abstraction—each broker is a simple append‑only store, so the system’s performance is governed by fundamental I/O limits rather than algorithmic complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
