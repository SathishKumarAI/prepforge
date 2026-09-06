---
qid: ing_d2e15cc76a__fp__local
question: 'Explain: Why You Need Monitoring — Monitoring Machine Learning Models in
  Production'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 419
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:25-05:00'
sources: []
---

When an ML model is put into production it becomes a **probabilistic predictor** that relies on the joint distribution \(P_{\text{data}}(X,Y)\) seen during training.  
Training is essentially a *maximum‑likelihood* or *risk minimisation* problem: we find parameters \(\theta\) that minimise expected loss under that particular distribution.  
In production, however, the world rarely stays frozen.  

1. **Distribution shift** – the input \(X_t\) at time \(t\) may come from a different distribution than training data.  
2. **Concept drift** – the relationship between \(X\) and \(Y\) itself can evolve (e.g., user behaviour changes).  
3. **Data quality decay** – sensors fail, APIs change, feature pipelines corrupt.

Because the model’s loss is a *functional* of the input distribution, any shift directly inflates expected error. Monitoring therefore must detect *changes in the data generating process*, not just look at accuracy metrics that lag behind and can be misleading (a classifier may stay 95 % accurate while its calibration collapses).

A non‑obvious insight: **monitoring should focus on the *information* loss between current and training distributions**. By estimating Kullback–Leibler or total variation divergence of feature marginals, one obtains a quantitative “distance to drift” that triggers retraining before performance degrades perceptibly.

In short, monitoring is not optional—it’s the mechanism that keeps the optimisation problem solved in training applicable to the ever‑changing real world.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
