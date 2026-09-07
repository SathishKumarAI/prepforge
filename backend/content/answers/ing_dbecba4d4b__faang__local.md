---
qid: ing_dbecba4d4b__faang__local
question: 'Explain: Centralized Rules — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 561
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:09:50-05:00'
sources: []
---

**Centralized Rules – Client‑Server ML System Design**

---

### 1️⃣ Clarify  
*Problem:* Build a system where clients (mobile/web) send raw data to a central server that applies learned rules/models and returns predictions or decisions.  
*Assumptions to confirm:*  
- Data volume per request?  
- Latency requirement (<50 ms?)  
- Model update cadence (online vs batch)?  
- Privacy constraints (encryption, GDPR).  

### 2️⃣ Approach  
1. **API Gateway** → authentication, rate‑limiting.  
2. **Ingestion Layer** – queue (Kafka) for buffering and scaling.  
3. **Feature Store** – fast lookup of engineered features.  
4. **Model Serving** – containerized inference engine (TensorFlow‑Serving / TorchServe).  
5. **Result Cache** – Redis to memoize frequent predictions.  
6. **Observability** – metrics, tracing, error logging.

### 3️⃣ Depth  
- *Latency*: Use HTTP/2 + gRPC; batch requests of ≤10 ms per inference.  
- *Throughput*: Scale model pods horizontally with autoscaling on queue depth.  
- *Model versioning*: Serve multiple models concurrently via request headers; A/B test new rules in parallel.  
- *Data pipeline*: Periodic Spark jobs refresh feature store every 15 min; incremental training updates nightly.  
- *Complexity*:  
  - Ingestion + Queue: O(1) per message, O(n) for batch compaction.  
  - Feature Store lookup: O(log m) (B‑tree).  
  - Inference: O(k) where k = number of tensors; negligible CPU if batched.

### 4️⃣ Edge Cases  
- **Cold start**: Serve fallback static rules until model warms.  
- **Model drift**: Monitor prediction distribution; trigger retraining if deviation > 5%.  
- **Security breach**: Encrypt payloads at rest and in transit; use signed JWT for auth.  

### 5️⃣ Optimize & Communicate  
- *Performance*: Profile bottlenecks with PyTorch’s JIT; move heavy ops to GPU nodes only when necessary.  
- *Cost*: Spot instances for inference pods, pause during low‑traffic windows.  
- *Explainability*: Log feature importance per request for audit trails.  

**Narrative:** I’d explain the layered design, justify each component with trade‑offs (latency vs cost), and demonstrate how monitoring feeds back into model updates—showing end‑to‑end responsibility typical of FAANG ML infra roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
