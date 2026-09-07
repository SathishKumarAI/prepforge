---
qid: ing_b566a44576__faang__local
question: 'Explain: The Challenge — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 722
total_tokens: 994
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:45:19-05:00'
sources: []
---

**Clarify**

> *What is the question asking?*  
We need to describe Twitter’s large‑scale architecture that supports ~150 M active users, ~300 k queries per second (QPS), a 22 MB/s Firehose stream of tweets, and guarantees tweet delivery in <5 s.  
Assumptions to confirm:  
- “Active user” ≈ 1–2 × tweets/day → ~30–60 M tweets/day.  
- Latency target includes network, serialization, database write, and replication.

**Approach**

1. **Data ingestion layer** – front‑end proxies → Kafka/Disruptor → microservices.  
2. **Write path** – append‑only log, eventual consistency store (Cassandra/Bigtable).  
3. **Real‑time feed** – per‑user timeline materialized in Redis or Memcached; sharded by user hash.  
4. **Firehose pipeline** – streaming to Kafka → processing jobs (streaming analytics) → external APIs.  
5. **Replication & fault tolerance** – multi‑region replicas, quorum writes, backup queues.  
6. **Monitoring & auto‑scaling** – metrics (latency, backlog) trigger horizontal scaling.

**Depth**

- **Front‑end**: Nginx + Java/Scala services; each request is routed to a shard by user ID hash.  
- **Ingestion**: Tweets go into a high‑throughput Kafka cluster (≥ 30 k partitions). Producers write with idempotent keys; consumers parse JSON, enrich metadata, and push to an append‑only log in Cassandra (10 k writes/sec per node).  
- **Timeline generation**: When a user posts, the service pushes the tweet ID into the follower’s timeline queue. Timelines are stored as sorted sets in Redis Cluster (partitioned by user hash) for O(log n) insert and O(k) fetch (k=200).  
- **Firehose**: A dedicated Kafka topic streams raw tweets to downstream consumers; a Spark Structured Streaming job writes to BigQuery/Redshift for analytics.  
- **Latency budget**:  
  - Ingress + serialization ≈ 50 ms  
  - Write to Cassandra ≈ 80 ms (1‑write quorum)  
  - Timeline queue push ≈ 20 ms  
  - Replication & external API ≈ 200 ms → total <5 s.

**Edge Cases**

- **Burst traffic**: Auto‑scaling of Kafka brokers and Redis nodes; use backpressure.  
- **Node failures**: Multi‑region replication, quorum writes prevent data loss.  
- **Cold starts for new users**: Lazy timeline creation to avoid hot shards.  
- **Network partitions**: Quorum consistency ensures eventual correctness.

**Optimize & Communicate**

- *Improvements*: Adopt vector clocks for conflict resolution; use a write‑ahead log (Kafka) + batch compaction in Cassandra to reduce storage overhead.  
- *Narration*: “We treat the tweet as an immutable event, push it through a highly partitioned Kafka stream, persist it in a distributed NoSQL store with eventual consistency, and materialize per‑user timelines in memory for instant read.”  

This design scales horizontally, meets the <5 s latency requirement, and handles 150 M users with 300 k QPS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
