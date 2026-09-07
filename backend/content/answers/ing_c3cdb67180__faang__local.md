---
qid: ing_c3cdb67180__faang__local
question: 'Explain: Effect of Message Size — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 470
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:16:24-05:00'
sources: []
---

**Clarify**  
The article measures how many messages per second a Kafka cluster can ingest when running on inexpensive hardware. The key variable is *message size*: does writing 1 KB packets achieve the same throughput as 64 KB? We assume identical topic config (partition count, replication factor), same producer code, and no compression or batching differences.

**Approach**  
1. Identify the bottleneck: disk I/O, network, CPU, or memory.  
2. Vary message size while keeping total payload per second constant to isolate per‑message overhead.  
3. Record write latency, throughput, and resource utilisation on each node.

**Depth**  
- **Small messages (≤ 1 KB)**: The broker spends most time on metadata handling—record headers, index updates, and network framing. Disk seeks dominate; throughput drops sharply (~500k msgs/s).  
- **Medium messages (8–32 KB)**: Batch‑ing efficiency rises; each write amortises log flush overhead, yielding ~1–2 M msgs/s. CPU usage climbs due to serialization but stays manageable.  
- **Large messages (> 64 KB)**: Disk throughput saturates; network becomes the bottleneck as each message traverses multiple nodes for replication. Throughput plateaus (~1.5 M msgs/s).  

The experiment shows a ~4× increase in write rate from 1 KB to 32 KB, after which gains taper.

**Edge Cases**  
- **Zero‑copy paths**: Skipping serialization can skew results.  
- **Compression**: Enables higher throughput but adds CPU cost.  
- **Replication factor**: Higher RF reduces writes per node, altering the size curve.  

Tests should vary RF, enable/disable compression, and monitor GC pauses.

**Optimize & Communicate**  
Recommend configuring `linger.ms` and batch size to match expected message size; for workloads dominated by small messages, consider increasing partitions or enabling log compaction. In discussion, emphasize that Kafka’s performance is a trade‑off between I/O throughput and per‑message overhead, and that the optimal point depends on the target payload size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
