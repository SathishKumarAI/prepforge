---
qid: ing_27bf2727d5__fp__local
question: 'Explain: Efficiency of compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 512
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:29:55-05:00'
sources: []
---

**Why compaction matters**

In a write‑ahead, immutable log–based store (Cassandra, ScyllaDB), every mutation is appended to an in‑memory memtable and then flushed as a sorted string table (SSTable). Reads scan the latest SSTables for a key. Without *compaction*, the number of SSTables grows linearly with writes, inflating disk I/O, cache pressure, and query latency. Compaction must therefore

1. **Consolidate** many small immutable files into fewer larger ones.
2. **Remove** obsolete or deleted rows (tombstones).
3. **Re‑order** data to keep hot ranges contiguous.

These objectives are governed by the *information‑theoretic* fact that any read of a key must examine at least one SSTable that contains its latest version; keeping as few such tables as possible minimizes entropy in the lookup process.

**Compaction strategies**

| Strategy | When it shines | Core idea |
|----------|----------------|-----------|
| **Size‑Tiered (ST)** | High write throughput, uniform access. | Merge random‑size SSTables into larger ones, tolerating “overlap” between key ranges; simple to implement and parallelizes well. |
| **Leveled (LT)** | Predictable read latency, low compaction cost per row. | Organize SSTables into strictly non‑overlapping levels, each level 10× bigger than the previous; guarantees at most *log₁₀ N* files per key. |
| **Time‑Window (TW)** | Time‑series workloads with predictable hot periods. | Partition by time windows, so compaction only touches recent windows; reduces disk seek for cold data. |
| **Custom/Hybrid** | Mixed workloads or storage constraints. | Combine size and level rules to balance write amplification against read efficiency. |

**Non‑obvious insight**

The *write amplification* of a strategy is not just the ratio of input to output bytes—it depends on how many times a row passes through compaction before it becomes “stale.” In ScyllaDB’s hybrid approach, tombstone suppression during compaction can reduce write amplification by **up to 30 %** compared with pure size‑tiered compaction, because rows that are already deleted are never written again. This subtle interaction between garbage collection and the immutable file model is often overlooked but critical for sustaining high throughput on SSDs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
