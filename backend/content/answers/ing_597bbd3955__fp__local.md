---
qid: ing_597bbd3955__fp__local
question: 'Explain: Uh oh! — SSTable compaction and compaction strategies \u00b7 scylladb/scylladb
  Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 497
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:14:42-05:00'
sources: []
---

**Why compaction is inevitable**

In a LSM‑style store every write goes to an immutable *SSTable* (sorted string table).  
The system can never delete or overwrite rows in place; it must create a newer SSTable that supersedes older ones.  
Thus, over time the key space becomes fragmented: many SSTables contain overlapping ranges, and obsolete records pile up, inflating read latency and disk usage.

**What compaction does**

Compaction scans a set of SSTables, merges them into a new one, discarding tombstoned or superseded rows.  
It is an *optimization* problem: choose which tables to merge so that the future cost (reads + writes) is minimized while keeping write amplification low.

**Strategies as a trade‑off curve**

| Strategy | When it shines | Key parameter |
|----------|----------------|---------------|
| **Size‑Tiered** | High write throughput, many small SSTables | `sstable_size` |
| **Leveled** | Predictable read latency, moderate writes | `max_tables_per_level` |
| **Time‑Window** | Time‑based data (e.g., IoT logs) | `window_ms` |

Each strategy defines a *cost function* that balances:

1. **Write amplification** – extra work per write due to merging.
2. **Read amplification** – number of SSTables probed for a key.
3. **Storage overhead** – duplicated data during merge.

The system tunes parameters so the derivative of total cost with respect to each parameter is near zero—an application of *convex optimization* in practice.

**Non‑obvious insight**

Most users think compaction only reduces disk usage, but it also *shifts* read latency.  
In Size‑Tiered compaction, a key may live in dozens of SSTables; the first read incurs high cost.  
Leveled compaction keeps at most one table per level for a given key, guaranteeing a logarithmic bound on reads regardless of data size.  
Thus, choosing a strategy is not merely about space—it’s about bounding *worst‑case* latency, which is critical in low‑latency workloads like real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
