---
qid: ing_ffe1bd2362__faang__local
question: 'Explain: 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 786
total_tokens: 1022
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:34:48-05:00'
sources: []
---

**Clarify**  
The interviewer wants a quick taxonomy of the most common database types (relational, NoSQL, graph, time‑series, etc.) and practical cues for choosing each in ML pipelines—e.g., feature store, training data, model serving.

**Approach**  
I’ll list 15 categories, group them by use‑case (structured vs. unstructured, transactional vs. analytical), then give a one‑sentence “when to use” note for each. I’ll keep it under 200 words and include key trade‑offs (latency, consistency, schema flexibility).

**Depth**

| # | Database Type | Typical Use in ML | Why It Fits |
|---|---------------|------------------|-------------|
| 1 | **Relational (PostgreSQL/MySQL)** | Feature store, metadata catalog | ACID guarantees for critical features. |
| 2 | **Column‑store (Snowflake, Redshift)** | Training data warehousing | Fast analytic scans over large fact tables. |
| 3 | **Document (MongoDB, Couchbase)** | User logs, semi‑structured training sets | Schema‑flexible ingestion of varied feature vectors. |
| 4 | **Key–Value (Redis, DynamoDB)** | Cache for inference features | O(1) lookups, low latency. |
| 5 | **Graph (Neo4j, JanusGraph)** | Knowledge graphs, relational feature discovery | Traversal queries to surface latent relations. |
| 6 | **Time‑Series (InfluxDB, TimescaleDB)** | Sensor data pipelines | Built‑in retention & aggregation for streaming features. |
| 7 | **Object Store (S3, GCS)** | Raw training blobs, model artifacts | Scalable, cheap long‑term storage. |
| 8 | **Search Engine (Elasticsearch)** | Feature retrieval by similarity | Near‑real‑time vector search for recommendation systems. |
| 9 | **Distributed File System (HDFS)** | Big‑batch training data | Fault‑tolerant parallel read/write. |
|10 | **Graph‑Analytics (Apache Giraph, GraphX)** | Large‑scale graph ML (node2vec) | Parallel graph processing frameworks. |
|11 | **In‑memory Data Grid (Hazelcast, Ignite)** | Online learning state | High throughput for model weight updates. |
|12 | **Relational + Full‑Text (PostgreSQL w/ pg\_vector)** | Hybrid feature store & vector search | One system for structured + vector queries. |
|13 | **NewSQL (CockroachDB, TiDB)** | Consistent distributed training metadata | Strong consistency with horizontal scaling. |
|14 | **Object‑Relational (Oracle, SQL Server)** | Legacy ML systems needing enterprise features | Security, auditing, and integration with existing stacks. |
|15 | **Specialized (Cassandra, Bigtable)** | Massive write‑heavy feature streams | Linear scalability for high‑velocity ingestion. |

**Edge Cases**  
- Mixed workloads may need multi‑store architectures; watch for data duplication and consistency gaps.  
- Cold starts in key–value caches can hurt inference latency—prewarm or use fallback stores.

**Optimize & Communicate**  
Highlight that the choice is driven by *feature velocity, query patterns, consistency needs,* and *cost*. I’d suggest a two‑tier design: an object store for raw data + a feature store (relational or key–value) for fast inference. For explainability, keep metadata in relational tables; for graph insights, push related entities into a graph DB. This layered approach balances speed, flexibility, and maintainability—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
