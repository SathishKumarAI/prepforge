---
qid: ing_b0a0b016d7__star__local
question: 'Explain: Broker — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:25:05-05:00'
sources: []
---

**Situation:** In my last role I was tasked with scaling the real‑time recommendation engine for a global e‑commerce platform. The ML inference service had to handle 2 M events per minute, but our current architecture suffered from data bottlenecks and latency spikes during flash sales.

**Task:** Build an event pipeline that decouples data ingestion, model serving, and downstream analytics while keeping end‑to‑end latency below 150 ms and guaranteeing at‑least‑once delivery of user interaction events to the ML models.

**Action:** I designed a broker‑centric architecture using Apache Kafka as the central message queue. Producers (front‑end servers) publish clickstream events to topic “user_actions” with partitioning by user ID for ordered processing. The inference microservice consumes from this topic via a consumer group, batches 10 k events per second, and forwards them to a TensorFlow Serving cluster through gRPC. To handle backpressure I enabled Kafka’s log compaction and set retention policies that match our data‑life cycle. For analytics, a separate consumer group writes enriched records to an HDFS sink for batch training. I also implemented schema evolution with Confluent Schema Registry to avoid compatibility issues.

**Result:** The new pipeline cut inference latency from 320 ms to 110 ms and increased throughput by 4× without any data loss. During peak traffic we observed only a 0.3% drop‑off rate, meeting SLA targets. I learned that choosing the right broker, configuring partitioning, and managing consumer groups are critical for scaling ML workloads in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
