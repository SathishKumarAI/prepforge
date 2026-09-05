---
qid: ing_036c4ac6dd__fp__local
question: 'Explain: Engineering processes need to be rebuilt for agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 391
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:12:12-05:00'
sources: []
---

**Why the engineering life‑cycle must be re‑thought for ML agents**

The fundamental problem is *uncertainty in behavior*.  
In classical software, a function \(f(x)\) maps inputs deterministically to outputs; once verified, it behaves identically on every run. An ML agent implements an approximate mapping \(\hat{f}_\theta(x)\) learned from data \(D=\{(x_i,y_i)\}\). The parameters \(\theta\) are not fixed by design but by a stochastic training process that depends on random initialization, batch order, and the very dataset used. Consequently, two identical deployments can exhibit divergent policies.

To guarantee safety and predictability we must **treat data as first‑class code**: version every training set, document preprocessing pipelines, and capture the exact random seeds used during training. The engineering process therefore expands from *build → test → release* to *train → validate probabilistically → deploy with uncertainty estimates*.  
This shift is grounded in Bayesian decision theory: we seek a posterior over \(\theta\) and propagate epistemic uncertainty through inference, which classical deterministic pipelines ignore.

A non‑obvious insight is that **model drift is not only a data problem but a software‑engineering one**. Continuous integration must run *re‑training* as part of the pipeline, not just unit tests, because the “function” itself evolves with every new data batch. This turns data ingestion into a continuous build step, blurring the line between code and dataset but providing the only rigorous way to keep ML agents trustworthy at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
