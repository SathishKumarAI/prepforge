---
qid: ing_f09d3ad1bc__faang__local
question: 'Explain: Append-Only DB Property — Database-Internals/AppendOnlyProperty.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 527
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:58:43-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Append‑Only* property in database internals—specifically how a write‑only log (WAL) or similar mechanism guarantees durability and simplifies concurrency. Key assumptions: we’re dealing with a storage engine that persists data on disk, supports crash recovery, and allows concurrent readers.

**Approach**  
1. Define the append‑only log concept.  
2. Show why every mutation is recorded as an immutable record.  
3. Explain how this aids recovery, snapshotting, and MVCC.  
4. Touch on trade‑offs (space, compaction).

**Depth**  
An append‑only database writes every change to a sequential log file; each entry contains the operation type, key, new value, and a timestamp/sequence number. Because the log is never modified in place, crash recovery is trivial: replay the log from the last checkpoint to reconstruct the latest state. Readers can continue using an immutable snapshot (e.g., via MVCC) while writers append new entries. Append‑only also guarantees *exactly‑once* semantics—each record appears once and only once on disk. For updates, a new record is appended; the old value remains in the log until a compaction pass rewrites a compacted file. Complexity: appends are O(1) amortized (sequential writes), lookups require indexing or probing into multiple files but remain efficient with B‑trees or hash tables.

**Edge Cases**  
*Large updates*: can bloat the log; solved by compaction.  
*Very frequent reads*: may suffer if many old records linger—indexing mitigates this.  
*Disk failure before flush*: WAL’s fsync ensures durability, but missing syncs risk data loss.

**Optimize & Communicate**  
To reduce space, implement background compaction that merges multiple log segments into a clean file, dropping obsolete entries. Offer configurable checkpoint intervals to balance write throughput against recovery time. In an interview, I’d sketch this flow on a whiteboard, highlight the linear‑time append and constant‑time crash recovery, and contrast it with in‑place updates that require complex locking or logging mechanisms.

> **Takeaway:** Append‑only storage turns durability into a simple “write once” operation, enabling fast, lock‑free writes and straightforward crash recovery at the cost of extra space, which is mitigated by periodic compaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
