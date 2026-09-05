---
qid: ing_bd4531050a__star__local
question: 'Explain: Common Use-cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 393
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:32-05:00'
sources: []
---

**Situation**  
During a fintech start‑up’s launch, I was tasked with designing the data layer for a real‑time payments platform that had to support millions of transactions per day while also providing analytics and compliance reporting.

**Task**  
I needed to choose 15 different database technologies—relational, NoSQL, time‑series, graph, key‑value, columnar, document, in‑memory, object‑oriented, multi‑model, distributed ledger, search engine, stream processing, graph‑DB, and edge storage—to cover the varied workloads: ACID compliance for core banking, high write throughput for event logs, fast aggregations for dashboards, and low‑latency lookups for fraud detection.

**Action**  
I mapped each use case to a database type: PostgreSQL for account balances (ACID), Kafka + ksqlDB for streaming events, Redis for session caching, InfluxDB for time‑series risk metrics, ElasticSearch for full‑text compliance searches, Neo4j for transaction graph analysis, DynamoDB for device authentication, Cassandra for log persistence, Snowflake for BI, MongoDB for user profiles, Couchbase for mobile sync, HBase for large‑scale key‑value storage, ClickHouse for click‑stream analytics, Hyperledger Fabric for immutable audit trails, and SQLite on edge devices. I built a unified schema registry and implemented data pipelines with Airflow to keep them in sync.

**Result**  
The platform handled 3 M TPS with <50 ms latency on critical paths, reduced compliance query time from 45 min to 5 s, and cut infrastructure costs by 18% through optimal database selection. I learned that a polyglot persistence strategy, when driven by clear workload characteristics, delivers both performance and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
