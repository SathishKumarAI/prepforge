---
qid: ing_16fd978cf3__faang__local
question: 'Explain: High Level Design — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 575
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:38:01-05:00'
sources: []
---

**1️⃣ Clarify**  
*Goal*: Build a scalable “Instagram‑style” photo feed service.  
Assumptions:  
- Users can upload photos (metadata + binary).  
- Each user has followers; the feed shows recent posts from those users sorted by time, optionally with popularity filters.  
- 10⁸+ users, 10¹² uploads per day, 10⁹ requests/sec for the feed.  

**2️⃣ Approach**  
1. **Data model** – `User(id)`, `Post(id, user_id, ts, media_url)`.  
2. **Storage** – Object store (S3‑like) for media; NoSQL DB (Cassandra/Spanner) for metadata.  
3. **Feed generation** – *push* vs *pull*. Push: maintain a per‑user “home feed” table updated on each new post (append‑only). Pull: compute on request from followers’ timelines.  
4. **Caching** – LRU cache per user’s recent posts; CDN for media.  
5. **API endpoints** – `POST /upload`, `GET /feed?cursor=…`.  

**3️⃣ Depth**  
- *Push feed*: write‑through to DB + Kafka topic → consumer that appends post IDs to followers’ home tables (partitioned by user).  
- Complexity: O(#followers) per post; mitigated by limiting fan‑out or using “super‑feed” shards.  
- *Pull feed*: query followers list, merge sorted streams (k‑way merge), paginate with cursor.  Time ~O(k log k + pageSize).  
- Consistency: eventual consistency for feeds; strong consistency on uploads via write‑through caching.  

**4️⃣ Edge Cases**  
- Users with >10⁶ followers → rate‑limit push, fallback to pull.  
- Deleted posts → tombstones in home tables.  
- Media failures → retry & fallback URL.  
- Data locality: partition by user region to reduce latency.  

**5️⃣ Optimize & Communicate**  
- **Shard** the home feed table by hash(user_id) + time window to avoid hotspotting.  
- Use *Bloom filters* for quick existence checks before fetching media.  
- For 99th‑percentile latency, pre‑warm CDN edge caches with popular media.  
- Explain trade‑offs: push gives instant feeds but high write amplification; pull reduces writes but higher read cost.  

*Bottom line*: A hybrid system—push for small‑to‑medium followers, pull for massive influencers—with strong caching and partitioning guarantees 10⁹ RPS throughput while keeping latency <100 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
