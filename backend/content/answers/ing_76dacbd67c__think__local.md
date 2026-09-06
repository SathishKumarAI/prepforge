---
qid: ing_76dacbd67c__think__local
question: 'Explain: Facebook System Design | Instagram System Design | System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 546
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:51:52-05:00'
sources: []
---

**1️⃣ Clarify & Scope**

*Ask the interviewer what they want:*  
- Is it a high‑level overview or a deep dive into specific components?  
- Which metrics matter (latency, throughput, availability)?  
- Are we focusing on data storage, caching, or real‑time feeds?  

State assumptions:  
- Users are global, millions per day.  
- Data is highly dynamic (posts, stories, likes).  
- The system must be horizontally scalable and fault tolerant.

**2️⃣ Adopt a System‑Design Framework**

1. **Requirements & Constraints** – functional (feed generation, media upload) + non‑functional (99.999% uptime, <200 ms latency).  
2. **Data Model & Storage** – key‑value for user profiles, graph DB for relationships, CDN for media.  
3. **Major Components** – ingestion pipeline, feed generator, recommendation engine, cache layer, search index, analytics.  
4. **Scalability & Availability** – sharding, replication, eventual consistency, read/write splits.  
5. **Observability & Ops** – monitoring, logging, automated failover.

**3️⃣ Step‑by‑Step Reasoning**

1. Sketch a high‑level diagram: users → load balancer → API gateway → microservices (upload, feed, like).  
2. Detail the feed path:  
   - Pull vs push model; decide on hybrid (user’s follow graph + real‑time events).  
   - Use a message queue (Kafka) to propagate new posts.  
3. Explain caching strategy: CDN for images/videos, in‑memory cache for hot feeds.  
4. Discuss recommendation engine: feature extraction → ML model inference → ranking.  
5. Cover data consistency: use optimistic concurrency for likes/comments; eventual consistency for follower changes.

**4️⃣ Avoid Common Pitfalls**

- Don’t assume “all data fits in memory.”  
- Ignore the cost of CDN and bandwidth.  
- Forget that media uploads require multipart handling & resumable streams.  
- Skip discussing rate limiting or abuse detection.  

**5️⃣ Sanity‑Check & Communicate**

*Out loud:* “Given our assumptions, we choose a pull‑push hybrid feed because it balances freshness with load.”  
Ask for feedback: “Does the interviewer care more about the recommendation pipeline or the media delivery?”  
Iterate on the diagram if they point out missing pieces (e.g., privacy filtering).

By following this checklist you can structure any system‑design interview, whether it’s Facebook, Instagram, or a generic question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
