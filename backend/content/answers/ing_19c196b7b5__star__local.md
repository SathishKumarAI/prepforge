---
qid: ing_19c196b7b5__star__local
question: 'Explain: Quantization for Training and Serving — Optimizing AI Inference
  at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 324
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:21:02-05:00'
sources: []
---

**Situation** – At Character.ai we were pushing our dialogue models into production on edge devices, but the 3 GB LSTM checkpoints were too large and latency over 100 ms was unacceptable during live chats.  

**Task** – Reduce model size to under 400 MB and cut inference time by 60% without losing more than 1 % in perplexity or user‑rated quality.  

**Action** – I spearheaded a quantization pipeline that first trained the LSTM with mixed‑precision (FP16) to keep accuracy, then applied post‑training dynamic 8‑bit integer quantization on weights and activations. We used TensorRT’s calibration tool to generate per‑channel scale factors, preserving critical language nuances. For serving we wrapped the quantized graph in a custom C++ runtime that fused matrix multiplications with bias addition, eliminating memory traffic. I also built a monitoring dashboard to compare live perplexity against the baseline and adjusted the quantization scheme (symmetric vs asymmetric) until the 1 % drop threshold was met.  

**Result** – The deployed model shrank from 3.2 GB to 350 MB, inference latency dropped from 120 ms to 45 ms on our edge GPU, and user‑rated satisfaction stayed within 0.5 % of the baseline. I learned that careful calibration and runtime fusion can unlock significant efficiency gains while keeping conversational quality intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
