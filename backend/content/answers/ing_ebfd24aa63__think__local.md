---
qid: ing_ebfd24aa63__think__local
question: 'Explain: 5.7 Comment on a Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 658
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:36:32-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- The interview question is *“Comment on a Post – design an Instagram‑style feature”*.  
- Assume high traffic (millions of users, billions of comments per day).  
- Focus on *functional* requirements (post, comment, reply, likes) and *non‑functional* ones (latency ≤ 200 ms, 99.9% availability, horizontal scalability).  
- Ignore authentication/authorization unless it impacts the design.

**2️⃣ Adopt a layered mental model**

1. **API layer** – REST / gRPC endpoints for CRUD on comments.  
2. **Service layer** – stateless comment service handling business logic.  
3. **Data layer** – primary store (relational or NoSQL) + caching & indexing.  
4. **Background jobs** – async tasks (e.g., push notifications, moderation).  
5. **Observability & scaling knobs** – monitoring, auto‑scaling rules.

Use the *“CAP”* and *“BASE/ACID”* trade‑offs to decide where consistency can be relaxed (e.g., eventual ordering of comments).

**3️⃣ Step‑by‑step reasoning**

- **Data model**: comment table with `comment_id`, `post_id`, `parent_comment_id` (for replies), `user_id`, `content`, `timestamp`.  
- **Indexing strategy**: composite index on `(post_id, timestamp)` for feed ordering; secondary index on `(parent_comment_id)` for threading.  
- **Caching**: LRU cache of hot posts’ comment lists; use Redis Streams or Kafka for real‑time updates to clients.  
- **Pagination**: cursor‑based paging (`last_seen_timestamp` + `limit`) to avoid offset cost and support infinite scroll.  
- **Write path**: API → service → write to DB (async via message queue) → publish event → cache invalidation.  
- **Read path**: check cache → fallback to DB → return ordered list; push real‑time updates via WebSocket or long polling.  
- **Scaling**: shard by `post_id` or hash of `comment_id`; use read replicas for heavy traffic; auto‑scale message queues.

**4️⃣ Common traps**

- *Over‑optimizing latency*: ignoring cache invalidation can lead to stale data.  
- *Ignoring write amplification*: naive writes to both DB and cache increase load.  
- *Assuming strong consistency everywhere*: may hurt performance on high scale.  
- *Missing pagination edge cases*: offset paging fails with concurrent inserts/deletes.

**5️⃣ Sanity‑check & verbalize**

- **Check latency**: estimate read path (cache hit ~1 ms, DB hit 10–20 ms).  
- **Verify consistency**: explain eventual ordering guarantees.  
- **Validate scaling**: show how sharding keeps partitions small; demonstrate auto‑scale thresholds.  
- **Communicate clearly**: start with high‑level diagram, then drill into data model, caching, and failure handling before concluding with trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
