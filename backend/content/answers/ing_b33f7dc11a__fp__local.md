---
qid: ing_b33f7dc11a__fp__local
question: 'Explain: List of time series databases — Timeseries Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 626
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:25:11-05:00'
sources: []
---

**Why a specialized timeseries database is needed**

A time‑series dataset is *ordered by timestamp* and often exhibits **high write throughput, long retention, and frequent aggregations over sliding windows** (e.g., average CPU over 5 min).  
These properties clash with relational engines:

| Property | Relational DB | Timeseries DB |
|----------|---------------|--------------|
| Continuous ingestion of millions of rows per second | Poor – indexes rebuild | Optimized – ring buffers, compaction |
| Querying by time window (e.g., `WHERE ts BETWEEN …`) | Expensive index scans | Native range scans |
| Retention policies (drop data older than 30 days) | Manual scripts | Built‑in TTL and downsampling |

The **core principle** is *temporal locality*: data that arrives close together are queried together. Thus, storage engines use **chunked blocks sorted by time**, enabling fast seek and merge of compressed segments.

---

### Leading Time‑Series Databases

| DB | Architecture Highlights | Typical Use‑Case |
|----|-------------------------|-----------------|
| **InfluxDB** (open‑source) | Columnar, TSM engine; compression via LZ4 + delta‑encoding; built‑in retention & downsampling. | IoT telemetry, metrics dashboards. |
| **TimescaleDB** (PostgreSQL extension) | Hypertables partition data by time+shard key; leverages PostgreSQL’s ACID guarantees while adding efficient range scans. | Hybrid OLAP/OLTP workloads, financial tick data. |
| **Prometheus** | Pull‑based metrics collection; in‑memory TSDB with local WAL; compaction into time‑series blocks. | Cloud native monitoring, alerting. |
| **OpenTSDB** (HBase backend) | Wide‑column store; tags stored as columns; uses HBase’s horizontal scaling. | Large‑scale telemetry across distributed clusters. |
| **Kdb+** | In‑memory columnar engine with tick‑based storage; vectorized operations in q language. | High‑frequency trading, real‑time analytics. |
| **VictoriaMetrics** | Single binary, Go‑based; highly compressed blocks (Snappy); writes via line protocol. | Cloud monitoring at scale, cost‑effective. |

---

### Non‑obvious Insight

Most people focus on *write speed* or *compression*, but the **real advantage of a timeseries DB is its ability to perform **continuous aggregations** in near‑zero time**. By storing data in pre‑aggregated blocks (e.g., 1 min averages) and maintaining an index over those blocks, queries that request “last hour’s average CPU” can be answered by reading only a handful of compressed pages—no need to scan raw samples. This is a direct consequence of the *temporal locality* principle and is often overlooked when evaluating storage solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
