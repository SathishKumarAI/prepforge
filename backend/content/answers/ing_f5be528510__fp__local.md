---
qid: ing_f5be528510__fp__local
question: 'Explain: Rate limiting — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 578
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:41:51-05:00'
sources: []
---

### Why Rate‑Limiting Matters for SSTable Compaction

When a write stream reaches a storage engine, it first lands in an **in‑memory memtable** and then is flushed to disk as an **SSTable** (sorted string table).  
Over time the keyspace contains many overlapping SSTables; each read may need to probe several of them.  
Compaction merges these SSTables into fewer, larger ones, reducing read amplification and reclaiming space.  

The *fundamental problem* is that compaction is a **write‑intensive** operation (it rewrites data) but must coexist with user traffic. If compaction runs at full speed, it can starve the I/O scheduler, inflating latency for real queries.  
Hence we treat compaction as an **optimization problem**: *maximize space reclamation and read performance while keeping the queue of pending compactions bounded*.  

### Rate‑Limiting Mechanism

ScyllaDB implements a token‑bucket algorithm per node:

1. **Tokens** represent I/O budget (bytes or operations).  
2. A background thread **drains tokens** at a configurable rate (e.g., 50 MiB/s).  
3. Compaction tasks consume tokens before they can execute; if the bucket is empty, the task stalls until more tokens are available.

This guarantees that compaction never consumes more than its share of I/O bandwidth, ensuring predictable latency for foreground queries.

### Compaction Strategies

| Strategy | When to Use | Key Idea |
|----------|-------------|----------|
| **Size‑Tiered** | High write throughput | Merge SSTables of similar size; simple but may leave many small files. |
| **Leveled** | Low read amplification required | Keep each level ≤ 10× the previous; guarantees at most log₁₀N levels per key. |
| **Universal (CQL‑specific)** | Variable write patterns | Dynamically merge based on *age* and *size*, targeting minimal overlap for hot data. |

ScyllaDB’s compaction engine automatically selects a strategy per table, but users can override via `compaction_strategy` options.

### Non‑Obvious Insight

Compaction **does not merely reduce the number of files**; it also reshapes the *data distribution* on disk.  
By scheduling compactions in *waves* that respect token limits, ScyllaDB prevents “write stalls” while simultaneously keeping the *read path* flat. This dual‑objective scheduling is a practical embodiment of **resource‑aware convex optimization**, where the cost function balances latency versus space utilization under hard I/O constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
