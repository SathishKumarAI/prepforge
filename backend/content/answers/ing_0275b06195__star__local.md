---
qid: ing_0275b06195__star__local
question: 'Explain: Models for Transfer Learning — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 417
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:15-05:00'
sources: []
---

**Situation** – In a recent grant project I was tasked with building an eye‑disease classifier for a low‑resource clinic. The dataset only had 1,200 labeled retinal images, but the model needed to reach at least 85 % accuracy to be clinically useful.

**Task** – My goal was to develop a high‑performance CNN in under three weeks while keeping training time short and avoiding overfitting on the tiny data pool.

**Action** – I chose Keras with TensorFlow backend and used the pre‑trained ResNet‑50 as a feature extractor. First, I froze all convolutional layers (≈18 M params) to preserve learned ImageNet features. Then I added a global average pooling layer followed by two dense layers (512 → 1) with ReLU and dropout (0.5). For fine‑tuning, I unwrapped the top three residual blocks and trained them at a reduced learning rate (1e-4) using Adam and cosine‑annealing scheduler. Data augmentation (random flips, rotations, brightness jitter) expanded the effective dataset to 12 k images.

**Result** – After 10 epochs on an 80/20 split, validation accuracy jumped from 55 % (baseline CNN) to 87 %, and test AUROC was 0.92. Training time dropped from 48 h with a custom network to under 2 h. I learned that freezing most layers preserves generic visual features, while selectively fine‑tuning deeper blocks adapts them to domain specifics without catastrophic forgetting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
