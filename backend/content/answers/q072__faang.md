---
qid: q072
question: "What is Maximum Likelihood Estimation (MLE)?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm the interviewer wants the concept plus how it's used to fit models, and that we assume a parametric family with parameters θ and i.i.d. observations.

**Approach** — Define the likelihood, state the objective, then connect it to familiar models.

**Depth** — MLE chooses the parameters θ that make the observed data most probable under the assumed model. The likelihood is `L(θ) = ∏ P(xᵢ | θ)`. We maximize the **log-likelihood** `∑ log P(xᵢ | θ)` — a monotonic transform that turns products into sums and is numerically stable. We solve by setting the derivative to zero or via gradient-based optimization. Concretely: fitting a Gaussian gives the sample mean and variance; logistic regression maximizes the Bernoulli log-likelihood, and minimizing MSE in linear regression is MLE under Gaussian noise. So MLE underlies much of supervised learning.

**Edge cases** — MLE can overfit small samples and gives degenerate estimates (e.g., zero variance) at extremes; regularization or a prior (MAP/Bayesian) helps. It assumes the model family is correct; misspecification biases estimates. Likelihoods can be multimodal.

**Optimize & communicate** — Use log-likelihood for stability, add regularization to control variance, and check convergence. Narrate: "Minimizing cross-entropy or MSE is just MLE under a chosen noise model" — linking the abstraction to everyday loss functions is the signal.
