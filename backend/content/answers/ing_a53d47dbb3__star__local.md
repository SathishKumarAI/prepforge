---
qid: ing_a53d47dbb3__star__local
question: 'Explain: Difference Between Regularization, Standardization and Normalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 315
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:32-05:00'
sources: []
---

**Situation:** In a recent e‑commerce recommendation project, our gradient‑boosted model was overfitting on the user‑behavior dataset; validation loss spiked while training loss stayed low.

**Task:** I had to preprocess features so that the model generalized better and ensured numeric stability across all algorithms we’d later test (SVMs, neural nets).

**Action:** First, I applied **standardization** (z‑score) to every continuous feature: subtracting the mean and dividing by the standard deviation. This centered the data at zero with unit variance, which kept gradient descent steps balanced. Next, for features that were strictly positive and highly skewed—like click‑through rates—I performed **normalization** to a 0–1 range using min‑max scaling; this prevented large outliers from dominating distance‑based models like k‑NN. Finally, I added an L2 **regularization** term to the loss functions of all models (weight decay in neural nets and penalty λ ||w||² for linear models). This discouraged excessively large weights that could fit noise.

**Result:** After these steps, validation accuracy improved from 68% to 78%, and training/validation loss curves converged more smoothly. The model’s coefficient norms dropped by ~30%, confirming reduced overfitting. I learned that standardization is the default for centered algorithms, normalization is ideal when feature scales matter, and regularization is a separate penalty that directly controls model complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
