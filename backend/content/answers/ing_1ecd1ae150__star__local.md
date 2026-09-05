---
qid: ing_1ecd1ae150__star__local
question: 'Explain: Designing a Convolutional Neural Network'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 323
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:02-05:00'
sources: []
---

**Situation:**  
At my last company we were building an autonomous inspection system for wind turbine blades. The on‑board camera produced 4K video, but the edge device only had a single NVIDIA Jetson Nano with limited RAM and GPU power.

**Task:**  
I had to design a convolutional neural network that could run in real time (≥15 fps) while achieving at least 92 % accuracy in detecting micro‑cracks across thousands of frames per hour.

**Action:**  
I started by profiling the data: 80 % of images contained no defects, so I built a lightweight backbone using depthwise separable convolutions from MobileNetV2. To handle varying crack sizes, I added a Feature Pyramid Network (FPN) to fuse low‑ and high‑resolution features. I then applied knowledge distillation—training the slim model against a larger ResNeXt teacher—to recover performance. For inference, I quantized the weights to 8‑bit INT8 using TensorRT, which cut memory usage by 60 % and boosted throughput from 7 fps to 18 fps on the Jetson.

**Result:**  
The deployed model achieved 93.5 % precision/recall on a held‑out test set and ran at 17 fps on the edge device, meeting our real‑time requirement. I learned that balancing architectural simplicity with smart training tricks (distillation, quantization) can turn a high‑capacity vision problem into a deployable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
