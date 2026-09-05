---
qid: ing_0deeed7036__eli5__local
question: 'Explain: Pre-Trained Model as Classifier — Transfer Learning in Keras with
  Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 242
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:29-05:00'
sources: []
---

Imagine you’re a chef who has already mastered making a classic tomato sauce. The sauce’s recipe (the *pre‑trained model*) contains all the secret spices and cooking steps that give it great flavor. Now, you want to create a new dish—say, a pasta with mushrooms—but you don’t need to learn how to cook from scratch; you just add your own ingredients on top of the ready sauce.

In machine learning, that classic sauce is a *pre‑trained model*—a neural network already trained on millions of images to recognize patterns. A *classifier* is a tiny layer added on top that learns to decide which category an image belongs to (cat, dog, etc.). *Transfer learning* in Keras lets you take the pre‑trained sauce and “fine‑tune” it: freeze most of its layers so they keep their learned skills, then train only the new classifier layer with your own images. The result is a fast, accurate model that leverages prior knowledge without starting from zero.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
