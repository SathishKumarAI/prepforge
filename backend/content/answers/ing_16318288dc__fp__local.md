---
qid: ing_16318288dc__fp__local
question: 'Explain: Live Comment System Database Design — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 419
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:46-05:00'
sources: []
---

### Why a Live‑Comment DB Must Be *Event‑centric*

The core problem is **low‑latency, high‑throughput ingestion** of user actions (post, edit, delete) that must be immediately visible to thousands of viewers.  
Treat every comment as an immutable event stream:  

1. **Append‑only log** – writes are cheap, no contention on a primary key; the order of arrival is preserved automatically.  
2. **Time‑based partitioning** (shards by hour/day) gives O(1) inserts and bounded scan windows for “last N minutes” queries.  

These properties come from *information theory*: an event stream encodes all state changes; the current view is a *prefix* of that log, so no expensive joins are needed.

### Deriving the Query Layer

For real‑time feeds we need `SELECT * FROM comments WHERE stream_id = ? ORDER BY ts DESC LIMIT 50`.  
Indexing on `(stream_id, ts DESC)` yields O(log N) lookups.  
To support edits/deletes without mutation, we store **delta events** (`type: edit`, `content`) and rebuild the view by replaying the log—a classic *log‑structured merge*.

### Non‑Obvious Insight

Most designs focus on “store comments” and forget that **visibility latency is a function of read partitioning**, not just write speed.  
By sharding the stream *by time*, we guarantee that all readers for a live window hit the same hot shards, dramatically reducing cross‑node traffic and enabling horizontal scaling without complex consistency protocols.

> In short: an append‑only, time‑partitioned event log + targeted secondary index gives linear scalability, guarantees freshness, and keeps the system simple enough to be production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
