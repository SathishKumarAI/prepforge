---
qid: ing_bf38b63cf6__eli5__local
question: Would you fine-tune a base model or an instruct model? How does that choice
  change your data and your recipe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 280
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:06-05:00'
sources: []
---

Imagine building a new recipe in a kitchen.  
A **base model** is like a plain, versatile loaf of bread: it can be shaped into any dish, but it doesn’t know how to taste or season itself.  
An **instruct model** is already seasoned with basic flavors— it knows how to follow cooking directions and answer questions about recipes.

If you want a highly customized dish (e.g., a specific cuisine), you’d start from the plain bread and add your own spices, textures, and techniques—this is *fine‑tuning a base model*.  
You’ll need lots of diverse training data: images, text, or user interactions that cover every ingredient you plan to use. The recipe (training pipeline) focuses on teaching the loaf how to combine those new flavors.

If instead you just want a smart sous‑chef who can follow any instruction, you fine‑tune an instruct model. You supply examples of clear commands and good responses. The data is more about question–answer pairs than raw ingredients, so the recipe stays simple: tweak the model’s ability to understand and obey instructions rather than invent new flavors.

So: choose a base model for creativity and flexibility; choose an instruct model when you need reliable instruction-following with less custom content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
