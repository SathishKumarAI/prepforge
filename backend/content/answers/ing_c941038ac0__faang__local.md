---
qid: ing_c941038ac0__faang__local
question: 'Explain: Engagement Service — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 519
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:48-05:00'
sources: []
---

## 1️⃣ Clarify  
We need a micro‑service that drives *user engagement* on Instagram (likes, comments, stories, reels).  
Assumptions to confirm:  
- Scale: ~10 M active users, 1–2 B events/day.  
- Latency < 200 ms for “like”/“comment”.  
- Eventual consistency is acceptable for counters; strong consistency only on a per‑user view.  

## 2️⃣ Approach  
1. **Event ingestion** – Kafka topic per event type (likes, comments, reels).  
2. **Real‑time processing** – Spark Structured Streaming updates counters in Redis & writes to Cassandra for durability.  
3. **Personalized feed** – Graph service (Neo4j) stores follow/interaction edges; a recommendation engine runs nightly with GraphX.  
4. **APIs** – gRPC endpoints expose `/like`, `/comment`, `/feed`.  

## 3️⃣ Depth  
- *Data model*: `Post(id, author_id, timestamp, like_count, comment_count)` in Cassandra (wide‑row).  
- *Caching*: Redis hot cache for top N posts per user; TTL=5 min.  
- *Scalability*: Kafka partitions → horizontal scaling of stream workers; Cassandra keyspace sharding by post hash.  
- *Consistency*: Use optimistic locking on counters; eventual consistency is acceptable.  

## 4️⃣ Edge Cases  
- **Burst traffic** (e.g., viral post): Kafka auto‑scaling + backpressure via Kafka’s `max.poll.records`.  
- **Data loss**: Enable exactly‑once semantics in Spark, write to S3 for replay.  
- **Cold starts**: Prewarm Redis shards with trending posts.  

## 5️⃣ Optimize & Communicate  
- **Batching writes**: Accumulate likes per post into micro‑batches (10 ms) before Cassandra commit to reduce I/O.  
- **Feature flags**: Roll out new recommendation logic gradually, monitor CTR via A/B tests.  
- **Observability**: Prometheus metrics for lag, error rates; Grafana dashboards for latency.  

This architecture balances low latency, high throughput, and robust analytics—exactly what a FAANG interview expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
