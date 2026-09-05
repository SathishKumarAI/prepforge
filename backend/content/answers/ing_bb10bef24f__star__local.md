---
qid: ing_bb10bef24f__star__local
question: 'Explain: CDC Approaches — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 337
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:11-05:00'
sources: []
---

**Situation**  
In my last role, the data science team was building a real‑time recommendation engine for an e‑commerce platform that served millions of users per day. Our training pipeline required up‑to‑date clickstream and purchase logs, but the raw data lived in a nightly batch warehouse on Snowflake, so we were always lagging by 12–24 hours.

**Task**  
I had to design a change‑data‑capture (CDC) solution that would stream new events from our transactional database into the feature store with minimal latency and without disrupting OLTP performance.

**Action**  
I evaluated three CDC patterns: binlog tailing, log‑based Kafka Connect, and SQL CHANGE‑DATA‑CAPTURE triggers. I chose a hybrid approach: we used Debezium to stream MySQL binary logs into a dedicated Kafka topic, then applied a lightweight Spark Structured Streaming job that performed schema evolution and enrichment before writing the records to an Amazon Kinesis Data Firehose stream feeding our feature store (Redis). To keep drift low, we added a checksum validation step on the consumer side and set up alerts for lag exceeding 30 seconds. We also implemented back‑pressure handling by scaling Kafka partitions and using idempotent writes.

**Result**  
The new pipeline cut data latency from 24 hours to under 2 minutes, boosting recommendation relevance and increasing click‑through rate by 18%. I learned that choosing the right CDC pattern depends on source workload, schema volatility, and downstream consumer tolerance for lag.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
