---
qid: ing_88f14f58f0__faang__local
question: 'Explain: How it Works — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 668
total_tokens: 907
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:02:51-05:00'
sources: []
---

**Clarify**

You want a concise, interview‑ready explanation of *how* an event‑driven architecture works for ML workloads—i.e., what triggers, how data moves, and where learning happens.  
Assumptions:  
- The system is stateless at the event source, uses message queues (Kafka, SQS), and services are containerized.  
- We’re focusing on end‑to‑end flow, not deep‑learning internals.

**Approach**

1. Outline the pipeline stages.  
2. Map each stage to an event type.  
3. Show the data flow between services.  
4. Highlight ML integration points (feature extraction, model inference, retraining).  

**Depth**

| Stage | Event Trigger | Service | Data Flow | ML Role |
|-------|---------------|---------|-----------|---------|
| **Ingestion** | Device publishes telemetry → *SensorEvent* | Ingestor → Kafka topic | Raw JSON to broker | None (storage) |
| **Pre‑processing** | `SensorEvent` consumed → *PreprocessEvent* | Transformer → Kinesis | Cleaned features stream | Feature scaling, outlier removal |
| **Feature Store** | `PreprocessEvent` persisted → *FeaturePersisted* | Feature DB (DynamoDB/Redis) | Key‑value store for real‑time lookup | None |
| **Inference** | Query arrives → *InferenceRequest* | Inference microservice (TF Serving) | Pull features, run model, return prediction | Model inference |
| **Feedback Loop** | Prediction used in downstream action → *ActionEvent* | Logger → RetrainTrigger | Store input‑output pair | Online learning / batch retraining trigger |
| **Retraining** | `RetrainTrigger` → *RetrainJob* | Scheduler → ML pipeline (Airflow) | Aggregate recent data, train new model, push to registry | Model training |

- **Event bus** decouples producers/consumers; each service can scale independently.  
- **Idempotency & retries** handled by broker guarantees (at least once).  
- **Observability**: every event carries a correlation ID for tracing (X‑Ray, OpenTelemetry).

**Edge Cases**

| Issue | Mitigation |
|-------|------------|
| Duplicate events → idempotent handlers or deduplication windows. |
| Schema evolution → use Avro/Protobuf with versioned schemas. |
| Latency spikes → partitioning and consumer group scaling. |
| Model drift → monitor prediction error, trigger retrain after threshold. |

**Optimize & Communicate**

- **Batch vs stream**: small, real‑time predictions stay streaming; heavy training batches off‑line for cost efficiency.  
- **Caching**: feature store cache reduces DB lookups for high‑frequency inference.  
- **Cost**: use spot instances for retraining jobs, autoscale inference pods via Knative.

*Bottom line*: In an EDA‑based ML system, events drive the flow from raw data to predictions and back to model improvement, enabling horizontal scaling, loose coupling, and rapid iteration—key qualities that FAANG teams prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
