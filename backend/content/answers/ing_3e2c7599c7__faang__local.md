---
qid: ing_3e2c7599c7__faang__local
question: How do you optimize LLM inference cost? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 576
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:08:47-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Reduce the monetary and latency costs of running a large language model (LLM) at inference time.  
*Assumptions to confirm:*  
- Model size and architecture are fixed (e.g., GPT‑3 175B).  
- We have control over deployment (hardware, batching, quantization).  
- Latency constraints: < 200 ms per request for interactive use.  

**2️⃣ Approach**  
1. *Model‑level optimizations* – pruning, distillation, low‑rank factorization.  
2. *Hardware & execution* – GPU/TPU selection, batch sizing, mixed precision.  
3. *Runtime tricks* – caching, beam width control, early stopping.  
4. *Operational* – autoscaling, spot instances, multi‑tenant scheduling.

**3️⃣ Depth**  

| Technique | How it cuts cost | Complexity |
|-----------|-----------------|------------|
| **Quantization (e.g., 8‑bit)** | Reduces memory bandwidth and GPU usage → ~2× cheaper inference. | O(1) runtime impact; negligible accuracy loss if calibrated. |
| **Model pruning / distillation** | Smaller weights → fewer FLOPs. Distilled models can be 5–10× faster with < 3% perplexity drop. | Requires training phase but amortized over many inferences. |
| **Mixed‑precision (FP16/INT8)** | Cuts GPU memory and increases throughput. | Minor code changes; supported on modern GPUs. |
| **Batching** | Utilizes parallelism: one kernel processes 32 requests vs 1 → cost per request ↓ by ~3×. | Needs queue management; trade‑off with latency. |
| **Cache & KV reuse** | Reuse past key/value states for prompt prefixes, eliminating redundant compute. | Adds cache logic but no extra FLOPs. |
| **Dynamic inference (early exit)** | Stop decoding when confidence reaches threshold → fewer tokens processed. | Requires custom scoring; risk of lower quality. |

**4️⃣ Edge Cases**  
- *Cold start*: first request pays full cost; use warm‑up or prefetching.  
- *Highly variable prompt length*: batch efficiency drops; consider adaptive batching.  
- *Precision loss*: aggressive quantization can degrade safety‑critical outputs—validate.  

**5️⃣ Optimize & Communicate**  
Iterate: measure latency and cost per token, adjust batch size and precision until hitting SLA. Document trade‑offs in a dashboard for ops to see “cost vs quality” curves. This transparent approach satisfies both engineering rigor and business impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
