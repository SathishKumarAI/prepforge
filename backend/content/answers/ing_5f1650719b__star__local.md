---
qid: ing_5f1650719b__star__local
question: 'Explain: Real Time Stream Processing — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:23-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a real‑time fraud detection system for an online payments platform that processes ~300k transactions per minute. The existing batch pipeline introduced a 15‑minute latency, so we were missing the window to block fraudulent cards before they charged customers.

**Task:**  
I had to design a low‑latency stream processing architecture that could ingest raw events, apply ML models on the fly, and trigger instant alerts while ensuring at‑least‑once delivery and fault tolerance.

**Action:**  
I chose Apache Kafka for ingestion and Kafka Streams as the processing engine because of its native exactly‑once semantics and integration with Kafka Connect. I built a stateless transformation pipeline that parsed JSON logs into Avro records, then applied a pre‑trained XGBoost model serialized to ONNX for inference inside a custom `KStream` processor. To handle stateful features (e.g., rolling 5‑minute transaction count per card), I used Kafka Streams’ windowed joins backed by RocksDB, which kept memory usage bounded while providing millisecond query latency. For scaling, I leveraged the stream’s partitioning on `card_id`, allowing horizontal elasticity across a Kubernetes cluster with Strimzi.

**Result:**  
The new system cut fraud detection latency from 15 minutes to under 200 ms, reducing charge‑back losses by 35% in the first quarter. It also lowered infrastructure costs by 20% thanks to the efficient stateful storage. I learned how to balance model accuracy with inference speed and the importance of choosing the right streaming platform for real‑time ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
