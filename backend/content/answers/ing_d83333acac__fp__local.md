---
qid: ing_d83333acac__fp__local
question: 'Explain: When to start using compacted tables — SSTable compaction and
  compaction strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 474
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:40:11-05:00'
sources: []
---

### Why and When to Compartmentalize Data in ScyllaDB

At its core, a **SSTable** is an immutable, sorted file that stores a snapshot of data at a point in time. The fundamental problem it solves is *write amplification*: every update must be appended to a new file, otherwise the underlying LSM tree would have to rewrite large blocks on each write, crippling throughput.

Compaction reorganizes these immutable files into fewer, larger SSTables. This reduces read‑time merge operations, frees space from tombstoned rows, and keeps compression efficient.  

**When to start:**

| Scenario | Compaction strategy | Rationale |
|----------|---------------------|-----------|
| **High write volume with many updates or deletes** | *Size-tiered* (default) | Balances I/O by merging small SSTables into larger ones; amortizes the cost of compaction across many writes. |
| **Frequent point‑lookups on a narrow keyspace** | *Leveled* | Keeps each level size bounded, guaranteeing O(log N) reads and predictable latency. |
| **Heavy read amplification (e.g., hot keys)** | *Compaction window* or *Time-window* | Allows compaction to target recent data first, keeping hot SSTables small and quickly merged. |
| **Resource‑constrained nodes** | *Custom* or *Hybrid* | Tailor the compaction aggressiveness to available disk I/O and CPU, preventing thrashing during peak load. |

A non‑obvious insight: **tombstone density directly influences compaction cost**. Even if you have few deletes, a high tombstone-to-data ratio can cause compactions to read and rewrite large portions of SSTables without producing useful data. Monitoring this ratio and adjusting the *compaction threshold* or *tombstone grace period* is often more effective than simply increasing compaction frequency.

In short, start compacting when you notice that reads are merging many SSTables or disk space is being wasted by obsolete data—then choose a strategy that aligns with your write/read patterns and system resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
