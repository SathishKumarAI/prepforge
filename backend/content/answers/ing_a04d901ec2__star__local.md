---
qid: ing_a04d901ec2__star__local
question: 'Explain: Multi-GPU Orchestration — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 415
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:10-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a real‑time recommendation engine that had to serve millions of inference requests per second on a budget‑constrained data center. The model was 1.2 GB and each GPU could process only ~400 requests/second, so we needed to scale across multiple GPUs while keeping latency under 50 ms.

**Task:**  
Design and deploy a multi‑GPU serving stack that maximized throughput, maintained sub‑50 ms latency, and allowed us to roll out new model versions without downtime.

**Action:**  
I chose NVIDIA Triton Inference Server as the core runtime because of its native support for multi‑model and multi‑device execution. I containerised Triton with Docker and orchestrated it on Kubernetes using GPU‑aware scheduling (nvidia‑gpu-device-plugin). To keep inter‑GPU communication efficient, I enabled NCCL backend and tuned batch sizes via Triton's batching config to 256 samples per GPU. For load balancing across nodes, I deployed Istio’s Service Mesh with a weighted round‑robin policy, adding a custom Prometheus exporter that fed latency metrics into the mesh’s routing rules. Finally, I scripted CI/CD pipelines in ArgoCD to push new model artifacts directly to Triton’s model repository, triggering hot‑reloads without pod restarts.

**Result:**  
The system achieved 1.6 × higher throughput than our single‑GPU baseline while keeping average latency at 42 ms under peak load. We reduced inference cost per request by 35% and eliminated downtime during version rollouts. I learned how Kubernetes’ GPU scheduling, Triton’s batching engine, and Istio’s observability can be combined to build a resilient, high‑performance AI serving platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
