---
qid: ing_84c9ca61c5__star__local
question: 'Explain: KafkaConsumer (kafka 2.2.0 API)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 338
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:53-05:00'
sources: []
---

**Situation:**  
At my last job we were streaming sensor data from thousands of IoT devices into a real‑time dashboard. The existing batch ETL was too slow, so the team decided to pull records directly from Kafka using the 2.2.0 API.

**Task:**  
I had to build a resilient consumer that could keep up with ~50 k events per second, handle rebalancing, and expose metrics for monitoring without dropping messages.

**Action:**  
I instantiated `KafkaConsumer` with `enable.auto.commit=false`, set `max.poll.records=500`, and used the `poll(Duration)` loop. Inside each poll I processed records in parallel via a fixed‑thread pool, then manually committed offsets after successful processing to avoid data loss on failure. To handle rebalancing I implemented `ConsumerRebalanceListener` to flush in‑flight work and commit pending offsets before partitions were reassigned. For observability I exposed Prometheus metrics (records consumed, lag, processing latency) by integrating Micrometer with the consumer.

**Result:**  
The new consumer maintained a steady throughput of 48 k events/s, reduced end‑to‑end latency from 10 s to under 200 ms, and dropped message count fell below 0.01%. I learned how fine‑grained offset control and rebalance handling are critical for high‑volume Kafka workloads, and that exposing internal metrics is essential for operational stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
