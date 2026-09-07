---
qid: ing_7ba1924db8__faang__local
question: 'Explain: Three producers, 3x async replication — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 497
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:31:45-05:00'
sources: []
---

**Clarify**  
You’re asking how LinkedIn’s benchmark achieved *2 M writes/sec* on a *three‑node* Kafka cluster using *3× asynchronous replication*. Confirm the assumptions:  
1. Only producer traffic (no consumers).  
2. Each node is commodity hardware (e.g., 8 CPU cores, 32 GB RAM).  
3. Replication factor = 3, with `acks=0` or `acks=1` to avoid round‑trip latency.

**Approach**  
Explain the three key levers:  
- **Parallelism** – 3 brokers + multiple partitions → >3× throughput.  
- **Batching & compression** – large batches (e.g., 1 MB) reduce I/O ops; Snappy/Deflate compress to cut network load.  
- **Asynchronous replication** – producers write locally, broker forwards asynchronously; the leader’s `acks` only wait for local disk flush.

**Depth**  
- Each broker handles ~667 k writes/sec.  
- With 512 KB batch size and 10 ms latency per write, throughput ≈ (512 KB/10 ms) × 3 ≈ 2 M msg/s.  
- Disk: SSDs with ≥3000 IOPS sustain this; network: 1 GbE is sufficient because replication traffic is asynchronous and compressed.  
- Complexity: O(1) per record write, but memory pressure grows with batch size; monitor `buffer.memory`.

**Edge Cases**  
- Sudden spike → backlog in broker’s send queue → latency ↑.  
- Node failure → leader election adds ~100 ms pause.  
- Compression disabled → network saturates.

**Optimize & Communicate**  
- Use `linger.ms=5` to accumulate more records per batch, improving compression ratio.  
- Tune `max.in.flight.requests.per.connection` to 1 for strict ordering if needed.  
- Explain that this setup trades durability (3× replication) for latency: writes are acknowledged after local disk flush, not waiting for replicas.  

**Summary**  
By maximizing parallelism across three cheap nodes, batching/compressing records, and delegating replication asynchronously, LinkedIn achieved >2 M writes/sec with modest hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
