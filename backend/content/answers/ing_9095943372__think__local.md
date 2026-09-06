---
qid: ing_9095943372__think__local
question: 'Explain: 6.4 Like, Comments and Shares — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 592
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:38:18-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What* are we designing? A feature‑level subsystem that tracks likes, comments, shares on posts (the “social graph” of interactions).  
- *Where* does it fit? Within Instagram’s larger architecture: user profiles → posts → engagement API.  
- Assume millions of users, high read/write rates, eventual consistency acceptable for counters, real‑time notifications required.

**2️⃣ Mental model / framework**  
Use the classic **CAP + CQRS + Event Sourcing** pattern:  
- *Command side* (writes): record an interaction as an event in a log.  
- *Query side* (reads): materialized views per post/user, updated asynchronously from events.  
Add *caching* for hot posts and *rate‑limiting* to avoid abuse.

**3️⃣ Step‑by‑step reasoning**  
1. **API layer**: REST/GraphQL endpoints for like/comment/share actions; validate auth & business rules (e.g., no duplicate likes).  
2. **Event bus**: publish `LikeCreated`, `CommentAdded`, `ShareMade` events to Kafka/RabbitMQ.  
3. **Write side storage**: append‑only event store + write‑through cache for counters.  
4. **Read model**: microservice that consumes events, updates PostgreSQL/Redis shards storing per‑post counts and comment lists.  
5. **Notification service**: consume same events to push real‑time alerts via WebSocket or FCM.  
6. **Scalability**: partition by post ID; shard counters horizontally; use a CDN for static comment blobs.  
7. **Consistency**: eventual consistency is fine—users see “likes” after a few ms; strong consistency only needed for critical flows (e.g., preventing duplicate likes).

**4️⃣ Common traps to avoid**  
- *Monolithic writes*: don’t write all counters in one transaction—causes bottlenecks.  
- *Over‑caching*: stale counts if cache invalidation is missed.  
- *Ignoring rate limits*: attackers can flood with likes/comments.  
- *Underestimating storage*: comments grow rapidly; design a rolling retention or archival strategy.

**5️⃣ Sanity‑check & verbalize**  
- “If a user likes a post, we first verify the token, then emit an event. The read model later updates the like count and triggers a notification.”  
- Ask: *Does this handle 10k likes per second?* → Yes, via partitioned streams.  
- Check consistency: *Will two simultaneous likes produce duplicate counts?* → Command handler idempotently checks existing state before emitting.

By following these numbered steps you can systematically design the like/comment/share subsystem for Instagram.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
