---
qid: ing_ab921b70e7__fp__local
question: 'Explain: apply the logs to those snapshots if — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 477
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:10:00-05:00'
sources: []
---

**Why a database needs *both* snapshots and logs**

A snapshot is a *complete copy* of the data at a particular instant.  
If we only kept snapshots, recovering to an arbitrary point between two
snapshots would require rolling back to the earlier one and then replaying
all writes that happened after it—an impossible task if we have no record
of those writes.

A log (write‑ahead log) records *every* mutation as it occurs.  
It is a linear, time‑ordered stream of operations that can be applied to
any consistent base state.  Together, snapshots give us a fast “floor”
and logs give us a precise “ladder” up to any desired timestamp.

**How DynamoDB builds this ladder**

1. **Write‑ahead logging**  
   Each mutation is first appended to an immutable log segment on SSD.
   The segment header stores the *commit time* and a cryptographic hash
   of its contents, guaranteeing that once written it cannot be altered.
2. **Snapshot creation**  
   Periodically (e.g., every 5 min) the system takes a copy‑on‑write snapshot
   of the current data pages.  The snapshot header records the latest log
   offset included.
3. **Point‑in‑time recovery**  
   To restore to time *T*, DynamoDB loads the most recent snapshot whose
   timestamp ≤ *T* and then sequentially replays all log entries from that
   snapshot’s offset up to *T*.  Because logs are immutable, replaying
   is deterministic and free of race conditions.

**Non‑obvious insight**

The *hash chain* embedded in each log segment turns the log into a
cryptographic Merkle tree.  If an adversary tampers with any entry,
the hash chain breaks immediately, allowing DynamoDB to detect tampering
without re‑scanning all data.  This property is often overlooked but
provides both integrity and efficient auditability for a hyper‑scale
database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
