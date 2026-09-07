---
qid: ing_9eecb0b937__faang__local
question: 'Explain: Inference Optimization & MLOps <a name="mlops"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 472
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:53:33-05:00'
sources: []
---

**Inference Optimization & MLOps**

| Step | What I’d do |
|------|-------------|
| **Clarify** | We’re asked how to speed up model inference and keep the entire ML lifecycle (train → deploy → monitor) robust. Assumptions: 1‑GPU inference, cloud infra, latency SLA < 50 ms, continuous data drift. |
| **Approach** | 1️⃣ Profile model & runtime; 2️⃣ Apply model compression (pruning/quantization); 3️⃣ Use efficient runtimes (TensorRT, ONNX Runtime). 4️⃣ Automate CI/CD pipelines (MLflow, Kubeflow) for reproducibility; 5️⃣ Monitor predictions and retrain triggers. |
| **Depth** | *Compression*: pruning removes low‑importance weights → 30–60 % size reduction with <1 % loss. Quantization to int8 reduces memory & multiplies by 4× faster on modern GPUs. *Runtime*: TensorRT builds a static engine from the graph, fusing ops and eliminating dynamic overhead; ONNX Runtime offers cross‑framework deployment. *MLOps*: Git‑based code + Docker containers ensure versioning; MLflow tracks experiments, artifacts, and model registry. Kubeflow Pipelines orchestrate training jobs on Kubernetes, auto‑scaling based on GPU availability. *Monitoring*: Prometheus + Grafana capture latency, throughput; data drift alerts trigger a retraining DAG. |
| **Edge Cases** | Models with heavy dynamic control flow (RNNs) may not fuse well in TensorRT. Quantization can degrade accuracy for models sensitive to precision (e.g., transformers). Cold‑start latency if GPU is spun down. |
| **Optimize & Communicate** | I’d first benchmark the baseline, then iteratively apply compression and runtime tuning, validating with A/B tests. For MLOps, emphasize reproducibility: lock dependencies, use immutable containers, and adopt a “model as code” philosophy. In interviews, I’d stress that inference speed is only one KPI; reliability, observability, and rapid retraining are equally critical for production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
