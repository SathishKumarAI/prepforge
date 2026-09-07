---
qid: ing_080e808e3d__aws__local
question: 'Explain: Postgres for sensor — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 455
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:02-05:00'
sources: []
---

**Situation & Task**  
At a previous role I led the migration of an IoT platform that ingested ~5 TB/day from 20k sensors into a single Postgres database. The goal was to keep historical data for compliance while enabling real‑time analytics, all on a petabyte scale.

**Action (Design)**  
I chose **Amazon RDS Aurora PostgreSQL + TimescaleDB** because it gives us native Postgres compatibility with hypertable sharding and continuous aggregates.  
* **Schema:** each sensor row → `sensor_id`, `ts TIMESTAMPTZ`, `value NUMERIC`. Hypertables were partitioned by month, with retention policies to drop 7‑year history automatically.  
* **Ingestion pipeline:** Kinesis Data Streams → Lambda → Aurora batch inserts (10k rows/second).  
* **Query layer:** Athena on S3 for ad‑hoc analytics; BI tools connect via Redshift Spectrum for aggregated views.  
* **Backup & DR:** Multi‑AZ replicas, automated snapshots to S3, cross‑region read replicas.

**Result**  
- 99.999% availability over 12 months (no outages).  
- Query latency <200 ms for 95th percentile of time‑series reads.  
- Cost savings: $45k/yr vs. a custom NoSQL solution.  

**Reflection (Leadership)**  
*Ownership:* I owned the full migration roadmap, coordinated with security and compliance teams, and delivered on schedule.  
*Dive Deep:* I benchmarked write throughput, tuned compression ratios, and adjusted partition size after profiling.  
*Learning:* Early attempts with DynamoDB hit hot‑partition costs; shifting to Aurora avoided that pitfall and leveraged existing PostgreSQL expertise.

**AWS Leadership Principles Highlighted** – *Customer Obsession*, *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
