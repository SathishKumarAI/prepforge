---
qid: vq_f05a39f6f2__eli5__local
question: What are the differences between the Test and Validation sets?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 232
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:17-05:00'
sources: []
---

Think of training an AI as learning a new recipe.  
You have **ingredients** (the data) and you want to know if your dish will taste good before serving it.

* **Test set** – the “taste‑test” you do right after cooking, on a fresh batch you’ve never used for measuring or tweaking. It tells you how well the recipe works on brand‑new, unseen examples; you can’t change anything based on these results because they’re meant to be an unbiased check.

* **Validation set** – the “taste‑test” you do while you’re still cooking, using a small portion of the same ingredients you’ve already used for making the dish. You taste it, adjust salt or spices, and repeat until you’re happy. This is where you fine‑tune your recipe (model hyperparameters) before the final test.

So, the test set evaluates the finished model on fresh data; the validation set guides the tuning process while still using data from the same overall pool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
