---
qid: ing_61255cd8a5__star__local
question: 'Explain: Data access pattern — Choose the Right Database for Metric Collection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 357
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:13-05:00'
sources: []
---

**Situation:**  
In my last role, we were building a real‑time recommendation engine that relied on click‑through and dwell‑time metrics collected from millions of user interactions per day. The existing PostgreSQL pipeline was choking—latency spiked to 2 s for simple aggregates, and the ingestion queue stalled during traffic peaks.

**Task:**  
I had to design a metric collection layer that could ingest 10M events per hour, support sub‑second aggregation queries for model training, and still integrate with our existing Spark jobs without breaking downstream pipelines.

**Action:**  
After profiling the workload, I mapped the access pattern: high write throughput, time‑series read patterns, and occasional ad‑hoc range scans. I chose Apache Cassandra because of its tunable consistency and wide‑row design, then added a materialized view on a secondary index for fast “last 24 h” queries. For analytical workloads, we streamed the events into Kafka and used ksqlDB to push aggregates into an ElasticSearch cluster for quick visualizations. I also implemented TTLs of 30 days to auto‑expire stale metrics and set up Prometheus alerts for write latency.

**Result:**  
The new stack lowered ingestion latency from 2 s to under 200 ms, handled peak loads without backpressure, and cut Spark training times by 35 %. We now have real‑time dashboards that refresh every 5 seconds, enabling faster model iterations. The key takeaway: align the database choice with the specific read/write patterns of metric collection rather than defaulting to relational solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
