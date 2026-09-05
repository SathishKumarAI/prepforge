---
qid: ing_d49d3ed039__eli5__local
question: When would happen if object change value of a class?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 262
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:54-05:00'
sources: []
---

Think of a **class** as a recipe card and an **object** (instance) as a dish made from that recipe.  
When you bake a cake, the recipe says “use two eggs.” That’s like a *class attribute* – a value shared by every dish made from this recipe.  
If you decide to add a sprinkle of cinnamon to one particular cake, you’re changing an **instance attribute**: only that cake knows about it.  

In machine learning code, the same thing happens when a model class defines default parameters (like learning rate). If you change those defaults *inside* a single training run—say you re‑assign `model.learning_rate = 0.01`—you’re altering the object’s own copy, not the recipe for all future models.  
If instead you modify the class itself (`Model.learning_rate = 0.01`), every new model will start with that new value.  

So, an object changes a class only when it rewrites the class’s shared attributes; otherwise, each instance keeps its own copy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
