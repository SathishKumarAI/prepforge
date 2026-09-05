---
qid: ing_25870e0be2__fp__local
question: 'Explain: Replicating this test — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 546
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:25:02-05:00'
sources: []
---

### Why the “2 M writes/sec” test matters  

When you design a distributed log like **Kafka**, the *throughput* you can sustain is ultimately bounded by the **write‑ahead log** and the **network/CPU I/O loop** that feeds it.  In a realistic deployment, every producer message must be serialized, checkpointed to disk (or SSD), and acknowledged back to the client.  The benchmark’s goal is to stress this *critical path* as hard as possible while keeping the system in its steady‑state regime.

### What the test actually does  

1. **Three cheap servers** – a typical commodity node (≈ 8 core CPU, 32 GiB RAM, SATA SSD).  
2. **One producer per node** writes to *one* Kafka topic with a single partition.  
3. **Zero‑batching, no compression, no retries**: each record is 1 KiB and immediately flushed.  
4. The cluster runs in **“high throughput” mode** (broker `queued.max.requests` high, `replica.fetch.wait.ms` low).  

This configuration forces the broker to handle the *maximum* number of I/O‑bound requests it can, because each message must hit disk before the next one is accepted.

### Why it works as a benchmark  

- **CPU vs. IO**: On commodity hardware, CPU cycles are plentiful; disk latency becomes the bottleneck.  By eliminating batching, we expose raw write latency.
- **Statistical stability**: Running for several minutes lets transient spikes average out, giving a robust mean throughput figure.
- **Scalability cue**: If one node can sustain ~2 M writes/sec, a cluster of *N* nodes (with each handling an independent partition) scales linearly—an essential property for sharded logs.

### Non‑obvious insight  

Most people think “high throughput” means large batches or SSDs.  In this test the *single‑record flush* reveals that **Kafka’s internal buffer size** and **OS page cache behavior** are far more critical than raw disk speed.  The benchmark shows that a *tiny* per‑message overhead (the Java serialization, network framing) dominates the latency budget when you push the system to its limits on cheap hardware.

In short, this test isolates the *write‑path bottleneck*, demonstrates linear scalability across nodes, and highlights how Kafka’s design choices (log‑structured storage + minimal buffering) allow it to hit 2 M writes/sec even on modest machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
