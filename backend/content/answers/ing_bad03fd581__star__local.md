---
qid: ing_bad03fd581__star__local
question: 'Explain: B. Cassandra Schema — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 383
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:41-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping a user‑activity feed service that had been bottlenecked by slow reads in our existing relational database. The team needed to support 200k concurrent requests per day while keeping latency under 50 ms.

**Task** – My goal was to design a Cassandra schema and Go microservice that could deliver the feed in real time, handle write amplification from multiple event types, and still allow easy query by user and timestamp.

**Action** – I started with a denormalised “user‑feed” table:  
`CREATE TABLE user_feed (user_id text, ts bigint, activity blob, PRIMARY KEY ((user_id), ts)) WITH CLUSTERING ORDER BY (ts DESC);`  
This partition key strategy kept all of a user’s activities in one node for fast reads. In Go I used the `gocql` driver with prepared statements and batch inserts to reduce round‑trips. I also added a lightweight counter table to track total feed items per user, enabling quick pagination without scanning the entire partition. To avoid hot spots during peak hours, I enabled Cassandra’s “dynamic snitch” and tuned compaction to `size_tiered`. Finally, I wrapped the queries in an HTTP/2 API with Go’s `net/http` and implemented rate‑limiting middleware.

**Result** – The new service cut read latency from 120 ms to 32 ms on average, handled a 300% traffic increase without additional nodes, and reduced our operational cost by 18 %. I learned that thoughtful partitioning and lightweight counters are key to scaling Cassandra for high‑throughput APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
