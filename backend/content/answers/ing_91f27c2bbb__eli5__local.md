---
qid: ing_91f27c2bbb__eli5__local
question: 'Explain: Basic Requirements — Interviewnotes 2Ndjune2022'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 246
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:29:08-05:00'
sources: []
---

**Think of a recipe book that can learn new dishes on its own.**  
To make this “smart cookbook” work, you need three things:

1. **Ingredients (Data)** – The book must have many examples of recipes: ingredients, steps, and results. In machine learning we call these *training data*. They give the algorithm a taste of what to learn.

2. **Chef’s instructions (Algorithms)** – A set of rules that tells the cookbook how to mix the ingredients. These are mathematical procedures like linear regression or neural networks; they decide how the model changes when it sees new examples.

3. **Taste test (Evaluation)** – After cooking a dish, you taste it to see if it meets expectations. In ML we split data into *training* and *test* sets so we can judge accuracy, precision, recall, etc., without cheating.

When all three are in place—ample data, a clear algorithm, and honest evaluation—the model learns to predict or classify new inputs reliably, just as the cookbook could suggest tasty recipes it never saw before.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
