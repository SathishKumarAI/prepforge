---
qid: ing_64c587339e__fp__local
question: 'Explain: Common Use-Cases: — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 745
total_tokens: 924
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:15-05:00'
sources: []
---

**Why 15 database types matter for ML**

At its core, every ML pipeline must *store* data, *retrieve* it quickly, and *transform* it into the tensors that learning algorithms consume. The choice of storage is therefore a decision about **information bottlenecks**: how much structure you impose (schema vs schema‑less), what latency you can tolerate, and how you will aggregate or stream the data.  

| Database | Core property | When to use |
|----------|---------------|-------------|
| **Relational (SQL)** | Strong ACID, joins, rich query language | Structured tabular data that needs complex analytics before training (e.g., feature engineering in a warehouse). |
| **Columnar (Vertica, Redshift)** | Fast analytical scans on selected columns | Large‑scale aggregations for feature extraction or model evaluation. |
| **NoSQL key‑value (Redis)** | O(1) lookup, in‑memory | Caching precomputed features or serving embeddings at inference time. |
| **Document (MongoDB)** | Flexible JSON schema | Semi‑structured logs or user profiles that evolve over time. |
| **Graph (Neo4j)** | Traversal primitives | Recommendation engines or knowledge graph embeddings. |
| **Time‑series (InfluxDB, TimescaleDB)** | Downsampling & retention policies | Sensor data pipelines where temporal resolution matters for forecasting. |
| **Object store (S3, GCS)** | Immutable large blobs | Storing raw images, audio, or video that feed into deep nets. |
| **Data lakehouse (Delta Lake, Iceberg)** | ACID over object stores + schema evolution | Unified training/evaluation data that changes frequently. |
| **Search engine (Elasticsearch)** | Full‑text + vector search | Retrieval‑augmented generation or nearest‑neighbor lookups in embeddings. |
| **Distributed file system (HDFS, Ceph)** | Parallel read/write for batch jobs | Pre‑processing large datasets with Spark before feeding to TensorFlow. |
| **In‑memory graph (Memgraph)** | Low‑latency traversal | Real‑time fraud detection where latency < 10 ms is critical. |
| **Embedded key‑value (LevelDB, RocksDB)** | Local persistence + high write throughput | Edge devices generating features that must be cached locally before upload. |
| **Queue / stream broker (Kafka, Pulsar)** | Decoupled ingestion & processing | Continuous feature pipelines where new data arrives at high velocity. |
| **Object‑relational mapping stores (Supabase, Hasura)** | Auto‑generated APIs over Postgres | Rapid prototyping of ML services that require CRUD + auth out‑of‑the‑box. |

**Deeper principle:** Each database’s *access pattern* is a manifestation of an optimization problem—minimizing the cost of the most frequent operation (lookup, join, scan). Choosing the right one turns the training pipeline into a well‑conditioned system where the bottleneck shifts from data movement to model convergence.

**Non‑obvious insight:** In many deployments, the *most expensive* step is not the database itself but the **data transformation layer** that bridges raw storage and tensors. By co‑designing schemas with downstream tensor shapes (e.g., storing pre‑tokenized text in a columnar store), you can eliminate an entire shuffle stage, saving both I/O and compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
