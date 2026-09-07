---
qid: ing_64c587339e__faang__local
question: 'Explain: Common Use-Cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 753
total_tokens: 995
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:34-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level taxonomy of the most common database technologies (SQL, NoSQL, NewSQL, in‑memory, graph, time‑series, etc.) and guidance on selecting one based on typical ML workloads—training data storage, feature store, model serving, or real‑time inference. I’ll assume “15 types” means roughly 3–4 categories per major family.

**Approach**  
1. Enumerate the families: Relational (SQL), Document, Key‑Value, Column‑Store, Graph, Time‑Series, In‑Memory, NewSQL, Search, Object/Blob, Streaming, Multi‑Model, Distributed File, and Edge databases.  
2. For each family list 2–3 concrete engines.  
3. Provide a one‑sentence “when to use” per engine, tied to ML lifecycle stages.

**Depth**  
| Category | Example Engines | Typical ML Use |
|----------|-----------------|---------------|
| **Relational (SQL)** | PostgreSQL, MySQL, Oracle | Structured feature tables, ETL pipelines, small‑to‑medium training sets. |
| **Document** | MongoDB, Couchbase | Semi‑structured raw data ingestion, experiment tracking metadata. |
| **Key‑Value / NoSQL** | Redis, DynamoDB | Feature store cache, model inference latency reduction. |
| **Column‑Store** | Apache Parquet (via Hive), ClickHouse | Large columnar feature tables for fast analytics and training. |
| **Graph** | Neo4j, Amazon Neptune | Social network or recommendation graph features. |
| **Time‑Series** | InfluxDB, TimescaleDB | Sensor data, log streams feeding online learning. |
| **In‑Memory** | Memcached, SAP HANA | Real‑time scoring pipelines, feature materialization. |
| **NewSQL** | CockroachDB, VoltDB | ACID guarantees with horizontal scale for training metadata. |
| **Search / Full‑Text** | Elasticsearch, Solr | Retrieval of text embeddings or similarity search. |
| **Object/Blob** | S3, GCS, Azure Blob | Storing raw images, audio, and large feature vectors. |
| **Streaming** | Kafka, Pulsar | Continuous data pipelines feeding online training. |
| **Distributed File** | HDFS, CephFS | Raw dataset storage for big‑batch ML jobs. |
| **Multi‑Model** | ArangoDB, OrientDB | Mixed workloads (graph + document) in a single cluster. |
| **Edge / Tiny** | SQLite, LevelDB | Local device training and inference with minimal footprint. |

**Edge Cases**  
- Mixed workloads may force a hybrid architecture (e.g., Postgres + Redis).  
- Data freshness vs. latency trade‑offs: key‑value for low‑latency inference, column‑store for heavy analytics.  
- Governance: SQL offers strong schema enforcement; NoSQL needs careful data validation.

**Optimize & Communicate**  
I’d finish by summarizing the decision tree: start with relational if you need strict schemas and joins; shift to document or key‑value when schema is fluid; use graph for connectivity features; time‑series for logs; in‑memory for low latency; distributed file for raw data. Emphasize that often a *polyglot* stack—e.g., PostgreSQL + Redis + Kafka—serves the full ML pipeline best, and explain why this layered approach satisfies scalability, consistency, and performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
