---
qid: ing_84c908953f__fp__local
question: 'Explain: Why compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 491
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:31-05:00'
sources: []
---

### Why compaction is indispensable for an LSM‑style key‑value store

An LSM tree writes updates as *immutable* sorted files (SSTables).  
If we let these files accumulate forever, the read path becomes a
multilevel merge: to answer one query we must scan every SSTable that
might contain the key.  The cost is linear in the number of files,
destroying the constant‑time lookup that the index guarantees.

Compaction solves this by **reorganising** the immutable files into a
small, disjoint set that preserves the same sorted order but eliminates
duplicate or obsolete entries.  
Mathematically it is a *merge* operation on sorted streams with
deduplication—exactly what external‑sort does in database internals.
The deeper principle is **information compression**: each key should be
stored once, and its most recent value must be reachable without
probing multiple places.

### Compaction strategies

| Strategy | When it shines | Trade‑off |
|----------|----------------|-----------|
| **Tiered** (many small SSTables → one large) | High write throughput; low CPU overhead | More disk I/O during compactions, higher read amplification. |
| **Size‑tiered** | Simple to implement; good for bursty workloads | Similar trade‑off to tiered but with stricter size limits. |
| **Leveling** (fixed‑size levels) | Predictable read latency; minimal write amplification | More CPU/memory during compactions, larger total disk usage. |

#### Non‑obvious insight

*Compaction is not just garbage collection—it is a **dynamic re‑encoding
process** that balances two orthogonal optimisations:*
- *Write amplification (how many times a record is rewritten)*
- *Read amplification (how many SSTables must be probed)*.

The choice of strategy can be framed as an **online convex optimisation**
problem where each compaction decision moves the system along a Pareto
front.  In practice, systems like Scylla expose knobs to shape this front,
but the underlying mathematics remains the same: every write pays for
future reads by paying a *cost‑caching* penalty that can be tuned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
