---
qid: ing_10fde3124a__faang__local
question: 'Explain: Real-World Applications — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 466
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:12-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to describe how a *client‑server* architecture can be used in a real‑world ML system—e.g., a recommendation service that serves predictions to many users. Key assumptions:  
- Clients (mobile/web) request inference results.  
- Server holds the trained model and data pipelines.  
- Latency, throughput, and scalability are critical.

**2️⃣ Approach**  
1. **Client side** – lightweight SDK or API call.  
2. **Server side** – load‑balanced pool of inference nodes.  
3. **Model storage & versioning** – a registry (e.g., MLflow).  
4. **Feature store** – shared feature cache for consistency.  
5. **Monitoring & logging** – metrics on latency, drift, usage.

**3️⃣ Depth**  
- *Inference Layer*: Use containers (Docker) orchestrated by Kubernetes; each pod runs the model in a high‑performance framework (TensorRT/ONNX).  
- *Load Balancing*: Horizontal Pod Autoscaler based on CPU/memory and request queue length.  
- *Caching*: Redis for hot features; Bloom filters to avoid expensive DB hits.  
- *A/B Testing*: Feature flags route a fraction of traffic to new model versions.  
Complexity: O(1) per inference, but overall system scales linearly with traffic (O(n)). Trade‑offs involve memory vs CPU cost and consistency guarantees.

**4️⃣ Edge Cases**  
- **Model drift** → retraining triggers an in‑place rollout; rollback if accuracy falls below threshold.  
- **Cold start** for new users → fallback to rule‑based or popularity model.  
- **Network partition** → graceful degradation, serve stale predictions from local cache.

**5️⃣ Optimize & Communicate**  
Improvements: use edge inference on client devices for ultra‑low latency; adopt serverless functions for bursty traffic. When explaining, emphasize the separation of concerns (client SDK vs. robust, scalable inference service), highlight observability, and demonstrate how each component addresses latency, reliability, and maintainability—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
