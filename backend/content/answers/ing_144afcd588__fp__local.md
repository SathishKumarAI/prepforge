---
qid: ing_144afcd588__fp__local
question: 'Explain: 4 System Design - Types of Databases — 15 Types of Databases and
  When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 782
total_tokens: 965
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:37-05:00'
sources: []
---

**Why the “type” matters**

A database is simply a *storage engine* that trades off four core properties:

| Property | What it buys you | Typical cost |
|----------|-----------------|--------------|
| **Consistency** | Every read sees the latest write | More locking, slower writes |
| **Latency** | How fast a single operation completes | Complex indexes or sharding add overhead |
| **Scalability** | Can handle many nodes / partitions | Some engines need custom clustering logic |
| **Flexibility** | Schema‑less vs. rigid schema | Schemaless → more complex queries |

Designing a system is about matching the *expected workload* to these trade‑offs.

---

### 15 canonical database types

1. **Relational (SQL)** – ACID, strong consistency, joins. Use when transactional integrity and mature tooling matter.
2. **New‑SQL** – SQL interface + horizontal scaling (e.g., CockroachDB). Pick it when you need both ACID and sharding without abandoning SQL.
3. **Document (NoSQL)** – JSON/BSON blobs, flexible schema. Good for content management or evolving data models.
4. **Key–Value Store** – O(1) get/put, minimal metadata. Ideal for caching, session storage, counters.
5. **Wide‑Column Store** – Row‑key + sparse columns (Cassandra). Use when you need high write throughput and eventual consistency.
6. **Graph DB** – Nodes+edges with pattern matching. Best for social graphs or recommendation engines.
7. **Time‑Series DB** – Optimized for ordered, timestamped data (InfluxDB). Choose it for metrics, IoT telemetry.
8. **Search Engine** – Full‑text indexing and relevance scoring (Elasticsearch). Use when you need advanced search over semi‑structured data.
9. **Object Store** – Immutable blobs, large files (S3). Pick it for media storage or backups.
10. **Columnar Analytics DB** – Column‑wise compression & vectorized execution (Snowflake). Ideal for BI workloads.
11. **Graph‑Analytic Stores** – Specialized in traversals at scale (Neo4j). Use when queries involve multi‑hop relationships.
12. **In‑memory Store** – Data lives in RAM (Redis). Great for low‑latency leaderboards, pub/sub.
13. **Distributed Ledger / Blockchain** – Append‑only, tamper‑proof chains. Use for audit trails or cryptocurrency.
14. **Hybrid Transactional/Analytical Processing (HTAP)** – Combine OLTP and OLAP on the same engine (VoltDB). Pick it when you need real‑time analytics on live data.
15. **Object‑Relational Mappers (ORM) backed DBs** – Abstract relational databases with language models (e.g., Prisma). Use when rapid development outweighs raw performance.

---

### One non‑obvious insight

Many engineers treat “no‑SQL” as a blanket solution for scale, but the *real* bottleneck is often **data locality**. A key‑value store can become slow if hot keys are unevenly distributed; sharding that respects access patterns (e.g., consistent hashing + range partitioning) yields far greater gains than simply adding nodes.

In short, pick a database type by first formalising *what consistency you need*, *how many reads/writes per second*, and *the shape of your queries*. Then match those dimensions to the engine whose cost curve best fits your workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
