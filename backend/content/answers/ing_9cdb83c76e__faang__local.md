---
qid: ing_9cdb83c76e__faang__local
question: 'Explain: Class KafkaConsumer<K,V> — KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 502
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:39-05:00'
sources: []
---

**Clarify**  
You’re asking about the generic class `KafkaConsumer<K,V>` from Apache Kafka 2.2.0 – the consumer client that pulls records from a broker. I’ll explain its role, how it’s parameterised, and typical usage patterns.

**Approach**  
1. Outline the class hierarchy and generics.  
2. Describe core responsibilities (polling, offset management).  
3. Highlight key methods (`subscribe`, `poll`, `commitSync`).  
4. Touch on thread‑safety & lifecycle.  

**Depth**  
`KafkaConsumer<K,V>` extends `org.apache.kafka.clients.consumer.Consumer<K,V>`. The type parameters represent the deserialized key/value types; they’re supplied via a `Deserializer<K>` and `Deserializer<V>` in the config. Internally it holds a `ClientId`, manages partitions via a `PartitionAssignor`, and uses `NetworkClient` to send fetch requests.

- **subscribe(Collection<String>)** – registers topics, triggers rebalance callbacks.  
- **poll(Duration)** – blocks until data is available or timeout; returns `ConsumerRecords<K,V>`.  
- **commitSync()/commitAsync()** – writes offsets back to the broker (or Zookeeper in older versions).  
- **seek(TopicPartition, long)** – manually reposition the cursor.

The consumer is *not* thread‑safe: only one thread should invoke its methods. Closing releases network resources and commits pending offsets if `enable.auto.commit` is true.

**Edge Cases**  
- Rebalance during a poll can drop records; handle via `onPartitionsRevoked/Assigned`.  
- Offsets out of range → `OffsetOutOfRangeException`.  
- Deserialization errors → `SerializationException`; configure `key.deserializer/value.deserializer`.  

**Optimize & Communicate**  
For high throughput, use `enable.auto.commit=false`, batch commits in `poll` loop, and set `max.poll.records` appropriately. If latency matters, tune `fetch.min.bytes`/`max.partition.fetch.bytes`. In a FAANG interview I’d also mention that newer clients (≥2.4) deprecate Zookeeper‑based offset storage in favor of the Kafka group coordinator.

This concise overview balances technical depth with clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
