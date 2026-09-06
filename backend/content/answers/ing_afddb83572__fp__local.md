---
qid: ing_afddb83572__fp__local
question: 'Explain: Three Consumers — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 457
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:26-05:00'
sources: []
---

**Why a “three‑consumer” design can sustain 2 M writes/sec on cheap hardware**

1. **Fundamental problem – high‑throughput ingestion vs. bounded consumer capacity**  
   Kafka is built as a log‑based message broker; producers append to partitions in O(1) time, while consumers read sequentially. The bottleneck shifts from the broker (disk/CPU) to the network and consumer processing pipeline.

2. **Partitioning strategy**  
   Splitting the topic into many partitions lets multiple consumers run in parallel without contention. Each consumer thread reads one or a few partitions; its I/O is bounded by the OS page cache and the NIC bandwidth of a single cheap machine.

3. **Back‑pressure via Kafka’s flow control**  
   Consumers commit offsets only after processing. If they lag, Kafka will pause producers on that partition, preventing overload. This implicit back‑pressure keeps each consumer within its processing budget.

4. **Deep insight – *load‑shedding by design***  
   Rather than scaling out the cluster, the benchmark leverages *horizontal consumer parallelism* to match producer throughput. The “three consumers” are not a fixed ceiling; they simply represent the minimal number of threads needed so that each can keep up with its assigned partitions given the machine’s memory bandwidth and disk I/O. By tuning batch sizes and leveraging zero‑copy reads, the system stays within the 10 Gbps NIC capacity of cheap servers.

5. **Why it works on cheap machines**  
   Cheap nodes often have a single high‑speed SSD and an efficient network stack. Kafka’s log compaction means each write is just a file append; consumers read contiguous blocks that fit in cache, so CPU cycles are spent mainly on deserialization and offset commits—operations inexpensive enough to stay below the hardware limits.

In short, the benchmark demonstrates that with proper partitioning, back‑pressure, and batch sizing, Kafka can deliver multi‑million writes per second even when each consumer runs on modest commodity hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
