---
qid: ing_121015b7f0__fp__local
question: 'Explain: somebody comes in between and changes it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 427
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:44:14-05:00'
sources: []
---

### Why an “intermediary” can wreck a ML system

At its core, supervised learning solves the optimization problem  

\[
\min_{w}\;\mathbb{E}_{(x,y)\sim P_{\text{train}}}[L(f_w(x),y)],
\]

where \(f_w\) is a parametrized function and \(P_{\text{train}}\) is the empirical data distribution.  
The model implicitly learns a decision boundary that separates classes in feature space.

When an *intermediary*—an attacker or even a benign user—injects a crafted input \(\tilde{x}\), it exploits the fact that the decision surface is locally linear (or at least smooth) around most points. Small perturbations \(\delta\) such that \(\|\delta\|_p\ll1\) can move \(\tilde{x}=x+\delta\) across the boundary, flipping the predicted label while remaining imperceptible to humans. This is an **adversarial attack**: it turns the optimization objective into a *dual* one—maximize loss under a norm constraint.

The deeper principle is that high‑dimensional decision surfaces have exponentially many directions; a single well‑chosen direction can dominate the model’s prediction.  
A non‑obvious insight: **robustness depends not on the absolute magnitude of weights but on their alignment with data geometry**. If gradients are aligned with directions where data density is low, tiny perturbations suffice to fool the model—hence adversarial training that penalizes such alignments improves generalization.

In short, an intermediary changes the input distribution \(P_{\text{train}}\) on‑the‑fly, forcing the learned decision surface to misclassify while remaining within a tight norm ball—a clear violation of the original optimization assumption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
