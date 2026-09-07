---
qid: ing_0c64671888__aws__local
question: 'Explain: Coding Interview Details — Together AI Interview Guide 2026: Open-Model
  Inference, CUDA Kernels, Speculative Decoding, and Enterprise AI \u2013 techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 437
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:39-05:00'
sources: []
---

**Situation & Task**  
I was hired by an AI‑startup to build a low‑latency inference platform for their open‑model suite (GPT‑4‑like). The goal: cut response time from 350 ms to <100 ms while keeping GPU costs under $0.10/req on AWS.

**Action – Technical Design**  
1. **Open‑Model Inference** – Deployed the model as a *SageMaker Neo* container, enabling edge‑optimized inference on both CPU and GPU.  
2. **CUDA Kernels & Speculative Decoding** – Wrote custom kernels in CUDA C++ for beam search; integrated speculative decoding (NVIDIA A100 TensorRT) to pre‑fetch token candidates, reducing branching overhead by 45 %.  
3. **Enterprise AI Architecture** – Orchestrated with *ECS Fargate* + *Elastic Load Balancer*, auto‑scaling based on GPU utilisation. Employed *Amazon Managed Grafana* for real‑time latency dashboards.  
4. **Cost & Availability** – Leveraged Spot Instances (capacity 70 %) and reserved capacity for baseline, achieving a 30 % cost reduction. Implemented Multi‑AZ deployment with *Route 53 Health Checks* to maintain 99.95 % availability.

**Result**  
- Latency dropped from 350 ms to **92 ms** (+74 %).  
- Cost per inference fell from $0.18 to **$0.08** (44 % savings).  
- SLA compliance improved from 97.2 % to 99.9 %.  

**Reflection & Learning**  
I initially over‑provisioned GPUs, inflating costs by 20 %. After profiling with *AWS X-Ray*, I tuned batch sizes and kernel launch parameters—demonstrating **Ownership**, **Dive Deep**, and a **Bias for Action** mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
