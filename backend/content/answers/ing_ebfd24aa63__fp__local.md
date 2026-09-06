---
qid: ing_ebfd24aa63__fp__local
question: 'Explain: 5.7 Comment on a Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 580
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:36-05:00'
sources: []
---

**Why a comment subsystem must exist**

At its core, an Instagram‑style feed is a *content distribution* problem: we need to surface relevant posts quickly while preserving user engagement. Comments are the primary medium for *social amplification*: they turn one‑way consumption into two‑way interaction, driving dwell time and network effects. If comments were absent or sluggish, users would disengage; if they lagged, the platform would feel stale.

**Key design principles**

| Principle | Why it holds |
|-----------|--------------|
| **Low‑latency read** | Users scroll continuously; a comment request must finish < 100 ms to avoid UI jank. |
| **Write scalability** | A viral post can generate thousands of comments per second; the write path must handle bursts without bottlenecking. |
| **Consistency vs availability** | Comments are append‑only and largely read‑heavy, so eventual consistency is acceptable—this lets us partition writes across shards. |
| **Threaded structure** | Replies form a tree; storing parent/child pointers allows O(log n) traversal of sub‑threads while keeping the root comment list flat for fast pagination. |

**Architecture sketch**

1. **Write API**:  
   *Validate → Append to `comments` table (sharded by post_id).*  
   Update a counter in a separate, high‑frequency “post_meta” store (Redis or Memcached) so the UI can fetch the comment count instantly.

2. **Read API**:  
   *Paginate top‑level comments via range queries on `created_at`.  
   *For each returned comment, issue a batched request for its immediate replies (depth 1).  
   Use materialized views or denormalized “reply_count” columns to avoid deep recursion.*

3. **Cache layer**:  
   Frequently viewed posts’ comment lists live in Redis with LRU eviction; stale entries trigger background recomputation.

4. **Background jobs**:  
   Periodically aggregate per‑post reply counts, update trending metrics, and prune orphaned comments (e.g., deleted parent).

**Non‑obvious insight**

Treating *comment count* as a separate high‑throughput counter rather than aggregating on demand is the hidden performance lever. A naive `SELECT COUNT(*) FROM comments WHERE post_id = ?` becomes a hot spot under heavy traffic; by maintaining an incrementally updated counter we decouple read latency from write volume, preserving both scalability and freshness.

In short, a comment system is a micro‑service that must balance instant reads with bursty writes, using sharding, denormalization, and caching to satisfy the social nature of the platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
