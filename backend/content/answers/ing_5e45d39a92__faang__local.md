---
qid: ing_5e45d39a92__faang__local
question: 'Explain: Cost Optimization Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 512
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:03-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to describe *cost‑optimization patterns* in the context of AI workloads (e.g., training, inference). Ask: “Are we focusing on cloud infrastructure cost, model‑level savings, or both?” Assume a multi‑tenant cloud environment with GPU/TPU resources and recurring inference traffic.

**Approach**  
1. List key categories (resource scheduling, model pruning, spot instances, autoscaling, data pipeline efficiency).  
2. Explain each pattern’s trade‑offs.  
3. Provide an example implementation sketch.  

**Depth**  
| Pattern | What it does | Typical Tech / API | Complexity & Trade‑offs |
|---------|--------------|--------------------|------------------------|
| **Spot/Preemptible VMs** | Use cheap, interruptible compute for non‑critical training epochs. | AWS Spot, GCP Preemptible, Azure Low‑Priority | O(1) cost reduction; need checkpointing logic. |
| **Model Pruning & Quantization** | Reduce model size → fewer FLOPs and memory. | TensorRT, ONNX Runtime | Gains depend on architecture; may hurt accuracy if over‑pruned. |
| **Batching & Autoscaling** | Dynamically adjust GPU count based on queue length. | Kubernetes HPA + GPU autoscaler, Cloud Run with GPU support | Adds orchestration overhead; latency can spike during scale‑up. |
| **Data Caching / Feature Store** | Avoid recomputing expensive features for every inference. | Redis, Feast | Extra memory cost but cuts CPU/GPU cycles. |
| **Checkpoint/Resume** | Save intermediate training states to resume after interruption. | MLflow, SageMaker checkpoints | I/O overhead; storage cost must be accounted for. |

**Edge Cases**  
- Spot VMs failing mid‑epoch → loss of progress if no checkpointing.  
- Pruning too aggressively → accuracy drop beyond acceptable threshold.  
- Autoscaling lag causing burst traffic to be throttled.

**Optimize & Communicate**  
Explain that the optimal mix depends on SLAs: e.g., use spot for nightly training, batch inference on reserved instances, and quantize only production models. Summarize with a decision tree or cost‑benefit chart. End by noting that continuous monitoring (Prometheus + Grafana) validates whether the patterns actually reduce spend without violating performance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
