---
qid: ing_5e366f9e53__fp__local
question: 'Explain: Deletes — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 399
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:24:47-05:00'
sources: []
---

**Change‑Data‑Capture (CDC) for deletions – why it matters and how to do it right**

The *fundamental problem* is that downstream systems must stay consistent with a source of truth without re‑scanning the entire table on every change. A delete in the source removes a row; any replica or analytics layer needs an explicit “erase” signal, not just a silent absence.

From an **information theory** standpoint, a delete is a *negative event* that conveys entropy reduction: one less possible state must be ruled out. If we only stream inserts/updates, downstream services will continue to see stale rows until they perform a full refresh—an O(n) operation. By emitting the primary key of the deleted row (or a tombstone record), we reduce the update cost to O(1) and preserve *monotonicity*: every event can be applied independently in any order, ensuring eventual consistency.

**Design principle:**  
1. **Idempotent tombstones** – publish a lightweight record `{key, op: DELETE}` instead of omitting it.  
2. **Retention policy** – keep tombstones long enough for all subscribers to catch up; after that they can be purged via compaction.  
3. **Partition‑aware streaming** – route the delete to the same partition as its inserts/updates so consumer ordering is preserved.

A non‑obvious insight: *deletes should not be “ignored” during schema evolution*. When a column is dropped, rows containing that column are implicitly deleted from the view of any downstream system. If CDC doesn’t emit tombstones for such structural changes, consumers will interpret old data as still valid, breaking invariants. Thus, delete handling must be baked into both data‑layer and metadata‑layer change propagation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
