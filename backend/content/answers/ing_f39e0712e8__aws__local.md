---
qid: ing_f39e0712e8__aws__local
question: 'Explain: Frameworks and Drivers. — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 402
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:22-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Science team at a fintech startup, we had to decide which ML framework would power our fraud‑detection pipeline that processes 1 M transactions per day. The goal was to deliver low latency predictions (<50 ms) while keeping ops cost under $5k/month.

**Action**  
I conducted a *Dive Deep* analysis of TensorFlow, PyTorch, and MXNet, benchmarking inference time on an EC2 g4dn.xlarge (NVIDIA T4). I also evaluated the **driver** stack—TensorRT for NVIDIA GPUs vs ONNX Runtime for CPU‑only workloads.  

- **Framework**: Chose TensorFlow 2.x because of its mature TF‑Lite export and robust CI/CD support in AWS SageMaker.  
- **Driver**: Leveraged TensorRT to compile the SavedModel into an optimized engine, reducing latency from 120 ms to 35 ms on GPU, and enabling CPU fallback with ONNX Runtime (latency 80 ms).  

I orchestrated deployment using **SageMaker Endpoint** (auto‑scaling), **ECR** for container images, and **CloudWatch** for real‑time metrics. The solution hit our SLA in 92 % of cases while cutting inference cost from $12k to $4.8k/month.

**Result**  
Delivered a scalable, low‑latency fraud detector that reduced false positives by 18 % and saved $7.2k annually.  

*Leadership Principles:* **Customer Obsession** (better fraud detection → safer customers), **Ownership** (full responsibility for model choice and ops cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
