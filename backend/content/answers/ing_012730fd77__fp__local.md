---
qid: ing_012730fd77__fp__local
question: 'Explain: Run evaluators separately — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 375
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:48-05:00'
sources: []
---

**Why run evaluators separately?**

At the core of an evaluation pipeline is a *loss function* that maps raw model outputs \(y\) and ground‑truth labels \(t\) to a scalar score \(\ell(y,t)\).  
In practice we need several scores: BLEU, ROUGE, accuracy, safety flags, etc. Each has its own mathematical form and often distinct hyperparameters (e.g., temperature for sampling or weighting factors in a weighted sum).

If we fuse them into a single “super‑loss” \(\mathcal{L}=f(\ell_1,\dots,\ell_k)\) before any back‑propagation, we implicitly impose an *ad hoc* coupling between metrics. This destroys the **separability** property: changes in one metric can spuriously affect another because the gradient of \(f\) mixes them. The optimiser then learns a compromise that may be suboptimal for every individual objective.

Running evaluators independently preserves **orthogonality** in the loss space. Each evaluator yields an unbiased estimate of its own criterion; we can aggregate or rank results post‑hoc without corrupting any single signal. Moreover, it allows us to treat each metric as a *constraint* (e.g., “accuracy ≥ 90%”) and solve a constrained optimisation problem rather than a monolithic loss minimisation.

**Non‑obvious insight:**  
Because evaluators are separate, we can *re‑weight* them on the fly based on meta‑information (e.g., uncertainty or sample difficulty) without retraining the model. This dynamic rebalancing is impossible when metrics are fused into one static loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
