---
qid: ing_b4de5e9b11__star__local
question: 'Explain: Fully Convolutional Network — A Complete guide to Semantic Segmentation
  in 2024'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 342
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:13-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with building a real‑time road‑scene parser for an autonomous delivery robot that had to identify drivable lanes and obstacles using only a single RGB camera.

**Task:**  
I needed to design a lightweight semantic segmentation model that could run at 30 fps on an NVIDIA Jetson Xavier, while achieving ≥ 85 % mean Intersection-over-Union (mIoU) across the Cityscapes validation set.

**Action:**  
I started with a vanilla U‑Net but quickly hit memory limits. I refactored it into a Fully Convolutional Network (FCN) architecture: a ResNet‑18 encoder pretrained on ImageNet, followed by a series of dilated convolutions to preserve spatial resolution without increasing parameters. I swapped the final 1×1 classifier for a depthwise separable conv and added an atrous spatial pyramid pooling module to capture multi‑scale context. To speed inference, I applied TensorRT optimization and quantized weights to INT8. For training, I used a hybrid loss (cross‑entropy + focal) and scheduled learning rates with cosine annealing.

**Result:**  
The final model ran at 32 fps on the Jetson, achieved 86.7 % mIoU on Cityscapes, and reduced GPU memory usage by 35 %. This experience taught me how to balance architectural depth, receptive field, and hardware constraints when deploying FCNs for edge AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
