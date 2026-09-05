---
qid: ing_79fa21fd47__star__local
question: 'Explain: Real results — Practical Deep Learning for Coders - Practical
  Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 301
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:40-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with building an image‑classification model to detect plant diseases from leaf photographs, a project funded by a local agriculture cooperative that needed a tool usable on low‑budget smartphones.

**Task:**  
I had to create a model that achieved at least 90 % accuracy on a dataset of 12,000 labeled images while keeping inference time under 200 ms on an ARM Cortex‑A53 CPU.

**Action:**  
First I leveraged transfer learning with MobileNetV2 as the backbone, fine‑tuning only the last dense layer to reduce training time. I applied data augmentation (random flips, brightness shifts) and used mixed‑precision training in PyTorch to speed up GPU passes. To meet the latency requirement, I quantized the model to 8‑bit weights using TensorRT’s dynamic range calibration, then exported it as a TFLite flatbuffer for deployment on Android. Throughout, I monitored validation loss with a custom callback that paused training when overfitting signs appeared.

**Result:**  
The final model hit 92 % top‑1 accuracy and ran at ~180 ms per inference on the target device—surpassing the cooperative’s needs. The exercise taught me how to balance accuracy, size, and speed by combining transfer learning, quantization, and real‑device profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
