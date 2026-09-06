---
qid: ing_857308fee6__fp__local
question: 'Explain: That''s not what we want. we only — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 338
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:39-05:00'
sources: []
---

When a learner says “That’s **not** what we want – we only …” they’re pointing out that the *objective function* (the thing we try to minimize or maximize) has been mis‑specified.  
In supervised learning, the loss is an expectation over data:  

\[
L(\theta)=\mathbb{E}_{(x,y)\sim P_{\text{data}}}\!\big[\ell(f_\theta(x),y)\big].
\]

If you drop part of the training set or replace the target \(y\) with a proxy, the expectation changes. The model will converge to an optimal \(\theta^*\) for this *wrong* distribution, not for the true task.  

Why must we keep the exact data‑distribution?  
Because **generalization** depends on matching the training and test distributions. Even a tiny shift (e.g., omitting rare classes) can inflate \(L_{\text{test}}\) dramatically—this is the *bias–variance* trade‑off in disguise.  

A non‑obvious insight: the same mis‑specification that hurts performance also biases the *gradient estimator*. If gradients are computed on a biased sample, stochastic gradient descent learns an entirely different \(\theta\). This explains why “just a few examples” can derail training even when the model is otherwise well‑posed.  

In short, we must train on exactly what we want to predict; otherwise both loss minimization and gradient descent are chasing a moving target.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
