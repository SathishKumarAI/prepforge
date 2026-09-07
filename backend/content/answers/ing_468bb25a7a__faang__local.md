---
qid: ing_468bb25a7a__faang__local
question: 'Explain: Split Services Carefully — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 464
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:28:05-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to “split services carefully” when designing a client‑server ML system—i.e., what components should live on the edge (client) vs. the backend, and why. Key assumptions: low latency is critical for inference, data privacy matters, and model updates happen frequently.

**2️⃣ Approach**  
1. Identify *stateless* preprocessing that can run locally (tokenization, feature scaling).  
2. Isolate *heavy* ML inference into a micro‑service exposed via gRPC/REST.  
3. Separate *model management* (registry, versioning) from *prediction*.  
4. Add an *edge cache* for recent predictions to reduce round trips.

**3️⃣ Depth**  
- **Client side**: lightweight feature extraction and caching; uses local storage to honor privacy. Complexity O(1) per request.  
- **Server side**: stateless inference service behind a load balancer, each container holding a specific model version (Docker). Uses GPU/TPU if needed. Prediction latency ~10‑50 ms.  
- **Model Registry**: centralized DB storing metadata; serves new versions via an “update” endpoint. Complexity O(log n) for lookup.  
- **Edge cache**: LRU policy, memory‑bound to keep recent K predictions (K tuned per use‑case).  

Trade‑offs: moving more logic to the client reduces server load but increases bundle size and may expose business logic; keeping everything on the server simplifies updates but raises latency.

**4️⃣ Edge Cases**  
- **Model drift** → stale client cache must be invalidated.  
- **Large payloads** → chunking or compression needed.  
- **Offline usage** → fallback to a lightweight local model.  

**5️⃣ Optimize & Communicate**  
Explain that the split balances latency, security, and maintainability. Use metrics (latency, throughput) to iterate: if inference latency dominates, move preprocessing to client; if privacy is violated, pull more logic back. Conclude by stressing continuous integration of new model versions without downtime via blue‑green deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
