---
qid: ing_0acd8dfebc__fp__local
question: 'Explain: 1.1. Requirements Notation and Conventions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 572
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:28:25-05:00'
sources: []
---

## 1.1 Requirements Notation & Conventions

At its core, a learning system is an **optimization problem**: choose parameters θ that minimize a loss \(L(y,\hat y_\theta)\) over data \((x,y)\).  
The *requirements* are the constraints that this optimization must satisfy—accuracy, latency, fairness, interpretability.  

### Why a formal notation?

1. **Unambiguous specification** of what “good enough” means for different stakeholders (engineers, regulators, users).  
2. It turns qualitative goals into **mathematical objectives or constraints** that can be embedded in the training objective or verified post‑hoc.  
3. Enables *compositional reasoning*: a complex system is a composition of modules, each with its own requirement; formal notation lets us reason about interactions (e.g., a latency bound on one module propagates to the whole pipeline).

### Typical conventions

| Symbol | Meaning | Example |
|--------|---------|---------|
| \(R_{\text{acc}}\) | Accuracy requirement | \(R_{\text{acc}} \ge 0.95\) |
| \(C_{\text{lat}}\) | Latency budget (ms) | \(C_{\text{lat}} \le 10\) |
| \(F_{\text{fair}}\) | Fairness metric bound | \(F_{\text{fair}} \le 0.05\) |
| \(\mathcal{L}\) | Loss function | cross‑entropy |
| \(\theta\) | Model parameters | weights of a neural net |

Constraints are typically expressed as inequalities:  
\[
R_{\text{acc}}\bigl(\hat y_\theta, y\bigr)\;\geq\; 0.95,\qquad
C_{\text{lat}}(\theta)\;\leq\;10\,\text{ms}.
\]

### Non‑obvious insight

*Requirements themselves can be **learned**.*  
Instead of hard‑coding a fairness bound, one can introduce a *penalty term* \( \lambda F_{\text{fair}}(\theta) \) into the loss and let the optimizer discover an optimal trade‑off. This turns a brittle “must satisfy” constraint into a flexible regularizer that adapts to data distribution shifts—exactly what happens when we replace hard constraints with soft ones in constrained optimization.

In short, requirements notation translates human intent into mathematical language so that the learning algorithm can *reason* about them as part of its objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
