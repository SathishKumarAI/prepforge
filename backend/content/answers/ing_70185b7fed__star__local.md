---
qid: ing_70185b7fed__star__local
question: 'Explain: Difference between Cassandra vs MongoDB — Difference Between Cassandra
  and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 361
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:11-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the data layer for a real‑time analytics platform that ingested millions of sensor events per day from IoT devices spread across North America and Europe.

**Task** – I needed to choose a NoSQL database that could provide low write latency, high horizontal scalability, and flexible schema support while also allowing efficient geospatial queries for regional dashboards.

**Action** – I evaluated both Cassandra and MongoDB. With Cassandra’s wide‑column model I leveraged its tunable consistency (QUORUM writes) and built a time‑series partition key (“device_id|date”) to keep hot partitions small. For MongoDB, I used its document store with sharding on device ID and enabled the 2dsphere index for geospatial lookups. I benchmarked write throughput (Cassandra ~120k ops/s vs MongoDB ~60k ops/s) and latency (<5 ms vs <10 ms). I also compared operational overhead: Cassandra required more careful tuning of compaction strategies, while MongoDB offered richer aggregation pipelines out of the box.

**Result** – Switching to Cassandra reduced write latency by 40% and allowed us to scale from 4 to 32 nodes with minimal rebalancing. The geospatial queries in MongoDB were simpler but slower, so we kept them only for legacy reports. I learned that choosing between a wide‑column store and a document store hinges on workload patterns: Cassandra excels at high write volumes with predictable partitioning, while MongoDB shines when flexible schema and complex aggregations are paramount.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
