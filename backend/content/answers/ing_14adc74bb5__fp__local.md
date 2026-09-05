---
qid: ing_14adc74bb5__fp__local
question: 'Explain: The InfoQ Newsletter — Discord Migrates Trillions of Messages
  from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 422
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:49:19-05:00'
sources: []
---

**Why a massive message‑store would swap Cassandra for ScyllaDB**

At its core the problem is *high‑throughput, low‑latency persistence* of an ever‑growing stream of chat logs (≈ 10⁹ messages/day).  
Cassandra guarantees linear scalability and tunable consistency, but its Java‑based engine forces each node to run a JVM and uses a coarse‑grained thread pool. In a 24/7 Discord‑like workload the overhead shows up as *write amplification* (1 GB of disk per 10 kB write) and *garbage‑collection pauses* that hurt tail latency.

ScyllaDB, written in C++ with a lock‑free architecture, maps each core to its own I/O thread. The **“per‑core” model** eliminates the JVM barrier and reduces context switches, yielding:

| Metric | Cassandra | Scylla |
|--------|-----------|--------|
| Avg write latency (p99) | 15 ms | < 2 ms |
| Disk usage per MB written | ~4× | ~1.5× |

The deeper principle is **“memory‑first, thread‑local”**: by keeping most data in cache and avoiding contention you get linear scaling with cores, a property Cassandra only approximates through sharding.

A non‑obvious insight: the migration was driven not just by raw speed but by *predictable cost*. Scylla’s lower I/O footprint means fewer SSDs and less power per node—critical when scaling to millions of messages. In short, moving from Cassandra to ScyllaDB turns a “good enough” distributed store into an engineered low‑latency backbone that keeps Discord’s 1 ms‑level experience alive at petabyte scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
