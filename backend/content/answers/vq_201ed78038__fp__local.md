---
qid: vq_201ed78038__fp__local
question: Talk about the different tombstone markers used for deletion purpose in
  Hbase?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 651
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:25:59-05:00'
sources: []
---

### Why HBase Needs Tombstones

HBase is a *write‑once* store that keeps every mutation as an immutable record in its on‑disk column families.  
When a client deletes a cell, the system cannot simply erase bytes; it must preserve the logical “last write” semantics for all readers that might still see an older snapshot.  The deletion itself becomes another immutable entry—**a tombstone**—that is visible to scans until it is safely discarded by compaction.

### Types of Tombstones

| Marker | Scope | Creation |
|--------|-------|----------|
| **Delete (cell‑level)** | Specific column value at a particular timestamp | `DELETE` operation or `Put.delete()` |
| **DeleteFamily** | All columns within a family for a row | `DeleteFamily` operation |
| **Column‑family tombstone** | Entire family across all rows | Not directly exposed; arises from compaction logic when every cell in a family is deleted |

Each marker carries the same timestamp as the delete, so it wins over any prior value with an older timestamp.

### How They Work

1. **Write‑Ahead Log (WAL)** records the tombstone to guarantee durability.
2. The memstore holds the tombstone alongside recent puts.
3. During a *minor compaction* or *flush*, the tombstone is written to HFiles as a normal entry.
4. A *major compaction* scans all files for each row and removes any data that is older than the latest tombstone timestamp.

The key invariant: **the newest mutation (including a delete) wins**.  This simple rule keeps reads consistent without requiring in‑memory state per deletion.

### Deeper Principle

Tombstones embody *optimistic concurrency* in an immutable log.  By treating deletes as ordinary writes, HBase turns the “problem of removal” into the same problem it already solves for inserts—maintaining a sorted stream of events and replaying them to derive current state.  This aligns with the **log‑structured merge tree (LSM)** philosophy: write‑once, read‑many.

### Non‑Obvious Insight

Many overlook that tombstones are *not* automatically purged after `gc.grace.seconds`.  The grace period only governs how long a tombstone is retained in HFiles; it does **not** prevent a compaction from emitting a new version of the same cell with an equal or later timestamp.  Consequently, if a client re‑writes a value *after* the deletion but before the tombstone expires, that write will still appear to readers—because the tombstone’s timestamp is earlier.  Understanding this subtlety is crucial when designing workloads that mix deletes and rapid updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
