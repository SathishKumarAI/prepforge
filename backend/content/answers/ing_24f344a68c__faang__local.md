---
qid: ing_24f344a68c__faang__local
question: 'Explain: Streaming — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 456
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:09:51-05:00'
sources: []
---

**Clarify**  
The question asks how to use **RabbitMQ** for streaming ML data when a single broker is used to queue *all* streams. Clarify: *What exactly are we streaming?* (features, labels, model updates), *volume*, *latency requirements*, and whether the broker must support multiple producers/consumers concurrently.

**Approach**  
1. **Topic exchanges** – bind each stream type to a routing key (`train.image`, `predict.text`).  
2. **Queues per consumer group** – create durable queues that subscribe to relevant topics; this isolates workloads.  
3. **Publisher confirms & DLQs** – guarantee delivery and handle failures.  
4. **Back‑pressure** – use `prefetch` limits on consumers so the broker doesn’t overload memory.

**Depth**  
- **Routing:** A single exchange routes millions of messages to many queues; this keeps one broker but scales horizontally by adding more workers.  
- **Performance:** With 10 k msg/s, a single node can handle it if `prefetch=100` and consumer threads are optimized.  
- **Fault tolerance:** Clustering (up to 5 nodes) gives HA while still presenting a single logical broker to the ML pipeline.  
- **Security/ACLs** – restrict which producers/consumers can publish/consume specific topics.

**Edge Cases**  
- *Burst traffic* could overflow memory → monitor queue depth and auto‑scale workers.  
- *Consumer failures* may leave messages unacknowledged; DLQ routing mitigates data loss.  
- *Schema drift* in feature streams – include versioning in routing keys or message headers.

**Optimize & Communicate**  
Explain that while a single broker simplifies topology, we mitigate bottlenecks by using topic exchanges, prefetch limits, and clustering. Highlight trade‑offs: more brokers reduce contention but increase operational overhead; one broker keeps management simple but requires careful tuning of queue sizes and consumer rates. Conclude with a quick sanity check: “If latency drops below X ms, consider sharding the exchange or moving to a dedicated streaming platform.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
