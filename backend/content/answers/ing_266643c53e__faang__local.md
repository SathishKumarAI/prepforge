---
qid: ing_266643c53e__faang__local
question: 'Explain: Data Storage and Management — Must Know System Design Building
  Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 484
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:13:05-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the core building blocks of a system that stores, manages, and serves machine‑learning data at scale.  
Assumptions: *Real‑time ingestion*, *large tabular/feature vectors*, *high read/write throughput*, *low latency for inference*.

**Approach**  
1. **Ingestion layer** – stream (Kafka/Kinesis) + batch (S3/Blob).  
2. **Storage tier** – distributed key‑value store (DynamoDB, Bigtable) for raw data; columnar file system (Parquet on S3/HDFS) for analytics.  
3. **Feature registry & lineage** – schema registry (Avro/Protobuf), metadata catalog (Glue/Data Catalog).  
4. **Serving layer** – low‑latency cache (Redis, Memcached) + feature store (Feast, Tecton).  
5. **Governance** – access control, audit logs, data quality checks.

**Depth**  
- *Ingestion*: Kafka topics partitioned by key to parallelize writes; exactly‑once semantics via idempotent producers.  
- *Storage*: Use a hybrid model—NoSQL for point queries (e.g., user ID → feature vector) and OLAP for aggregations. Parquet files enable predicate pushdown and compression, reducing I/O.  
- *Serving*: Feature store exposes APIs; caches warm with recent requests to meet <10 ms latency. Consistency can be relaxed (eventual) if inference tolerates stale features.  
- *Governance*: Schema evolution handled by a registry; lineage stored in metadata tables so downstream models can audit data provenance.

**Edge Cases**  
- Sudden spike → auto‑scale Kafka partitions and storage shards.  
- Schema drift → reject or transform incompatible records.  
- Data loss → enable replay from Kafka offsets or S3 checkpoints.

**Optimize & Communicate**  
Highlight trade‑offs: consistency vs latency, cost of hot caches versus cold storage. Explain how each component scales horizontally, the role of partitioning for throughput, and how observability (metrics, logs) drives reliability. This structured narrative demonstrates clear problem framing, thoughtful design, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
