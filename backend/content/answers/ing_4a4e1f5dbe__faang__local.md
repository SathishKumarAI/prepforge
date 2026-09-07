---
qid: ing_4a4e1f5dbe__faang__local
question: 'Explain: End-to-end Latency — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 485
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:37:21-05:00'
sources: []
---

**Clarify**  
The question asks how LinkedIn benchmarked an *end‑to‑end* latency for **Apache Kafka** while achieving **2 M writes/sec** using only three inexpensive servers. Clarify assumptions: are we measuring record‑level latency (produce → ACK) or total pipeline latency? Do we include network, disk I/O, and broker overhead? What hardware specs and OS tuning were used?

**Approach**  
1. **Set up a minimal cluster** – 3 brokers on cheap commodity machines (e.g., Xeon E5‑2600, 32 GB RAM).  
2. **Configure Kafka** – disable unneeded features (no SSL, no inter‑broker replication), enable *log.segment.bytes* large, set *num.partitions* high to spread load.  
3. **Produce traffic** – a single producer thread with a bulk send of 100 kB messages; use `acks=1` for lower latency.  
4. **Measure latency** – instrument the producer to timestamp each message before send and after ACK, aggregate per‑second throughput and average latency.

**Depth**  
- Throughput ≈ 2 M writes/sec is achieved by *partitioning* (≈200 partitions) so each broker handles ~667k writes/sec.  
- Latency stays below ~10 ms because the producer batches requests, disk I/O is buffered, and brokers use asynchronous replication.  
- Complexity: O(1) per write; memory‑bound on CPU, disk‑bound on SSDs.

**Edge Cases**  
- Network congestion or a single broker failure spikes latency.  
- Message size > default `max.message.bytes` causes fragmentation.  
- High GC pause on Java VM can temporarily raise latency.

**Optimize & Communicate**  
To improve further: enable *flush.timeout.ms* tuning, use *kafka.server.KafkaApis* backpressure, or upgrade to NVMe disks. When explaining, emphasize the trade‑off between cost and latency, how partition count scales linearly with throughput, and why a small cluster can hit 2 M writes/sec when each node is lightly loaded. This demonstrates clear problem framing, systematic testing, and deep technical insight—all key for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
