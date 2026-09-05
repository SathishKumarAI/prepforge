---
qid: ing_006531f6a0__star__local
question: 'Explain: do I know the address changed I — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 315
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:16-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with building a real‑time fraud detection system for credit card transactions. The existing batch model ran nightly and missed many high‑risk events, causing the risk team to lose critical alerts.

**Task:**  
I needed to redesign the pipeline so that each transaction could trigger an instant prediction, reduce latency from 12 hrs to under 200 ms, and allow the model to evolve without redeploying services.

**Action:**  
I introduced an event‑driven architecture using Kafka as a message bus. Each transaction was published to a “transactions” topic; a consumer group spun up a lightweight Spark Structured Streaming job that applied the latest XGBoost model from MLflow. The stream aggregated events per user and pushed predictions to a Redis cache, which the fraud desk consumed in real time. I also implemented schema evolution with Confluent Schema Registry and added a monitoring microservice that logged prediction confidence scores and drift metrics.

**Result:**  
Latency dropped to 180 ms on average; false‑positive rate fell from 7% to 3%, and the risk team reported a 30% faster response time. I learned how event‑driven design decouples data ingestion, model inference, and alerting, enabling continuous delivery of ML models at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
