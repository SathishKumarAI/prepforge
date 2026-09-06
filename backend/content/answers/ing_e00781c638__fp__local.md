---
qid: ing_e00781c638__fp__local
question: 'Explain: Unsupervised learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 447
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:07-05:00'
sources: []
---

**Unsupervised learning – a glimpse into the heart of machine learning**

At its core, machine learning is *optimization under uncertainty*.  
We have data \(X=\{x_1,\dots,x_n\}\) drawn from an unknown distribution \(p(x)\).  
The goal is to discover structure that allows us to predict or generate new samples without labels.  

In **unsupervised learning**, we impose no external supervision (no target \(y\)).  
Instead, we formulate a *latent variable model* \(p_\theta(x,z)=p(z)p_\theta(x|z)\) and learn parameters \(\theta\) by maximizing the marginal likelihood
\[
\mathcal{L}(\theta)=\sum_{i}\log p_\theta(x_i)
= \sum_i \log \int p_\theta(x_i,z)\,dz .
\]
Because the integral is intractable, we use variational inference: introduce an approximate posterior \(q_\phi(z|x)\) and maximize the evidence lower bound (ELBO):
\[
\mathcal{L}_{\text{ELBO}}(\theta,\phi)=
\mathbb{E}_{q_\phi}\!\left[\log p_\theta(x|z)\right]-\mathrm{KL}(q_\phi(z|x)\Vert p(z)).
\]
This is a *geometric* trade‑off: the reconstruction term pulls \(p_\theta\) toward data, while the KL regularizer keeps the latent space close to a prior.  

**Non‑obvious insight:**  
The KL term can be interpreted as an **information bottleneck**—it limits how much information about \(x\) flows into \(z\). This is not just a regularizer; it enforces *minimal sufficient statistics*. By constraining the latent capacity, we prevent overfitting and encourage clustering of semantically similar samples even without labels. Thus unsupervised learning is fundamentally an optimization of **information compression** under a probabilistic geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
