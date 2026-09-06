---
qid: vq_c877f0a919__faang__local
question: How do you know the Machine Learning Algorithm you should use?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 462
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:17-05:00'
sources: []
---

**Clarify**

You’re asked how to pick a machine‑learning algorithm for a given problem.  
Assumptions I’d confirm:  
1. What is the task (classification, regression, clustering, etc.)?  
2. Size and quality of data (sample size, feature dimensionality, missing values).  
3. Performance criteria (accuracy, latency, interpretability, resource limits).  
4. Deployment constraints (online vs batch, model size, inference speed).

**Approach**

1. **Define the objective & constraints.**  
2. **Curate a baseline set of algorithms** that match the task and data scale.  
3. **Prototype & evaluate** each using cross‑validation or hold‑out sets.  
4. **Compare metrics + operational cost** (training time, inference latency).  
5. **Select the best trade‑off** and iterate on hyper‑parameters.

**Depth**

- *Classification*: start with logistic regression → tree‑based models (Random Forest, XGBoost) → deep nets if enough data.  
- *Regression*: linear regression → gradient boosting → neural nets for high‑dimensional patterns.  
- *Clustering*: k‑means → DBSCAN or hierarchical methods depending on density/scale.  

Use **cross‑validation** to estimate generalization error; compute **runtime & memory footprints**. Complexity: training time \(O(n \cdot d)\) for linear models, \(O(n \log n)\) for tree ensembles, exponential for deep nets but parallelizable.

**Edge Cases**

- Extremely small data → risk of overfitting; prefer simple models or regularization.  
- Highly imbalanced classes → use balanced loss or resampling.  
- Real‑time inference → limit to lightweight models (e.g., linear, shallow trees).  

**Optimize & Communicate**

Iterate by refining feature engineering and hyper‑parameter tuning (grid/ Bayesian search). Document results in a leaderboard style: metric vs cost. Explain the trade‑offs clearly—why a slightly lower accuracy model may win due to latency or interpretability needs. This structured workflow demonstrates systematic decision‑making, a key FAANG signal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
