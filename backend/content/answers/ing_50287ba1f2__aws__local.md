---
qid: ing_50287ba1f2__aws__local
question: 'PostgreSQL vs MySQL: What are the differences?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 677
total_tokens: 908
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:23-05:00'
sources: []
---

**Answer (Amazon Way)**  

> *Leadership Principles*: **Customer Obsession**, **Dive Deep**  
> *Scenario*: While leading a data‑engineering sprint for the next generation of our recommendation engine, I had to decide whether to store click‑stream logs in PostgreSQL or MySQL. The choice would affect latency, cost, and future ML pipeline integration.

| Feature | PostgreSQL | MySQL |
|---------|------------|-------|
| **ACID & MVCC** | Full ACID compliance + true MVCC → no read locks, ideal for concurrent write‑heavy logs. | ACID but uses table‑level locking in InnoDB; higher contention under heavy writes. |
| **JSON/Geo Support** | Native JSONB with indexes and PostGIS – critical for geospatial ML features. | JSON stored as text; limited indexing; no native GIS extensions (requires MySQL 8+). |
| **Extensions & Custom Types** | Rich ecosystem (pg_partman, timescaledb) → easier time‑series ingestion. | Fewer extensions; custom types harder to maintain. |
| **Performance on Read‑Heavy ML Ops** | Indexes on JSONB allow fast feature extraction for training jobs. | Requires materialized views or external ETL to flatten JSON → added latency. |
| **Scalability in AWS** | RDS Aurora PostgreSQL offers serverless, 99.999% availability, and seamless read replicas. | Aurora MySQL also strong, but lacks some PostGIS features; replication lag slightly higher under heavy writes. |
| **Cost** | Slightly higher per‑GB storage on Aurora, but lower IOPS for write‑heavy workloads due to MVCC. | Lower upfront cost, but higher I/O costs when scaling replicas. |

### Decision & Impact  
- **Action**: Chose **Aurora PostgreSQL** with TimescaleDB extension for time‑series partitioning and PostGIS for location features.  
- **Result**: Reduced query latency from 750 ms to **180 ms** for feature extraction, cut nightly ETL run time by **45%**, and lowered total AWS spend by **12%** over 6 months while maintaining 99.999% availability.

### Lessons Learned (Bar‑raiser checklist)  
- **Ownership**: Took end‑to‑end responsibility for data schema, migration scripts, and monitoring dashboards.  
- **Dive Deep**: Benchmarked write contention, analyzed lock statistics, and profiled query plans before finalizing the engine.  
- **Quantified Impact**: Measured latency, cost, and SLA adherence pre‑/post‑migration.  
- **Failure Analysis**: When initial migration hit a 3 s delay on a nightly job, I traced it to missing GIN index on JSONB; fixed by adding the index and re‑running tests—demonstrated quick root‑cause analysis.

> *Takeaway*: For ML pipelines that require high write throughput, complex data types (JSON, GIS), and predictable scaling in AWS, **PostgreSQL** (Aurora) offers a stronger foundation than MySQL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
