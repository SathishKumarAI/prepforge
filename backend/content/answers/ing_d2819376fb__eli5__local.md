---
qid: ing_d2819376fb__eli5__local
question: 'Explain: How to Use Pre-Trained Models — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 237
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:08:39-05:00'
sources: []
---

Imagine a chef who has already mastered baking bread in a big kitchen. If you want to make a new type of pastry, you don’t start from scratch; you take the ready‑made dough and just add your own flavors. In machine learning this is “transfer learning.”  

A pre‑trained model is like that ready‑made dough: it has already learned how to recognize basic shapes (edges, textures) from millions of images. You keep those learned layers (the “dough”) and replace only the last few layers with new ones that decide whether an image is a cat or a dog.  

In Keras you load the pre‑trained network (e.g., ResNet50), freeze its early layers so they don’t change, then add a small classification head on top. Train only this tiny part on your own pictures; the model now “transfers” its bread‑baking skills to your pastry task with far fewer data and less time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
