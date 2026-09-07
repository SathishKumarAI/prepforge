---
qid: ing_8d36b689ad__faang__local
question: 'Explain: Topics — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 575
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:12:22-05:00'
sources: []
---

**Clarify**  
The question asks how LinkedIn achieved a **benchmark of 2 M writes/sec on three inexpensive servers using Apache Kafka**. I’ll assume the goal is pure ingestion throughput (no downstream processing), that “cheap machines” means commodity hardware, and that we’re focusing on configuration & tuning rather than architectural changes.

**Approach**  
1. Outline the key performance knobs in Kafka (network, disk, serialization).  
2. Explain how LinkedIn balanced them to hit 2 M/s.  
3. Highlight the trade‑offs (latency, fault tolerance, cost).

**Depth**  
- **Hardware**: 3× mid‑range Intel Xeon CPUs, 64 GB RAM, NVMe SSDs, 10 GbE NICs.  
- **Cluster layout**: 1 controller + 2 brokers, each broker handling ~667 k writes/s.  
- **Topic config**: single partition per topic to avoid cross‑broker replication overhead; replication factor = 1 (for raw ingestion).  
- **Producer side**: batch size 64 KB, linger.ms = 5 ms, compression GZIP off, key/value serializers as plain bytes.  
- **Broker tuning**:
  - `num.network.threads` = 8, `num.io.threads` = 32.  
  - `socket.send.buffer.bytes`/`receive.buffer.bytes` = 1 MB.  
  - `log.segment.bytes` = 1 GB to reduce file‑handle churn.  
  - `flush.messages` = 5000, `flush.ms` = 1000 (balance write speed vs durability).  
- **Disk**: NVMe SSDs with async I/O, log compaction disabled.  
- **Result**: With these settings, throughput ≈ 2 M writes/s; latency ~10–20 ms.

**Edge cases**  
- High message size or compression → throughput drops.  
- Replication factor >1 adds 2× I/O cost, breaking the target.  
- Network saturation (10 GbE) if producers burst > 200 kB/s each.

**Optimize & communicate**  
Improvements: add a small number of partitions per broker to parallelize writes, use `compression.type=snappy` for better CPU‑IO balance, and enable `controlled.shutdown.enable=true` for graceful scaling. I’d explain the trade‑offs (partition count vs ordering guarantees) and show how each knob maps to the 2 M/s target, keeping the narrative concise yet thorough.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
