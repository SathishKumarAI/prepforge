---
qid: ing_34e9e78fc5__faang__local
question: 'Explain: Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 622
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:17-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for a *machine‑learning* system that follows a classic **client–server architecture**.  
Assumptions to confirm:  

| Question | Why it matters |
|----------|----------------|
| What is the client’s role? (Web UI, mobile app, IoT device) | Determines input size/latency needs |
| Is inference or training performed on the server? | Affects compute & data‑flow design |
| Expected request volume / SLA | Drives scalability and caching strategy |
| Data privacy / regulatory constraints | Impacts data flow and encryption |

---

**2️⃣ Approach**  
1. **Client** → lightweight SDK that serializes features, encrypts payload, sends HTTPS POST to **API Gateway**.  
2. **Gateway** → rate‑limit, auth, route to *Inference Service*.  
3. **Inference Service** (stateless container) pulls a pre‑deployed model from a model registry (e.g., S3/MLflow).  
4. **Model Cache / Feature Store** on the same node or a distributed cache (Redis) for fast lookups.  
5. **Response** → JSON with prediction, optional metadata; returned via gateway to client.

---

**3️⃣ Depth**  
*Model Serving*: Use TensorFlow‑Serving or TorchServe behind a load balancer. Deploy as Docker containers on ECS/EKS; autoscale based on CPU/latency metrics.  
*Feature Store*: Apache Hudi or Feast for versioned features; serves low‑latency joins.  
*Security*: TLS, JWT auth, IP whitelisting.  
*Monitoring*: Prometheus + Grafana for latency, error rates; MLflow tracking for drift detection.  

**Complexity**:  
- Inference latency O(1) per request (model in memory).  
- Throughput scales linearly with replicas; cost ≈ `C = α * replicas`.  
Trade‑off: larger cache → higher RAM cost but lower DB hits.

---

**4️⃣ Edge Cases**  
- **Cold start**: pre‑warm containers or use spot instances.  
- **Model drift**: schedule re‑training pipelines; push new artifacts to registry automatically.  
- **Network partition**: fallback to local cached model if gateway unreachable (client‑side caching).  

---

**5️⃣ Optimize & Communicate**  
- **Batching**: aggregate requests in the inference service to reduce per‑request overhead.  
- **Compression**: gzip payloads; use gRPC for lower latency.  
- **Explainability**: expose SHAP values via an optional endpoint for audit clients.  

*Communication*: “I’d start by defining clear SLAs, then layer security and scaling on top of a stateless inference service backed by a feature store. This keeps the client thin, ensures rapid model updates, and lets us monitor drift without breaking the flow.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
