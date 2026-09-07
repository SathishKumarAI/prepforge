---
qid: ing_50c2b697bb__faang__local
question: 'Explain: Kafka in 30 seconds — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 477
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:52:01-05:00'
sources: []
---

**Clarify**  
You’re asking how LinkedIn demonstrated that a single‑node Kafka cluster can sustain ~2 M writes/sec on inexpensive hardware, and what the key take‑aways are for building high‑throughput streaming pipelines.

**Approach**  
1. **Hardware & config** – 3 x low‑cost servers (e.g., Intel Xeon E5‑2680 v4, 64 GB RAM, 1 TB SSD).  
2. **Cluster layout** – 1 broker per machine, 1‑zone replication factor = 1 for latency.  
3. **Topic design** – 10 partitions, each with a dedicated consumer/producer thread.  
4. **Producer settings** – batch size 64 KB, linger.ms = 5 ms, compression LZ4, idempotence off.  
5. **Consumer side** – `fetch.min.bytes` = 1 MB, `max.poll.records` = 10 000 to keep the broker busy.

**Depth**  
- Each producer thread writes ~200 kB/s; 10 threads per node → 2 M records/s total.  
- Latency stays under 5 ms because batch‑driven IO and SSD read/write speeds dominate.  
- Throughput is bounded by disk throughput (≈500 MB/s per SSD) and network bandwidth (1 Gbps).  
- Using LZ4 reduces CPU overhead while keeping compression ratio ~2:1.

**Edge Cases**  
- Sudden spike → back‑pressure on producers; need to monitor `queue.memory` usage.  
- Disk failure → data loss if replication=1; add a standby broker for safety.  
- Skewed partition keys → uneven load, drop into a single partition.

**Optimize & Communicate**  
- Move to 10 Gbps NICs or NVMe SSDs to push >5 M writes/s.  
- Enable `controlled.shutdown` and `unclean.leader.election.enable=false` for graceful scaling.  
- Highlight that the benchmark proves Kafka’s linear scalability with cheap hardware, but real deployments must factor in durability, fault‑tolerance, and monitoring overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
