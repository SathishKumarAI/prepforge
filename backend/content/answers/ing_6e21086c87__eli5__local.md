---
qid: ing_6e21086c87__eli5__local
question: 'Explain: 1.1.1.1. Non-Negative Least Squares — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 251
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:31:00-05:00'
sources: []
---

Imagine you’re trying to paint a picture with only non‑negative brushes—every stroke adds color, never removes it. In data science, that’s what **Non‑Negative Least Squares (NNLS)** does: it finds the best mix of ingredients (weights) so that their weighted sum matches your target as closely as possible, but each ingredient must be zero or positive.

In scikit‑learn a *linear model* is simply an equation like  
**y = w₁x₁ + w₂x₂ + … + wₙxₙ**, where the weights (wᵢ) tell you how much each input feature (xᵢ) contributes to the output (y). NNLS restricts all wᵢ ≥ 0, ensuring no feature can “cancel out” another. This is useful when you know contributions can’t be negative—think of predicting sales from advertising spend or estimating a chemical concentration from sensor readings.

So, in plain terms: NNLS is a special kind of linear regression that only lets you add positive influences, giving you an intuitive and physically plausible model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
