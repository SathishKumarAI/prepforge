---
qid: ing_f1027af66a__fp__local
question: 'Explain: 1.1. Requirements Notation and Conventions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 457
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:31:35-05:00'
sources: []
---

### 1.1 Requirements Notation & Conventions  
*Why it exists*

In a learning pipeline we are not merely training an algorithm; we are **solving a constrained optimisation problem** whose feasible set is defined by business, legal, and technical rules.  Without a formal language to express those constraints the optimiser will wander into infeasible or unethical regimes (e.g., violating GDPR, exceeding latency budgets).  

*Fundamental formulation*

Let \( \theta\) be model parameters, \(x,y\) data, and \(C_i(\theta,x)\le 0\) a set of inequality constraints.  The optimisation objective is
\[
\min_{\theta}\; L(\theta)=\mathbb{E}_{(x,y)}[\ell(f_\theta(x),y)] \quad \text{s.t. } C_i(\theta,x)\le 0,\;\forall i.
\]
Requirements notation encodes each \(C_i\) as a concise, unambiguous symbol (e.g., **Latency ≤ 10 ms**, **Fairness‑Parity**).  Conventions prescribe how to combine them: conjunction “∧”, disjunction “∨”, negation “¬”, and cardinality operators (“∀‑samples”, “≥ 95 % accuracy”).  

*Connection to deeper principles*

- **Optimization:** constraints become Lagrange multipliers; the notation is the *dual* representation of the feasible region.  
- **Information theory:** a fairness constraint limits mutual information between protected attributes and predictions, shaping the capacity of the model.  
- **Geometry:** each requirement defines a half‑space or manifold; the intersection is the feasible polytope.  

*Non‑obvious insight*

Most teams treat constraints as *add‑on* after training.  In fact, *encoding them at design time* turns the learning problem into a **convex–concave saddle point** (if convex) and guarantees that every local optimum satisfies the business rules—eliminating costly post‑hoc audits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
