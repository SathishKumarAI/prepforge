---
qid: ing_d7e32e225c__faang__local
question: 'Explain: See also — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 622
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:36-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the *event‑sourcing* pattern, especially how it applies to machine‑learning systems. I’ll assume they’re interested in data lineage, reproducibility, and incremental training rather than just CRUD persistence.

---

### 1️⃣ Approach
1. **Define event sourcing** – store immutable events instead of current state.  
2. **Show the ML workflow impact** – how raw events become feature vectors, models, and predictions.  
3. **Highlight benefits & trade‑offs** – reproducibility, auditability, scalability.

---

### 2️⃣ Depth (Technical Detail)

| Layer | Typical Events | Transformation |
|-------|----------------|----------------|
| **Data Ingestion** | `UserSignup`, `PurchaseMade`, `SensorReading` | Append-only logs in Kafka/Cloud Pub/Sub. |
| **Feature Store** | `FeatureComputed(user_id, features)` | Rebuild feature table by replaying events; supports versioned snapshots. |
| **Model Training** | `ModelTrained(version, metrics)` | Each training run is an event; can replay to regenerate any model. |
| **Serving** | `PredictionRequested`, `PredictionReturned` | Keeps request‑response pairs for monitoring drift. |

- **Replaying**: Reconstruct state by replaying events up to a timestamp → deterministic feature vectors.  
- **Snapshots**: Periodic checkpoints reduce replay cost (e.g., every 24 h).  
- **Versioning**: Every change is an event; you can roll back or compare model versions.

---

### 3️⃣ Edge Cases

| Scenario | What could break? | Mitigation |
|----------|-------------------|------------|
| Schema evolution | Event format changes → deserialization errors | Use schema registry (Avro/Protobuf) with backward compatibility. |
| Large event volume | Replay becomes expensive | Incremental snapshots, parallel replay pipelines. |
| Data privacy | Sensitive data stored in logs | Encrypt events at rest; use access controls & tokenization. |

---

### 4️⃣ Optimize & Communicate

- **Performance**: Batch processing with Spark/Beam for feature recomputation; incremental updates via change‑data‑capture (CDC).  
- **Observability**: Tag each event with trace IDs to correlate ingestion → training → serving.  
- **Narrative**: Emphasize that event sourcing turns ML pipelines into *time‑travel* systems—any model state can be recreated, audited, or debugged by replaying the exact sequence of events that produced it.

---

> **TL;DR:** Event sourcing stores every change as an immutable event. In ML, this means raw data, feature derivations, training runs, and predictions are all persisted as events, enabling deterministic reconstruction, auditability, and easy rollback—critical for compliant, production‑grade AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
