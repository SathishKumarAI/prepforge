---
qid: ing_46fc7a802a__fp__local
question: 'Explain: Stripe — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 377
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:36:39-05:00'
sources: []
---

**Stripe and the “FAANG‑style” ML problem**

At its core, a payment processor like Stripe must predict *payment risk*—whether a transaction will succeed or fail—under extreme uncertainty and scale. The fundamental problem is a **binary classification with highly imbalanced data**: 99 % of transactions are legitimate, yet the few fraudulent ones cost millions.

Why this formulation?  
1. **Optimization:** We minimize expected loss \(L = \sum_{i} w_i\,\ell(y_i,\hat y_i)\). Because false negatives (missed fraud) are far more costly than false positives, we weight samples asymmetrically, turning the problem into a *cost‑sensitive* objective.  
2. **Information theory:** The Shannon entropy of the class distribution is tiny; to extract useful signal we must compress high‑dimensional transaction features into a low‑variance representation (e.g., embedding user‑device graphs).  
3. **Geometry:** Fraud patterns lie on a manifold distinct from legitimate traffic. Kernel or graph‑neural methods capture this non‑linear geometry, allowing the model to interpolate between unseen fraud types.

**Non‑obvious insight:**  
Most interviews focus on *feature engineering* or *model choice*, but the real bottleneck is **label acquisition**. Stripe’s data are noisy and delayed; training a model that can update online (e.g., via Bayesian inference) while preserving privacy is the true technical challenge. This continual learning, coupled with causal reasoning to avoid spurious correlations (e.g., time‑of‑day effects), distinguishes production‑grade ML at FAANG companies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
