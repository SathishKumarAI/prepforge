---
qid: ing_418862f80f__faang__local
question: 'Explain: 134: Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:19-05:00'
sources: []
---

**Clarify**  
You’re asking about a *Mobile System Design* interview that focuses on machine‑learning (ML) components—think recommendation engines or real‑time personalization on Android/iOS.  
Assumptions:  
1. The app targets ~10M daily active users.  
2. Latency < 200 ms for user requests.  
3. Model training is batched nightly; inference must run on-device and in the cloud.

**Approach**  
1. **Define requirements** – latency, accuracy, privacy, offline capability.  
2. **Select ML pipeline** – feature extraction → model training → deployment.  
3. **Architect layers** – data ingestion (Kafka/Firestore), processing (Spark/MLflow), serving (TensorFlow Lite + Cloud‑KMS).  
4. **Design mobile SDK** – lazy loading, delta updates, on-device caching.

**Depth**  
- *Feature layer*: use deterministic hash of user ID + context to generate sparse features; compress with PQ.  
- *Model*: a lightweight XGBoost or NN (≤ 2 MB) trained nightly; store in Cloud Storage, signed by KMS.  
- *Inference*: TensorFlow Lite runtime on device; fallback to REST endpoint if latency > threshold.  
- *Training*: Spark jobs ingest logs → compute gradients → update global model via MLflow tracking.  
Complexity: O(N log N) for training, O(1) inference per request. Trade‑off between model size and accuracy; we keep 90 % AUC with < 2 MB.

**Edge Cases**  
- Network loss → serve cached model.  
- Data drift → monitor metrics, trigger retrain.  
- Privacy violations → mask PII before ingestion; use differential privacy during training.

**Optimize & Communicate**  
- Incremental updates reduce bandwidth (≈ 20 % fewer bytes).  
- A/B test new models in 5 % traffic before full rollout.  
Explain that this design keeps latency low, respects user privacy, and scales horizontally via stateless services—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
