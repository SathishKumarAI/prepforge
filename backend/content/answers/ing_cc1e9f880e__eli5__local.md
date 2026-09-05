---
qid: ing_cc1e9f880e__eli5__local
question: What Is Transfer Learning? — Transfer Learning in Keras with Computer Vision
  Models - MachineLearningMastery.com
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 255
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:32-05:00'
sources: []
---

Imagine you’re a chef who’s just learned how to bake bread. You’ve mastered kneading dough and baking at the right temperature, but you don’t know how to make a fancy pastry yet. A seasoned pastry chef walks in and says, “I’ll let you use my kitchen tools and recipes; just add your own twist.” That’s transfer learning: taking a model that already knows many useful features (like detecting edges or shapes) from one task and re‑using them for a new but related task.

**Key terms**  
- **Model**: the set of learned rules inside a neural network.  
- **Feature extractor**: early layers that recognize general patterns, such as lines or textures.  
- **Fine‑tuning**: slightly adjusting those layers to better fit your specific images.

In Keras you load a pre‑trained vision model (e.g., MobileNet), freeze its feature extractor so it stays unchanged, and add new classification layers on top for your own dataset. Then you train only the added layers—much like adding a new recipe to an existing kitchen—making learning faster and often more accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
