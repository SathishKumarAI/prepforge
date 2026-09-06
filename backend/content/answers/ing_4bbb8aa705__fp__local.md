---
qid: ing_4bbb8aa705__fp__local
question: How can an attacker poison training data or plant a backdoor in a model,
  and how would you catch it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 604
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:02-05:00'
sources: []
---

### From the Ground Up

A supervised learner minimises expected loss  
\[
L(\theta)=\mathbb{E}_{(x,y)\sim \mathcal D}\!\big[\ell(f_\theta(x),y)\big].
\]
Training data are a finite sample of \(\mathcal D\). An attacker can *shift* this empirical distribution in two ways:

| Attack | Mechanism | Why it works |
|--------|-----------|--------------|
| **Poisoning** | Add malicious samples \( (x^\*,y^\*) \) to the training set. | The empirical risk minimiser is a weighted sum over all points; even a tiny fraction of adversarial points can dominate gradients if they are crafted with large loss or high leverage. |
| **Back‑door** | Insert trigger patterns \(t\) into inputs and assign them a target label \(y_t\). | The model learns to associate \(t\) with \(y_t\); at inference, only the trigger activates the hidden decision boundary, leaving clean predictions untouched. |

Both rely on *distribution shift*—the training data no longer reflect \(\mathcal D\). Because learning is a convex/concave optimisation over high‑dimensional manifolds, small adversarial perturbations can steer the optimum to a **local minimum** that satisfies the attacker's constraints while remaining indistinguishable from benign behaviour on unmodified samples.

#### Detection

1. **Statistical outlier tests**  
   *Compute kernel density estimates or use one‑class SVMs on feature embeddings.* Outliers in the training set often flag poisoned samples, but back‑doors are more subtle.

2. **Gradient‑based attribution**  
   *Train a “shadow” model with the same data and compare gradients.* A sudden spike in gradient norms for certain input patterns signals a trigger.

3. **Robustness certification**  
   *Verify that perturbations bounded by \(\epsilon\) cannot change predictions* (e.g., via randomized smoothing). If a small perturbation flips the label only when a hidden pattern is present, the model likely contains a back‑door.

4. **Model‑level auditing**  
   *Apply feature importance (SHAP/Integrated Gradients) to trigger candidates.* A true back‑door will show disproportionate importance for the trigger features across many samples.

#### Non‑obvious Insight

Most defenses focus on detecting anomalous *samples*. The deeper vulnerability lies in the **learning dynamics**: poisoned points can steer the gradient flow itself. Monitoring *gradient trajectories* (e.g., via Fisher information or curvature) during training reveals whether the optimiser is being guided toward a spurious optimum—often before any outlier samples are even flagged. This dynamic view catches both poisoning and back‑door attacks that evade static sample checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
