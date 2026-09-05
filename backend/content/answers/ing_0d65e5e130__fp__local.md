---
qid: ing_0d65e5e130__fp__local
question: 'Explain: Model Selection Guide — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 384
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:19-05:00'
sources: []
---

### Why a *Model‑Selection* guide is essential

When you build a predictive system, the **objective** is to minimise expected loss over future data.  
The loss depends on two things:

1. **Bias** – how well the chosen function class can approximate the true mapping.  
2. **Variance** – how sensitive that approximation is to sampling noise.

These two terms are not independent: a richer model reduces bias but inflates variance; a leaner model does the opposite.  
Thus, *model selection* is an optimisation problem over the space of possible models, trading off bias against variance.  

The Sarvam API codifies this trade‑off in its “Models” section:

- **Model families** (linear, tree‑based, neural) are defined by their capacity, which controls bias.  
- **Hyper‑parameters** (depth, regularisation strength, hidden units) tune the effective complexity, thus controlling variance.  
- **Cross‑validation scores** are the empirical proxy for expected loss, providing a principled way to compare candidates.

#### A non‑obvious insight

Many practitioners treat model choice as a “pick‑the‑best‑score” exercise, overlooking that *different data regimes* (high‑dimensional sparse vs. low‑dimensional dense) shift the bias–variance optimum.  
The guide’s recommendation matrix shows that a shallow tree can outperform a deep neural net on small tabular datasets because the variance penalty dominates.  

In short, the guide is not just a catalog; it embodies the optimisation principle that **the best model is the one whose capacity matches the signal‑to‑noise ratio of your data**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
