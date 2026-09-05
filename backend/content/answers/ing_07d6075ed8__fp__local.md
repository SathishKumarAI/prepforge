---
qid: ing_07d6075ed8__fp__local
question: 'Explain: Time-Series Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 824
total_tokens: 1002
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:22:09-05:00'
sources: []
---

**Why a “time‑series” database is a distinct class**

A time‑series problem is *sequential*, *high‑velocity* and *chronological*.  
The goal is to record, retrieve, aggregate and forecast events that arrive in order.  
From an optimization standpoint we must:

1. **Minimise write latency** – data arrives at high rates; the storage layout should allow append‑only writes without random I/O.
2. **Exploit temporal locality** – queries often span contiguous windows; compression can leverage repeated patterns over time.
3. **Support efficient roll‑ups** – many analytics need aggregates (mean, min, max) over fixed buckets.

These constraints force a different storage engine than general OLTP or OLAP systems.  
The 15 archetypes below capture the spectrum of trade‑offs that satisfy these goals under different workloads.

| # | Category | Typical Engine | Core Advantage | Ideal Use |
|---|----------|----------------|---------------|-----------|
|1|**Relational + retention policy**|PostgreSQL+TimescaleDB|Strong ACID + SQL|Mixed OLTP/OLAP on existing stacks.|
|2|**Columnar OLAP**|ClickHouse|Fast scans & compression|Ad‑hoc analytics on historical data.|
|3|**Append‑only log**|Apache Kafka|Zero‑copy writes|Real‑time ingestion, replay.|
|4|**Key‑value with time key**|Redis Streams|Low latency |Event sourcing, short‑term buffers.|
|5|**Wide‑column (NoSQL)**|Cassandra|Linear scalability |High write throughput, multi‑region.|
|6|**Object store + query layer**|Amazon S3+Athena|Pay‑per‑query, archival |Cold data analytics.|
|7|**In‑memory time‑series**|kdb+/q|Microsecond ops |Financial tick data.|
|8|**Hybrid columnar/row**|Vertica|Mixed workloads |Business intelligence.|
|9|**Graph + timestamps**|Neo4j with temporal plugin|Relationship queries over time |Social network evolution.|
|10|**Distributed ledger**|Ethereum (or Hyperledger)|Immutability, audit trail |IoT provenance, supply chain.|
|11|**Embedded TS store**|SQLite with TS extensions|Local analytics on edge devices |Mobile health monitoring.|
|12|**Time‑series search engine**|Elasticsearch + ts‑plugin|Full‑text + temporal filtering |Log aggregation & alerting.|
|13|**Batch‑oriented analytic DB**|Snowflake|Separation of compute/storage |Large‑scale historical forecasting.|
|14|**Streaming SQL**|Apache Flink/Beam|Continuous aggregates |Real‑time dashboards.|
|15|**Hybrid graph‑TS**|JanusGraph + time index|Temporal path queries |Network traffic analysis. |

### Non‑obvious insight  
Most people choose a TS engine solely on write throughput, overlooking **temporal compression** as the true cost driver. In an append‑only layout, if you can compress 1 GB of raw data to 10 MB (e.g., via run‑length or delta‑encoding), storage and I/O costs drop by >90 %. Thus, a “slower” engine that excels at compression may outperform a “faster” one in the long run. Selecting a TS system therefore hinges on *how much* temporal redundancy your data contains, not just raw speed metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
