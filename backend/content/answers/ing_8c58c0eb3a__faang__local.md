---
qid: ing_8c58c0eb3a__faang__local
question: 'Explain: ⚙️ Backend Engineer × AI - Interview Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 494
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:30-05:00'
sources: []
---

## ⚙️ Backend Engineer × AI – Interview Guide

### 1️⃣ Clarify  
*Problem:* Design a scalable backend that serves AI models (e.g., image classification) to millions of users.  
*Assumptions to confirm:*  
- Model is pre‑trained and served via REST/GRPC.  
- Latency <100 ms, throughput ≥10k req/s.  
- Data privacy & compliance required.

### 2️⃣ Approach  
1. **Service Layer** – stateless microservice exposing inference API.  
2. **Model Store** – containerized model binaries in S3/GCS + cache (Redis).  
3. **Inference Engine** – GPU/CPU pool managed by Kubernetes, autoscaled via Prometheus metrics.  
4. **Request Queue** – Kafka for burst handling; fallback to direct call if queue is empty.  
5. **Monitoring & Logging** – OpenTelemetry, Grafana dashboards, alerting on latency / error rates.

### 3️⃣ Depth  
- *Scalability:* Horizontal pod autoscaler + GPU node pool → O(1) per request cost.  
- *Latency:* Serve hot models from in‑memory cache; use TensorRT/ONNX runtime for optimizations.  
- *Fault Tolerance:* Multi‑AZ deployment, read replicas, graceful degradation to older model version if new one fails.  
- *Complexity:* O(log n) for queue lookup, O(1) inference once model loaded.

### 4️⃣ Edge Cases  
- **Model drift** → scheduled re‑training pipeline.  
- **Burst traffic** → pre‑warm GPU nodes; fallback to CPU pool.  
- **Data skew** → monitor per‑segment latency; auto‑rebalance load.

### 5️⃣ Optimize & Communicate  
- *Improvements:* Edge inference on CDN (e.g., Cloudflare Workers) for ultra‑low latency users.  
- *Narrative:* “We keep the system stateless so any node can handle a request, cache hot models to avoid disk I/O, and let Kubernetes scale GPU resources automatically while monitoring with OpenTelemetry.”  

*Key takeaways:* design for elasticity, low‑latency inference, robust failure handling, and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
