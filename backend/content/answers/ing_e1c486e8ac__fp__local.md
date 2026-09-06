---
qid: ing_e1c486e8ac__fp__local
question: 'Explain: Devin can now Manage Devins — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 364
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:59:51-05:00'
sources: []
---

**Why “Devin can now manage Devins” is a logical next step**

At its core, software development is an *optimization* problem: we want to produce high‑quality code in minimal time while keeping the team’s cognitive load low.  
A *developer* (Dev) is a constrained resource whose skill set changes over time; a *“Devin”* is simply a trained model that predicts how a given developer will perform on a task, based on past commits, issue resolutions, and learning curves.

When we write “Devin can now manage Devins,” we’re saying the same model that forecasts individual performance is being used to orchestrate the whole team.  
Formally:

1. **Predictive layer**: `P(task | dev)` gives the probability a developer will finish a task within deadline with acceptable quality.
2. **Allocation layer**: We solve `max Σ P(task_i | dev_j)` subject to constraints (skill coverage, work‑load balance). This is a linear assignment problem solvable in polynomial time.
3. **Feedback loop**: After completion, the observed outcome updates the priors of `P`, closing the Bayesian cycle.

The *non‑obvious insight* is that managing Devins is essentially *meta‑learning*: we’re not just assigning tasks; we’re continually refining a model that itself learns how to assign tasks better. This turns team management into an online learning problem, guaranteeing asymptotic optimality as more data accrue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
