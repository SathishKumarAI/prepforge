---
qid: ing_ccaa32a7a7__fp__local
question: 'Explain: 8.5.2.4. Batch Normalization During Prediction ¶'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 486
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:15:32-05:00'
sources: []
---

### Why BatchNorm behaves differently at test time

During training, a layer normalizes each feature \(x_i\) in a minibatch:
\[
\hat x_i=\frac{x_i-\mu_{\mathcal B}}{\sqrt{\sigma_{\mathcal B}^2+\varepsilon}},\qquad
y_i= \gamma\,\hat x_i + \beta,
\]
where \(\mu_{\mathcal B},\sigma_{\mathcal B}\) are the batch mean and variance.  
The **optimization objective** is to make the pre‑activation distribution *stable* so that gradients flow smoothly (the “internal covariate shift” problem). The stochasticity of \(\mu_{\mathcal B},\sigma_{\mathcal B}\) acts as a regularizer: each forward pass sees a slightly different affine transform, encouraging the network to learn representations robust to small perturbations.

At test time we need a *deterministic* mapping. The batch statistics no longer exist (we process one sample at a time), so we approximate them with **running estimates** \(\hat\mu,\hat\sigma^2\) accumulated during training via exponential moving averages:
\[
\hat\mu_t = \lambda\,\hat\mu_{t-1} + (1-\lambda)\mu_{\mathcal B},\quad
\hat\sigma_t^2 = \lambda\,\hat\sigma_{t-1}^2 + (1-\lambda)(\sigma_{\mathcal B}^2+\varepsilon).
\]
During inference we then use:
\[
y_i^{\text{test}}= \gamma\,\frac{x_i-\hat\mu}{\sqrt{\hat\sigma^2}}\;+\;\beta.
\]

**Non‑obvious insight:**  
The running averages are *not* meant to estimate the true data distribution. They are a *proxy for the stochastic transformation* that the network has learned to tolerate. If we used population statistics instead, we would discard the implicit regularization that came from training with noisy batch estimates. Thus, BatchNorm’s inference rule is a deliberate compromise: it preserves the learned robustness while providing determinism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
