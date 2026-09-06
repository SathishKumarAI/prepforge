---
qid: ing_84c9ca61c5__think__local
question: 'Explain: KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 566
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:48:15-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- The user wants an explanation of `KafkaConsumer` from *Apache Kafka* version **2.2.0** (Java client).  
- Assume they’re familiar with Kafka basics but not the consumer API internals.  
- Decide to cover: purpose, key methods, config options, lifecycle, and how it fits into a typical data‑pipeline.

**2️⃣ Adopt a mental model**

Treat `KafkaConsumer` as a *stateful iterator* over a partitioned log:

1. **Connection state** → bootstrap servers → metadata fetch  
2. **Subscription state** → topics/partitions, group coordination  
3. **Polling loop** → fetch records, commit offsets  
4. **Deserialization & error handling**  

Use this four‑layer view to organize the explanation.

**3️⃣ Step‑by‑step reasoning**

- Start with construction: `new KafkaConsumer<>(props)` and highlight mandatory configs (`bootstrap.servers`, `key.deserializer`, `value.deserializer`).  
- Explain *subscription*: `subscribe(...)` vs. `assign(...)`; mention consumer groups, rebalance listeners, and the role of `group.id`.  
- Detail the **polling loop**: `consumer.poll(Duration)` returns a `ConsumerRecords`; discuss timeouts, back‑pressure, and how it blocks until data is available or timeout expires.  
- Cover **offset management**: auto‑commit (`enable.auto.commit`), manual commit (`commitSync/Async`), and the semantics of committed vs. current positions.  
- Mention *partition rebalancing*, `ConsumerRebalanceListener`, and why it matters for exactly‑once processing.  
- End with shutdown: `close()` and resource cleanup.

**4️⃣ Common pitfalls to avoid**

- Mixing `subscribe` and `assign` in the same consumer → undefined behaviour.  
- Relying on default deserializers that throw exceptions; always handle or skip malformed records.  
- Forgetting to commit offsets when using manual commit, leading to duplicate processing after restarts.  
- Ignoring the effect of `max.poll.records`; a large value can starve other consumers in the group.

**5️⃣ Sanity‑check & verbalize**

- Re‑read each section and confirm it maps to a real Kafka use case (e.g., log aggregation).  
- Use an example code snippet: instantiate, subscribe, poll loop, commit, close.  
- Summarise key takeaways in one sentence: *`KafkaConsumer` is the client’s entry point into Kafka’s partitioned stream, turning the broker’s log into a pull‑based iterator with explicit offset control.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
