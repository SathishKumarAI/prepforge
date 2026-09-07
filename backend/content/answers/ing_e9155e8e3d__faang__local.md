---
qid: ing_e9155e8e3d__faang__local
question: 'Explain: Use case: User posts a tweet — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 527
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:41:37-05:00'
sources: []
---

**Clarify**  
We’re designing the “post a tweet” flow for a high‑traffic social network (Twitter‑style).  
Key questions: *How many tweets per second?* *What consistency guarantees are needed?* *Do we need to support media, mentions, hashtags, geolocation?* I’ll assume ~10k TPS, eventual consistency for the timeline, and that the tweet payload is plain text with optional metadata.

**Approach**  
1. **API layer** – stateless REST/HTTP endpoint behind a load balancer.  
2. **Validation & enrichment** – parse mentions, hashtags, URLs; store them in separate index tables.  
3. **Write path** – append to a write‑optimized log (Kafka or Kinesis) → `tweets` table (Cassandra/Spanner).  
4. **Read side** – materialized views: user timeline, hashtag feeds, mention streams. Updated asynchronously via stream processors (Flink/Kafka Streams).  
5. **Caching** – hot tweets in Redis/Memcached; per‑user cache for recent posts.  
6. **Media handling** – offload to CDN with presigned URLs.

**Depth**  
- *Write latency*: ~50 ms end‑to‑end (API → log → DB).  
- *Throughput*: Log can scale horizontally; Cassandra handles wide columns.  
- *Consistency*: Eventual for feeds, strong for the tweet itself (transactional write).  
- *Fault tolerance*: Replicated log + multi‑region replicas of the database.

**Edge Cases**  
- Duplicate tweets → idempotent writes via unique tweet ID.  
- Large media → backpressure on API; use async upload flow.  
- Spam / abusive content → separate moderation queue.  
- Out‑of‑order events → sequence numbers in log ensure correct ordering in feeds.

**Optimize & Communicate**  
To reduce read amplification, we pre‑build timelines (push model) instead of pulling from a global feed. For latency, use edge caching for the most recent 10k tweets per user. I’d present this diagrammatically and walk interviewers through trade‑offs between write amplification vs. read latency, stressing that our design prioritizes write scalability while keeping read performance acceptable with eventual consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
