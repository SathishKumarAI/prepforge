---
qid: ing_9cdb83c76e__star__local
question: 'Explain: Class KafkaConsumer<K,V> — KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 355
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:44-05:00'
sources: []
---

**Situation** – At my last company we built a real‑time fraud detection pipeline that ingested millions of transaction events per day. The data landed on a Kafka cluster and our model scoring service had to pull messages as fast as they arrived without dropping any.

**Task** – I needed to design a consumer that could reliably read from multiple partitions, handle backpressure, and provide exactly‑once semantics for the downstream ML inference job while keeping latency below 200 ms per message.

**Action** – I chose `KafkaConsumer<K,V>` (kafka‑client 2.2.0) because it offers fine‑grained control over offsets, commit strategies, and deserialization. I implemented a consumer group with manual offset commits (`enable.auto.commit=false`), used the `subscribe()` API to watch the fraud topic, and leveraged `poll(Duration)` in a loop that processed batches of 500 records. For backpressure I integrated a bounded `LinkedBlockingQueue` feeding an executor pool; if the queue hit its limit, the consumer paused partitions until space freed. I also wrapped each record with a custom `Deserializer` to convert JSON into our internal event model and used the Kafka `commitSync()` after successful inference.

**Result** – The pipeline handled 3 million events per hour with an average end‑to‑end latency of 145 ms, achieving 99.9% throughput without offset loss. I learned that tuning consumer configs (e.g., `max.poll.records`, `fetch.min.bytes`) and managing manual commits are critical for high‑volume ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
