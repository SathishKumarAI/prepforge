---
qid: ing_72cb272ecf__faang__local
question: 'Explain: Step 4: Scale the design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 506
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:10:56-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking about *Step 4: Scale the Design* in the System‑Design‑Primer’s Twitter README. The goal is to take a core set of services (user, tweet, feed, notification) and show how you would add horizontal scalability, fault tolerance, and low latency for millions of users.

**2️⃣ Approach**  
- **Identify bottlenecks**: read/write traffic, hot keys (popular tweets), data consistency.  
- **Choose scaling primitives**: sharding by user id or tweet hash, replication, partitioned queues.  
- **Select technologies**: NoSQL (Cassandra, DynamoDB) for high‑write feeds; in‑memory caches (Redis) for hot timelines; message brokers (Kafka) for notifications.  
- **Design data flow**: write → ingest queue → worker → shard → cache → read.

**3️⃣ Depth**  
- *Sharding*: hash user id to a range of servers; each server owns a partition of the tweet table and its own timeline store.  
- *Replication*: 3‑node quorum for writes, eventual consistency for feeds.  
- *Cache strategy*: LRU Redis per shard for recent tweets; invalidate on new tweet or retweet.  
- *Notification pipeline*: Kafka topics per user group → consumer groups that push to WebSocket servers.  
- *Load balancing*: Layer‑7 LB (NGINX) with sticky sessions for WebSockets, CDN for static assets.  

Complexity: O(1) read/write on shard, but overall system cost is dominated by replication traffic and cache misses.

**4️⃣ Edge Cases**  
- **Hot user**: a celebrity’s timeline can overwhelm a single shard; use fan‑out with precomputed timelines.  
- **Network partitions**: handle write splits with “last write wins” or conflict resolution.  
- **Data skew**: re‑hash or introduce virtual nodes to redistribute load.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: higher replication → lower latency but more storage; stronger consistency → increased write amplification. Show that you would monitor latency SLAs, use circuit breakers for downstream services, and run chaos tests. Conclude with a diagram (pseudo) and the next steps: CAP analysis, cost modeling, and incremental rollout plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
