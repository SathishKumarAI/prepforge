---
qid: ing_a1ac52e47d__fp__local
question: 'Explain: Underfitting and overfitting machine learning models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 504
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:49:38-05:00'
sources: []
---

**Why do some ML models miss the mark?**

At its core, a learning algorithm seeks a function \(f\) that maps inputs \(x\) to targets \(y\). We train on data \(\{(x_i,y_i)\}\) and then evaluate on unseen samples. Two extremes arise:

| Extreme | What happens during training | What happens on new data |
|---------|------------------------------|--------------------------|
| **Under‑fitting** | The hypothesis space is too small (e.g., a linear model for a quadratic pattern). Training error remains high because the model cannot capture the underlying structure. | Test error ≈ training error – still large. |
| **Over‑fitting** | The model is expressive enough to memorize idiosyncratic noise in the training set (high‑degree polynomial, deep neural net with too many parameters). Training error → 0. | Test error blows up: the learned function follows spurious fluctuations that do not generalize. |

Mathematically this trade‑off reflects **bias–variance decomposition**:

\[
\text{E}_{\mathcal{D}}\big[(y-f_{\mathcal{D}}(x))^2\big]
= \underbrace{\big(\text{Bias}[f_{\mathcal{D}}(x)]\big)^2}_{\text{Systematic error}}
+ \underbrace{\text{Var}[f_{\mathcal{D}}(x)]}_{\text{Sensitivity to data noise}}
+ \sigma^2
\]

A too‑simple model has high bias (cannot approximate the true function). A too‑complex one has high variance (small changes in training data lead to large swings in predictions).

**Non‑obvious insight:**  
Overfitting is *not* merely a lack of data; it is fundamentally about **capacity relative to signal complexity**. Even with abundant data, if the target function is highly irregular or noisy, a flexible model will still overfit unless regularization (weight decay, dropout, early stopping) aligns its effective capacity with the true underlying manifold. Thus, the cure lies in matching *model complexity to intrinsic problem geometry*, not just in increasing sample size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
