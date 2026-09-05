---
qid: ing_13a95a1c67__eli5__local
question: 'Explain: Datasets and Cases — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 226
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:06:36-05:00'
sources: []
---

Imagine you’re a chef who wants to train a robot to cook the same dish every time.  
The **dataset** is like a cookbook: it’s a collection of recipes (each recipe = one “case”). Each recipe tells the robot what ingredients, amounts, and steps are needed.

In Pydantic Evals, each recipe is a *Pydantic model* that defines the shape of the data – the required fields, their types, and any constraints. When you run an eval, the robot (the evaluation engine) reads one recipe from the cookbook, checks that every ingredient matches what the model expects (type‑checking), and then tests the robot’s cooking routine against it.

So:
- **Dataset** = collection of recipes (cases).  
- **Case** = a single recipe with specific values.  
Pydantic Evals validates each case automatically, letting you see how well your model or algorithm handles every possible “dish” in the cookbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
