---
qid: ing_afd28dc6bb__faang__local
question: 'How do you choose inference hardware: NVIDIA GPUs, AMD, TPUs, or cloud
  silicon like Inferentia and Trainium?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 654
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:32:11-05:00'
sources: []
---

## 1️⃣ Clarify  
We’re asked how to pick inference hardware among **NVIDIA GPUs, AMD GPUs, TPUs, or AWS Inferentia/Trainium**.  
Key assumptions:  
- Model type (CNN, Transformer, etc.) and size (small‑to‑medium vs large).  
- Deployment scenario (edge, on‑prem data center, cloud).  
- Throughput vs latency requirements.  
- Budget constraints (capex vs opex).  

## 2️⃣ Approach  
1. **Profile the workload** – compute ops, memory bandwidth, sparsity.  
2. **Map to hardware strengths** – GPU throughput & flexibility vs TPU matrix‑multiply specialization vs Inferentia’s low‑latency inference engine.  
3. **Estimate cost** – on‑prem purchase + maintenance vs cloud per‑second usage.  
4. **Prototype** – run a representative benchmark.  

## 3️⃣ Depth (Decision Matrix)  
| Criterion | NVIDIA GPU | AMD GPU | TPU | Inferentia/Trainium |
|-----------|------------|---------|-----|--------------------|
| Ops/sec (FP16) | ~10–20 TFLOPs | ~8–15 TFLOPs | 4–5 TFLOPs | 1–2 TFLOPs (but high throughput per watt) |
| Flexibility | CUDA, cuDNN, TensorRT | ROCm, MIOpen | XLA only | Deep Learning Inference Library (DLIL) |
| Latency | ~10‑50 ms (batch 1) | similar | ~5‑15 ms (small batch) | <3 ms (tiny batch) |
| Ecosystem | Mature tools, wide model support | Growing, but less mature | Google Cloud only | AWS Deep Learning AMIs |
| Cost | Capex high, OPEX lower | Similar | Cloud pay‑as‑you‑go | Cloud pay‑as‑you‑go; cheaper per inference |

**Rule of thumb:**  
- **Edge / low‑latency** → Inferentia/Trainium or low‑power NVIDIA GPUs.  
- **High‑throughput, mixed workloads** → NVIDIA GPUs (CUDA).  
- **Large Transformer inference** → TPUs if on GCP; otherwise GPU with batch optimization.  

## 4️⃣ Edge Cases  
- Models with heavy sparsity may benefit from AMD’s sparse kernels.  
- Proprietary models only supported on CUDA may lock you into NVIDIA.  
- Cloud‑only solutions (TPU, Inferentia) can’t be used in restricted environments.  

## 5️⃣ Optimize & Communicate  
Explain trade‑offs: GPU flexibility vs TPU/TensorRT speed; cloud OPEX vs capex; future scaling (e.g., TensorRT 8 supports FP8). Present a concise recommendation chart to stakeholders, highlighting that the final choice hinges on workload profile and budget. This structured approach demonstrates clear thinking, technical depth, and practical communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
