---
qid: ing_bd4531050a__faang__local
question: 'Explain: Common Use-cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 711
total_tokens: 953
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:02:47-05:00'
sources: []
---

**Clarify**  
You’re asking for a quick‑reference guide that maps the 15 major database categories (SQL, NoSQL, NewSQL, graph, time‑series, etc.) to typical ML workloads (feature stores, model training data, inference serving, telemetry). I’ll assume you want high‑level use‑cases and not implementation details.

**Approach**  
1. List each DB type.  
2. For each, give 1–2 concrete ML scenarios where it shines.  
3. Highlight key strengths that justify the match (e.g., schema flexibility, low‑latency joins, ACID guarantees).  

**Depth**  

| DB Type | Core Strength | Typical ML Use‑Case |
|---------|---------------|---------------------|
| **Relational (PostgreSQL, MySQL)** | Strong ACID, complex joins | Feature store for tabular pipelines; training data with referential integrity |
| **Columnar OLAP (Snowflake, BigQuery)** | Massively parallel scans, compression | Exploratory analysis & feature engineering on petabytes |
| **Key‑Value (Redis, DynamoDB)** | Ultra‑low latency, in‑memory | Real‑time inference caches; serving model predictions |
| **Document (MongoDB, Couchbase)** | Flexible schema, rich queries | Storing unstructured training logs or event streams |
| **Wide‑Column (Cassandra, HBase)** | High write throughput, linear scalability | Logging feature updates at scale |
| **Graph (Neo4j, Amazon Neptune)** | Relationship traversal | Knowledge graph embeddings; link prediction |
| **Time‑Series (InfluxDB, TimescaleDB)** | Downsampling, retention policies | Sensor data for anomaly detection or forecasting |
| **Search (Elasticsearch)** | Full‑text search + analytics | Retrieval‑augmented generation; semantic search over text corpora |
| **Object Storage (S3, GCS)** | Immutable, cheap bulk storage | Raw feature blobs & model artifacts |
| **NewSQL (CockroachDB, TiDB)** | SQL semantics + horizontal scaling | Distributed training pipelines needing transactional guarantees |
| **In‑memory analytics (SAP HANA, MemSQL)** | Sub‑millisecond scans | Interactive model evaluation dashboards |
| **Event Store (Kafka, Pulsar)** | Durable streaming | Feature ingestion pipeline; real‑time retraining triggers |
| **Graph‑DB for RDF (Blazegraph)** | Semantic web data | Ontology‑based feature enrichment |
| **Multi‑model DB (ArangoDB, OrientDB)** | Unified API across types | Prototyping mixed workloads without sharding |

**Edge Cases**  
- If your model needs *exact* joins on millions of rows, a pure key‑value store will fail.  
- Graph engines can be overkill for simple relational data and add latency.  

**Optimize & Communicate**  
When presenting this to stakeholders, start with the problem (e.g., “We need to serve predictions in <5 ms”), then map it to a database that guarantees that metric (Redis). Emphasize trade‑offs: cost vs latency, consistency vs scalability. Wrap up by recommending a hybrid stack—use relational for core features, key‑value for inference cache, and time‑series for telemetry—to cover the full ML lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
