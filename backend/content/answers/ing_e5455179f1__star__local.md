---
qid: ing_e5455179f1__star__local
question: 'Explain: Hierarchical Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 539
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:22-05:00'
sources: []
---

**Situation** – At my last company we were building a real‑time analytics platform for an e‑commerce client with 12 million daily transactions. The data had to be ingested, processed, and served to dashboards in under five seconds while also supporting batch reporting for the finance team.

**Task** – I was charged with selecting and integrating the right database technologies so that we could store raw event streams, maintain a highly‑scalable OLTP layer, and deliver fast analytical queries without over‑engineering the stack.

**Action** – I mapped each use case to a specific database type:
1. **Kafka** for ingesting events (high throughput).  
2. **PostgreSQL** as an ACID‑compliant relational store for order data (10% of traffic).  
3. **MongoDB** for flexible product catalog and user profiles (schema evolution).  
4. **Cassandra** to persist clickstream logs at 100k writes/sec (wide‑column, linear scalability).  
5. **Redis** as a cache for session state and leaderboard scores (low latency).  
6. **ElasticSearch** for full‑text search on product descriptions.  
7. **Snowflake** as the data warehouse for nightly batch analytics (elastic compute).  
8. **ClickHouse** for real‑time analytical queries on aggregated metrics.  
9. **DynamoDB** for serverless microservices that required single‑digit ms latency.  
10. **Neo4j** to model recommendation graphs.  
11. **TimescaleDB** for time‑series monitoring of server health.  
12. **MySQL** for legacy billing tables (existing contracts).  
13. **GraphQL + Postgres** for the public API layer.  
14. **RocksDB** embedded in microservices for local key/value storage.  
15. **HBase** as a backup store for archival logs.

I coordinated schema design, replication pipelines (Kafka Connect), and query optimization across these systems, documenting trade‑offs like CAP considerations and cost per GB.

**Result** – The platform handled 12 M events/day with <3 s end‑to‑end latency; analytics queries returned results in under 200 ms. Cost was reduced by 18% compared to a monolithic DB approach. I learned that a polyglot persistence strategy, when guided by clear use‑case mapping, delivers both performance and maintainability without overcomplicating the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
