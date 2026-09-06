---
qid: ing_5a57cf2113__think__local
question: 'Explain: Feed Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 619
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:58:01-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - Confirm that “Feed Service” means the backend component responsible for generating a user’s home‑timeline (posts, stories, reels).  
   - Assume a large Instagram‑scale user base (billions of interactions), high read/write throughput, and low latency requirements (~50 ms).  
   - Decide whether to focus on *pull* (on‑request) or *push* (pre‑computed) feeds; note trade‑offs.  

**2️⃣ Adopt a layered design framework**  
   - **Data model & storage**: users, posts, relationships, likes, etc.  
   - **Core services**: User Service (relationships), Post Service (create/read), Feed Service (composition).  
   - **Auxiliary layers**: caching, queueing, indexing, recommendation engine, analytics.  

**3️⃣ Step‑by‑step reasoning**  
   1. *Data ingestion*: When a user posts, push metadata to a message queue for downstream consumers.  
   2. *Relationship graph*: Maintain follower/followee lists (e.g., in Redis or a graph DB).  
   3. *Feed generation strategy*:  
      - **Pull**: On request, fetch recent posts from followees using efficient range queries; rank by time & relevance.  
      - **Push**: Pre‑compute feed items for each user when a new post appears; store in sorted sets (Redis) or a dedicated Feed DB.  
   4. *Scoring & ranking*: Combine recency, engagement, and personalization signals; store scores for quick lookup.  
   5. *Pagination & cursoring*: Use opaque cursors to support infinite scroll without race conditions.  
   6. *Caching*: Cache hot feeds or per‑user slices in Memcached/Redis to reduce DB load.  
   7. *Consistency & freshness*: Accept eventual consistency for pushes; use TTLs and background refresh jobs.  

**4️⃣ Common traps to avoid**  
   - Over‑optimizing for reads at the expense of write latency (e.g., pushing feeds synchronously).  
   - Ignoring partitioning/sharding when scaling; a single feed table will explode.  
   - Forgetting to handle “ghost” users or deleted content in cached feeds.  
   - Underestimating cold‑start problems for new users with no followees.  

**5️⃣ Sanity‑check & articulate**  
   - Verify that each component satisfies the required throughput and latency.  
   - Sketch a high‑level diagram: user → Feed Service → Cache/DB → Post Service → Storage.  
   - Explain trade‑offs (pull vs push, consistency models) clearly to interviewers.  

By following this structured approach you’ll cover data modeling, service decomposition, scalability concerns, and the reasoning behind each design choice—exactly what a system‑design interview expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
