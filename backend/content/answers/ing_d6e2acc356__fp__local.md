---
qid: ing_d6e2acc356__fp__local
question: 'Explain: Featured Talks — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 357
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:59-05:00'
sources: []
---

**Eugene Yan’s “Featured Talks” – why they’re essential**

At the core of every ML system is *information extraction*: we observe data \(x\) and must infer latent structure \(z\). Eugene Yan frames this as an *optimization problem* over a space of models \(\mathcal{M}\): find \(m^*\in\mathcal{M}\) that minimizes expected loss
\[
L(m)=\mathbb{E}_{(x,y)\sim P}[\ell(m(x),y)].
\]
Because the true data distribution \(P\) is unknown, we approximate it with a *posterior* over models conditioned on finite samples. Yan shows that this posterior can be viewed as a *geometric object*: a manifold whose curvature encodes model uncertainty. By projecting gradients onto this manifold (the so‑called “information geometry” trick), one obtains updates that are invariant to reparameterization and automatically respect the underlying statistical structure.

The non‑obvious insight he emphasizes is that **regularisation can be interpreted as a *prior* over this manifold’s curvature**. Rather than hand‑tuning weight decay, we shape the geometry of \(\mathcal{M}\) itself: encourage flat directions (robustness to perturbations) and penalise sharp minima (overfitting). This viewpoint unifies dropout, batch‑norm, and Bayesian priors under a single optimisation principle.

Thus Yan’s talks are not merely demos; they expose the *geometric logic* that turns raw data into reliable predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
