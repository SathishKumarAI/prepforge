---
qid: ing_f2d5e132e5__star__local
question: 'Explain: Understanding Non-Determinism in CPU and GPU Microarchitectures'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 338
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:37-05:00'
sources: []
---

**Situation:**  
In my last role as a ML engineer at a fintech startup, we were training a fraud‑detection model on both our in‑house GPU cluster and the CPU‑based inference pipeline that served live transactions. We noticed a 4 % variance in prediction scores between the two environments during A/B testing.

**Task:**  
I needed to determine whether this drift was due to non‑deterministic behavior in the hardware microarchitectures and, if so, quantify its impact on model reliability.

**Action:**  
First, I isolated the computation by running a pure NumPy tensor operation (matrix multiplication) with identical seeds on CPU (Intel Xeon Skylake) and GPU (NVIDIA A100). I captured the instruction traces using Intel VTune and NVIDIA Nsight to see where floating‑point rounding differed. Then I introduced deterministic kernels (e.g., `torch.set_deterministic(True)` in PyTorch) and re‑ran the workload, logging per‑instruction timing with PAPI counters. Finally, I compared the results across 10,000 samples, calculating the mean absolute error and the distribution of sign flips.

**Result:**  
The variance dropped from 4 % to <0.1 %. We learned that CPU pipelines can reorder floating‑point operations due to out‑of‑order execution, while GPUs use fused multiply–add (FMA) units that produce slightly different rounding. By enforcing deterministic math and aligning precision settings, we ensured consistent predictions across hardware, improving our model’s auditability for regulatory compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
