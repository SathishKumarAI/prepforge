---
qid: ing_332e7010c8__fp__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB
  - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 439
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:53:47-05:00'
sources: []
---

**Why Discord moved billions of rows from Cassandra → ScyllaDB**

1. **Fundamental problem**  
   Discord stores every message in a wide‑column store. The workload is *write‑heavy* (≈ 10 k writes/second per shard) and *read‑light*, with a need for predictable latency at 99.9% quantile.

2. **Cassandra’s limitations**  
   - *Per‑partition overhead*: Cassandra assigns one vnode per node, but its compaction strategy (SSTable merges) generates many small files.  
   - *GC pauses*: Hot key “hotspots” caused frequent memtable flushes and long garbage‑collection cycles.  
   - *Lack of tunable consistency*: The eventual‑consistency model introduced subtle race conditions for real‑time chat.

3. **ScyllaDB’s design**  
   - *Thread‑per‑core architecture* eliminates GC pauses; each core runs a lightweight thread that never blocks.  
   - *Column cache and adaptive compaction* keep hot partitions in memory, reducing disk I/O.  
   - *True linear scalability*: Adding nodes increases throughput proportionally because work is distributed across cores.

4. **Why it must work this way**  
   The trade‑off between consistency and latency is governed by the CAP theorem: for a globally consistent chat service, we accept “C” (consistency) and “P” (partition tolerance), thus needing low‑latency reads. Scylla’s architecture satisfies this by moving more processing to CPU cores rather than disk I/O.

5. **Non‑obvious insight**  
   The *real* bottleneck was not the network or storage, but the *memory pressure* of Cassandra’s compaction pipeline. By switching to a memory‑centric design, Discord gained ~3× throughput without changing its application layer—showing that for write‑heavy workloads, optimizing the data‑plane’s concurrency model can be more effective than merely scaling hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
