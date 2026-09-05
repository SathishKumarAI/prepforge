---
qid: ing_ae07927c39__eli5__local
question: 'Explain: Articles — Transfer Learning in Keras with Computer Vision Models
  - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 207
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:12-05:00'
sources: []
---

Imagine you’re a chef who already knows how to make a perfect tomato sauce (the “pre‑trained model”). You now want to cook a new dish, like pasta with the same sauce but different herbs and spices (your new task). Instead of starting from scratch, you just add those extra ingredients on top of the sauce you already know. In machine learning, that’s transfer learning: we take a deep neural network that has learned useful visual patterns from millions of images—like recognizing edges, colors, shapes—and reuse most of its layers (the “sauce”). We keep them frozen, then train only the last few layers to specialize in our new image type. Keras lets you load these pre‑trained models with a single line, freeze their weights, and add your own classification head, saving time, data, and computing power while still achieving high accuracy on your specific computer‑vision task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
