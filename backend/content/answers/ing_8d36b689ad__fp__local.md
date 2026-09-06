---
qid: ing_8d36b689ad__fp__local
question: 'Explain: Topics — Benchmarking Apache Kafka: 2 Million Writes Per Second
  (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 484
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:12-05:00'
sources: []
---

**Why can three cheap boxes write 2 M records/sec into Kafka?**

Kafka is a *log‑based* message store: each partition is an append‑only file whose head pointer moves forward only.  
The cost of writing is therefore dominated by two low‑level operations:

| Operation | What it does | Why it’s cheap on commodity hardware |
|-----------|--------------|--------------------------------------|
| **OS page cache** | New records are first written to a buffer in RAM and flushed asynchronously. | 2 M B/s ≈ 200 MB/s fits comfortably inside the 4–8 GB of RAM on a typical laptop; writes stay in memory for milliseconds before disk I/O occurs. |
| **Sequential disk seeks** | The log is written sequentially, so each write incurs only one seek. | Cheap SSDs/rotational drives still deliver >200 MB/s sequential throughput; the latency penalty per record is ~50 µs, far below the 10‑µs write window of a single CPU core. |

The *real* bottleneck is **CPU entropy**: Kafka’s producer serialises records (Avro/Gzip) and updates the in‑memory index for each partition. On three low‑end CPUs this cost scales linearly with the number of partitions; 2 M writes/s ≈ 2000 writes per core, which modern cores can handle when the serialization is lightweight.

**Deeper principle:**  
Kafka turns *distributed consensus* into a *probabilistic* trade‑off: replication factor 1 removes the Paxos/ Raft overhead entirely. With no leader election and only local file I/O, throughput becomes an almost pure function of disk+RAM speed—an instance of “law of diminishing returns” in distributed systems.

**Non‑obvious insight:**  
Most people think more machines always help. In this benchmark, adding a fourth cheap node actually hurts: the producer must round‑robin across 4 partitions, increasing the average seek distance on each disk and thus raising CPU cache misses. The sweet spot is when the *per‑node* write rate just saturates the local disk’s sequential bandwidth—adding capacity beyond that only adds coordination overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
