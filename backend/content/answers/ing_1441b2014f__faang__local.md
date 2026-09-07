---
qid: ing_1441b2014f__faang__local
question: 'Explain: Database Design — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 499
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:19-05:00'
sources: []
---

**Clarify**  
We need a relational schema for an Instagram‑style app that supports users, photos, comments, likes, followers, and basic feed generation. Assume high read traffic, eventual consistency on likes/comments, and horizontal scalability.

**Approach**  
1. Identify core entities: `User`, `Post`, `Comment`, `Like`, `Follower`.  
2. Normalize to 3NF while adding composite keys for efficient queries.  
3. Add denormalized “feed” tables or materialized views for quick retrieval.  
4. Use sharding by user id; cache hot data in Redis.

**Depth**  

| Table | Primary Key | Indexes | Notes |
|-------|-------------|---------|-------|
| `users` | `user_id PK` | idx_email, idx_username | Store profile data, avatar URL |
| `posts` | `post_id PK`, `author_id FK` | idx_author, idx_timestamp | Add `media_url`, `caption` |
| `comments` | `comment_id PK`, `post_id FK`, `author_id FK` | idx_post_ts | Use a composite index `(post_id, timestamp)` |
| `likes` | `(user_id, post_id) PK` | idx_user, idx_post | Many‑to‑many; use bitmap or counter cache |
| `followers` | `(follower_id, followee_id) PK` | idx_follower, idx_followee | Enables follower list and reverse lookups |
| `feeds` | `feed_id PK`, `user_id FK` | idx_user_ts | Materialized feed rows (post_id + metadata) |

**Edge Cases**  
- Deleting a user cascades to posts/comments/likes.  
- Self‑follow prevention in `followers`.  
- Rate‑limit likes per second to avoid hot key contention.  

**Optimize & Communicate**  
Explain that we’ll shard by `user_id` to keep related data local, use read replicas for comments and feeds, and cache the most recent 100 posts per user in Redis. Mention eventual consistency on like counts via a background job updating a counter table, reducing write amplification. Conclude with how this design balances normalization (data integrity) and denormalization (latency) to meet FAANG‑style scalability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
