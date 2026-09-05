---
qid: ing_4748d68a82__star__local
question: 'Explain: Common Mistakes — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 365
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:14-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with building a recommendation engine for an e‑commerce platform that had to serve 5 M daily page views. The data layer originally used MySQL because the team was comfortable with SQL and we had legacy schemas in place.

**Task**  
I needed to redesign the storage layer so the system could ingest high‑velocity clickstreams, perform real‑time aggregations for personalized suggestions, and still support complex analytical queries for business dashboards—all within a 3 second latency window.

**Action**  
First I profiled the workloads: OLTP reads/writes hit >10k ops/sec, while analytics required scanning millions of rows per day. I migrated user interaction logs to a wide‑column NoSQL store (Cassandra) with time‑series partitioning and tuned compaction for write amplification. For session‑level aggregates I built a Spark job that streamed into Redis as an in‑memory cache, exposing the top‑k recommendations via REST. Meanwhile, I kept a nightly ETL from Cassandra to PostgreSQL for compliance reports. Throughout, I used Prometheus + Grafana to monitor latency and throughput, adjusting read replicas and compaction thresholds until I hit sub‑200 ms query times.

**Result**  
The new architecture cut recommendation latency by 70% (from 600 ms to 180 ms) and increased click‑through rate by 12%. Storage costs dropped 35% thanks to efficient columnar compression, and the team gained confidence in handling mixed workloads. I learned that choosing SQL vs NoSQL hinges on data access patterns; misusing one can cripple scalability even if the other looks perfect at first glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
