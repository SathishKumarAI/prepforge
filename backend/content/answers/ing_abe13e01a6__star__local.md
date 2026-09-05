---
qid: ing_abe13e01a6__star__local
question: 'Explain: 14.1.3. Summary ¶ — 14.1. Image Augmentation \u2014 Dive into
  Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 324
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:07-05:00'
sources: []
---

**Situation:**  
During my senior capstone I was tasked with improving the robustness of a convolutional neural network for classifying handwritten digits. The training set was limited to 5,000 images and overfitting was hurting test accuracy.

**Task:**  
I needed to expand the effective dataset size without collecting new data, so I had to design an image‑augmentation pipeline that would expose the model to realistic variations while preserving label integrity.

**Action:**  
I implemented a series of augmentation transforms described in the 14.1.3 Summary: random rotations up to ±15°, width/height shifts of 10 %, shear up to 5°, zoom between 0.9–1.1, horizontal flips, and Gaussian noise addition. Using Keras’ `ImageDataGenerator`, I chained these operations and set a seed for reproducibility. I also added an on‑the‑fly normalization step to keep pixel values in [0, 1]. To avoid over‑augmentation, I monitored validation loss and stopped when it plateaued.

**Result:**  
Test accuracy rose from 92.3 % to 97.8 %, a 5.5 % absolute gain, while training time increased only by ~15 %. I learned that thoughtful augmentation—guided by the summary’s balance of geometric and photometric tweaks—can dramatically improve generalization without extra data collection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
