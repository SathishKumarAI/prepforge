---
qid: ing_e67d360390__fp__local
question: 'Explain: Requirements Clarification — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 521
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:09:01-05:00'
sources: []
---

**Requirements Clarification – the first optimisation step**

When you sit down with a hiring manager to sketch an ML system, treat the conversation as a *constraint‑optimization* problem: you have a set of business goals (latency ≤ 10 ms, accuracy ≥ 0.92, cost ≤ $1k/day) and an infinite design space. The first step is to **reduce that search space by turning vague “requirements” into precise constraints**.

1. **Ask for the objective function.**  
   Is revenue maximised? User engagement? Fairness? Knowing the scalar you’ll optimise guides every later decision—e.g., a cost‑sensitive model will favour simpler algorithms, while an accuracy‑driven one may tolerate more compute.

2. **Quantify each metric.**  
   “Fast” means < 10 ms? “Accurate” is ROC‑AUC > 0.90? If the interviewer says “low latency,” request a target distribution or percentile (95th). This converts intuition into a measurable constraint you can plug into a cost model.

3. **Uncover hidden dependencies.**  
   Often constraints are coupled: higher accuracy may require more data, which in turn increases storage and compute. Ask whether data volume is fixed or growing, and if the model will be retrained daily. The interplay of these factors determines the feasibility of your architecture.

4. **Identify trade‑off levers.**  
   For every constraint ask: *What can we relax?* If latency is critical but accuracy can drop a bit, you might use quantised weights or an early‑exit network. Knowing which levers are available turns the design into a multi‑objective optimisation problem.

**Non‑obvious insight:** *The most valuable requirement is often the one that is least obvious—how the system will be monitored and updated.* A model can satisfy all static metrics, yet if it drifts over time you’ll waste resources on retraining. Clarifying monitoring cadence, drift thresholds, and rollback procedures early turns a “nice‑to‑have” into a hard constraint that shapes your data pipeline, deployment strategy, and even the choice of model family.

By systematically converting ambiguous language into explicit, measurable constraints, you not only demonstrate deep understanding but also set up a clean optimisation framework that will guide every subsequent design decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
