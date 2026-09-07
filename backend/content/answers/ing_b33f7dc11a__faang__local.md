---
qid: ing_b33f7dc11a__faang__local
question: 'Explain: List of time series databases — Timeseries Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 563
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:40:35-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of popular time‑series databases (TSDBs) and why they’re chosen for ML workloads. I’ll assume the audience is familiar with relational DBs but not TSDB specifics.

**Approach**  
1. Define what makes a database “time‑series.”  
2. List top options, grouped by deployment model.  
3. Highlight key ML‑friendly features (e.g., retention policies, ingestion rate, query language).  
4. Conclude with a quick trade‑off guide.

**Depth**  

| DB | Deployment | Core Strengths for ML | Typical Use‑Case |
|---|------------|-----------------------|------------------|
| **InfluxDB** | Open‑source / SaaS | High ingestion (10k+ points/s), Flux/SQL query, built‑in downsampling & retention | IoT telemetry, real‑time dashboards |
| **TimescaleDB** | PostgreSQL extension | Relational features + time‑partitioning, SQL familiarity, powerful analytics functions | Operational ML pipelines needing joins with static data |
| **Prometheus** | Pull‑based, in‑memory | Ultra‑low latency sampling, strong integration with Grafana, service discovery | Monitoring metrics for model health |
| **Cassandra (with TimeSeries policy)** | Wide‑column store | Linear scalability, tunable consistency | Large‑scale event logs feeding ML models |
| **Druid** | Columnar + distributed | Fast OLAP queries on high cardinality data, real‑time ingestion | Ad‑tech clickstream analytics |
| **OpenTSDB (HBase backend)** | HBase wrapper | Simple key/value model, horizontal scaling | Legacy telemetry systems |
| **Kdb+** | In‑memory, columnar | Sub‑millisecond query times, tick‑by‑tick data | High‑frequency trading ML |

**Edge Cases**  
- Extremely high cardinality (>10⁶ series) may favor Druid or Cassandra.  
- Strict ACID requirements push toward TimescaleDB.  
- If you need native ML functions (e.g., forecasting), InfluxDB’s Flux or Timescale's `continuous aggregates` are handy.

**Optimize & Communicate**  
I’d recommend starting with **InfluxDB** for prototyping due to its simplicity and rich query language, then evaluating **TimescaleDB** once relational joins become necessary. If the data volume explodes, move to a distributed system like Druid or Cassandra. Throughout, emphasize that the choice hinges on ingestion rate, retention needs, and downstream analytics rather than raw storage cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
