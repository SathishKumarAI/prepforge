---
qid: ing_1d8801dc3a__faang__local
question: 'Explain: Ongoing — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 643
total_tokens: 905
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:41-05:00'
sources: []
---

**Clarify**

> *What does the “Ongoing – system‑design‑primer/solutions/system_design/twitter” README describe?*  
> The README is a high‑level specification for building a simplified, scalable copy of Twitter: user accounts, tweets, timelines, follower relationships, and real‑time updates.  
> Assumptions I’d confirm:  
> • How many users / tweets per second?  
> • Expected read/write ratio (reads dominate).  
> • Latency budget for timeline fetch (<200 ms).  
> • Data consistency model (eventual vs. strong).

---

**Approach**

1. **Core services** – Auth, Tweet, Timeline, Follower, Notification.  
2. **Data partitioning** – Shard by user ID for writes; fan‑out reads via timeline cache.  
3. **Storage layers** – Hot data in Redis/Kafka + cold storage in HDFS/NoSQL (Cassandra).  
4. **Message bus** – Kafka for decoupling write → timeline updates.  
5. **Scalability** – Horizontal scaling, consistent hashing, request routing.

---

**Depth**

*Auth*: JWT‑based stateless tokens; user table in PostgreSQL with salted bcrypt hash.  
*Tweet*: POST writes to a write‑through cache (Redis) and async persistence to Cassandra (`tweet_id`, `user_id`, `content`, `timestamp`).  
*Follower*: Many‑to‑many relation stored in a key‑value store (`followers:{uid}` → set of follower IDs).  
*Timeline*: Pull‑based – on read, fetch latest N tweets from followed users’ tweet streams; push‑based fan‑out – when a user posts, publish to Kafka topic `user:{uid}`, workers consume and append to each follower’s timeline cache.  
*Notification*: Separate microservice consuming the same topic for real‑time alerts.

**Complexity**: Write path O(1) (cache + async write). Read path O(log N) per followed user; aggregate cost ~O(F log T) where F = followers, T = tweets per follower.  

---

**Edge Cases**

*Massive follow spikes*: rate‑limit writes to Kafka, backpressure on workers.  
*Cold starts*: cache miss → fallback to DB query + prefetch.  
*Data loss*: use Kafka retention and checkpointing; replay on failure.  
*Consistency*: eventual consistency acceptable for timelines; strong consistency only needed for user profile updates.

---

**Optimize & Communicate**

- **Batching**: group timeline updates per worker to reduce write amplification.  
- **Compression**: gzip tweet payloads in Redis to save memory.  
- **Monitoring**: metrics (latency, cache hit ratio) fed to Grafana; alert on SLA breaches.  

I’d narrate the design by walking through a user’s action (tweet → timeline propagation), highlighting each service, data store choice, and failure handling, ensuring interviewers see clear trade‑offs and scalability reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
