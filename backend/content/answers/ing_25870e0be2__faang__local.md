---
qid: ing_25870e0be2__faang__local
question: 'Explain: Replicating this test — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 572
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:12-05:00'
sources: []
---

**Clarify**  
You’re asked to describe how a team replicated the “2 M writes/sec” Kafka benchmark from LinkedIn on inexpensive hardware.  
Assumptions I’d confirm:  

- Hardware specs (CPU, RAM, SSD type, network).  
- Software stack (Kafka version, OS, JVM).  
- Workload details (producer rate, message size, key distribution, partition count).  
- Metrics captured (throughput, latency, replication lag).  

**Approach**  
1. **Environment prep** – Spin up 3 x commodity servers (e.g., Intel Xeon E5‑2600, 32 GB RAM, NVMe SSDs, 10 GbE NICs).  
2. **Kafka config tuning** –  
   - `num.partitions` = 200 k (≈10 M partitions total across 3 brokers).  
   - `replication.factor` = 1 (to avoid network bottleneck).  
   - Increase `socket.receive.buffer.bytes`, `socket.send.buffer.bytes`.  
   - Set `max.message.bytes` > payload size.  
   - Disable `auto.create.topics.enable`.  
3. **Producer load** – Use the Kafka Producer Performance Test (`producer-perf-test.sh`) with:  
   - 500 k concurrent producers (threads).  
   - 100‑byte records, random keys.  
   - Batch size = 32 KB, linger.ms=0.  
4. **Monitoring** – Capture broker I/O, CPU, network via JMX and OS tools; log throughput/latency.

**Depth**  
- Each broker handles ~667k writes/sec → ≈1 GB/s disk write (NVMe).  
- Throughput is bounded by disk bandwidth; 10 GbE provides ample headroom.  
- Latency stays under 5 ms because replication factor = 1 and no network hops.  
- Complexity: O(1) per message for writes; memory pressure mitigated by large socket buffers.

**Edge Cases**  
- Disk failure → test with one SSD offline.  
- Burst traffic >2 M/sec → observe back‑pressure, producer throttling.  
- Network congestion on 10 GbE → monitor packet loss.  

**Optimize & Communicate**  
To push beyond 2 M, I’d add a second replication factor and use a mirrored set of SSDs per broker (RAID‑0). I would explain the trade‑off: higher durability vs. network overhead. Finally, I’d present results in a dashboard and summarize that the benchmark is achievable on cheap hardware when you strip down redundancy and focus on raw I/O throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
