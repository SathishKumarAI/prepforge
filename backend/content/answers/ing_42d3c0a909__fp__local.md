---
qid: ing_42d3c0a909__fp__local
question: Explain the bias-variance tradeoff. How do you tell which one is hurting
  your model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 457
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:26:53-05:00'
sources: []
---

The **bias‑variance tradeoff** arises when we decompose the expected prediction error of a supervised learning algorithm into three terms:

\[
\mathbb{E}\big[(y-f(x))^2\big]
= \underbrace{\text{Bias}^2}_{\text{systematic under/overfitting}}
+ \underbrace{\text{Variance}}_{\text{sensitivity to training noise}}
+ \sigma^2_{\text{irreducible}},
\]

where \(y=f(x)+\varepsilon\) with \(\varepsilon\sim(0,\sigma^2)\).  
*Bias* measures how far the **average** model prediction is from the true function. It grows when we restrict the hypothesis class (e.g., a linear regressor for a quadratic truth). *Variance* captures how much predictions fluctuate across different training sets; it explodes when the learner fits noise, as in deep trees or high‑degree polynomials.

The tradeoff follows from **information theory**: a model with low bias has high capacity and can represent more complex functions, but this capacity must be regularised to prevent overfitting. Regularisation (e.g., L2 penalty, pruning) effectively reduces variance at the cost of increasing bias.

### Diagnosing the culprit

1. **Learning curves**: Plot training vs. test error versus training set size.
   * If both errors are high and close together → high bias.
   * If training error is low but test error remains high → high variance.
2. **Cross‑validation residual plots**: A systematic pattern (e.g., U‑shaped) indicates bias; random scatter around zero suggests variance.

A non‑obvious insight: **bias can be reduced by aggregating weak learners**, yet the *variance* of each learner must be controlled. For instance, Random Forests lower variance through bootstrap aggregation while keeping bias modest because each tree is grown deep. Thus, the interplay between bias and variance is not merely a balance but a design choice about how to partition model complexity across many simple models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
