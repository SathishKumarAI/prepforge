---
qid: ing_ea40db0a85__star__local
question: 'Explain: Deploy: Flexible deployment options with Agent Engine, Cloud Run,
  and GKE'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 368
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:49-05:00'
sources: []
---

**Situation:**  
In a recent project for a fintech client, we had built an anomaly‑detection model in TensorFlow that needed to serve predictions at scale while meeting strict compliance and latency requirements.

**Task:**  
I was tasked with designing a flexible deployment pipeline so the model could run both on edge devices (via an Agent Engine) for instant alerts, and in the cloud (using Cloud Run or GKE) for batch analysis and monitoring, all while keeping costs under a $5k/month budget.

**Action:**  
First, I containerized the model with FastAPI and added an Agent Engine wrapper to expose it as a lightweight service on IoT gateways. For the cloud side, I built two deployment paths:  
1️⃣ **Cloud Run** – a stateless, autoscaling endpoint for real‑time scoring; I used Cloud Build triggers to push new Docker images automatically after every model retraining cycle.  
2️⃣ **GKE** – a Kubernetes cluster with managed GPU nodes for heavy batch inference; I implemented Helm charts that defined resource limits and horizontal pod autoscaling based on CPU usage, ensuring we never exceeded our budget. All deployments were monitored via Cloud Monitoring dashboards and integrated into CI/CD pipelines.

**Result:**  
We achieved sub‑50 ms latency on edge devices and <200 ms latency in the cloud for 99th percentile requests. Batch jobs completed 30% faster than before, and overall monthly spend dropped to $3.8k by optimizing GPU node usage. The experience taught me how to balance real‑time responsiveness with cost‑effective batch processing using Agent Engine, Cloud Run, and GKE.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
