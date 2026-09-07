---
qid: ing_b58adb94b1__faang__local
question: 'Explain: Develop with agility — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 560
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:45:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain how an event‑driven architecture (EDA) can enable agile ML development—i.e., rapid iteration, decoupling of components, and continuous delivery. Confirm assumptions:  
- Target ML workflow (data ingestion → feature store → training → inference).  
- Scale: batch vs streaming.  
- Deployment model (cloud‑native or on‑prem).

**Approach**  
1. Identify event sources (sensors, logs, user actions).  
2. Define a message bus (Kafka, Pulsar, EventBridge).  
3. Decouple producers, consumers, and ML services via topics/queues.  
4. Use schema registry & versioning for data contracts.  
5. Orchestrate pipelines with serverless functions or lightweight containers.

**Depth**  
- **Data ingestion**: each raw record is published to a “raw‑data” topic; consumers can be real‑time feature generators, batch aggregators, or model retraining triggers.  
- **Feature store**: a separate stream feeds into the feature cache (e.g., Feast), ensuring that every inference request pulls the freshest features without blocking on storage I/O.  
- **Training**: a “train‑request” event triggers an ML job in Kubeflow or SageMaker; the job reads from the training topic, outputs model artifacts to S3/GCS, and publishes a “model‑ready” event.  
- **Inference**: services subscribe to “predict‑request” events, load the latest model artifact (cached locally), compute predictions, and emit “prediction‑result” events.  

Complexity: O(1) per message for publish/subscribe; training pipelines are bounded by data volume and compute cost. Trade‑offs include higher operational overhead (message broker, schema governance) versus faster feedback loops and independent scaling.

**Edge Cases**  
- Schema drift → use Avro/Protobuf with versioning.  
- Backpressure when consumers lag → enable consumer group rebalancing or dead‑letter queues.  
- Latency constraints for real‑time inference → colocate event processing near edge nodes.  
- Data privacy: enforce encryption at rest/in transit and fine‑grained access control on topics.

**Optimize & Communicate**  
Iteratively add observability (metrics, tracing) to detect bottlenecks; use replay of events for debugging. Explain that EDA removes tight coupling between data collection, feature engineering, training, and serving, allowing each team to iterate independently—exactly what agile ML teams need. Highlight how event schemas act as contract contracts, enabling continuous integration/continuous delivery pipelines with minimal friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
