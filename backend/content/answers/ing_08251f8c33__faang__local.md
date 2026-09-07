---
qid: ing_08251f8c33__faang__local
question: 'Explain: Storage systems — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 467
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:03:05-05:00'
sources: []
---

**Clarify**  
You’re asking what “data architecture” means in the context of storage systems, especially for ML workloads. I’ll assume we’re talking about how data is organized, stored, and accessed across a distributed system (e.g., Hadoop/Spark, cloud data lakes).  

**Approach**  
1. Define the core components: data sources, ingestion pipelines, metadata catalog, storage tiers, and query engines.  
2. Explain the layers of abstraction—raw, curated, and served data—and how they map to storage types (object stores, block SSDs, relational DBs).  
3. Tie each layer to ML needs: volume, velocity, variety, and veracity.  

**Depth**  
Data architecture is a blueprint that specifies *where* data lives, *how* it’s transformed, and *who* can consume it. In practice:

| Layer | Typical Storage | Purpose |
|-------|-----------------|---------|
| Raw/landing | Object store (S3, GCS) | Immutable ingestion buffer for all raw streams. |
| Curated | Partitioned parquet/Delta Lake on SSDs | Optimized for analytics; supports schema evolution and ACID ops. |
| Served | Column‑store or key‑value caches (DynamoDB, Redis) | Low‑latency ML inference inputs. |

Metadata catalogs (e.g., Hive Metastore, Glue Data Catalog) maintain schemas, lineage, and access policies—critical for reproducibility. The architecture also defines data governance: versioning, encryption at rest, and compliance tagging.

**Edge Cases**  
- *Schema drift*: dynamic partitioning vs. strict schema enforcement.  
- *Cold‑data*: archiving to cheaper tiers without breaking ML pipelines.  
- *Latency spikes*: ensuring served tier scales under bursty inference loads.

**Optimize & Communicate**  
I’d iterate by profiling query patterns, moving hot data closer to compute (e.g., using local SSDs or in‑memory caches). I’d present the architecture as a diagram, then walk through a concrete ML pipeline: ingestion → ETL → feature store → model training. This shows how each storage decision impacts ML performance and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
