---
qid: ing_10dfd4e72f__star__local
question: 'Explain: 14.1.1.2. Changing Colors ¶ — 14.1. Image Augmentation \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 317
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:18-05:00'
sources: []
---

**Situation** – In a computer‑vision project for autonomous delivery drones, our training set had only ~8 k images of packages taken under controlled lighting. When we deployed the model in real traffic, it struggled to detect packages on sunny days or at dusk because the color distribution differed drastically.

**Task** – I needed to broaden the model’s robustness without collecting new data by augmenting the existing images so that the network would learn invariant features across lighting conditions.

**Action** – I implemented the “Changing Colors” augmentation from the Deep Learning 1.0.3 docs. Using Albumentations, I created a pipeline that randomly altered hue (±20°), saturation (±30%), and value (±25%) for each image during training. I also added random brightness/contrast adjustments to simulate shadows and glare. The pipeline ran on GPU‑accelerated preprocessing in PyTorch’s DataLoader, ensuring no bottleneck. I monitored the loss curves to confirm that the augmentation didn’t over‑regularize the model.

**Result** – After one week of retraining with the new pipeline, test accuracy on a held‑out “night‑time” subset jumped from 68 % to 93 %. Overall recall improved by 12 pp, and inference latency stayed under 50 ms. I learned that careful color jittering can act as a lightweight domain‑adaptation trick, saving costly data collection while dramatically improving real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
