---
qid: ing_e13373be6e__faang__local
question: 'Explain: Database Schema Design — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 605
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:22:58-05:00'
sources: []
---

**Clarify**  
You’re asked to design the *schema* that supports a live‑comment feature (think Twitch chat, YouTube live comments).  I’ll assume:  

- Each comment belongs to one video/stream and one user.  
- Comments can be nested/replied to others.  
- We need real‑time read/write with low latency.  
- Scale: millions of concurrent viewers, billions of total comments.

**Approach**  
1. Identify core entities (User, Video, Comment).  
2. Decide key fields and relationships.  
3. Choose storage pattern that balances write throughput & query patterns.  
4. Add indexes/partitioning for hot‑spotting.  
5. Consider eventual consistency for cross‑region reads.

**Depth**  

| Table | Key Columns | Indexes / Partitioning |
|-------|-------------|------------------------|
| `users` | `user_id PK`, `username`, `avatar_url` | – |
| `videos` | `video_id PK`, `title`, `channel_id`, `created_at` | – |
| **`comments`** | `comment_id PK (UUID)`, `video_id FK`, `parent_comment_id FK NULL`, `user_id FK`, `content`, `created_at`, `likes_count`, `is_deleted BOOL` | • Composite index `(video_id, created_at)` for chronological feed.<br>• Partition by `video_id` or hash of it to avoid write contention.<br>• Secondary index on `parent_comment_id` for reply trees. |

*Why UUIDs?* They’re globally unique and avoid hot‑spotting that auto‑incrementing IDs cause.  
*Partitioning:* In a distributed DB (e.g., Bigtable, DynamoDB) we shard by `video_id`; all comments for one stream live on the same node, giving O(1) read latency for that video’s feed.

**Edge Cases**  

- **High‑frequency streams:** burst writes → use write‑throughput‑optimized tables or a message queue (Kafka) to batch inserts.  
- **Spam / deleted content:** soft delete (`is_deleted`) keeps ordering intact; hard delete after retention period.  
- **Thread depth limits:** enforce max reply levels in app layer to prevent deep recursion.

**Optimize & Communicate**  

1. *Caching:* Cache the most recent 10k comments per video in Redis for instant delivery.  
2. *Read‑only replicas:* Serve read traffic from read‑replicas; writes go to primary shards.  
3. *Monitoring:* Track write latency, partition size growth, and cache hit rates.  

I’d explain that this schema supports linear scalability, low‑latency reads (O(log n) via index), and efficient writes with sharding, while keeping the data model simple enough for future extensions like reactions or threaded replies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
