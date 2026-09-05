---
qid: ing_0fe02452ef__fp__local
question: 'Explain: Ledger Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 568
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:39:17-05:00'
sources: []
---

**Ledger databases** are the backbone of any system that must keep a *trusted, immutable record*—think finance, supply chain, or health.  
At their core they solve a single optimization problem: **minimize write‑latency while guaranteeing atomicity and chronological ordering** under high throughput.  

| Type | Core property | When to use |
|------|---------------|-------------|
| **Append‑only log** | Purely sequential writes; zero overhead for inserts | High‑volume event sourcing, audit trails |
| **B+tree (key–value)** | Balanced tree gives O(log n) reads/writes | General purpose OLTP with range queries |
| **Log‑structured merge tree (LSM‑Tree)** | Batch compaction → high write throughput | Write‑heavy workloads like time series |
| **Column‑store** | Columnar compression & vectorized scans | Analytical aggregations on sparse data |
| **Wide‑column store** | Flexible schema, horizontal partitioning | IoT telemetry, graph edges |
| **Document store (JSON/BSON)** | Hierarchical documents; flexible queries | CMS, product catalogs |
| **Graph DB** | Explicit edge storage & traversal | Social networks, recommendation engines |
| **Key‑value cache (in‑memory)** | O(1) access | Session data, counters |
| **Time‑series DB** | Optimized retention & downsampling | Monitoring, sensor data |
| **Search index (FTS)** | Full‑text search over text | Log analytics, e‑commerce search |
| **Geospatial store** | Spatial indexes (R‑tree, GeoHash) | Location services |
| **Blockchain ledger** | Distributed consensus + immutability | Cryptocurrencies, cross‑border settlements |
| **Hybrid transactional/analytical processing (HTAP)** | Single engine for OLTP & OLAP | Real‑time dashboards on operational data |
| **Event‑streaming platform** | Publish/subscribe with retention | Microservices communication |

> **Non‑obvious insight:** *The “right” ledger is not a single monolith but an orchestrated polyglot stack.* Each database’s internal layout (e.g., sequential log vs. tree index) reflects a different trade‑off curve between write amplification and read latency. By composing them—using, say, an LSM‑Tree for raw ingestion and a column store for analytics—you can satisfy the ledger’s immutable record requirement while still delivering fast ad‑hoc queries. This layered approach turns what would otherwise be a single bottleneck into a scalable, fault‑tolerant system that respects the fundamental optimization of **write‑efficiency ≠ read‑efficiency**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
