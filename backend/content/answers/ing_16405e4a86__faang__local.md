---
qid: ing_16405e4a86__faang__local
question: 'Explain: Onsite – AI Engineer Questions (Deployment and Inference Optimization
  focus)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 490
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:36:11-05:00'
sources: []
---

**Clarify**  
You’re asked how you’d deploy an AI model in production and squeeze inference speed/latency. I’ll assume a supervised deep‑learning model (e.g., vision or NLP) that must serve < 10 ms per request, run on commodity GPUs or edge CPUs, and handle 1K QPS.  

**Approach**  
1. *Model profiling* – benchmark ops, FLOPs, memory.  
2. *Quantization & pruning* – reduce precision (INT8/FP16) and remove redundant weights.  
3. *Framework‑level optimizations* – use ONNX Runtime / TensorRT or TorchScript, enable GPU tensor cores, fuse layers.  
4. *Hardware selection* – choose GPUs with high memory bandwidth or CPUs with AVX‑512, consider batching vs. single inference.  
5. *Deployment pipeline* – containerize (Docker), CI/CD, blue/green rollout, monitor latency & error rates.  

**Depth**  
- **Quantization**: post‑training INT8 can drop 2–4× model size with < 1% accuracy loss; fine‑tuning restores precision.  
- **Pruning**: structured pruning (channels) keeps runtime efficiency; unstructured pruning requires custom kernels.  
- **TensorRT**: builds an engine that fuses convolutions, uses FP16/INT8, gives 5–10× speedups over plain PyTorch on NVIDIA GPUs.  
- **Batching**: micro‑batching (size = 4) can improve GPU utilization without hurting latency, but increases queue time—use async inference queues.  

**Edge Cases**  
- *Cold start*: load model into RAM/GPU memory before first request; use lazy loading if traffic is sporadic.  
- *Model drift*: retrain schedule and A/B test new weights.  
- *Hardware failure*: fallback to CPU path or lower‑precision engine.  

**Optimize & Communicate**  
I’d present a trade‑off matrix (latency vs. accuracy) and a deployment diagram, then explain that the key is iterative profiling: measure → optimize → re‑measure. This shows I understand both engineering constraints and business impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
