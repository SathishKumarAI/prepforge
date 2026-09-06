---
qid: ing_797a36e07f__fp__local
question: 'Explain: 1.1.3.2. Setting regularization parameter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 717
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:22:40-05:00'
sources: []
---

**Why the regularization weight matters**

When we fit a model \(f_\theta(x)\) to data \(\{(x_i,y_i)\}_{i=1}^n\), the empirical risk
\[
L_{\text{emp}}(\theta)=\frac1n\sum_{i=1}^n \ell(y_i,f_\theta(x_i))
\]
captures only how well the parameters explain the training set. A model that minimizes \(L_{\text{emp}}\) may have enormous variance—tiny changes in the data can flip its predictions—because it has “memorized” noise.

Regularization penalizes *complexity* through a term \(\lambda R(\theta)\), yielding
\[
L_{\text{reg}}(\theta)=L_{\text{emp}}(\theta)+\lambda R(\theta).
\]
From a Bayesian perspective, \(R(\theta)=-\log p(\theta)\) is the negative log‑prior; thus \(\lambda\) scales the prior’s influence relative to the likelihood. Setting \(\lambda\) is equivalent to choosing how much we trust our prior knowledge versus the data.

**Deriving an optimal \(\lambda\)**

The *bias–variance trade‑off* tells us that expected test error
\[
E_{\text{test}} = \underbrace{\text{Bias}^2}_{\text{model underfits}}
+ \underbrace{\text{Variance}}_{\text{overfitting}}
+ \sigma^2_{\text{noise}}
\]
is minimized when the regularization balances bias and variance. In a linear‑regression setting, the solution is
\[
\hat\theta_\lambda=(X^\top X + \lambda I)^{-1}X^\top y.
\]
Differentiating the expected test error with respect to \(\lambda\) yields
\[
\frac{d}{d\lambda}\mathbb E[E_{\text{test}}] = 0
\;\Longrightarrow\;
\lambda^*=\frac{\sigma^2_{\text{noise}}\operatorname{tr}((X^\top X+\lambda I)^{-1})}
              {\|y-P_\lambda y\|^2},
\]
where \(P_\lambda=X(X^\top X+\lambda I)^{-1}X^\top\).
Thus \(\lambda^*\) is the value that equalizes the marginal reduction in variance with the increase in bias.

**Non‑obvious insight**

The optimal \(\lambda\) depends *only* on the spectrum of \(X^\top X\), not on the particular labels. Consequently, a good heuristic is to tune \(\lambda\) on any held‑out set or via cross‑validation *without knowing the true noise level*. In practice, one often scales \(\lambda\) so that the Frobenius norm of the regularization term matches that of the empirical loss—a rule of thumb that reflects the derived balance between bias and variance.

In short: choose \(\lambda\) to equalize the marginal gains in predictive stability (variance reduction) against the inevitable rise in systematic error (bias). This principled view turns a hyperparameter into a *quantitative* trade‑off rather than an arbitrary knob.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
