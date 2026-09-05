---
qid: ing_c7e0ce23be__eli5__local
question: Evals are nondeterministic - temperature, sampling, flaky agents. How do
  you get trustworthy numbers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 179
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:52:23-05:00'
sources: []
---

Imagine you’re testing a new recipe by letting several chefs cook it in different kitchens. Each chef’s stove has a slightly different heat setting (temperature), the kitchen lights flicker (sampling noise), and sometimes a waiter misplaces a spice (flaky agents). If you taste one dish, you can’t know if the flavor is truly good or just lucky. To trust the recipe, you ask every chef to cook it many times in their own kitchen and record the results. Then you look at the average flavor score across all chefs and repetitions. That average smooths out the quirks of any single stove, light, or waiter. In AI, we run the same model many times with different random seeds and settings, then average the scores to get a reliable estimate of its true performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
