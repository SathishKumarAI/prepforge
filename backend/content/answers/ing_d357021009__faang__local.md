---
qid: ing_d357021009__faang__local
question: 'Explain: Single Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 648
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:42-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how a single consumer can benchmark *Apache Kafka* at **2 M writes/second** on **three inexpensive machines** (the “LinkedIn Engineering” case).  
Assumptions I’d confirm:  
- The writer is a *single producer*, not parallel.  
- All nodes run the same OS, JVM, and Kafka 2.x+.  
- “Cheap” means commodity servers (e.g., 8 CPU cores, 32 GB RAM).  
- Network bandwidth is not saturated by other traffic.

**Approach**  
1. **Cluster layout** – one broker per machine, each with a dedicated disk array.  
2. **Topic configuration** – single partition, replication factor = 1 (no intra‑cluster sync overhead).  
3. **Producer tuning** – batch size ≈ 32 KB, linger ≈ 5 ms, idempotence off to reduce latency.  
4. **Consumer design** – a *single* consumer pulling from the sole partition, processing immediately.  
5. **Measurement** – use Kafka’s `--topic` command or a custom client that logs timestamp differences.

**Depth**  
- **Throughput calculation**: 2 M msgs/s × ~16 B payload ≈ 32 MB/s → fits comfortably in RAM and disk I/O per broker (~10–15 GB/s).  
- **Disk strategy** – use SSDs; set `log.segment.bytes` to a large value (e.g., 1 GB) to reduce fsync frequency.  
- **JVM GC** – enable G1, set heap ~4 GB, avoid CMS/Parallel collectors that pause the producer thread.  
- **Network stack** – tune TCP buffer sizes (`net.core.wmem_max`, `rmem_max`) and disable Nagle’s algorithm (`TCP_NODELAY`).  
- **Consumer lag** – with one consumer and one partition, no shuffle overhead; commit offsets asynchronously to avoid blocking.

**Edge Cases**  
- If the producer thread blocks (e.g., GC pause > 5 ms), writes drop below target.  
- Disk saturation on a single machine would throttle throughput.  
- Replication factor > 1 adds log replication traffic, breaking the 2 M/s figure.  
- Network congestion or broker restarts cause spikes in latency.

**Optimize & Communicate**  
Improvements:  
- Increase partitions to parallelize writes if scaling beyond 2 M/s.  
- Enable compression (`snappy`/`lz4`) to reduce network load, at the cost of CPU.  
- Add a second consumer for read‑throughput tests; keep partition count low to preserve ordering.

I’d explain this as: “By constraining replication, using a single partition, and tuning producer/consumer I/O, LinkedIn’s engineers demonstrated that three commodity nodes can sustain 2 M writes/sec—essentially a proof of concept that Kafka’s design scales linearly with hardware when you remove coordination overhead.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
