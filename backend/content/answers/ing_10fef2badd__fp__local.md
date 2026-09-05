---
qid: ing_10fef2badd__fp__local
question: 'Explain: Requirements & success metrics — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 495
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:54-05:00'
sources: []
---

### From Problem to Metrics: Why Requirements Must Be *Objective‑Driven*

When you ask an AI to solve a real‑world task (e.g., diagnosing disease, translating text), the **fundamental problem** is to map inputs \(x\) to outputs \(y\) with minimal expected loss  
\[
L = \mathbb{E}_{(x,y)\sim P_{\text{data}}}\!\big[\ell(f_\theta(x),y)\big].
\]
This expectation can only be estimated if you first **define what “good” means**—the *requirements*. They are the constraints that turn an unconstrained minimization into a *constrained optimization* problem. For instance, a medical system must satisfy safety (false‑negative rate < 5 %) and fairness (error rates equal across demographics). Without such constraints the optimizer could exploit loopholes in the data distribution.

Once requirements are set, you need **success metrics** that translate those constraints into *quantifiable targets*. These metrics become the objective function’s penalty terms:
\[
\min_\theta \; L + \lambda_1\,\mathbf{1}\{\text{FalseNegativeRate} > 0.05\}
+ \lambda_2\,|\text{ErrorDiff}_{A,B}| .
\]
Thus, metrics are not arbitrary; they encode the *Lagrange multipliers* that enforce your problem’s geometry.

#### Non‑obvious Insight
Most practitioners treat “accuracy” as a single number, but **accuracy is a composite of multiple local loss landscapes**. A model can achieve high overall accuracy by excelling on frequent classes while neglecting rare ones. The *success metric* must therefore be decomposed into *task‑specific sub‑metrics* (e.g., per‑class recall) and weighted according to the *importance sampling* that reflects real‑world costs. Ignoring this leads to a model that optimizes a surrogate objective that is mathematically equivalent but practically useless.

In short, requirements → constrained optimization; success metrics → penalty terms that faithfully reflect those constraints. This chain guarantees that the AI system not only converges mathematically but also delivers the intended practical value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
