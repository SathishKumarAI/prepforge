---
qid: ing_4aa6017387__eli5__local
question: 'Explain: Running Experiments — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 271
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:35:21-05:00'
sources: []
---

Imagine you’re baking a batch of cookies and want to see which recipe makes the best one. Each cookie is an **experiment**: it has ingredients (the input data), a method (the learning algorithm), and a result (how well it predicts). In Pydantic Evals, the “ingredients” are defined with **Pydantic models**, which are like recipe cards that spell out exactly what each ingredient must be—its type, its limits, even a friendly description. When you run an experiment, the system reads that card, checks that every ingredient is correct (validation), runs the cookie‑baking machine (the training loop), and then writes down the outcome in a tidy report.

So Pydantic Evals lets you:

1. **Write clear recipe cards** for inputs and outputs with minimal fuss.
2. **Run many experiments automatically**, each using its own card.
3. **Collect results** that are already validated and ready to compare, just like having a neat chart of cookie scores.

It’s the same idea as cooking: define what you need, let the machine do the work, and trust that the ingredients were correct before you taste the final product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
