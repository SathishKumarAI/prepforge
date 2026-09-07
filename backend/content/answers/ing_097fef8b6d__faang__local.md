---
qid: ing_097fef8b6d__faang__local
question: 'Explain: ⚡ Inference & Production — Ai Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 488
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:21-05:00'
sources: []
---

**⚡ Inference & Production – AI Engineer (Level 75)**  

---

### 1️⃣ Clarify  
We’re asked to explain how an AI engineer at a top‑tier company would take a trained model from inference‑ready state into a robust production system. Key assumptions: the model is already validated, data pipelines exist, and we target low latency/high throughput for millions of requests.

### 2️⃣ Approach  
1. **Model Packaging** – convert to ONNX/TensorRT or TorchScript; pin weights.  
2. **Serving Layer** – choose a framework (e.g., TensorFlow Serving, TorchServe, or custom gRPC).  
3. **Scalability & Resilience** – auto‑scale via Kubernetes + Istio; use sidecars for metrics/health.  
4. **Observability** – Prometheus/Grafana dashboards, OpenTelemetry tracing.  
5. **Security & Compliance** – TLS, RBAC, audit logs; data masking if needed.

### 3️⃣ Depth  
- **Latency**: batch size tuning + GPU vs CPU trade‑offs; keep inference under SLA (e.g., <50 ms).  
- **Throughput**: sharding requests across replicas; use async queues for heavy jobs.  
- **Versioning & Canary**: A/B test new models with weighted traffic; rollback on drift detection.  
- **Cost**: Spot instances vs reserved, monitor GPU utilization to avoid waste.  
- **Testing**: Integration tests against real data streams; stress tests with locust.

### 4️⃣ Edge Cases  
- *Model drift*: continuous evaluation pipeline triggers retraining.  
- *Cold starts*: pre‑warm containers on scaling events.  
- *Resource contention*: ensure GPU isolation, avoid memory leaks in long‑running services.

### 5️⃣ Optimize & Communicate  
Iterate on batch size and queue depth after profiling; document all SLAs and failure modes. In interviews, I’d walk through a concrete example (e.g., image classification service) and tie each design choice to measurable KPIs like latency, cost per inference, and uptime. This demonstrates both technical depth and the ability to communicate trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
