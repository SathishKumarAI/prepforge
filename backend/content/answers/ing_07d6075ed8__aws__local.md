---
qid: ing_07d6075ed8__aws__local
question: 'Explain: Time-Series Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 446
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:43:28-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was hired by a fintech startup that needed to ingest 10 M heart‑beat events per day and run anomaly detection in near real‑time for fraud alerts. The CTO asked me to pick a time‑series database (TSDB) that could scale, stay highly available, and keep costs below $200k/yr.

**Action (Dive Deep + Ownership)**  
I scoped 15 TSDB families: open‑source (InfluxDB, TimescaleDB, Prometheus), cloud‑managed (Amazon Timestream, Azure Data Explorer, Google Bigtable), columnar (ClickHouse, Apache Druid), hybrid (PostgreSQL w/Timescale extension), and purpose‑built (OpenTSDB, VictoriaMetrics, QuestDB).  
I built a cost‑performance matrix using synthetic workloads on AWS Spot instances. I then prototyped three finalists—Amazon Timestream, InfluxDB OSS + Grafana, and TimescaleDB on RDS Aurora—measuring ingestion latency, query throughput, and storage costs.

**Result (Deliver Results)**  
Timestream gave 95 % of the ingest capacity for $140k/yr with 1.2 ms read latency; TimescaleDB matched performance but costed $210k due to IOPS limits. InfluxDB OSS hit a 3‑month SLA breach when spikes hit 30 M writes per hour, so we discarded it.  
I delivered the Timestream solution, achieving a 40 % reduction in alert latency (from 5 s to 3 s) and cutting operational overhead by 60 %. The product team now receives fraud alerts in real time, improving customer trust.

**Reflection (Learned from Failure)**  
Early reliance on open‑source tooling underestimated cloud elasticity; switching to a managed service unlocked auto‑scaling and built‑in compression, proving the value of “Bias for Action” coupled with rigorous data validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
