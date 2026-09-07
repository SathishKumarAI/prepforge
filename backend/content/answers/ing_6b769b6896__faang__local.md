---
qid: ing_6b769b6896__faang__local
question: 'Explain: Search and Pull are Inverses — The Architecture Twitter Uses to
  Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under
  5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 657
total_tokens: 934
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:53:44-05:00'
sources: []
---

**1️⃣ Clarify**  
Twitter must ingest ~150 M active users’ tweets (≈300 k QPS), stream them at ≈22 MB/s, and deliver a user’s timeline in <5 s. The key challenge: *low‑latency read* on top of massive write throughput. We need an architecture that scales horizontally, tolerates failures, and keeps data fresh.

**2️⃣ Approach**  
Use a **write‑first, pull‑second** model:
1. **Ingest → Firehose** – Kafka (or similar) receives every tweet.
2. **Write to storage** – Persist in a distributed log/append‑only store (Cassandra / HBase).
3. **Index per user** – Build per‑user “timeline” feeds by pulling relevant tweets from the log into a cache (Redis or Memcached) or a read‑optimized database (DynamoDB, BigTable).
4. **Serve via pull** – When a client requests a timeline, fetch the pre‑built feed from cache; if stale, trigger a background refresh.

Thus *search* (pulling timelines) and *pull* (reading cached feeds) are inverses: writes populate logs → indexes; reads consume indexes.

**3️⃣ Depth**  
- **Kafka** guarantees ordering, durability, and horizontal scaling. 300 k QPS ≈ 22 MB/s fits within Kafka’s throughput with a few brokers.  
- **Cassandra** stores tweets by key (user_id) with wide rows; writes are fast (single node).  
- **Timeline service** runs as stateless workers that consume the log, compute “followed‑by” relationships, and write 10–15 k tweet IDs per user into a Redis sorted set.  
- **Cache eviction policy**: LRU + TTL of 5 s ensures fresh data; background workers refresh out‑of‑date feeds.  
- **Complexity**: Write path O(1) per tweet, read path O(k) where *k* = tweets returned (~100).  
- **Fault tolerance**: Kafka replicas, Cassandra quorum reads/writes, Redis sentinel for failover.

**4️⃣ Edge cases**  
- **Follower churn**: When a user follows/unfollows, invalidate or update the corresponding feed cache.  
- **Burst traffic**: Spike at 10× normal QPS → scale Kafka partitions and workers horizontally.  
- **Cold start**: New user gets empty timeline until first tweet; handle via graceful degradation.

**5️⃣ Optimize & Communicate**  
- **Batch writes** to Redis (pipelining) reduce round‑trips.  
- **Sharding feeds** by hash(user_id) keeps cache size manageable.  
- **Metrics**: Latency, cache hit ratio, replication lag; alert on >5 s delivery.  

By treating *search* and *pull* as inverse operations—write logs → index builds → cached reads—we achieve the required throughput while keeping user timelines under 5 seconds. This mirrors the scalable patterns seen in top FAANG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
