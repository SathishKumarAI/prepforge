---
qid: ing_45cf7c9e8f__faang__local
question: 'Explain: Most databases weren’t built for time series'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 493
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:02-05:00'
sources: []
---

**Clarify**  
We’re asked why traditional relational or document stores are ill‑suited for time‑series data. I’ll assume “time‑series” means millions of timestamped records per entity (e.g., IoT sensors) that require fast ingestion, range queries, and down‑sampling.

**Approach**  
1. List key workloads: high‑write throughput, point/interval reads, aggregations, retention policies.  
2. Map these to database primitives: row‑oriented vs columnar storage, indexing, compression, sharding.  
3. Highlight mismatches between relational design and time‑series needs.

**Depth**  
- **Schema & Indexing:** RDBMSs use B‑tree indexes on arbitrary columns; a timestamp index alone can become a bottleneck as data grows, because inserts must update the tree for every row.  
- **Storage Layout:** Row‑oriented tables store all fields per record, leading to poor compression and cache locality when only timestamps & values are queried. Columnar stores (e.g., Parquet) compress identical values well but RDBMSs rarely support them natively.  
- **Write Path:** ACID guarantees force disk syncs; time‑series workloads tolerate relaxed durability for speed.  
- **Retention & Down‑sampling:** Manual archiving or materialized views are required in RDBMSs, whereas TSDBs auto‑rollover and aggregate.  
- **Query Language:** SQL is great for joins but lacks native functions for windowed aggregates over time intervals.

**Edge Cases**  
Small datasets or ad‑hoc analytics still fit relational models; hybrid systems (PostgreSQL + TimescaleDB) bridge the gap. If you need strict ACID across all writes, a TSDB may not suffice.

**Optimize & Communicate**  
Explain that specialized TSDBs (InfluxDB, Prometheus, KDB+) use time‑partitioned, compressed, columnar storage and write‑optimized logs to achieve high ingest rates (~10⁶ ops/s) while keeping query latency low. Emphasize trade‑offs: lose some relational features for performance, but you can layer a RDBMS on top if needed. This narrative shows structured reasoning, depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
