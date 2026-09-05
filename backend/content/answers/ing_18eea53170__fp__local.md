---
qid: ing_18eea53170__fp__local
question: 'Explain: How do you evaluate agents? Compare trajectory-based and outcome-based
  approaches.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 685
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:04-05:00'
sources: []
---

### Why we evaluate an agent at all

An autonomous system is a *policy* π that maps observations to actions.  
In the real world, π must maximise some long‑term objective (profit, safety, utility).  
Thus evaluation is simply a statistical test of how well π achieves that objective **under uncertainty**: given a distribution over environments \(P(\mathcal{E})\), we want an estimate of
\[
J(π)=\mathbb{E}_{\mathcal{E}\sim P}\!\left[\sum_{t=0}^{T} r_t^{π,\mathcal{E}}\right].
\]
The fundamental problem is that we can only observe a handful of trajectories; the estimator must be low‑variance and unbiased while being computationally tractable.

### Trajectory‑based evaluation

*Definition*: Sample \(N\) full episodes \(\tau_i=(o_0,a_0,\dots,o_T)\), compute return \(R_i=\sum r_t^{π}\), and estimate
\[
\hat J_{\text{traj}} = \frac1N \sum_{i=1}^N R_i.
\]

*Why it works*: It directly approximates the expectation by Monte‑Carlo sampling.  
*Limitations*: High variance when rewards are sparse or delayed; requires many trajectories to converge, especially in high‑dimensional state spaces.

### Outcome‑based evaluation

*Definition*: Define a scalar *performance metric* \(M(\tau)\) (e.g., success rate, time to goal). Estimate
\[
\hat J_{\text{out}} = \frac1N \sum_{i=1}^N M(\tau_i).
\]

*Why it works*: By collapsing the trajectory into a single outcome, we reduce dimensionality and variance.  
*Limitations*: Loses temporal structure; different trajectories with identical outcomes are treated identically, potentially masking trade‑offs (e.g., fast vs. safe).

### Deeper insight

Both methods estimate the same quantity but through different *projections*.  
- Trajectory‑based evaluation projects onto the **full reward space**, preserving all information but suffering from variance.  
- Outcome‑based evaluation projects onto a **low‑dimensional manifold** defined by the chosen metric; it is efficient but biased if the metric ignores important aspects of performance.

A principled compromise arises from *importance weighting*: estimate
\[
\hat J = \frac1N \sum_{i=1}^N w_i M(\tau_i), \quad w_i=\frac{P_{\text{true}}(\tau_i)}{P_{\text{eval}}(\tau_i)},
\]
where \(w_i\) corrects for the discrepancy between the evaluation distribution and the true environment. This bridges the two extremes, retaining temporal fidelity while controlling variance.

*Non‑obvious takeaway*: The choice of metric is not merely a convenience; it defines **which subspace of the agent’s behavior we care about**. A poorly chosen outcome metric can reward pathological policies that satisfy the metric but violate underlying safety or fairness constraints. Thus, evaluation design must be rooted in the *optimality criterion* itself rather than an ad‑hoc proxy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
