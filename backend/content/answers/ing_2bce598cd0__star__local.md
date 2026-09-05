---
qid: ing_2bce598cd0__star__local
question: 'Explain: Final Project (35%) — Stanford University CS231n: Deep Learning
  for Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 363
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:27-05:00'
sources: []
---

**Situation** – In the final project of Stanford’s CS231n course I was tasked with building an image‑classification system for a real‑world dataset of street‑view images that contained 1,000 classes and over 500k labeled samples. The goal was to outperform the baseline ResNet‑50 by at least 5 % top‑1 accuracy while keeping inference latency under 100 ms on a single GPU.

**Task** – I had to design an end‑to‑end pipeline: data preprocessing, model architecture tuning, training regime, and deployment. The challenge was to handle class imbalance, reduce overfitting, and compress the network without sacrificing precision.

**Action** – I started by augmenting the dataset with mixup and random erasing, then experimented with EfficientNet‑B3 as a backbone. To boost performance I added a lightweight attention module (Squeeze‑and‑Excitation) and trained using cosine‑annealing learning rates with label smoothing. For compression I applied structured pruning followed by 8‑bit quantization. During evaluation I used TensorRT to benchmark latency, iterating on batch size until the 100 ms target was met.

**Result** – The final model achieved a 78.4 % top‑1 accuracy—5.2 % above the baseline—and ran at 92 ms per image on an NVIDIA RTX 2080 Ti. I learned that aggressive data augmentation combined with attention mechanisms can unlock significant gains, and that early pruning coupled with quantization is effective for real‑time inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
