---
qid: ing_f4ec0df62e__think__local
question: 'Explain: 5.2 Follow a User — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 508
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:10:03-05:00'
sources: []
---

**Thinking Process for “Design an Instagram‑style Follow Feature”**

1. **Clarify scope & assumptions**  
   - *What is required?* Only the follow/unfollow flow, follower lists, and basic feed ordering.  
   - *Assume*: Users have unique IDs; we’re not handling media storage or notifications yet.  
   - *Define constraints*: Scale (millions of users), latency (< 200 ms for a follow action), eventual consistency.

2. **Choose a mental model**  
   Use the classic *“user → relation → feed”* pipeline:  
   - **Graph** for relationships (followers/followees).  
   - **Cache** for hot data (follow lists, follower counts).  
   - **Write‑through / async update** for persistence and eventual consistency.

3. **Step‑by‑step reasoning**  
   a. *Data model*: `User(id)`, `Follow(follower_id, followee_id, created_at)` table.  
   b. *Operations*  
      - `follow(A,B)`: insert into Follow; update caches for A’s following list and B’s follower count.  
      - `unfollow(A,B)`: delete; adjust caches similarly.  
   c. *Feed generation*:  
      - On request, pull recent posts from all followees (batch read or pre‑compute a “home timeline” queue).  
   d. *Scaling strategies*: sharding Follow table by follower_id; using Redis lists for hot followee feeds; background jobs to rebuild timelines.

4. **Common traps**  
   - Forgetting that follows are directional: A→B ≠ B→A.  
   - Assuming a single relational DB can handle millions of writes—use NoSQL or partitioned tables.  
   - Ignoring eventual consistency: follower counts may lag behind actual data if cached only.

5. **Sanity‑check & verbalize**  
   - Verify that each operation is idempotent and safe under retries.  
   - Confirm latency targets by estimating read/write times for a single follow action.  
   - Explain trade‑offs: strong consistency vs. performance; pre‑computed feeds vs. real‑time aggregation.

By following this structured approach, you can systematically design the “Follow” component while keeping scalability and reliability in focus.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
