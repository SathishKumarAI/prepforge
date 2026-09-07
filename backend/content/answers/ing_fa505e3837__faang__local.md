---
qid: ing_fa505e3837__faang__local
question: Compare GPTQ, AWQ, GGUF, INT8, and FP8. How do you actually choose a quantization
  approach for a deployment?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 660
total_tokens: 912
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:21:55-05:00'
sources: []
---

**Clarify**  
You’re asking how to pick between GPT‑Q, AWQ, GGUF, INT8 and FP8 when deploying an LLM. I’ll assume we have a fixed GPU/CPU budget, a latency requirement (≤ 30 ms per token), and we need to preserve >90 % of the original accuracy on typical inference workloads.

**Approach**  
1. Benchmark each method on a representative micro‑benchmark.  
2. Measure *latency*, *throughput*, *model size* and *accuracy loss*.  
3. Rank by cost–benefit: lower memory → higher batch size, but not at the expense of >10 % accuracy drop.

**Depth**  

| Quant | Core Idea | Precision | Typical Overhead | Accuracy Impact |
|-------|-----------|-----------|------------------|-----------------|
| **GPT‑Q** | Layer‑wise 4/5‑bit per‑weight scaling + fine‑tuning | 4–5 bits | Small (≈ +1 % ops) | < 2 % loss on GPT‑3 scale |
| **AWQ** | Adaptive weight quantization using 8‑bit clusters | 8 bits | Minimal, uses native int8 kernels | ~0.5 % drop |
| **GGUF** | Generalized GPU‑friendly format, supports 4–8 bit + per‑tensor scaling | 4–8 bits | Requires custom loader | Similar to GPT‑Q |
| **INT8** | Classic uniform quantization, hardware‑accelerated | 8 bits | Native on most GPUs/TPUs | ~1–3 % loss |
| **FP8** | 8‑bit floating point (e4m3/e5m2) → dynamic range | 8 bits | Needs FP8 support in HW | < 1 % loss if supported |

- **Latency**: INT8/FP8 are fastest on hardware that supports them.  
- **Memory**: GPT‑Q/GGUF reduce size by ~4× vs FP32.  
- **Accuracy**: AWQ and GPT‑Q give the best trade‑off for large models.

**Edge Cases**  
- Models with extreme weight variance (e.g., vision transformers) may suffer more from uniform INT8.  
- FP8 is only viable on GPUs with native FP8 ops (A100, H100).  
- If batch size > 1, memory savings of GPT‑Q/GGUF outweigh the slight extra compute.

**Optimize & Communicate**  
I’d start with a quick 5‑token latency test for each method on our target GPU. Then run a full accuracy sweep on a held‑out validation set. Present a table summarizing *latency × size × Δaccuracy* and recommend: **AWQ or GPT‑Q** for most deployments, falling back to FP8 if the HW supports it, and using GGUF only when we need a portable file format. This shows clear trade‑offs and keeps the decision data‑driven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
