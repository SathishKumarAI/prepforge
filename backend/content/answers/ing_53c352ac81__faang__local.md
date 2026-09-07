---
qid: ing_53c352ac81__faang__local
question: 'Explain: Social Network Design Problem - User Entities like Posts, Comments
  etc.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 594
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:59:00-05:00'
sources: []
---

**Clarify**  
We’re asked to design a social‑network data model that supports entities such as **Users**, **Posts**, **Comments**, *Likes*, and *Shares*. I’ll assume we need efficient read/write for feeds, real‑time notifications, and strong consistency for user interactions. Clarify: Do we store media blobs? Is the system read‑heavy or write‑heavy?  

**Approach**  
1. Identify core entities and relationships.  
2. Choose a storage layer (SQL vs NoSQL) per entity type.  
3. Define key access patterns (user feed, post detail, comment thread).  
4. Plan for scalability: sharding, caching, eventual consistency where acceptable.  

**Depth**  
| Entity | Table/Collection | Key Fields | Indexes | Notes |
|--------|------------------|------------|---------|-------|
| User   | `users` (SQL)    | `user_id PK` | `email`, `username` | Strong ACID for auth |
| Post   | `posts` (NoSQL)  | `post_id PK`, `author_id FK`, `created_at` | GSI on `author_id` + time | Shard by author or hash |
| Comment| `comments` (NoSQL) | `comment_id PK`, `post_id FK`, `parent_comment_id` | Composite index for threaded read | Store depth to avoid recursion |
| Like   | `likes` (NoSQL)  | `user_id`, `entity_type`, `entity_id` | Compound key (`user_id, entity_type, entity_id`) | Denormalized counts in Post/Comment docs |
| Share  | `shares` (NoSQL) | `share_id PK`, `post_id FK`, `sharer_id` | GSI on `post_id` | Used for analytics |

*Feed generation*: pre‑compute a user’s timeline into a **feed table** (`user_id, post_id, created_at`) updated via Kafka streams. Cache hot posts in Redis.

**Edge Cases**  
- Deleting a user must cascade deletes or flag entities as “deleted”.  
- Extremely popular posts can create hotspot contention; mitigate with write‑skew tolerant counters (e.g., DynamoDB atomic counters).  
- Comment depth > 10 could degrade read performance; enforce max depth or flatten threads.

**Optimize & Communicate**  
We can replace the feed table with a *materialized view* in BigQuery for analytics. For real‑time likes, use an in‑memory counter that syncs to disk every minute. I’ll explain trade‑offs: SQL gives ACID for user auth; NoSQL offers horizontal scale for high‑velocity content. This structure balances consistency where needed and performance elsewhere—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
