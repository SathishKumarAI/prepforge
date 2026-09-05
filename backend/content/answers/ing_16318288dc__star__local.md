---
qid: ing_16318288dc__star__local
question: 'Explain: Live Comment System Database Design — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:58-05:00'
sources: []
---

**Situation** – At my last job we launched a video‑streaming app that needed real‑time comments for live streams. The existing NoSQL store could’t handle the write spikes (up to 10k comments/sec) and our analytics dashboards lagged behind by minutes.

**Task** – I had to design a scalable, low‑latency database layer that would support instant comment delivery, efficient pagination, and enable real‑time sentiment analysis without throttling users.

**Action** – I chose a hybrid approach: primary writes went to an Apache Kafka topic for durability; a consumer pipeline used Debezium to stream changes into a sharded Cassandra cluster (keyed by stream ID) for fast read access. Each shard held 1M comments, capped at 100 k per day per stream. For ordering and pagination I added a time‑based partition key and maintained an auxiliary Redis sorted set with comment IDs and timestamps for quick “load more” queries. To power analytics, every write triggered a lightweight Spark job that updated a materialized view in Snowflake, keeping sentiment scores fresh within 2 s.

**Result** – The system handled 15k comments/sec spikes with <20 ms latency, reduced dashboard lag from minutes to under 5 seconds, and cut infrastructure costs by 30% through efficient sharding. I learned that coupling Kafka for durability with a time‑partitioned NoSQL store gives the best trade‑off between write throughput and real‑time read performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
