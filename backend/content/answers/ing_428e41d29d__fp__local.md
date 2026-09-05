---
qid: ing_428e41d29d__fp__local
question: 'Explain: Per-PR eval budget — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 473
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:26:23-05:00'
sources: []
---

**Per‑PR eval budget – Eval‑Gated CI/CD**

When a pull request (PR) introduces new code that could affect an AI model’s predictions, we must *evaluate* the change before merging.  
A naïve policy would run every model on every PR, but the search space is exponential: each PR can modify architecture, data pipeline, hyper‑parameters, or even the loss function. The **per‑PR eval budget** is a fixed computational quota (e.g., 10 × baseline training epochs) that we allocate to any single PR.

*Why it works:*  
1. **Bounded regret** – By limiting evaluations, we prevent runaway costs while still guaranteeing that every candidate receives at least one full “test run.”  
2. **Statistical sufficiency** – Even a small number of epochs can reveal large‑scale trends (e.g., overfitting, convergence stalls) because the loss surface is smooth for most modern optimizers.  
3. **Resource fairness** – The budget acts as a *resource‑aware* scheduler: PRs that exceed their quota are blocked until earlier ones finish, ensuring no single change monopolizes the cluster.

The Eval‑Gated CI/CD pipeline then proceeds in two stages:

1. **Gate 1 (budgeted test)** – Run the model for *k* epochs, compute validation metrics, and compare to a threshold derived from historical baselines.  
2. **Gate 2 (full training)** – Only if Gate 1 passes do we launch a full‑scale training job on the PR’s changes.

**Non‑obvious insight:**  
The *shape* of the loss surface under small‑epoch training is highly correlated with final performance. Early‑epoch gradients capture the curvature of the high‑level manifold, so a modest budget can predict catastrophic failures (e.g., mode collapse) that would otherwise be discovered only after full training. This early‑warning property turns the per‑PR eval budget from a simple cost cap into an *information‑rich* filter that anticipates downstream quality, dramatically reducing wasted compute in large AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
