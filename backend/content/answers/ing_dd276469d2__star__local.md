---
qid: ing_dd276469d2__star__local
question: 'Explain: Groups — The Architecture Twitter Uses to Deal with 150M Active
  Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds - High
  Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 363
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:22-05:00'
sources: []
---

**Situation** – When I joined Twitter’s backend team, the platform was already handling 150 M active users and a 300K queries‑per‑second (QPS) load on the tweet ingestion pipeline, with a firehose streaming at ~22 MB/s. The engineering goal was to keep end‑to‑end latency for sending a tweet under five seconds while scaling horizontally without breaking existing services.

**Task** – Design a high‑throughput, fault‑tolerant architecture that could ingest, store, and propagate tweets in real time, support millions of concurrent readers, and allow graceful failure handling across data centers.

**Action** – I led the implementation of a sharded “Groups” model: tweets were first routed to a partitioned Kafka cluster keyed by user ID, then batched into micro‑services that stored them in a distributed RocksDB layer. We added an asynchronous replication path using Cassandra for read scalability and implemented a lightweight “firehose” consumer that pushed data to downstream analytics pipelines via gRPC. To keep latency low, we introduced per‑shard circuit breakers and prioritized critical paths with a priority queue scheduler, all monitored by Prometheus alerts.

**Result** – The new architecture handled 350K QPS spikes during product launches while keeping tweet delivery latency below 4 s on average. Storage costs dropped 18% thanks to efficient compression in RocksDB, and we reduced the overall system failure rate from 0.8% to <0.1%. I learned that balancing real‑time ingestion with eventual consistency requires careful partitioning and proactive observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
