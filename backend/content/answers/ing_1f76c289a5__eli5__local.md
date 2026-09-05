---
qid: ing_1f76c289a5__eli5__local
question: 'Explain: Examples of Using Pre-Trained Models — Transfer Learning in Keras
  with Computer Vision Models - MachineLearningMastery.com'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 217
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:26:03-05:00'
sources: []
---

Think of a pre‑trained computer‑vision model as a seasoned chef who already knows how to cook many dishes.  
You want the chef to learn a new recipe (your specific image task) but you don’t need them to start from scratch.  
In Keras, you load that chef’s cookbook—say VGG16 or ResNet50—using `keras.applications`.  
All the layers before the final “taste” layer are frozen; they keep their learned weights (the chef’s general cooking skills).  
You then add a new, small “tasting” layer on top and train only that part with your own pictures.  
The result: the model uses the chef’s existing knowledge of edges, shapes, colors, while quickly adapting to recognize cats, cars, or whatever you need—just like teaching a skilled cook a single new dish instead of re‑learning every ingredient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
