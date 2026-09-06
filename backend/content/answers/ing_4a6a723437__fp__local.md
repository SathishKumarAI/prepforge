---
qid: ing_4a6a723437__fp__local
question: 'Explain: You would always do sequential update in'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 419
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:43:35-05:00'
sources: []
---

**Why we must *always* update models sequentially**

In supervised learning the objective is  
\[
L(\theta)=\frac1n\sum_{i=1}^n \ell\bigl(f_\theta(x_i),y_i\bigr),
\]
where \(n\) can be astronomical. Computing the exact gradient
\(\nabla L(\theta)\) requires a full pass over all data—often impossible in memory or time.

*Sequential (online) updates* circumvent this by replacing the expensive average with a **stochastic approximation**:
\[
\theta_{t+1} \;=\;\theta_t-\eta_t\,\nabla_\theta \ell\bigl(f_{\theta_t}(x_t),y_t\bigr),
\]
where each \((x_t,y_t)\) arrives one at a time.  
From the **law of large numbers** we know that, as \(t\to\infty\), the expectation of these noisy gradients equals the true gradient. With an appropriately decaying learning rate \(\eta_t\sim 1/t\), Robbins–Monro theory guarantees convergence to a stationary point.

This is not merely a trick; it is an *optimization principle*: we trade a biased, high‑variance estimate for a low‑cost, unbiased one that converges in expectation. Moreover, the sequential scheme yields **online generalization**—the model can adapt to non‑stationary data streams, which batch training cannot.

*Non‑obvious insight:*  
Because each update is based on a single sample, the trajectory of \(\theta_t\) implicitly performs *implicit regularization*. The stochastic noise acts like a temperature that smooths the loss landscape, helping escape shallow local minima—an effect often exploited in deep learning without explicit regularizers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
