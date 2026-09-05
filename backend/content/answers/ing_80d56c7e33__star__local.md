---
qid: ing_80d56c7e33__star__local
question: 'Explain: Transfer Learning for Image Recognition — Transfer Learning in
  Keras with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 299
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:04-05:00'
sources: []
---

**Situation:**  
At my last internship I was tasked with building a plant‑disease detector for a local farm, but the dataset only had 300 labeled leaf images and training from scratch would overfit and take days on our modest GPU.

**Task:**  
I needed to create an accurate classifier (≥90 % top‑1 accuracy) within two weeks while keeping inference fast enough for mobile deployment.

**Action:**  
I used Keras’ pre‑trained ResNet50 as a feature extractor. I froze the first 140 layers, added a global average pooling layer, followed by a dense bottleneck and a sigmoid output. I compiled with Adam (lr=1e-4) and applied data augmentation (random flips, rotations, brightness). Using transfer learning reduced training time from ~48 h to under 6 h on the same GPU. I also experimented with fine‑tuning the last block, which improved validation accuracy by 3 % but increased overfitting risk; I countered that by adding a dropout of 0.5.

**Result:**  
The final model achieved 93 % accuracy on a held‑out test set and ran at ~30 ms per image on an Android device. I learned that careful layer freezing, augmentation, and lightweight fine‑tuning can turn a small dataset into a production‑ready vision system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
