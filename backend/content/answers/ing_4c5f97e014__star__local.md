---
qid: ing_4c5f97e014__star__local
question: 'Explain: NF4 (NormalFloat4) — Quantization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 370
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:59-05:00'
sources: []
---

**Situation** – In my last role at a cloud‑vision startup, we were rolling out a real‑time object detection model for edge devices. The TensorFlow Lite version of our YOLOv5 variant was too large (≈150 MB) and lagged under 30 ms on the target GPU.

**Task** – I needed to reduce the model size by 70 % while keeping mean average precision above 0.75 and inference latency below 20 ms on a Qualcomm Snapdragon 865.

**Action** – I explored quantization techniques beyond standard 8‑bit integer (INT8). After reading the recent paper on NF4 (NormalFloat4), I implemented a custom TensorFlow Lite delegate that maps each 32‑bit float to a 4‑bit NF4 representation, preserving the distribution of weights by learning a scale and zero‑point per tensor. I also fine‑tuned the quantized model with 1 epoch of calibration data using KL divergence loss, then wrapped the layers in a custom kernel that performs dot products directly on NF4 values, leveraging the GPU’s vector instructions. Throughout, I monitored layer‑wise sparsity and used TensorBoard to compare per‑class AP before and after.

**Result** – The quantized model shrank to 45 MB (70 % reduction) and ran at 18 ms on the Snapdragon. Mean average precision dropped only 0.02 (from 0.78 to 0.76). I learned that NF4 allows a sweet spot between aggressive size reduction and acceptable accuracy, especially when combined with careful calibration and hardware‑aware kernels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
