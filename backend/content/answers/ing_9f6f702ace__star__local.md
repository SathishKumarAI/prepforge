---
qid: ing_9f6f702ace__star__local
question: 'Explain: Data Record — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 351
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:51:06-05:00'
sources: []
---

**Situation:** While leading a real‑time analytics platform for an e‑commerce client, we had to ingest clickstream data from millions of users every minute. Our existing batch pipeline was too slow and couldn't support the new dynamic pricing feature.

**Task:** I needed to design a low‑latency ingestion layer that could reliably capture each user action as a distinct record, preserve order per session, and provide fault tolerance for downstream processing.

**Action:** I chose Amazon Kinesis Data Streams. I defined a *shard* configuration with 20 shards to support ~1000 TPS. Each click event was serialized into JSON and sent via the Kinesis Producer Library (KPL) which automatically batches records up to 1 MB or 500 records per call, reducing API calls. In Kinesis terminology, each event became a *data record* with a unique partition key (user ID). The KPL handled encryption, compression, and retry logic. On the consumer side, I built an Apache Flink job that used Kinesis Data Streams connector to read records in order per shard, leveraging the sequence number for exactly‑once semantics.

**Result:** Throughput increased from 200 TPS to 1200 TPS with sub‑second latency. The dynamic pricing module could now react within 3 seconds of a price drop event. I learned that careful shard sizing and partition key design are critical; over‑sharding leads to wasted capacity, while under‑sharding causes throttling. This hands‑on experience cemented my understanding of Kinesis data records and their role in real‑time pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
