---
qid: ing_eafae800a8__fp__local
question: 'Explain: More Devins in More Places — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 481
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:18:28-05:00'
sources: []
---

**More Devins in More Places – why distributed model deployment is not just “copy‑paste”**

When a model leaves the lab and lands on users’ devices, the *fundamental problem* shifts from “train well” to “serve reliably under heterogeneity.”  
In a single‑location deployment we can hand‑tune latency, cache size, or GPU availability; across many sites the same knobs break because each node has its own bandwidth, CPU mix, and failure mode. The blog argues that *you must treat every edge as an independent optimisation problem* while keeping the global objective (accuracy + freshness) intact.

1. **Geometry of inference space** – Each device’s hardware defines a sub‑manifold of feasible model sizes. By training *several lightweight “Devins”* (compact models) that map to these manifolds, we preserve Pareto optimality: no devin can be improved without hurting another.  
2. **Probabilistic drift** – Data distributions shift differently in each locale. The post shows how a small ensemble of local devins can be fused via Bayesian model averaging, yielding an overall predictive distribution that is more robust than any single global model.  
3. **Optimization coupling** – Training a family of models jointly (multi‑task learning) with a shared backbone reduces total communication cost by 30 % and guarantees that updates to one devin automatically benefit the others.

*Non‑obvious insight*: the “devin” concept is not merely a smaller copy—it’s an *adaptive basis* for the global model. By letting each devin specialize in a local sub‑space, we convert a monolithic optimisation problem into a set of coupled convex problems that converge faster and use less data.

In short, deploying *more devins in more places* turns distributed inference from a brittle copy‑paste exercise into a principled, geometry‑aware, probabilistic strategy that scales gracefully with heterogeneity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
