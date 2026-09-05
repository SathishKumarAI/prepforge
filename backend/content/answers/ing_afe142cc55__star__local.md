---
qid: ing_afe142cc55__star__local
question: 'Q: How does AWQ differ from GPTQ? — Quantization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 364
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:52-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had to deploy a large language model for real‑time fraud detection on edge devices. The GPU memory budget was only 2 GB, but the base model required ~6 GB in FP32.

**Task:**  
I needed to quantize the model down to 4‑bit weights without losing more than 1 % of its precision, and keep inference latency under 50 ms on a single GPU.

**Action:**  
I first tried GPTQ because it offers per‑tensor adaptive scaling and achieves excellent accuracy. However, GPTQ’s greedy residual quantization required an extra pass over the entire weight matrix, which was too slow for our CI pipeline. I switched to AWQ (Adaptive Weight Quantization), which learns a global scale factor through a small calibration set and then applies a single‑pass 4‑bit quantization with per‑channel bias correction. Using PyTorch’s `torch.quantization` API, I implemented AWQ by:
1. Running a 5 % calibration dataset to compute the optimal scale.
2. Applying uniform 4‑bit quantization + bias correction per channel.
3. Fine‑tuning for two epochs on the full training set.

**Result:**  
The model size dropped from 6 GB to 1.3 GB, inference latency fell to 32 ms, and accuracy loss was only 0.8 %. I learned that AWQ’s single‑pass bias correction is ideal when deployment constraints outweigh the marginal accuracy gain of GPTQ.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
