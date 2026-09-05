---
qid: ing_6792d11847__eli5__local
question: Is accuracy always a good metric for classification performance?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 218
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:21-05:00'
sources: []
---

Imagine you’re judging a spelling bee. “Accuracy” would be counting how many contestants spelled the word correctly out of all attempts. It’s useful, but it can hide important details. If only the easiest words were chosen, accuracy could look great while ignoring that some tough words were consistently missed.

In machine learning classification, **accuracy** is simply the fraction of predictions that match the true labels (correct / total). It works well when classes are balanced and every mistake costs the same. However, in many real‑world problems—like detecting rare diseases or spam emails—one class may be far less frequent than the other. A model could predict “no disease” for everyone and still achieve high accuracy because most people are healthy, yet it would fail to catch any actual cases.

So while accuracy is a quick first check, we often need additional metrics (precision, recall, F1‑score) that weigh different kinds of errors differently, giving a fuller picture of performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
