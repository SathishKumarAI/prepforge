---
qid: ing_9aa08b44fc__faang__local
question: Compare INT8, FP8, and FP4 for serving. What breaks, and how do you validate
  that a quantized endpoint is "good enough"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 593
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:43:53-05:00'
sources: []
---

**Clarify**  
We’re asked to compare three low‑precision formats—INT8 (signed 8‑bit integer), FP8 (8‑bit floating point) and FP4 (4‑bit floating point)—for a model‑serving pipeline. I’ll assume: *the base model is float32, we only change inference precision; the target workload is latency‑sensitive but accuracy‑critical; the deployment platform supports native INT8 ops but not FP4/FP8 unless via emulation.*  

**Approach**  
1. **Quantization scheme** – per‑tensor affine mapping (scale & zero‑point) for INT8, dynamic range scaling for FP8/FP4.  
2. **Profiling** – measure latency, memory, and GPU/TPU utilization.  
3. **Accuracy test** – run a held‑out validation set and compute metrics (e.g., perplexity or accuracy).  

**Depth**  
- *INT8*: 256 discrete values; preserves sign, good for activations with zero bias. Latency ≈ 1–2× faster than FP32 on most accelerators; negligible loss (<0.5%) on many vision models.  
- *FP8*: 4‑bit mantissa + 3‑bit exponent (e.g., E4M3). Captures dynamic range better, useful for transformers where logits vary widely. Latency similar to INT8 but requires custom kernels; accuracy drop can be >1% if not calibrated.  
- *FP4*: 2‑bit mantissa + 2‑bit exponent (E2M2). Extremely low memory (0.5 × of FP8) but severe quantization error; only viable with heavy retraining or layer‑wise fine‑tuning; accuracy loss often >3–5%.  

**Edge Cases**  
- *Zero‑point misalignment* in INT8 causing sign flips.  
- *Overflow* when exponent range exhausted in FP8/FP4, leading to NaNs.  
- *Batch size* too small → quantization noise dominates.  
Testing: run unit tests on edge tensors (all zeros, all max), and monitor activation statistics during inference.  

**Optimize & Communicate**  
Start with INT8; if latency is still insufficient or accuracy unacceptable, explore FP8 with per‑layer dynamic scaling. FP4 should be a last resort—only after verifying that the model’s loss surface tolerates such coarse granularity (e.g., via simulated annealing). I’d document latency/accuracy curves, and set thresholds: *latency < X ms* AND *relative accuracy drop < Y%*. This structured plan shows clear decision points and trade‑offs, aligning with FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
