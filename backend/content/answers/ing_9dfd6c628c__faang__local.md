---
qid: ing_9dfd6c628c__faang__local
question: 'Explain: Compute and servers — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 538
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:51:31-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level view of how *compute* (the raw processing power) and *servers* (the hardware that hosts models) are chosen for machine learning workloads. I’ll assume we’re discussing both training (GPU/TPU clusters) and inference (edge vs. cloud).

**Approach**  
1. Map workload type → compute requirement.  
2. Match compute to server form factor & network fabric.  
3. Discuss scaling, cost, latency trade‑offs.

**Depth**  

| Stage | Compute Needs | Server Choice |
|-------|---------------|---------------|
| **Training** | • GPU/TPU with high FLOPs and large VRAM for DNNs.<br>• Distributed training → multi‑node clusters, low‑latency NVLink or InfiniBand. | • GPU servers (e.g., NVIDIA A100) or ASIC accelerators in racks.<br>• High‑bandwidth interconnect; optional GPU‑direct RDMA. |
| **Inference** | • CPU for lightweight models, GPU/FPGA for latency‑critical workloads.<br>• Batch vs. real‑time dictates throughput vs. round‑trip time. | • Edge servers (NVIDIA Jetson, Intel NUC) for on‑device inference.<br>• Cloud VMs or serverless functions for elastic scaling. |
| **Deployment** | • Model size, precision (FP16/INT8), and batch size drive memory & compute. | • Use containerized microservices; autoscale based on queue depth. |

*Complexity*: Training scales as O(N) across nodes but communication overhead grows with model size (Amdahl’s law). Inference latency is dominated by I/O if the server isn’t local to data.

**Edge Cases**  
- Models that exceed GPU VRAM → sharding or mixed‑precision.  
- Highly variable traffic → need burstable instances or spot pricing.  
- Regulatory constraints may force on‑prem servers over public clouds.

**Optimize & Communicate**  
I’d recommend profiling a sample model to capture FLOPs, memory bandwidth, and I/O patterns; then use that to pick the minimal server SKU that meets latency budgets. Finally, iterate with autoscaling policies (e.g., K8s HPA) to keep cost in check while meeting SLAs. This showcases my structured thinking, technical depth, and awareness of real‑world constraints—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
