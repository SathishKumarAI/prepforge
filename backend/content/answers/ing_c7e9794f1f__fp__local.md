---
qid: ing_c7e9794f1f__fp__local
question: 'Explain: Follow us on — Discord Migrates Trillions of Messages from Cassandra
  to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 451
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:20-05:00'
sources: []
---

**Why the shift matters**

Discord’s core chat service stores every message in a distributed key‑value store that must guarantee *linearizable reads* and *write‑throughput* at the scale of millions of users per second.  
Cassandra, while highly available, is a **wide‑column store** whose consistency model is tuned for *eventual* replication.  As traffic grew, Discord hit Cassandra’s *tunable consistency* limits: read latency spiked and write amplification increased because every partition key required coordination across many nodes.

ScyllaDB solves this by re‑implementing the same CQL API on a **zero‑copy, memory‑mapped** engine written in Rust.  It removes the JVM overhead that Cassandra incurs, enabling *sub‑millisecond* read paths and *linear scalability* with added nodes.  The key insight is that Scylla’s scheduler decouples “network I/O” from “CPU work,” so a single node can sustain far higher throughput without increasing replication factor.

**The migration process**

1. **Data export** – Cassandra’s `nodetool snapshot` produces SSTable files, which are streamed to an S3‑compatible bucket.
2. **Schema translation** – Scylla accepts the same CQL schema; only minor tweaks (e.g., disabling automatic compaction) are required.
3. **Bulk ingestion** – Using `sstablesloader`, Cassandra’s SSTables are fed into Scylla in a *write‑back‑log* mode that preserves ordering and guarantees no data loss.
4. **Cutover** – After validation, the application points to Scylla; stale Cassandra nodes are retired.

The non‑obvious payoff is **predictable latency under load spikes**: because Scylla’s storage engine maps data directly into user‑space buffers, it can serve a burst of reads without queuing, which was a bottleneck in Cassandra when shards were hot.  This deterministic behavior is why Discord chose Scylla for its next‑generation messaging backbone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
