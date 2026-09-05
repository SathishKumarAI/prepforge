---
qid: ing_f9fae80d7f__eli5__local
question: 'Explain: 1.11.1.1.4. Categorical Features Support'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 251
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:10:35-05:00'
sources: []
---

Imagine you’re organizing a book club where members can only choose from a handful of genres—fiction, mystery, sci‑fi, or romance. Each genre is a *categorical feature*: it’s a label that tells something about the book but isn’t a number you can add or subtract.

When a machine learning model learns from such data, it needs to translate those labels into a form it understands. The usual trick is “one‑hot encoding”: turn each genre into its own column and put a 1 in the column that matches the chosen genre (0 everywhere else). It’s like giving each member a badge for their favorite genre; the model can see which badges are present.

Some models, like decision trees or random forests, can handle these one‑hot columns directly. Others, such as linear regression, treat them as separate binary variables, so they still work but interpret the effect of each genre separately.

In short: categorical features are non‑numeric labels; we convert them into numeric “one‑hot” vectors so any model—no matter its type—can process them and learn from the patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
