---
qid: ing_eff51430ae__star__local
question: 'Explain: Backlogs Can Become Incidents — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 413
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:14-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time analytics pipeline that ingested clickstream data via Kafka and processed it with Spark Structured Streaming. In late March the user growth rate spiked by 120 % overnight, causing our Kafka topic partitions to fill up. The backpressure caused the consumer lag to grow beyond the retention window, threatening data loss.

**Task:**  
I had to prevent the backlog from turning into an incident: keep message throughput above 10 k events/sec while guaranteeing at‑least‑once delivery and minimal latency.

**Action:**  
1. Added a second consumer group with auto‑offset commits disabled, so we could manually control commit timing.  
2. Rebalanced partitions across the new consumers using Kafka’s `consumer rebalancing` API, increasing parallelism from 4 to 12 threads.  
3. Implemented a dynamic throttling layer: a Prometheus alert on consumer lag > 500k messages triggered an automated scale‑up of Spark executors via Kubernetes HPA.  
4. Configured Kafka’s `max.poll.records` and `fetch.min.bytes` for optimal batch size, and switched the serializer to Avro with schema registry to reduce payload size by ~30 %.  
5. Added a dead‑letter queue for messages that couldn’t be processed within 15 s to avoid blocking the main flow.

**Result:**  
Consumer lag dropped from 1.2 M to under 50k messages in two hours, throughput stabilized at 12 k events/sec, and no data loss occurred. Post‑mortem showed a 25 % reduction in processing latency and a 15 % improvement in resource utilization. I learned that proactive scaling combined with fine‑tuned consumer settings can turn a looming backlog into a controlled system behavior rather than an outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
