---
qid: ing_fe18517695__eli5__local
question: 'Explain: From your test set evaluation (Step 6 from Chapter 4)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 227
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:17:26-05:00'
sources: []
---

Imagine you’re a chef who has just perfected a new recipe in the kitchen. Step 6 is like taking that dish to a random group of diners (the **test set**) and asking them how much they liked it. You don’t let the diners influence the recipe; you simply serve what you’ve already made, so you can see how well your cooking works on people who haven’t tasted it before.

**Test set**: A collection of examples that were never shown to the model during training or tuning.  
**Evaluation**: Measuring the model’s performance (accuracy, loss, etc.) on this unseen data.

In practice, you run the trained AI on every item in the test set and compute a score—just as the diners give ratings. This tells you whether your model truly learned useful patterns or just memorized the training data. If it performs well on the test set, you can trust that it will likely do well on real‑world inputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
