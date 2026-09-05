---
qid: ing_c9e1aaa30a__eli5__local
question: 'Explain: As you can guess, this is very — Detecting anomalies using Isolation
  Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 207
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:55:07-05:00'
sources: []
---

Imagine a forest of tiny “trick‑tree” puzzles. Each tree starts with all your data points (like a basket of fruit). To build the tree, you pick a random feature (say, sweetness) and cut the basket at a random value (maybe 5 % sugar). The cut splits the basket into two smaller baskets. You keep cutting until every basket contains just one piece of fruit.

Now look at a new fruit. If it’s an oddball—very sweet or very sour—it will be separated from the others by a cut early in the tree, so it ends up in a small basket quickly. Normal fruits need many cuts to get isolated. By averaging how deep each fruit is trapped across all trees, you gauge its “strangeness.” A low average depth signals an anomaly. So isolation trees are like a series of random splits that quickly separate out unusual data points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
