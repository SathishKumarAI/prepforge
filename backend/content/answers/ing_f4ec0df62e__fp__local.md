---
qid: ing_f4ec0df62e__fp__local
question: 'Explain: 5.2 Follow a User — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 589
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:40:12-05:00'
sources: []
---

**Why the problem exists**

An “Instagram‑style” social network must keep a *user graph* (who follows whom) and answer two queries in real time:

1. **“Follow / unfollow”** – mutate the graph.
2. **“Feed”** – read all followers’ posts.

The graph is huge, highly skewed (few users have millions of followers), and updates are frequent. A naïve relational schema would choke on reads or writes; we need a *distributed* design that keeps consistency where it matters but sacrifices it elsewhere for throughput.

---

### Core insight

Treat the graph as **two complementary data stores**:

| Store | Purpose | Consistency model |
|-------|---------|-------------------|
| **Adjacency list (followers)** | For each user, keep a sorted set of *who follows them* (needed to push notifications). | *Eventual* – write‑through cache; a stale follower list is acceptable for a few seconds. |
| **Follow table** | For each user, keep a sorted set of *whom they follow* (used by “follow” UI and feed aggregation). | *Strong* – updates must be atomic so the user never sees an incomplete follow state. |

Because reads dominate, we *denormalize*: when A follows B, we write to both tables atomically in a distributed transaction or via a two‑phase commit. If that fails, we retry or mark the operation as “in‑progress” and reconcile later.

---

### System sketch

1. **API layer** – stateless REST/GRPC endpoints.
2. **Cache (Redis / Memcached)** – hot follower lists; eviction policy LRU + TTL.
3. **Graph store (Cassandra / DynamoDB)** – wide‑column schema: `user_id → {follower_id : timestamp}` and vice versa.
4. **Write‑ahead log** – Kafka topic “follow_events”; consumers update caches and stores asynchronously, ensuring durability.
5. **Background job** – periodically reconciles the two stores to catch any missed updates.

---

### Non‑obvious insight

Most designs focus on *write scalability*, but the bottleneck for a follow feature is actually **read amplification**: every follower must see a new post instantly. By storing *reverse adjacency* (followers of each user) in a dedicated, highly replicated table and caching it aggressively, we convert an O(N) fan‑out into O(1) reads per follower. The price is a small write cost for the reverse edge, but that trade‑off yields orders‑of‑magnitude better latency for the most critical user experience—seeing friends’ posts in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
