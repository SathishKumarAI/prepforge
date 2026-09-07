---
qid: ing_c0e965ab90__faang__local
question: 'Explain: User Base — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 611
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:23-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that can serve *Instagram‑style* user base and content at scale—user profiles, posts, feeds, likes/comments, and real‑time updates. I’ll assume: 1 billion active users, 10× more uploads per day than current Instagram, 100 ms latency for feed requests, and a requirement to support eventual consistency for likes/comments.

**Approach**  
1. **Core data model** – separate *user*, *post*, *feed*, and *interaction* tables in a distributed key‑value store (e.g., Cassandra) with wide‑row partitioning on user id.  
2. **Feed generation** – precompute feeds via a *push* pipeline: whenever a user posts, push that post to all followers’ feed queues stored in Redis Streams; fallback to *pull* aggregation for cold users.  
3. **Content storage** – media lives in an object store (S3‑compatible) with CDN edge caching; metadata in the key‑value store.  
4. **API gateway + microservices** – separate services for authentication, user profile, post CRUD, feed retrieval, and interaction handling, all load‑balanced behind a Kubernetes cluster.  
5. **Caching & rate limiting** – per‑user session caches (Memcached) for hot feeds; token bucket for API calls.

**Depth**  
- *Feed Latency*: Pulling from Redis Streams gives <10 ms read; write propagation to followers is asynchronous, bounded by a 200 ms window.  
- *Scalability*: Partition key = user id ensures even sharding; compaction and anti‑entropy jobs keep storage linear with user count.  
- *Consistency*: Uses eventual consistency for likes/comments (writes go to Kafka → consumer updates counters), while read of feed remains strongly consistent via Redis.

**Edge Cases**  
- **Follower explosion**: A celebrity’s 10M followers could overwhelm the push pipeline; solution: limit fan‑out by batching, or use a *pull* strategy for very high‑fan‑out accounts.  
- **Cold start users**: No precomputed feed → generate on demand from recent posts of followed users, cache result for 5 min.  
- **Media spikes**: Sudden upload bursts → autoscale object storage write nodes and CDN edge caches.

**Optimize & Communicate**  
To reduce cost, we can shard feeds into *hot* vs *cold* buckets, evict cold entries after 24 h. For latency, introduce a second‑level cache (e.g., DynamoDB Accelerator) for popular posts. I’d present this as a layered architecture diagram and discuss trade‑offs: push gives low read latency but high write cost; pull is cheaper writes but higher read latency. The key is balancing fan‑out and consistency while keeping the system horizontally scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
