---
qid: vq_3e70382634__star__local
question: Is this real-time anomaly detection or batch analytics?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 340
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:58-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a nightly ETL that shipped ~3 TB of sensor data from IoT devices into our warehouse. The business had just launched a new subscription tier and needed to spot sudden spikes in device usage that could indicate fraud or hardware failure.

**Task:**  
I was tasked with building a system that would flag anomalies within minutes of ingestion, not after the nightly batch finished, while still feeding the data into our existing analytical pipelines for trend reporting.

**Action:**  
I designed a hybrid approach: a lightweight Spark Structured Streaming job pulled the raw events from Kafka in 1‑minute windows, applied a rolling Z‑score algorithm on key metrics (e.g., request rate per device), and sent alerts to an alerting dashboard via Grafana. At the same time, I retained the batch ETL for historical storage, adding a “detection flag” column that the streaming job wrote into the same Hive tables so downstream BI could see both raw and flagged data. I used PySpark with Pandas UDFs to keep the detection logic fast, and leveraged AWS Lambda to trigger email alerts when thresholds were breached.

**Result:**  
The system reduced anomaly detection latency from 12 hours to under 2 minutes, cutting incident response time by 80%. The alert rate stayed below 5% false positives after tuning. I learned that combining streaming for real‑time insights with batch for depth can satisfy both operational and analytical needs without duplicating infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
