---
qid: ing_50c36f417d__fp__local
question: 'Explain: Return Policy — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 361
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:56:53-05:00'
sources: []
---

**Return Policy – Why a “no‑questions‑asked” rule is the right choice for data‑intensive systems**

The *fundamental problem* that a return (or rollback) policy solves in large‑scale ML pipelines is **stochastic drift**: every training run, deployment, or experiment can change downstream statistics in unpredictable ways. If an update causes a subtle bias shift or a performance drop, the system must recover quickly without costly manual triage.

Why must the policy be *automatic*?  
- **Optimization theory** tells us that any delay in reverting a suboptimal model inflates cumulative loss. A quick rollback keeps the expected regret low.  
- **Information‑theoretic limits** show that detecting “bad” models requires observing enough samples; waiting for a full evaluation period wastes data that could have been used to refine the next iteration.

The *design principle* is therefore: treat every model release as an experiment with a *known prior* (the last stable version). If the posterior evidence after a short window favours the new model, keep it; otherwise revert. This mirrors Bayesian sequential testing and ensures that the system always operates in a **high‑confidence regime**.

**Non‑obvious insight:**  
Most people treat rollbacks as a *failure* signal, but in data‑intensive ML they are a *feature*. Each rollback is an implicit “negative” data point that the scheduler can use to adjust exploration–exploitation ratios. By logging the conditions under which reverts occur, the system learns *when* new models are likely to succeed, turning rollbacks into valuable meta‑information rather than mere safety nets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
