---
qid: ing_884b57ff56__fp__local
question: 'Explain: 5.4 Get a Post by ID — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 393
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:29-05:00'
sources: []
---

**Why “Get Post by ID” must be *fast, scalable, and consistent***

The fundamental problem: a user requests a single image/video with its metadata (likes, comments, caption). The system must deliver the exact, up-to‑date content in < 200 ms while handling millions of concurrent reads.  

1. **Data locality** – Each post lives on a *shard* keyed by `post_id`. A consistent hash guarantees that any read hits only one node, keeping the request O(1) and avoiding cross‑node joins.  
2. **Cache‑first strategy** – The most common pattern is “read‑heavy, write‑light.” Store posts in an LRU cache (Redis or Memcached). On a miss, fetch from the primary shard and populate the cache. This amortizes disk I/O and keeps hot posts instantly available.  
3. **Eventual consistency for likes/comments** – Likes are counted via an append‑only log to an analytics stream; comments are stored in a separate collection with a foreign key. The read service joins only when necessary, otherwise serves cached counts.  
4. **CDN for media blobs** – Images/videos live on object storage (S3/Blob). Their URLs point to a CDN edge; the API returns the signed URL so the user downloads directly from the nearest edge.

**Non‑obvious insight:**  
The *post_id* itself should encode the creation timestamp (e.g., Snowflake ID). This allows a range query for “most recent posts” without an extra index and guarantees global uniqueness. It also lets the cache layer evict stale entries automatically based on age, aligning eviction policy with user intent (“new content first”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
