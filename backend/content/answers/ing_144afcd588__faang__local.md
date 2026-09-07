---
qid: ing_144afcd588__faang__local
question: 'Explain: 4 System Design - Types of Databases — 15 Types of Databases and
  When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 933
total_tokens: 1179
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:30-05:00'
sources: []
---

**Clarify**  
We’re asked to outline the *main categories* of databases you might encounter in ML pipelines, give a short list (≈15) and specify scenarios where each shines.

---

### 1. Relational Databases (SQL)

| Use‑case | Why |
|----------|-----|
| Structured tabular data with ACID guarantees | Strong consistency for transactional workloads (e.g., user accounts). |
| Complex joins & analytics on small‑to‑medium data | Built‑in SQL engines, mature tooling. |

### 2. NoSQL – Key/Value Stores

| Use‑case | Why |
|----------|-----|
| Extremely low‑latency lookups of feature vectors or embeddings | O(1) access, horizontal scaling (Redis, DynamoDB). |

### 3. Document Stores

| Use‑case | Why |
|----------|-----|
| Semi‑structured data, nested features | Flexible schema, JSON support (MongoDB, Couchbase). |

### 4. Columnar Stores / OLAP Databases

| Use‑case | Why |
|----------|-----|
| Batch analytics on terabyte datasets | Compression & vectorized queries (Snowflake, BigQuery). |

### 5. Graph Databases

| Use‑case | Why |
|----------|-----|
| Relationship‑heavy features (social graphs) | Traversal optimizations (Neo4j, TigerGraph). |

### 6. Time‑Series Databases

| Use‑case | Why |
|----------|-----|
| Sensor or log data with high ingestion rates | Downsampling & retention policies (InfluxDB, TimescaleDB). |

### 7. Search Engines / Full‑Text Indexes

| Use‑case | Why |
|----------|-----|
| Retrieval of documents by content for NLP pipelines | Scoring & relevance (Elasticsearch, Solr). |

### 8. In‑Memory Databases

| Use‑case | Why |
|----------|-----|
| Feature caching between training and inference | Zero‑latency access (Redis, Memcached). |

### 9. Distributed File Systems / Object Stores

| Use‑case | Why |
|----------|-----|
| Storing raw data or model artefacts at scale | Cost‑effective, durable storage (S3, HDFS). |

### 10. Data Lakes

| Use‑case | Why |
|----------|-----|
| Raw, heterogeneous data for exploratory ML | Schema‑on‑read, supports batch & streaming. |

### 11. Streaming Platforms

| Use‑case | Why |
|----------|-----|
| Real‑time feature pipelines | Low‑latency ingestion (Kafka, Pulsar). |

### 12. Feature Store Databases

| Use‑case | Why |
|----------|-----|
| Centralized, versioned feature registry | Consistency between training & inference. |

### 13. Versioned Object Stores

| Use‑case | Why |
|----------|-----|
| Model artefacts with lineage tracking | Immutable storage (DVC, MLflow). |

### 14. Edge Databases

| Use‑case | Why |
|----------|-----|
| On‑device inference data | Limited bandwidth & latency constraints. |

### 15. Hybrid / Multi‑Model Stores

| Use‑case | Why |
|----------|-----|
| Workloads spanning multiple DB types | Unified API, easier integration (Couchbase Capella). |

---

**Depth**  
When choosing, evaluate *consistency vs. availability*, *query patterns* (joins vs. key lookups), *write/read ratios*, and *data volume*. For ML pipelines, often a **feature store + time‑series DB + object store** combo works best: the feature store handles consistency, TSDB ingests logs for drift detection, and object storage holds raw data & models.

---

**Edge Cases**  
- Mixed schema evolution → use schema‑on‑read stores.  
- High cardinality joins → avoid relational DBs; switch to graph or distributed SQL.  
- Strict latency → prefer in‑memory or key/value caches.

---

**Optimize & Communicate**  
Explain trade‑offs succinctly: “If you need ACID and complex reporting, pick PostgreSQL; if you need sub‑millisecond feature fetches at scale, Redis is better.” Conclude by noting that many production ML stacks layer several of these databases to meet diverse requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
