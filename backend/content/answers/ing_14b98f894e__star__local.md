---
qid: ing_14b98f894e__star__local
question: 'Explain: Backprop and gradient pathologies — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 285
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:40-05:00'
sources: []
---

**Situation:** While leading a prototype for a handwritten digit classifier at my last internship, the training loss stalled after just a few epochs despite using a standard convolutional network and Adam optimizer.

**Task:** I needed to diagnose why the gradients weren’t propagating properly and devise a fix that would bring the model back on track without sacrificing accuracy.

**Action:** First, I plotted gradient norms layer‑by‑layer and discovered vanishing gradients in the early conv layers—most values were close to zero. I then experimented with several remedies: re‑initializing weights with He initialization, adding batch normalization after each convolution, and switching from ReLU to leaky ReLU to avoid dead neurons. To tackle exploding gradients, I introduced gradient clipping at 5.0 and adjusted the learning rate schedule. I also added a residual skip connection to help preserve signal flow.

**Result:** After these changes, training loss dropped by ~70% in the first epoch and validation accuracy climbed from 84 % to 96 % within ten epochs. The experience reinforced that monitoring gradient magnitudes is crucial for diagnosing pathologies, and that a combination of proper initialization, normalization, activation choice, and clipping can keep deep nets trainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
