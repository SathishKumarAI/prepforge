---
qid: ing_df639a0faf__faang__local
question: 'Explain: Consumer Throughput — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 444
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:18:35-05:00'
sources: []
---

**Clarify**  
You’re asking how LinkedIn demonstrated that a Kafka cluster can sustain ~2 M writes/sec on only three inexpensive servers. I’d confirm the hardware specs (CPU, RAM, SSD type), the Kafka version, topic config (replication factor, partitions), and the producer workload (message size, batch size).

**Approach**  
1. Spin up 3 bare‑metal nodes with identical low‑cost disks.  
2. Create a topic with enough partitions to parallelize writes (e.g., 300 P).  
3. Use a high‑throughput producer library (Kafka‑client ≥ 2.0) and tune `linger.ms`, `batch.size`, and `max.in.flight.requests.per.connection`.  
4. Measure latency/throughput while scaling the number of concurrent producers.

**Depth**  
- **Hardware**: 2×Intel Xeon E5‑2603, 8 GB RAM, SATA SSDs (≈300 MB/s).  
- **Kafka config**: `num.partitions=300`, `replication.factor=1` (to avoid inter‑node traffic), `min.insync.replicas=1`.  
- **Producer tuning**: `acks=0`, `compression.type=lz4`, `max.block.ms=1000`.  
Resulting throughput ≈ 2 M records/s with < 50 ms latency. Complexity is O(1) per write; bottleneck shifts to disk I/O and network.

**Edge Cases**  
- Larger message sizes or higher replication factor drop throughput.  
- Disk fragmentation or SSD wear can degrade sustained rates.  
- Network congestion between producers and brokers causes back‑pressure.

**Optimize & Communicate**  
To push beyond 2 M/s, add more partitions, upgrade to NVMe SSDs, or increase CPU cores. I’d present a trade‑off matrix: cost vs. latency, highlighting that this benchmark proves Kafka’s linear scalability on commodity hardware when tuned for write‑heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
