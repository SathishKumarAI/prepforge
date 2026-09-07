---
qid: ing_dd276469d2__faang__local
question: 'Explain: Groups — The Architecture Twitter Uses to Deal with 150M Active
  Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds - High
  Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 652
total_tokens: 923
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:12:47-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the distributed architecture Twitter uses to support ~150 M active users, 300K QPS on a 22 MB/s firehose, and deliver tweets in <5 s. Key assumptions: all traffic is write‑heavy (tweets, follows), reads are read‑heavy (timeline, search), and latency budgets are strict.

**Approach**  
1. **Ingestion layer** – front‑end servers receive tweets → publish to a high‑throughput message queue.  
2. **Streaming / partitioning** – shuffle data across partitions by user ID/hash, using Kafka/Kinesis‑style brokers.  
3. **Storage tier** – write‑optimized store (Cassandra/MySQL) per partition; replicated for durability.  
4. **Read path** – materialized timelines stored in fast key‑value stores (Redis/Bigtable), updated via stream processors.  
5. **Delivery** – load balancers route to CDN edge caches; fallback to origin if cache miss.

**Depth**  
- **Ingestion**: 10 k front‑ends → Kafka cluster of ~50 brokers, each ≥500 MB/s throughput, enabling 22 MB/s firehose with headroom.  
- **Partitioning**: 1 M partitions; hashing on user ID guarantees even load and locality (tweets for a user always hit same broker).  
- **Storage**: Cassandra nodes store tweets + metadata; replication factor 3 → 90 % write durability, read latency <10 ms.  
- **Timeline materialization**: Spark/Storm workers consume the stream, push updates to Redis sorted sets per follower. Reads fetch top‑N from Redis in <5 ms.  
- **CDN**: Edge caches hold popular tweets; miss triggers origin fetch + TTL cache.

Complexity: O(log N) for key lookups in Cassandra; streaming pipeline linear with QPS. Trade‑offs: higher replication → lower latency but more storage cost; larger partitions → less contention but higher memory per node.

**Edge Cases**  
- Sudden traffic spikes (e.g., breaking news): Kafka auto‑scales, but if broker limits are hit, message backlog can delay delivery >5 s.  
- Node failures: Cassandra’s hinted handoff ensures continuity, but a full replica loss could increase read latency.  
- Consistency vs. speed: eventual consistency in timelines may show stale tweets during network partitions.

**Optimize & Communicate**  
We’d add back‑pressure on Kafka producers when broker load is high, and implement adaptive partitioning to rebalance hotspots. In an interview I would narrate this flow from ingestion to delivery, highlighting how each layer satisfies the throughput and latency constraints while acknowledging trade‑offs in consistency and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
