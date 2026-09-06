---
qid: ing_d0084aa5e3__fp__local
question: 'Explain: Input data drift — What is concept drift in ML, and how to detect
  and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 428
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:48-05:00'
sources: []
---

**Concept drift** is the fundamental problem that a statistical model trained on past data fails because the *generative mechanism* of the observed variables changes over time.  
Formally, let \(P_t(Y\mid X)\) be the conditional distribution at time \(t\). A stationary ML pipeline assumes \(P_{t_1}(Y\mid X)=P_{t_2}(Y\mid X)\); drift occurs when this equality breaks. The root cause is that either the joint \(P(X,Y)\), the marginal \(P(X)\) or the labeling rule shifts due to new regimes, user behaviour, sensor degradation, etc.  
From an **information‑theoretic** angle, the Kullback–Leibler divergence \(D_{\text{KL}}(P_{t_1}\Vert P_{t_2})\) quantifies how much new data “surprises” the model; a non‑zero value signals that the expected log‑loss will increase.  
**Detection** therefore reduces to estimating this divergence or its surrogate (e.g., monitoring prediction scores, class‐balance statistics, or using hypothesis tests on feature distributions). A common practical tool is a sliding‑window *drift detector* that flags when the distribution of incoming predictions deviates beyond a control limit.  

**Remedy** hinges on **online learning**: either retrain from scratch (expensive) or update incrementally with weighted samples that emphasise recent data, effectively performing stochastic gradient descent on the current loss surface. A subtle insight often missed is that *re‑balancing* class weights can be as powerful as full retraining; by viewing drift as a change in the prior \(P(Y)\), adjusting weights restores the Bayes optimal decision boundary without touching feature distributions.

In short, concept drift is a statistical non‑stationarity detectable via divergence measures and mitigated through adaptive learning that re‑weights recent evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
