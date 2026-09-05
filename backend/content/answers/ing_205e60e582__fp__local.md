---
qid: ing_205e60e582__fp__local
question: 'Explain: Merging partitions — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 549
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:15:01-05:00'
sources: []
---

## Why “Merging Partitions” Must Exist in a Log‑Structured Store

A log‑structured key/value engine writes every update as an immutable *SSTable* (sorted string table).  
When the same partition is updated, new SSTables are appended; the old ones never change.  
If we naïvely keep all versions, reads must merge many tables in memory, and disk space explodes.

**Fundamental problem:**  
Given a set of immutable sorted lists \(L_1,\dots,L_k\) that together cover the same key range (a *partition*), produce a single list that is:
1. **Sorted** – to support efficient binary search on disk.  
2. **Deduplicated** – keeping only the newest version of each key.  
3. **Compact** – with minimal I/O and space overhead.

The solution is a *merge‑reduce* algorithm: scan all lists in lockstep (like a k‑way merge), emit the highest‑timestamp value for each key, and drop older ones. This operation is linear in the total size of the inputs—optimal because every byte must be read at least once.

### Compaction Strategies

1. **Tiered** – small SSTables are merged into larger ones when a threshold is reached.  
   *Insight:* It tolerates high write throughput by postponing merges; the merge cost is amortized over many writes, but may lead to higher read amplification if not tuned.

2. **Size‑Tiered (SSTable‑Level)** – SSTables are grouped by size level; a merge occurs only when enough tables of the same size exist.  
   *Insight:* This keeps the number of merges bounded per write path and reduces compaction latency spikes, but can create “stale” large tables if writes are uneven.

3. **Leveled** – each level has a fixed capacity; new SSTables trigger a cascade merge that guarantees at most one copy of any key in each level.  
   *Insight:* Guarantees log‑linear read amplification regardless of write pattern, but incurs higher write cost due to more aggressive merging.

### Non‑Obvious Takeaway

**Compaction is not just cleanup—it is an information‑theoretic compression step.**  
By discarding obsolete versions, we reduce entropy in the on‑disk representation, enabling better use of storage and faster range scans. A poorly chosen strategy can inadvertently increase this entropy, turning a compact log into a bloated index that defeats the purpose of immutable writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
