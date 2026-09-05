---
qid: ing_b6f4053fd7__star__local
question: 'Explain: Example: Choreography-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:03-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we had to roll out a real‑time fraud detection model across three microservices—data ingestion, feature engineering, and scoring—each running in separate containers on Kubernetes. The existing monolithic pipeline was hitting latency SLA breaches during peak trading hours.

**Task:**  
I needed to decouple the services while ensuring that every step of the ML workflow (pre‑processing, model inference, alerting) stayed consistent and recoverable if any part failed, all without adding a central orchestrator.

**Action:**  
I designed a choreography‑based saga. Each service published events (“feature_ready”, “model_scored”) to Kafka and subscribed to upstream events. The ingestion microservice streamed raw transactions, the feature engine transformed them and emitted “features_ready”. The scoring service consumed that event, ran the TensorFlow model (using TF Serving), then published “fraud_alert” if the probability exceeded 0.8. I implemented compensating actions: if scoring timed out, a timeout handler rolled back by deleting partial alerts. We used Confluent Schema Registry to enforce event contracts and added idempotent handlers to avoid duplicate processing.

**Result:**  
Latency dropped from 250 ms to under 80 ms during peak load, meeting the SLA. The system now scales linearly; we added a fourth service (alert enrichment) without touching existing ones. I learned that event‑driven sagas can replace heavyweight orchestration while keeping ML pipelines fault‑tolerant and observable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
