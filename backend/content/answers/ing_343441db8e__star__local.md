---
qid: ing_343441db8e__star__local
question: 'Explain: Tokens Per Second (TPS) — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 331
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:51-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine for a streaming service. The model was a transformer that had to process user context and content embeddings in under 100 ms per request, but during load testing our TPS (tokens processed per second) dropped to only 1,200 when the traffic spiked.

**Task:**  
I needed to boost the inference pipeline so it could handle at least 4,000 TPS while keeping latency below 80 ms and not exceeding GPU memory limits.

**Action:**  
First, I profiled the pipeline with NVIDIA Nsight Systems. The bottleneck was the token‑level attention matrix that grew quadratically. I replaced the full self‑attention with a sparse block‑sparse variant using FlashAttention, which reduced FLOPs by 60 %. Then I batch‑padded requests to 32 tokens and switched from PyTorch eager execution to TorchScript JIT compilation. Finally, I tuned CUDA stream priorities and introduced mixed precision (FP16) with automatic loss scaling on the A100 GPUs.

**Result:**  
After these changes, TPS rose to 4,500 while latency stayed at 75 ms under peak load. We reduced GPU utilization from 80 % to 55 %, saving $1.2k/month in cloud costs. I learned that profiling first and choosing the right sparsity pattern can deliver huge gains without costly hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
