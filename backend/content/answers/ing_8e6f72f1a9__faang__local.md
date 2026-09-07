---
qid: ing_8e6f72f1a9__faang__local
question: 'Explain: User Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 478
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:15:18-05:00'
sources: []
---

**Clarify**  
We’re asked to design the *User Service* for an Instagram‑like app—managing profiles, follow relationships, and profile‑level permissions. I’d confirm: are we only covering CRUD on users or also auth & rate limits? Do we need real‑time follower counts or just eventual consistency?  

**Approach**  
1. **Entities & API surface** – `User(id, username, bio, avatar)`, `Follow(followerId, followeeId, createdAt)`.  
2. **Storage** – Primary key on `user_id` in a relational DB for strong consistency; a separate NoSQL table (e.g., DynamoDB) for fast follower lists.  
3. **Caching** – LRU cache for profile lookups and follower counts (Redis).  
4. **Batching & async** – Follow/unfollow writes go to an event queue (Kafka); a background worker updates fan‑out tables and counters.  

**Depth**  
- **Read path**: `GET /users/{id}` hits cache → DB fallback.  
- **Follow write**: API writes to relational DB, publishes “follow_event” → consumer updates follower table & increments count atomically in Redis/DB.  
- **Complexity**: O(1) read; follow/unfollow amortized O(log N) for insert into sorted set (Redis ZSET).  
- **Scalability**: Horizontal scaling of API behind a load balancer; cache shards by user hash.  

**Edge Cases**  
- Self‑following, duplicate follows → idempotent operations via unique constraint.  
- Large follow lists → pagination & cursor‑based fetches.  
- Cache staleness → TTL + write‑through invalidation.  

**Optimize & Communicate**  
We can pre‑compute “popular users” fan‑out to reduce read latency, and use a CDN for avatar images. In discussion, I’d highlight trade‑offs: relational DB gives ACID guarantees but slower follower list reads; NoSQL offers speed at cost of eventual consistency. This structured answer demonstrates clear problem framing, design rationale, complexity analysis, and awareness of edge cases—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
