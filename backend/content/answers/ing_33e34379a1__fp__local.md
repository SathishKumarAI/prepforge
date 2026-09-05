---
qid: ing_33e34379a1__fp__local
question: 'Explain: Week 1: Overview of the ML Lifecycle and Deployment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 403
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:55:12-05:00'
sources: []
---

## Why we need a *lifecycle* for ML

The core problem in machine learning is **predicting future data** from past observations.  
To guarantee that a model does what it promises, every stage of its life must be
treated as an optimization step:

1. **Data acquisition → feature engineering → training**  
   These are the *design variables* that shape the hypothesis space.  
2. **Evaluation → validation → testing**  
   Here we estimate the *generalisation error*, i.e., how well the optimisation
   generalised beyond the training set.
3. **Deployment → monitoring → retraining**  
   The environment changes, so the model must adapt; otherwise the optimization
   objective is no longer satisfied.

Treating ML as a pipeline aligns with the principle of *separation of concerns* in software engineering and the statistical notion that data and code are distinct entities whose interactions must be managed explicitly.

## Deployment: the final optimisation problem

Deploying an ML model turns into a **constrained optimisation**:

- **Objective:** minimise expected loss on new data.
- **Constraints:** latency, memory footprint, regulatory compliance, drift tolerance.

Thus deployment is not merely “putting code in production”; it’s solving for the best trade‑off between predictive performance and operational constraints.  

### Non‑obvious insight  
Most people overlook that *monitoring* is itself an optimisation loop: you must decide which metrics to track (e.g., concept drift vs. fairness drift) so that retraining decisions are triggered only when the expected benefit outweighs the cost of re‑training. In practice, this turns into a **bandit problem** where each retrain action has uncertain payoff—something rarely considered in introductory courses.

By framing the ML lifecycle as a sequence of optimisation problems linked by constraints, we see why robust deployment strategies are essential for any production‑grade system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
