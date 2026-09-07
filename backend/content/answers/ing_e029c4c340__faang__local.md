---
qid: ing_e029c4c340__faang__local
question: 'Explain: Post Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 472
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:20:22-05:00'
sources: []
---

**Clarify**  
We’re asked to design a “Post Service” for an Instagram‑like app—responsible for creating, storing, retrieving, and displaying user posts (photos/video + metadata). Key assumptions: high write/read traffic, millions of users, low latency (<200 ms) for feed, eventual consistency is acceptable, and we need horizontal scalability.  

**Approach**  
1. **API layer** – REST/GRPC endpoints (`CreatePost`, `GetFeed`, `DeletePost`).  
2. **Storage** – Split into *metadata* (SQL/PostgreSQL + sharded by user_id) and *content* (object store like S3).  
3. **Indexing for feed** – Pre‑compute a per‑user “feed” table in a NoSQL store (Cassandra/Redis) keyed by `followee_id`. Push new posts to followers’ feeds via a Kafka stream.  
4. **Cache** – LRU cache (Memcached/Redis) for hot posts and feeds.  
5. **Background workers** – Image resizing, watermarking, generating thumbnails; push results back into object store.  

**Depth**  
- *CreatePost*: write metadata to DB → publish event → async worker stores media → update followers’ feed tables.  
- *GetFeed*: fetch from cache or NoSQL; if miss, fallback to SQL join of recent posts by followees.  
Complexity: writes O(log n) per follower (via fan‑out), reads O(1) from cache. Trade‑off: fan‑out increases write cost but gives instant feed.  

**Edge Cases**  
- New user with no followers → skip fan‑out.  
- Deleted media → orphaned objects; schedule GC job.  
- Cache invalidation on post update/delete.  

**Optimize & Communicate**  
Use batching for fan‑out, compress thumbnails, apply CDN edge caching for media. Explain that we trade write amplification for low read latency, which aligns with Instagram’s real‑time feed requirement. Highlight monitoring (latency, cache hit ratio) and how the design scales horizontally by adding more shards or nodes in each layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
