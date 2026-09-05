---
qid: ing_d64607b27d__eli5__local
question: 'Explain: Why there''s no model inside the pruner itself'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 223
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:00-05:00'
sources: []
---

Think of a **model** as a recipe book that tells a kitchen (your computer) how to make dishes (make predictions). A **pruner** is like a careful chef who goes through the cookbook and removes any recipes that are too long or use ingredients that rarely show up in customers’ orders. The pruner doesn’t cook; it only decides which recipes should stay.

Why no model inside the pruner? Because the pruner’s job is purely “filtering.” It looks at the list of recipes (the model’s parameters) and marks some as unnecessary, but it never needs to understand how each recipe actually cooks a dish. That understanding belongs in the model itself—just like a chef who knows how to cook needs the recipe, not the person deciding which recipes to keep.

So the pruner is a tidy selector; the model remains the one that does the heavy lifting of learning and prediction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
