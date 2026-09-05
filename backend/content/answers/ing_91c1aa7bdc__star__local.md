---
qid: ing_91c1aa7bdc__star__local
question: 'Explain: 8.5.1. Training Deep Networks ¶ — 8.5. Batch Normalization \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 328
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:06-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a CNN for real‑time video analytics on edge devices. The network had 12 convolutional layers and the training loss kept oscillating after the first few epochs; convergence stalled around 0.32, while our target was below 0.15.

**Task:**  
I needed to stabilize training so that deeper layers could learn meaningful features without exploding or vanishing gradients, all within a limited GPU budget.

**Action:**  
I introduced batch normalization after each convolutional layer and before the ReLU activation. Using TensorFlow‑Keras, I added `BatchNormalization()` with default momentum 0.99 and epsilon 1e-5. To keep inference lightweight, I froze the BN statistics during deployment by setting `training=False`. I also adjusted learning rates: reduced the global LR to 1e-4 and used a warm‑up schedule for the first 5 k steps. Monitoring with TensorBoard showed that the per‑batch mean stayed near zero and variance close to one, eliminating internal covariate shift.

**Result:**  
Training stabilized within three epochs; loss dropped from 0.32 to 0.12 in just 10 epochs, and validation accuracy improved by 6 %. Deployment on a Raspberry Pi still met the 30 fps requirement because BN layers were fused into preceding convolutions during inference. I learned that proper BN placement can dramatically reduce training time and improve model generalization without extra runtime cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
