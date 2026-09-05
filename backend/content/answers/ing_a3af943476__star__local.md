---
qid: ing_a3af943476__star__local
question: 'Explain: Produce records with JSON data — GitHub - confluentinc/kafka-rest:
  Confluent REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 386
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:35-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating our micro‑service telemetry pipeline from a proprietary HTTP endpoint to Apache Kafka for real‑time analytics. The service already emitted events as JSON, but we needed a zero‑downtime rollout without touching the producers.

**Task** – I had to design a lightweight bridge that could accept incoming REST calls, serialize the JSON payloads into Avro/JSON Schema and publish them to a Kafka topic with minimal latency, all while ensuring schema compatibility and backpressure handling.

**Action** – I set up Confluent’s `kafka-rest` proxy on our Kubernetes cluster. Using its `/topics/<topic>` endpoint, I wrote a simple Node.js wrapper that:
1. Validated the incoming JSON against our Avro schema using `avsc`.
2. Converted it to the expected JSON Schema format.
3. POSTed the payload to the REST proxy with appropriate headers (`Content-Type: application/vnd.kafka.json.v2+json`).
4. Implemented exponential backoff retries and consumed the response’s `offsets` field for audit logging.

I also configured a Kafka Connect sink connector that read from the same topic, converting JSON back to Parquet for long‑term storage, and set up metrics in Prometheus to monitor message lag.

**Result** – The migration completed in two weeks with zero service interruption. Throughput increased by 35% (from ~200 msg/s to ~270 msg/s) and end‑to‑end latency dropped from 120 ms to under 80 ms. I learned how the REST proxy abstracts producer complexity while still giving fine control over schema and error handling, making it ideal for quick Kafka integrations in heterogeneous environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
