---
qid: ing_9095943372__faang__local
question: 'Explain: 6.4 Like, Comments and Shares — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 435
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:27-05:00'
sources: []
---

**Clarify**  
We’re asked to design the “Like, Comment & Share” feature for an Instagram‑style feed.  
Key assumptions:  
- Millions of users, each posting photos/videos; likes/comments are frequent reads/writes.  
- Users want real‑time visibility of new reactions on their own and friends’ posts.  
- Data must be highly available, low latency, and horizontally scalable.

**Approach**  
1. **Data model** – separate tables: `Posts`, `Reactions (like/comment)`.  
2. **Write path** – publish to a message queue → worker writes to DB + updates counters in Redis.  
3. **Read path** – feed API pulls recent posts, merges cached reaction counts from Redis, and fetches latest comments from a NoSQL store.  
4. **Cache invalidation** – TTL on per‑post counters; push notifications for real‑time UI updates.

**Depth**  
- *Writes*: O(1) DB insert + O(log N) in sorted set (Redis).  
- *Reads*: Feed fetch is O(k log m) where k=posts, m=comments per post.  
- Use sharded Postgres for relational data; Cassandra or DynamoDB for comments to allow horizontal scaling.  
- Real‑time updates via WebSocket or push service.

**Edge Cases**  
- High burst traffic (e.g., viral posts). Test with spike simulations.  
- Deletion of likes/comments – ensure idempotent decrement logic.  
- Consistency: eventual consistency acceptable; use optimistic locking for counters.

**Optimize & Communicate**  
- Batch writes during low‑traffic periods to reduce queue load.  
- Use CDN edge caches for static reaction counts.  
- Explain trade‑offs: stronger consistency vs. latency, choice of SQL vs. NoSQL.  
- Summarize: “We keep reactions highly decoupled, cache aggressively, and leverage streaming for real‑time UX.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
