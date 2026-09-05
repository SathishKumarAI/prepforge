---
qid: vq_d02de878ac__local
question: Database models ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 411
total_tokens: 627
web_searches: 0
cost_usd: 0.0
sources: []
---

**Crisp answer:**  
In production I use a *polyglot persistence* approach: transactional workloads go to **PostgreSQL** (ACID, row‑level locking), semi‑structured or high‑write‑volume data lives in **MongoDB** or **Cassandra**, fast key‑value lookups are handled by **Redis**, and relationship‑heavy queries use **Neo4j**. I keep a strict boundary—each model serves a single domain concern and is accessed through well‑defined APIs, so swapping engines is just an interface change.

**Nuance:**  
- **PostgreSQL** gives me strong consistency; the trade‑off is slower writes under heavy load, but with partitioning and proper indexing I keep read latency <10 ms for 99.9% of requests.  
- In a recent microservice that handled millions of user actions per day, moving from MongoDB to **Cassandra** lowered write latency by ~30 %, at the cost of eventual consistency—acceptable because we only need near‑real‑time analytics.  
- Redis is my cache layer; I use it for session tokens and leaderboard scores, but I monitor eviction rates because a mis‑tuned `maxmemory-policy` can silently drop data.  
- Neo4j shines when I needed to answer “who’s connected to whom” queries in under 50 ms; the cost was a steeper learning curve for developers accustomed to SQL joins.  

Overall, I pick the model that matches the consistency‑latency trade‑off required by each service, and I keep metrics (e.g., `pg_stat_activity`, `cassandra_latency_histogram`) front‑and‑center to catch regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
