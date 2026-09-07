---
qid: ing_4ee5197947__faang__local
question: 'Explain: Which database to use? - SQL vs NoSQL — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 457
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:09-05:00'
sources: []
---

**Clarify**  
We’re building a URL‑shortener (tinyURL). The service must store millions of mappings from short keys to long URLs, serve reads at high rate, support analytics, and be highly available.  

**Approach**  
1. Pick a storage that guarantees strong consistency for key lookups (reads dominate).  
2. Keep writes simple: one write per new short URL.  
3. Ensure horizontal scalability and low latency.  

**Depth**  
- **SQL** (e.g., PostgreSQL, MySQL) offers ACID guarantees, joins for analytics, and mature tooling. A single `url_map(id PK, long_url TEXT)` table with an index on `id` gives O(log N) lookups. Scaling reads needs read replicas; scaling writes is harder because of row‑level locks, but the write load is modest (~1‑2 k/s).  
- **NoSQL** (e.g., DynamoDB, Cassandra) provides single‑digit ms key‑value access at massive scale. It automatically shards and replicates, so reads stay fast even with billions of rows. Write throughput is trivial for a URL service. Analytics would require a separate stream/analytics layer (Kafka + Redshift).  

Given the read‑heavy pattern, **NoSQL** (key‑value store) is preferable: it scales horizontally, offers low latency, and keeps the architecture simple. SQL can be used only if complex analytics or relational joins are mandatory.

**Edge cases**  
- Collision of generated keys → need a unique constraint or retry logic.  
- Data loss on node failure → ensure multi‑AZ replication.  
- Growth beyond single‑region capacity → sharding strategy.

**Optimize & communicate**  
Explain trade‑offs: SQL gives richer queries but higher operational cost for scaling; NoSQL delivers performance and simplicity at the expense of relational features. Present a diagram of a DynamoDB table with partition key = short ID, optional secondary index for analytics. Conclude that for a high‑traffic URL shortener, a distributed key‑value store (NoSQL) is the optimal choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
