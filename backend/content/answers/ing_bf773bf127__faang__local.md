---
qid: ing_bf773bf127__faang__local
question: 'Explain: Benchmarking Apache Kafka - 2 Million Writes Per Second (On Three
  Cheap Machines)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 688
total_tokens: 930
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:27-05:00'
sources: []
---

**Clarify**  
The task is to evaluate whether a minimal‑cost deployment of Apache Kafka can sustain **≈ 2 M writes/second**.  
Key assumptions to confirm:  

* Write pattern – pure “produce” with no reads or compaction.  
* Topic configuration – 1 partition per broker, default replication factor (1).  
* Hardware – three identical commodity servers (e.g., 8 CPU, 32 GB RAM, SATA SSD).  
* Network – 10 GbE interconnects.  

**Approach**  
1. **Baseline test**: Run `kafka-producer-perf-test.sh` on each broker with a small message size (1 KB) and record throughput.  
2. **Scale up**: Incrementally increase the number of producers, batch size, linger.ms, and compression to find the sweet spot.  
3. **Measure bottlenecks**: Use `sar`, `iostat`, `perf` to capture CPU, disk I/O, network utilization.  
4. **Stress test**: Once near target throughput, run a 10‑minute continuous burst and monitor for errors or dropped records.  

**Depth**  
* **CPU** – Each broker must serialize the record header and update in‑memory log pointers; with 2 M/s at 1 KB each ≈ 2 GB/s of data, CPU will be the limiting factor before disk I/O.  
* **Disk** – Kafka writes sequentially to a log file; on SATA SSDs ~400 MB/s per drive, three drives give ~1.2 GB/s. To reach 2 GB/s we need at least one NVMe or use multiple disks in RAID‑0.  
* **Network** – 10 GbE can handle ≈ 1.25 GB/s; with replication factor 1, the network is fine.  

If the baseline shows ~600–800 k writes/s per broker, we need to add more partitions or scale horizontally (add a fourth cheap node).  

**Edge Cases**  
* **Message size variance** – larger messages increase disk I/O and latency.  
* **Producer failures** – unhandled exceptions can stall throughput.  
* **Broker restarts** – re‑balancing partitions may drop writes temporarily.  

**Optimize & Communicate**  
1. **Batching**: Increase `batch.size` to 64 KB and `linger.ms` to 5 ms; this reduces per‑record overhead by ~30 %.  
2. **Compression**: Switch to `snappy` or `lz4`; saves bandwidth but adds CPU load—profile trade‑off.  
3. **Partition count**: Add a fourth broker to distribute load; each broker then handles ~500k writes/s, comfortably below the 600k baseline.  

Explain results clearly: “With three commodity nodes we hit ≈ 800 k writes/sec per broker; scaling to four nodes pushes us past the 2 M target while keeping CPU <70 % and disk I/O <80 %. This demonstrates that a minimal‑cost cluster can meet high write throughput if partitioning, batching, and compression are tuned appropriately.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
