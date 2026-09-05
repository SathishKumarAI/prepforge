---
qid: ing_4b6f800f04__eli5__local
question: 'Explain: MALT — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 324
total_tokens: 479
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:36:33-05:00'
sources: []
---

**MALT – the “Layered‑Task Learning” idea**

Think of a recipe book that has three sections.  
The first section lists *basic ingredients* (simple data patterns).  
The second shows *how to combine those ingredients into dishes* (small neural‑network layers).  
The third tells you *which dish to serve for each occasion* (the final prediction layer).  

MALT builds a model exactly like that: it learns basic building blocks first, then stacks them in layers so later layers can reuse earlier work. This makes the whole system faster and more accurate because each new layer only has to learn how to tweak what’s already been learned.

**METR – the “Model‑Evaluation Tool for Results”**

Once a recipe is cooked, you need a taste test. METR is that test: it gives a single number (accuracy, loss, or another score) that tells you how well the model is doing on new data. Think of it as a chef’s rating system—higher scores mean tastier dishes.

Together, MALT builds the dish layer by layer, and METR checks if it tastes good.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
