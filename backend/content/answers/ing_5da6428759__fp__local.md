---
qid: ing_5da6428759__fp__local
question: 'Explain: High Level for Pull Based Timelines — The Architecture Twitter
  Uses to Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets
  in Under 5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 549
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:23:51-05:00'
sources: []
---

**High‑level pull‑based timeline – the Twitter way**

Twitter’s core problem: *deliver every user’s timeline within 5 s while ingesting a 22 MB/s firehose that feeds ~300 k QPS for 150 M active users.*  
The solution is a **pull‑based, pre‑materialized** architecture that turns a write‑heavy stream into a read‑light service.

1. **Event ingestion → micro‑services → Kafka**  
   Tweets, retweets and follows are written to a distributed commit log (Kafka).  Each event is timestamped and partitioned by user ID so that all updates for a given user travel along the same path.

2. **Materialized timeline stores (Cassandra/Redis)**  
   A *timeline service* consumes Kafka partitions in order, applies the business rules (e.g., follow graph traversal, spam filtering) and writes a *pre‑built timeline* into a key‑value store keyed by `(user_id, timestamp)` with a short TTL.  The write cost is amortized: many events update the same user’s stream; we batch them in micro‑batches of 100–200 ms.

3. **Pull‑based API (REST/HTTP)**  
   When a client requests “GET /timeline”, the service simply scans the pre‑built store for that user, returning the most recent N items.  No per‑user fan‑out or join is performed at query time; latency is dominated by a single read from a local cache.

4. **Cache hierarchy & hot‑spot mitigation**  
   The timeline store is replicated across data centers; hot users are pinned to dedicated nodes (sharding by hash of user_id).  A global CDN pushes the most recent tweets to edge caches, so that the 5 s SLA covers both network and compute.

5. **Backpressure & throttling**  
   Kafka’s partitioning guarantees linear scalability: adding partitions scales with CPU cores.  If ingestion spikes, consumer groups slow down; the store applies *compaction* (older timeline entries are dropped) to keep disk usage bounded.

---

### Non‑obvious insight

The pull‑based design trades **write latency for read simplicity**.  
Because each user’s timeline is materialized once per event stream, a single read can serve millions of concurrent requests without any per‑request graph traversal.  This “write‑once, read‑many” pattern turns what would be an *O(n)* fan‑out into a constant‑time lookup, allowing Twitter to keep the 5 s SLA even under peak traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
