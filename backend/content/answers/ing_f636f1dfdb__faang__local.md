---
qid: ing_f636f1dfdb__faang__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 649
total_tokens: 918
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:12:29-05:00'
sources: []
---

**Clarify**  
The question asks for a high‑level design of Twitter, as outlined in the “system‑design‑primer” README (Step 2). We’ll assume:  
* A global service with millions of users, 10⁵+ tweets per second.  
* Low latency (< 200 ms) reads/writes, strong consistency for a user’s own timeline, eventual consistency elsewhere.  
* High availability and fault tolerance across data centers.

**Approach**  
1. Identify core components: API gateway, authentication, tweet service, follower graph, timeline service, storage layers, cache, search, CDN.  
2. Define interactions (write‑path vs read‑path).  
3. Pick technologies that satisfy scalability, consistency, and latency goals.  

**Depth**  
| Layer | Responsibility | Tech Choices |
|-------|----------------|--------------|
| **API Gateway / Load Balancer** | Route traffic, TLS termination | NGINX + AWS ELB |
| **Auth Service** | OAuth2, JWT issuance | Redis‑backed session store |
| **Tweet Service (Write Path)** | Accept tweet, assign ID, persist | Kafka → Cassandra (wide‑row) |
| **Follower Graph** | Store follow relationships | Neo4j or Dgraph; also a read‑optimized copy in Redis |
| **Timeline Service** | Push–based fan‑out to user feeds | Apache Flink stream to write into per‑user feed table (Cassandra) |
| **Feed Storage** | Per‑user ordered list of tweet IDs | Cassandra with TTL, secondary index for likes |
| **Cache Layer** | Hot tweets and timeline shards | Redis Cluster + Memcached CDN edge |
| **Search & Analytics** | Full‑text search, trending topics | Elasticsearch cluster |
| **CDN** | Static assets, image thumbnails | CloudFront / Akamai |

*Write Flow*: Client → API Gateway → Tweet Service → Kafka → Cassandra.  
*Read Flow*: Client → API Gateway → Feed Service → Redis cache → Cassandra (fallback) → CDN for media.

**Edge Cases**  
* “Cold” users with no cached feed – fallback to on‑demand merge of recent tweets from followees.  
* Network partitions: use quorum writes in Cassandra; eventual consistency is acceptable for other timelines.  
* Rate limiting and abuse detection – API gateway + Redis counters.  

**Optimize & Communicate**  
- **Partitioning**: Shard by user ID to keep feeds localized, reducing cross‑DC traffic.  
- **Batching**: Feed updates batched per minute to reduce write amplification.  
- **Cache invalidation**: TTL on cache entries tied to tweet expiry; push notifications for deletions.  

I’d present this diagrammatically, highlighting the two major flows and annotating latency budgets (e.g., 50 ms API → 30 ms cache hit). This shows clear reasoning, trade‑offs (write vs read performance), and readiness to dive deeper into any component during an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
