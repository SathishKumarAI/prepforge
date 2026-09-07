---
qid: ing_0418f428f2__faang__local
question: 'Explain: Overview — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:59-05:00'
sources: []
---

**Overview – Event‑Driven Architecture (EDA) in ML Pipelines**

| Step | What to do |
|------|------------|
| **Clarify** | *Restate:* “Explain how event‑driven architecture can be used to build scalable, real‑time machine‑learning systems.” <br>Assumptions: we have streaming data sources (IoT, logs), model inference services, and downstream consumers. |
| **Approach** | 1️⃣ Identify events (e.g., `sensor_reading`, `user_action`).<br>2️⃣ Publish them to a broker (Kafka/Redis Streams).<br>3️⃣ Consume with micro‑services: preprocessing → feature extraction → model inference.<br>4️⃣ Emit results (`prediction_ready`) for downstream services. |
| **Depth** | *Technical:* Use Kafka topics partitioned by key for parallelism; consumer groups scale horizontally. Preprocessing service can use Spark Structured Streaming or Flink to batch small events into micro‑batches for feature engineering, then push to a model server (TensorFlow Serving). Inference latency < 50 ms is achievable with gRPC. Model updates are released via an event (`model_updated`) that triggers a redeploy of the inference container without downtime. Complexity: O(1) per event; throughput scales linearly with partitions. Trade‑off: higher partition count → more network hops but lower latency. |
| **Edge Cases** | • Duplicate events → idempotent processing.<br>• Backpressure when model is slow → buffer or scale inference consumers.<br>• Schema evolution → use Avro/Protobuf with schema registry. |
| **Optimize & Communicate** | 1️⃣ Add a caching layer (Redis) for hot predictions to reduce load on the model server. <br>2️⃣ Implement monitoring: lag metrics, error rates per topic. <br>3️⃣ Narrate by walking through a concrete example—sensor data → Kafka → preprocessing → inference → downstream alert service—highlighting fault‑tolerance and zero‑downtime updates. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
