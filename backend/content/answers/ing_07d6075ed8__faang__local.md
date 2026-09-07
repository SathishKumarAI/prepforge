---
qid: ing_07d6075ed8__faang__local
question: 'Explain: Time-Series Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 557
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:02:22-05:00'
sources: []
---

**Clarify**  
You’re asking for a quick guide that categorizes the 15 most common time‑series database (TSDB) types and maps each to its ideal use case—e.g., metrics, IoT telemetry, financial tick data, etc. I’ll assume you want a high‑level comparison, not code.

---

**Approach**  
1. Group TSDBs by storage model: **column‑store**, **row‑store**, **log‑structured merge (LSM)**, and **in‑memory**.  
2. For each group list 3–4 flagship products.  
3. Summarize the key “strength” (compression, query speed, distributed scale, etc.) and a typical use case.

---

**Depth**

| Storage Model | Example DBs | Strength | Typical Use Case |
|---------------|-------------|----------|------------------|
| **Column‑store** | InfluxDB, TimescaleDB, ClickHouse | Fast down‑sampling & compression | Metrics dashboards (Prometheus), IoT telemetry |
| **Row‑store** | PostgreSQL + `timescaledb`, MySQL | ACID compliance & joins | Financial tick archives needing complex analytics |
| **LSM‑based** | Apache Cassandra, ScyllaDB, Druid | Write‑heavy, high ingestion rates | Log analytics, real‑time event streams |
| **In‑memory** | Redis Streams, kdb+, SAP HANA | Ultra‑low latency | High‑frequency trading, fraud detection |
| **Hybrid / New‑Gen** | QuestDB, M3DB, OpenTSDB (HBase) | Combine compression + distributed query | Large‑scale telemetry from cloud services |

---

**Edge Cases**  
- *Schema evolution*: Column‑store TSDBs handle schema changes better than LSM ones.  
- *Retention policies*: Some like InfluxDB have built‑in TTL; others need manual compaction.  
- *Cost*: In‑memory solutions can be expensive; consider hybrid tiers.

---

**Optimize & Communicate**  
Explain that the choice hinges on **write throughput**, **query latency**, **retention needs**, and **operational overhead**. Present a decision tree: if you need sub‑millisecond reads → in‑memory; if you ingest millions of events per second → LSM or hybrid; if complex analytics are required → row‑store with extensions. Conclude that most modern stacks use a *polyglot* approach—e.g., InfluxDB for metrics, TimescaleDB for time‑dependent joins, and Redis Streams for real‑time alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
