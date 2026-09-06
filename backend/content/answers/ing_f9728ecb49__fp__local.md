---
qid: ing_f9728ecb49__fp__local
question: 'Explain: 4.3 Requirement 3: Playlist Management — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 474
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:49:50-05:00'
sources: []
---

### Why a “Playlist” system must be *event‑driven, sharded, and eventually consistent*

At its core a playlist is a **sequence of media items** that users may read, update, and share concurrently.  
The fundamental problem: *maintain an ordered list under high‑write contention while serving reads with sub‑second latency*.

1. **Ordered sequence → immutable event log**  
   Every append or reorder becomes a new record in a write‑only stream (Kafka/Kinesis).  
   - Guarantees causality: events are processed in the order they arrive, preserving user intent.  
   - Enables *time‑travel* reads: any point of the list can be reconstructed from snapshots plus incremental deltas.

2. **High concurrency → sharding by playlist ID**  
   By partitioning the log on the hash of `playlist_id`, writes to different playlists do not contend for the same storage node.  
   - A single user may own dozens of playlists; each lives in its own shard, so a hot playlist does not block others.

3. **Read‑latency → materialized snapshots**  
   Every N events (or on a schedule) we build a *snapshot* of the current list in a key‑value store (Cassandra/Redis).  
   - Reads hit the snapshot first; if an event is missing, we replay only the tail events.  
   - Consistency is *eventual*: a user may see a slightly stale order immediately after an update, but it converges within milliseconds.

4. **Sharing & permissions → ACL layer**  
   Each playlist record carries a `share_policy`.  
   - When a share changes we publish a *policy event*; readers consult the latest policy before delivering items, ensuring security without extra joins.

#### Non‑obvious insight
The real bottleneck is not bandwidth but **ordering guarantees**. By treating the playlist as an immutable event stream, we turn the ordering problem into a linear algebraic one: every update is a vector addition to a sequence. This abstraction lets us leverage proven stream processing frameworks and sidestep the complex lock‑free list manipulations that would otherwise explode in complexity with millions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
