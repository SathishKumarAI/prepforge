---
qid: ing_4a4e1f5dbe__fp__local
question: 'Explain: End-to-end Latency — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 514
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:43:12-05:00'
sources: []
---

**Why “end‑to‑end latency” matters in a high‑throughput log**

A distributed log like Apache Kafka is essentially an append‑only stream that guarantees *exactly‑once* ordering per partition while serving many consumers concurrently.  
The *fundamental problem* is: **how fast can we write a record to disk and make it available for read, while keeping the system stable?**  
Latency is not just “time to hit the SSD”; it’s the sum of network round‑trips, serialization, consensus, and I/O queuing. Minimizing each component yields a linear reduction in overall latency.

**Benchmarking 2 M writes/sec on three cheap machines**

1. **CPU‑bound serialization** – Using a zero‑copy protocol (e.g., Protobuf or Avro with minimal reflection) reduces CPU cycles per message to ~200 ns, leaving headroom for I/O.
2. **Batching & preallocation** – Messages are aggregated into 1 MB blocks; the OS write cache absorbs bursts, while a single `fsync` per batch keeps durability guarantees without per‑message disk seeks.
3. **Optimized network stack** – TCP tuning (`TCP_NODELAY`, large send/receive buffers) and using RDMA‑enabled NICs (if available) cut round‑trip latency to ~30 µs.
4. **Partitioned leaders** – Three machines each host a leader for a distinct set of partitions, distributing the write load linearly.

The combined effect yields ≈ 250 µs per record on average—well below 1 ms—even with commodity SSDs and no specialized hardware.

**Non‑obvious insight**

*Latency is bounded by the **slowest link in the append chain**, not just disk speed.*  
Even if disks can sustain >10 GB/s, a single network packet loss forces a retransmission that stalls the entire partition until it’s retried. Therefore, end‑to‑end latency is more sensitive to **packet reliability** than raw throughput. Designing for *loss‑tolerant* batching (e.g., using idempotent writes) and *backpressure* mechanisms turns out to be the key lever, often overlooked when people focus solely on I/O performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
