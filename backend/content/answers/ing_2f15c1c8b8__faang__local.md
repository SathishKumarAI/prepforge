---
qid: ing_2f15c1c8b8__faang__local
question: 'Explain: Twitter system design | twitter Software architecture | twitter
  interview questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 500
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:02-05:00'
sources: []
---

**Clarify**  
*Goal:* Sketch a high‑level, production‑ready architecture for a microblogging service like Twitter.  
Assumptions to confirm: real‑time tweet ingestion, low‑latency read/write, global scale (millions of users), eventual consistency for timelines, and support for media & search.

**Approach**  
1. **Ingestion Layer** – HTTP/HTTPS API gateways → load balancers → stateless application servers.  
2. **Storage Tier 1 – Tweets** – write‑optimized NoSQL (Cassandra / DynamoDB) with partition key = user_id, clustering by timestamp.  
3. **Storage Tier 2 – Timelines** – precomputed fan‑out on write: each tweet is appended to followers’ timeline tables; use a distributed queue (Kafka/Kinesis) for eventual consistency.  
4. **Cache Layer** – Redis/Memcached for hot timelines and user profiles, with TTLs.  
5. **Search Service** – Elasticsearch for hashtag/keyword queries.  
6. **Media Service** – object storage (S3) + CDN; async transcoding pipeline.  
7. **Analytics & Moderation** – stream processing (Flink/Spark) on Kafka topics.

**Depth**  
- *Write path:* API → app server → Kafka → tweet table & fan‑out workers → timeline tables.  
- *Read path:* Timeline cache hit → DB fallback. Complexity: O(1) read, O(log n) write per follower (handled by pre‑computation).  
- *Scalability:* Horizontal scaling of app servers and partitioning of NoSQL tables; eventual consistency trade‑off mitigated by TTLs.

**Edge Cases**  
- **Massive follow spikes:** throttle fan‑out workers, use batching.  
- **Cold start for new users:** fallback to DB on cache miss.  
- **Media size limits:** enforce at API layer, reject oversized uploads.

**Optimize & Communicate**  
Explain that microservices isolate concerns (auth, tweet, timeline), enabling independent scaling and fault isolation. Use circuit breakers for downstream services, monitor with Prometheus/Grafana, and iterate on latency budgets. This structure shows clear problem framing, systematic design, technical depth, and awareness of trade‑offs—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
