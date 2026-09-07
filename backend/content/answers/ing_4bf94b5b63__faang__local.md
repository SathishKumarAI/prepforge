---
qid: ing_4bf94b5b63__faang__local
question: 'Explain: Popular Implementations — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 487
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:41:05-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how a popular ML system might expose its models via a *publish/subscribe* pattern (Pub/Sub).  
Assumptions:  
- Models are served as micro‑services or batch jobs that emit predictions.  
- Clients subscribe to topics by model ID or feature set.  
- Latency tolerance is sub‑100 ms for real‑time inference; higher for batch.

**2️⃣ Approach**  
1. **Topic schema** – one topic per model (or per inference type).  
2. **Publisher** – the inference service publishes `PredictionEvent` messages containing request ID, feature vector, result, timestamp, and optional confidence.  
3. **Subscriber** – downstream services (e.g., recommendation engine) consume events in order or with at‑least‑once semantics.  
4. **Back‑pressure & scaling** – use partitioning by key to parallelize; autoscale publishers based on queue depth.

**3️⃣ Depth**  
- *Message format*: JSON/Avro with schema registry for evolution.  
- *Transport*: Kafka, Pub/Sub (GCP), or Kinesis—provides durability and replay.  
- *Latency*: End‑to‑end < 50 ms achievable with low‑latency brokers; use batching for high throughput.  
- *Reliability*: Exactly‑once via idempotent consumers or transactional writes.  
- *Observability*: Metrics on publish rate, lag, error counts; trace correlation IDs.

**4️⃣ Edge Cases**  
- Sudden spike in inference load → broker overload → throttling or auto‑scaling.  
- Schema drift → consumer errors; mitigated by backward compatibility and schema registry.  
- Model updates: versioned topics or key‑based routing to avoid stale predictions.

**5️⃣ Optimize & Communicate**  
- Compress payloads (e.g., Protobuf) to cut bandwidth.  
- Cache frequent predictions at the subscriber side for ultra‑low latency.  
- Narrate trade‑offs: *throughput vs. ordering*, *exactly‑once vs. simplicity*.  
- Highlight that Pub/Sub decouples model serving from consumption, enabling independent scaling and fault isolation—key to robust ML pipelines in FAANG environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
