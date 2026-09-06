---
qid: ing_e5fc249be2__fp__local
question: 'Explain: Caching after compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 403
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:07:33-05:00'
sources: []
---

**Why “caching after compaction” matters**

A key‑value store like ScyllaDB keeps data on disk in *SSTables*—sorted files that are immutable once written. Each read can hit any SSTable; the more SSTables, the higher the I/O cost. Compaction merges these SSTables to reduce count, eliminate tombstones, and coalesce updates. However, compaction also rewrites a *new* SSTable, leaving the old ones temporarily unused but still on disk.

If those obsolete SSTables are left uncached, the next read that happens **before** they’re purged will force a disk seek to an SSTable that is about to vanish—a wasted I/O. Moreover, compaction runs concurrently with reads; if a read touches a file that’s being compacted, it may block until compaction completes, hurting latency.

**The principle**

Treat compaction as a *state transition* in the storage graph. A node (SSTable) transitions from “live” to “dead.” Caching after compaction guarantees that all nodes in the *pre‑transition* set are still resident in RAM during the transition, so readers never hit disk for a stale file. This is an application of **temporal locality**: the data that was just written and merged is likely to be read again immediately.

**Non‑obvious insight**

The real gain comes from *coordinated eviction*: when Scylla decides which SSTables to compact, it simultaneously pins those SSTables in the cache. Thus, compaction does not create a new I/O hotspot; instead, it shifts hotness from many small files to one larger file that will be accessed more efficiently by future queries. This coupling of compaction and caching is what keeps read latency predictable even under heavy write workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
