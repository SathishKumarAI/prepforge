---
qid: ing_84c9ca61c5__faang__local
question: 'Explain: KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 488
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:29-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the `KafkaConsumer` class in the Apache Kafka 2.2.0 Java client. Key points: what it is, how it fits into Kafka’s publish/subscribe model, and its primary responsibilities. I’ll assume they’re interested in lifecycle, configuration, and core APIs.

**Approach**  
1. Define the consumer role.  
2. Outline construction & configuration.  
3. Describe poll loop & partition assignment.  
4. Mention offset handling, commit strategies, and graceful shutdown.  

**Depth**  
`KafkaConsumer<TKey,TValue>` is a stateful client that pulls records from one or more topics. It requires bootstrap servers, key/value deserializers, a group id, and optional auto‑commit settings. Internally it maintains an `AssignmentManager`, which interacts with the Kafka cluster’s coordinator to obtain partition assignments (via the Group Coordinator protocol).  

The consumer runs in a single thread; the user repeatedly calls `poll(Duration timeout)`. Each poll triggers a network round‑trip: fetch requests for assigned partitions, deserialization of records, and delivery of a `ConsumerRecords` batch. Offset management is twofold: *auto‑commit* (background thread commits every `enable.auto.commit.interval.ms`) or explicit `commitSync/commitAsync`. The consumer also handles rebalancing events (`ConsumerRebalanceListener`) to commit offsets before partitions are revoked.

**Edge Cases**  
- **Under‑fetching**: slow consumers can cause leader backpressure.  
- **Out‑of‑order commits**: async commits may race with new records.  
- **Rebalance latency**: during a rebalance, no records are returned.  
- **Deserialization errors**: the client throws `SerializationException` unless handled.

**Optimize & Communicate**  
To improve throughput, tune `fetch.min.bytes`, `max.partition.fetch.bytes`, and use multiple consumer threads (each with its own instance). For large-scale ingestion, enable *consumer group* parallelism. I’d explain that proper shutdown (`close()`) ensures pending offsets are committed, preventing data loss. This structured walk‑through demonstrates clear reasoning, depth on implementation details, and awareness of production pitfalls—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
