---
qid: ing_b00eb6371e__faang__local
question: 'Explain: 5.8 Get Comments for a Post — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 477
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:32:46-05:00'
sources: []
---

**Clarify**  
We need an API that returns all comments on a post in the order they were made (or by popularity). Key assumptions: *posts are immutable once published*, *comments can be added/edited/deleted*, *there may be millions of comments per post*, and *latency ≤ 200 ms* for a typical user.

**Approach**  
1. **Data model** – `Post(id)`, `Comment(id, postId, parentId?, text, createdAt, score)`.  
2. **Storage** – use a wide‑column store (Cassandra/BigTable) with the row key as `(postId, timestamp)` to preserve order. A secondary index on `score` for hot comments.  
3. **Caching** – LRU cache per post in Redis for the most recent N comments; invalidated on new comment or edit.  
4. **Pagination** – cursor‑based (`lastCommentId`) so clients can fetch next 20 without gaps.

**Depth**  
- **Write path**: append to Cassandra (O(1)), push key into Redis list, update score index if needed.  
- **Read path**: hit Redis first; on miss query Cassandra with `WHERE postId = ? ORDER BY timestamp DESC LIMIT N`. Complexity: O(log N) for Cassandra scan, O(N) for network transfer.  
- **Consistency**: eventual consistency is acceptable; use write‑through cache to reduce staleness.

**Edge Cases**  
- Deletion of comments → mark as deleted in DB, purge from cache lazily.  
- Extremely large posts (10⁶+ comments) → split into partitions by time windows to keep row sizes bounded.  
- High read traffic on hot posts → pre‑aggregate top‑k comments into a separate table.

**Optimize & Communicate**  
We can add a “hotness” cache that recomputes scores every minute, and shard the comment table horizontally by `postId` hash to avoid hotspotting. In interviews, I’d explain these trade‑offs: write latency vs read speed, consistency model, and how caching balances them while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
