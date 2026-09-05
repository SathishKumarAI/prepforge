---
qid: ing_efd7edd089__star__local
question: 'Explain: Key-Value Store — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 438
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:31-05:00'
sources: []
---

**Situation** – At my previous company we were building a real‑time recommendation engine that had to serve millions of user sessions per day with sub‑100 ms latency. Our existing relational stack (PostgreSQL) couldn’t keep up during traffic spikes, and the analytics pipeline was too slow for A/B testing.

**Task** – I needed to design a lightweight data layer that could store session attributes, feature flags, and caching of model outputs, while still allowing fast reads/writes at scale and seamless integration with our Spark batch jobs.

**Action** – I evaluated several NoSQL options: document stores (MongoDB), column families (Cassandra), graph databases (Neo4j), and key‑value stores (Redis, DynamoDB, Memcached). After profiling read/write patterns, I chose Redis as the primary key‑value store because it offers:
- In‑memory storage for <1 ms lookups
- Lua scripting for atomic multi‑key updates
- Built‑in data structures (hashes, sorted sets) that map cleanly to user feature vectors
- Persistence options (RDB/AOF) and clustering for high availability

I implemented a sharded Redis cluster with client-side consistent hashing. Feature flag objects were stored as hashes keyed by `user:{id}:flags`, while recommendation scores were kept in sorted sets per category (`rec:{cat}`). I also built an eviction policy (LFU) to keep hot data in memory and used Redis Streams to feed new session data into our Spark job for retraining.

**Result** – The system now handles 2 million concurrent sessions with <70 ms average latency, a 3× reduction in database load compared to PostgreSQL. Cache hit rates jumped from 45 % to 88 %, cutting backend CPU usage by 40 %. I learned that choosing the right database type hinges on access patterns: key‑value stores excel when you need ultra‑fast lookups and simple, atomic operations, while more complex joins or schema flexibility point toward document or columnar stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
