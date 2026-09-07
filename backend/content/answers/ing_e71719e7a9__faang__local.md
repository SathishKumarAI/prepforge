---
qid: ing_e71719e7a9__faang__local
question: 'Explain: so everything was stored as events flowing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 418
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:37:02-05:00'
sources: []
---

**Clarify**  
The interview asks why a modern ML system would store data “as events flowing” rather than static files or tables. I’ll assume we’re talking about real‑time ingestion pipelines (e.g., Kafka) that feed downstream training and serving systems, and that the goal is low latency and high scalability.

**Approach**  
1. Explain the benefits of event‑driven architecture: decoupling, fault isolation, horizontal scaling.  
2. Contrast with batch storage: higher throughput but longer turnaround for updates.  
3. Highlight how events enable incremental learning, online inference, and real‑time feature pipelines.  

**Depth**  
- **Event Schema & Idempotence** – Each event carries a unique ID, versioned schema (Avro/Protobuf) to guarantee consistency across consumers.  
- **Replayability** – Consumers can replay streams for model retraining or debugging without re‑ingesting raw data.  
- **Time‑travel** – By keeping events immutable, we preserve the full history of feature values, essential for audit trails and reproducibility.  
- **Scalability** – Partitioned topics let multiple workers process shards in parallel; backpressure mechanisms (e.g., Kafka’s consumer lag) keep producers from overwhelming the system.  

**Edge Cases**  
- *Out‑of‑order events*: need timestamping & windowing logic.  
- *Schema evolution*: require backward/forward compatibility checks.  
- *Large binary payloads*: use object storage references instead of embedding in events.

**Optimize & Communicate**  
I’d suggest a layered architecture: Kafka → feature store (e.g., Feast) → model training pipeline, with monitoring for lag and data drift. I’d conclude by noting that while batch pipelines remain valuable for heavy analytics, the event‑driven approach gives ML teams agility and real‑time responsiveness—key in FAANG products where user experience is time‑critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
