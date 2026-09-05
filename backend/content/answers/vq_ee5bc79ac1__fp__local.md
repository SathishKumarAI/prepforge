---
qid: vq_ee5bc79ac1__fp__local
question: Define Ensemble Learning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 343
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:57-05:00'
sources: []
---

**Ensemble learning** starts from the *bias–variance trade‑off* that governs any statistical predictor: a single model either overfits (high variance) or underfits (high bias). The fundamental idea is to create several *diverse* base learners, each trained on slightly different data or with distinct inductive biases, and then combine their predictions.  

Why must this help?  
- **Variance reduction**: Averaging independent estimators makes the noise cancel out; mathematically, Var(ȳ) = (1/K²)∑Var(yi)+… → 0 as K increases if errors are uncorrelated.  
- **Bias mitigation**: If each base learner captures a different facet of the signal, their weighted sum can approximate a richer function than any single model.  

Geometrically, each learner carves its own decision boundary; the ensemble’s boundary is an *ensemble average* that smooths irregularities, akin to kernel smoothing but in hypothesis space. Probabilistically, we view each learner as a random variable; the ensemble aggregates their posterior distributions, improving calibration.

**Non‑obvious insight:** Diversity is not merely “different”—it must be *uncorrelated errors*. A homogeneous set of strong learners can still amplify systematic mistakes. Techniques like bagging (bootstrap resampling) or random feature subspacing deliberately decorrelate predictions to maximize the variance‑reduction benefit, turning a collection of weak models into a robust predictor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
