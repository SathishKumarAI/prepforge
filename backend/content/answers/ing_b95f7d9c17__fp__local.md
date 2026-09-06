---
qid: ing_b95f7d9c17__fp__local
question: 'Explain: Microsoft Custom Problems (2025-2026) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 472
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:38:12-05:00'
sources: []
---

**Why “Custom Problems” matter**

In a production‑grade ML system the *problem* is not an abstract loss function but a **constraint–objective pair** that must be satisfied by every prediction.  
The objective is to maximize expected reward (accuracy, AUC, revenue), while constraints encode business rules (budget, latency, fairness).  
Mathematically this is a constrained optimization problem:  

\[
\max_{\theta}\; \mathbb{E}_{(x,y)\sim D}[L(y,f_\theta(x))]\quad
\text{s.t.}\;\mathbb{E}_{x\sim D}[C(f_\theta(x),x)]\leq b .
\]

In 2025‑26 Microsoft’s “Custom Problems” interview questions probe how a candidate turns **real‑world constraints** into such a formalism and then solves it with scalable algorithms.  

**Key insight people miss**

When the constraint is *data‑dependent* (e.g., “no more than 10 % of users receive an aggressive offer”), the Lagrange multiplier becomes a *function* of the input, not a scalar.  
This turns the dual problem into **functional programming**: you must learn a multiplier \( \lambda(x) \) jointly with the model.  
The trick is to parameterize \( \lambda(\cdot) \) with a small neural net and enforce the constraint via an augmented Lagrangian.  
Thus, every prediction carries its own penalty weight, automatically respecting the budget without post‑hoc clipping or greedy heuristics.  

**Why this works**

Because the KKT conditions still hold pointwise: for each \(x\), the optimal solution satisfies  

\[
\nabla_\theta L + \lambda(x)\nabla_\theta C = 0,
\]

so learning \( \lambda(\cdot) \) aligns the gradient of the objective with the local constraint.  
This yields *globally* feasible solutions while preserving statistical efficiency, a principle that underpins most recent FAANG ML interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
