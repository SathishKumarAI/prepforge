---
qid: ing_122185b229__faang__local
question: 'Explain: Scaling & ops — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 596
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:50-05:00'
sources: []
---

**Scaling & Ops – LLM Gateway & Serving Platform**

| Step | What to do |
|------|------------|
| **1️⃣ Clarify** | *Goal:* Deliver a low‑latency, high‑throughput inference service for multiple large language models (LLMs).  Assume we have 10 B–70 B parameter models, 5k QPS, <50 ms latency target, and need multi‑tenant isolation. |
| **2️⃣ Approach** | 1) **Gateway layer** – API gateway + request router; 2) **Model pool** – containerized runtimes (e.g., Triton/ONNX Runtime) on GPU nodes; 3) **Serving fabric** – autoscaling, batch‑queueing, token‑level caching; 4) **Observability & CI/CD** – metrics, tracing, blue‑green releases. |
| **3️⃣ Depth** | • **Gateway:** Use Envoy + gRPC for TLS termination and header routing to tenant‑specific model tags. <br>• **Model pool:** Spin up NVIDIA A100 pods with GPU sharing (CUDA‑MPS) or vGPU; store weights in NVMe‑SSD, load on first request, pin to memory. <br>• **Serving fabric:** Queue requests per model, use *pipeline parallelism* for 70 B models, shard into stages across GPUs. Apply *token‑caching* (top‑k) and *early exit* if confidence high. Autoscale based on GPU utilization + request latency. <br>• **Observability:** Prometheus for QPS/latency, Jaeger traces per tenant, alerting on SLA breaches. CI/CD: GitOps with ArgoCD; canary deploy new weights via “rolling‑update” without downtime. |
| **4️⃣ Edge Cases** | • Sudden traffic spike → burst autoscaler + pre‑warm replicas.<br>• Model failure → fallback to smaller backup model, health‑check restarts.<br>• Memory pressure → evict least‑recently used weights; use NVMe swap as last resort. |
| **5️⃣ Optimize & Communicate** | • Use *model quantization* (INT8/FP16) to cut GPU memory and inference time. <br>• Profile kernel usage; replace slow ops with custom CUDA kernels. <br>Explain trade‑offs: lower precision → higher throughput vs. slight loss in accuracy. <br>Communicate clearly: “We’ll start with 80 % FP16 for latency, monitor MSE drift, and roll back if >1 %.” |

**Result:** A resilient, horizontally scalable gateway + serving stack that meets strict latency SLAs while supporting multi‑tenant model isolation and rapid rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
