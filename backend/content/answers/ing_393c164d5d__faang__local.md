---
qid: ing_393c164d5d__faang__local
question: 'Explain: SQL — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 587
total_tokens: 821
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:57:30-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a **real‑time comment feed** (post → comments, nested replies, likes) that scales to millions of users and delivers low latency. Key assumptions:  

* Users can post, edit, delete, reply, like/unlike.  
* Comments are shown in chronological or “most liked” order per post.  
* We’ll use a relational DB (e.g., PostgreSQL) for consistency; eventual‑consistency stores (Redis, DynamoDB) may back‑fill reads.

**2️⃣ Approach**  
1. **Schema** – `posts(id PK)`, `comments(id PK, post_id FK, parent_id FK NULL, user_id FK, body, created_at, likes_count)`  
2. **Indexes** – composite index on `(post_id, created_at)` for feed queries; separate index on `(parent_id, created_at)` for threaded replies.  
3. **Atomic ops** – use transactions for create/delete/like to keep counts accurate.  
4. **Read cache** – cache hot posts’ comment lists in Redis (LRU) and invalidate on write.  
5. **Pagination** – key‑set pagination (`WHERE created_at < last_seen`) for infinite scroll.

**3️⃣ Depth**  
*Write*: `INSERT` with default `created_at = NOW()`. Update `likes_count` via `UPDATE comments SET likes_count = likes_count + 1 WHERE id = ?`. Wrap in a single transaction to avoid race conditions.  
*Read*: `SELECT * FROM comments WHERE post_id=? ORDER BY created_at DESC LIMIT 50;` Use the index for O(log n) lookup and linear scan of page size.  
*Complexity*: Writes are O(log n) due to B‑tree updates, reads are O(page_size). Cache hits reduce DB load dramatically.

**4️⃣ Edge Cases**  
*Concurrent likes on same comment → lock or use `UPDATE … SET likes_count = likes_count + 1` (atomic).  
*Deep nesting → limit depth or switch to adjacency list + materialized path for efficient traversal.  
*Large posts → shard comments table by `post_id`.

**5️⃣ Optimize & Communicate**  
- **Batching**: bulk insert/delete for moderation tools.  
- **Pre‑aggregation**: maintain a separate `comment_stats` table for counts per post to avoid expensive GROUP BYs.  
- **Monitoring**: track cache hit ratio, query latency, lock contention.  

Explain trade‑offs (strong consistency vs. speed) and how the chosen design balances ACID guarantees with real‑time performance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
