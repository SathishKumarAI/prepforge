---
qid: ing_d3605eac89__eli5__local
question: 'Explain: because otherwise we are really screwed all'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 209
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:02-05:00'
sources: []
---

Imagine a student who memorises every single answer on past exams instead of learning the concepts behind them. When a new test comes, the questions are slightly different and the student flounders—he’s “over‑trained” on old data and can’t generalise to fresh ones.

In machine learning, we call this *overfitting*. The model learns noise or quirks in the training set, so it performs poorly on real‑world inputs. Regularisation is like a gentle tutor: it nudges the student to focus on core ideas (by adding a small penalty for overly complex patterns) rather than memorising every detail.

Without this check, the model will give us shiny numbers on its own data but fail spectacularly when deployed—hence “we are really screwed.” Regularisation keeps the learning honest and useful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
