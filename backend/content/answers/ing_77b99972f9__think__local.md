---
qid: ing_77b99972f9__think__local
question: 'Explain: 5.6 Like a Post — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 549
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:54:36-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Confirm whether “Explain: 5.6 Like a Post” refers to a specific section in *AlgoMaster.io* or a generic design‑problem (e.g., building an Instagram‑style feed).  
   - Assume we’re designing a scalable, real‑time “like” feature for a social media post: users can like/unlike, counts update instantly, and notifications may be sent.

**2. Choose a mental model / framework**  
   - Use the classic *system design* layers: **Client → API → Service → Data Store → Notification Queue**.  
   - Map out key components: REST/GraphQL endpoint, rate limiter, caching layer (Redis), database schema (relational vs NoSQL), eventual consistency for likes, and a background job for notifications.

**3. Step‑by‑step reasoning**  
   1. **API contract** – POST `/posts/{id}/likes` with auth token; idempotent body `{ userId }`.  
   2. **Validation & rate limiting** – check user exists, throttle per minute.  
   3. **Optimistic update** – increment a cached like counter in Redis, push to DB asynchronously.  
   4. **Data model** – `Likes(post_id, user_id, timestamp)` table; use composite PK for fast upserts.  
   5. **Consistency** – eventual sync: background worker writes to DB, updates cache, emits notification event.  
   6. **Scalability** – horizontal API pods, sharded Redis, partitioned DB by post hash.  
   7. **Fault tolerance** – retry queue, dead‑letter handling, fallback to read‑through cache.

**4. Common traps & how to avoid them**  
   - *Assuming instant consistency* → use eventual and explain trade‑offs.  
   - *Over‑engineering the notification system* → keep it decoupled (Kafka/Redis Streams).  
   - *Ignoring rate limits* → show how throttling protects DB load.

**5. Sanity‑check & verbalise**  
   - Run a quick mental “user story” walkthrough: Alice likes Bob’s photo, counter jumps to 101, Bob gets a push notification after 2 s.  
   - Verify each layer addresses latency, durability, and consistency.  
   - Summarise the design in clear bullet points before diving into deeper details (e.g., sharding strategy or cache invalidation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
