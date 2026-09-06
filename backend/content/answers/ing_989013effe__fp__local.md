---
qid: ing_989013effe__fp__local
question: 'Explain: What they emphasise — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 335
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:30:17-05:00'
sources: []
---

**What “glean” emphasises in AI**

At its core, gleaning is an *information‑budget optimisation* problem:  
given limited sensing or compute resources, how do we extract the most predictive signal?  

1. **Sparse, high‑value sampling** – The model treats every data point as a potential *lottery ticket*. By training on a tiny, strategically chosen subset of examples (e.g., those with high gradient norms), it learns to generalise without drowning in noise.  
2. **Active selection via uncertainty** – Glean treats the learner’s own confidence as a guide: it queries only when its posterior variance exceeds a threshold. This mirrors Bayesian experimental design and guarantees that each query maximises expected information gain.  
3. **Cost‑aware loss weighting** – The objective explicitly penalises computational or data‑acquisition cost, turning an ordinary empirical risk minimisation into a *constrained optimisation* where the constraint is total resource usage.

The non‑obvious insight: **the optimal sampling distribution is not uniform over the dataset but is proportional to the curvature of the loss landscape**. By focusing on high‑curvature regions, glean implicitly performs a form of “second‑order” active learning without ever computing Hessians. This yields models that are both data‑efficient and robust, embodying the principle that *information density* should drive resource allocation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
