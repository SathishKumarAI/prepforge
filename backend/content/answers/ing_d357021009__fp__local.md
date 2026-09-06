---
qid: ing_d357021009__fp__local
question: 'Explain: Single Consumer — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 385
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:21-05:00'
sources: []
---

**Why the “3‑cheap‑machines” Kafka test matters**

At its core, Kafka is a *distributed commit‑log*. The performance question boils down to two limits:  
1) **I/O bandwidth** – every write must be appended to disk (or SSD) and then replicated over the network.  
2) **CPU & serialization overhead** – each message passes through producers, brokers, and consumers, incurring deserialization, compression, and transaction bookkeeping.

The LinkedIn benchmark pushes the first limit by saturating the *write path* of three modest servers: a single producer streams 2 M records/s to one broker that forwards them to two replicas. The throughput reaches ≈ 3 GB/s total I/O, which is essentially the maximum sustainable rate on commodity SATA drives plus 10‑GbE links when the system is tuned (large batch sizes, zero‑copy writes).  

The second limit—CPU—is revealed by the fact that, even with minimal record size (≈ 100 bytes), CPU usage spikes near 90 % on each node. Thus the benchmark demonstrates that Kafka’s architecture scales linearly only until I/O saturates; beyond that, serialization and network overhead dominate.

**Non‑obvious insight:**  
Because Kafka uses *exactly once* semantics per partition via idempotent producers, every write carries a sequence number that must be stored in the log. The benchmark implicitly shows that this metadata cost is negligible compared to raw I/O—yet it guarantees linearizability without extra coordination. Hence, the 2 M writes/s figure isn’t just “fast”; it proves that Kafka’s design can sustain high throughput while preserving strong consistency on inexpensive hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
