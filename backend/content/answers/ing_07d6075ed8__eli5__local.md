---
qid: ing_07d6075ed8__eli5__local
question: 'Explain: Time-Series Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 488
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:47:54-05:00'
sources: []
---

Imagine a library that only keeps track of how often each book is checked out, not the books themselves. That’s what a **time‑series database (TSDB)** does: it stores data points tied to exact moments—temperature at 3 pm, heart rate every second, stock price every minute—and it does so very fast.

There are about fifteen common kinds of TSDBs, each tuned for a different “library style”:

| Type | What it loves | When you pick it |
|------|---------------|------------------|
| **InfluxDB** | Simple, open‑source, great for IoT sensors | Small‑to‑medium projects needing quick setup |
| **TimescaleDB** | PostgreSQL + time tricks | You already use Postgres and need SQL comfort |
| **Prometheus** | Metrics from software systems | Monitoring servers or cloud services |
| **OpenTSDB** | Big Hadoop clusters | Huge, distributed data pipelines |
| **KDB+** | High‑frequency trading | Millisecond‑level finance feeds |
| **Graphite** | Graphing and alerting | Visual dashboards for metrics |
| **Amazon Timestream** | Cloud‑native, serverless | AWS‑only workloads with auto‑scaling |
| **Azure Data Explorer (Kusto)** | Log analytics + time series | Microsoft stack, big data queries |
| **ClickHouse** | Columnar OLAP | Analytical queries over long histories |
| **Cassandra** | Wide‑column, no single point of failure | Massive write loads across regions |
| **MongoDB with TimeSeries collections** | Flexible schema | When you need document storage + time tags |
| **RedisTimeSeries** | In‑memory speed | Real‑time dashboards, low latency |
| **Druid** | Ad‑hoc BI on time data | Interactive analytics on streams |
| **QuestDB** | SQL‑like interface, high write throughput | Financial tick data, telemetry |

Pick a TSDB by asking: *How fast do I need to write? Do I already use another database? Will I run it on the cloud or on my own servers?* The right choice turns your raw time stamps into a well‑ordered library you can read and query in seconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
