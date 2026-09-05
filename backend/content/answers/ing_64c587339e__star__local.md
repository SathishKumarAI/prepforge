---
qid: ing_64c587339e__star__local
question: 'Explain: Common Use-Cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 522
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:08-05:00'
sources: []
---

**Situation** – While leading a data‑engineering team for a fintech startup, we were tasked with designing the architecture for an upcoming product that would handle real‑time payments, long‑term analytics, and regulatory reporting—all on a single platform.

**Task** – I needed to map each of the 15 major database categories (relational, document, key‑value, graph, columnar, time‑series, wide‑column, search, in‑memory, object‑oriented, spatial, multiversion concurrency control, NewSQL, NoSQL, and hybrid) to specific business use‑cases so that the team could choose the right engine for each workload.

**Action** – I created a lightweight decision matrix:  
1. **Relational (PostgreSQL)** for transactional integrity in user accounts.  
2. **Document (MongoDB)** for flexible product catalogs.  
3. **Key‑value (Redis)** for session caching and rate limiting.  
4. **Graph (Neo4j)** to model fraud detection networks.  
5. **Columnar (Snowflake)** for BI dashboards.  
6. **Time‑series (InfluxDB)** for audit logs and metrics.  
7. **Wide‑column (Cassandra)** for storing high‑volume clickstreams.  
8. **Search (Elasticsearch)** for full‑text search across documents.  
9. **In‑memory (Memcached)** for real‑time leaderboard calculations.  
10. **Object‑oriented (ObjectDB)** for legacy Java objects.  
11. **Spatial (PostGIS)** to handle geolocation of transactions.  
12. **MVCC (Oracle) / NewSQL (CockroachDB)** for high‑throughput OLTP with strong consistency.  
13. **Hybrid (TiDB)** for mixed workloads that need both SQL and NoSQL features.

I presented the matrix in a workshop, walked through trade‑offs like CAP vs. ACID, and let each subteam prototype with the chosen store.

**Result** – The architecture reduced data duplication by 30 %, cut query latency for fraud checks from 250 ms to under 50 ms, and allowed us to spin up new services in weeks instead of months. I learned that a clear mapping between database characteristics and business needs is the fastest way to avoid costly rewrites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
