---
qid: ing_c0e965ab90__think__local
question: 'Explain: User Base — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 606
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:40:46-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *Goal*: Design a system that supports a large, active user base on Instagram‑style platform.  
   - *Assumptions*:  
     - Millions of users, billions of posts.  
     - High read/write ratio (users post frequently; others consume feeds).  
     - Strong consistency not required for every operation (eventual consistency acceptable for feed generation).  

**2️⃣ Adopt a layered mental model**  
   - **Core services**: User auth, media storage, feed service, notification engine.  
   - **Data stores**: Relational DB for user profiles; NoSQL (Cassandra/Bigtable) for posts and relationships; CDN for media.  
   - **Caching & CDNs** to reduce latency on hot paths.  
   - **Scalability patterns**: Sharding, partitioning, micro‑services, request routing.  

**3️⃣ Step‑by‑step reasoning**  
   1. *User data*: Normalize profile info in RDBMS → fast joins for friendships.  
   2. *Media upload*: Store raw files in object store (S3), generate thumbnails asynchronously, serve via CDN.  
   3. *Post ingestion*: Append to user’s feed queue; publish event to message broker for followers’ feeds.  
   4. *Feed generation*: Use pre‑computed timelines stored in key‑value store (e.g., Redis) or on‑demand aggregation with fan‑out.  
   5. *Scoring & ranking*: Apply simple algorithm (timestamp + engagement weight).  
   6. *Notifications*: Push via FCM/APNs, also store for later retrieval.  

**4️⃣ Common pitfalls to avoid**  
   - **Monolithic design** → hard to scale and maintain.  
   - **Over‑optimizing early**: Premature caching can waste resources; start simple then add layers.  
   - **Ignoring eventual consistency** on feeds → leads to stale data or race conditions.  
   - **Single CDN point of failure** – use multi‑regional CDNs.  

**5️⃣ Sanity checks & verbal communication**  
   - Verify each component’s scalability: can it handle 10× traffic?  
   - Check data flow for bottlenecks (e.g., media upload → storage).  
   - Explain trade‑offs: “We choose eventual consistency on feeds to avoid write amplification, but we keep user relationships strongly consistent in RDBMS.”  
   - Summarize with a high‑level diagram and list key metrics (latency < 200 ms for feed fetch, 99.9% availability).  

By following this structured approach you’ll demonstrate clear thinking, scalability awareness, and practical trade‑off analysis—exactly what interviewers look for in a system‑design discussion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
