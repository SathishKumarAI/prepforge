---
qid: ing_6f46b50ddb__faang__local
question: 'Explain: Jay Kreps April 27, 2014 — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 514
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:14-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of Jay Kreps’s April‑27‑2014 LinkedIn blog post on benchmarking Apache Kafka—specifically how he achieved 2 M writes/sec across three inexpensive servers. I’ll assume the reader knows Kafka basics but not this particular benchmark.

**Approach**  
1. Summarize the experiment setup (hardware, cluster size).  
2. Highlight key tuning knobs used (partitions, replication factor, batch size).  
3. Explain the performance measurement methodology.  
4. Note the implications for production scaling.

**Depth**  
Kreps ran a 3‑node Kafka cluster on commodity Intel Xeon E3‑1220 v5 CPUs, 16 GB RAM, SATA SSDs, and 1 GbE NICs—no high‑end hardware or custom networking. He used the open‑source `kafka-producer-perf-test.sh` tool to generate a single producer that sent 1‑byte messages.  
Key knobs:  
- **Partitions**: 200 per topic (≈ 66 per broker) to parallelize I/O.  
- **Replication factor**: 2, so each write hit two disks but avoided extra network hops.  
- **Batch size / linger.ms**: 16 KB batches with 5 ms linger to amortize send overhead.  
- **Compression**: disabled (uncompressed messages give the cleanest throughput figure).  

The producer achieved ~2 M records/sec, roughly 200 MB/s per broker, staying well below disk and network saturation (≈ 30–40 % of SATA SSD peak). The test proved that with modest hardware and careful partitioning, Kafka can sustain millions of writes per second.

**Edge cases**  
- **Burst traffic**: the benchmark used steady streams; real workloads may have spikes.  
- **Fault tolerance**: replication factor 2 limits durability guarantees.  
- **Large messages**: would change batch efficiency and throughput.

**Optimize & communicate**  
For a production system, increase replication to 3 for safety, upgrade NICs to 10 GbE, and use SSDs with higher IOPS if latency matters. Communicate results by showing the linear scaling curve from 1 to 3 nodes and emphasizing that cost‑effective hardware can meet high write loads when tuned correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
