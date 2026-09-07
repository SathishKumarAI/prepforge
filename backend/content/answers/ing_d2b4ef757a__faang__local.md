---
qid: ing_d2b4ef757a__faang__local
question: What is an ensemble method? — What is the difference between Bagging and
  Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 485
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:50:21-05:00'
sources: []
---

**Clarify**  
The interview asks for two things: (1) a definition of an *ensemble method* in ML, and (2) the key distinction between the two most common ensembles—*Bagging* vs. *Boosting*. I’ll assume we’re talking about supervised learning with decision‑tree or similar base learners.

**Approach**  
I’ll first state what an ensemble is, then describe Bagging and Boosting separately, highlighting their training philosophies, how they combine predictions, and their typical strengths/weaknesses. Finally I’ll give a concise comparison table to cement the differences.

**Depth**

| Concept | Definition |
|---------|------------|
| **Ensemble method** | A technique that trains multiple base models (often weak learners) and aggregates their outputs (by voting, averaging, stacking, etc.) to produce a single prediction with lower variance or bias than any individual model. |

**Bagging (Bootstrap Aggregating)**  
* Training: Sample *with replacement* from the training set to create many bootstrap datasets; train an independent base learner on each.  
* Prediction: Aggregate predictions (majority vote for classification, mean for regression).  
* Goal: Reduce variance; works best with high‑variance learners like deep trees.

**Boosting**  
* Training: Sequentially train models where each new model focuses on the *errors* of its predecessors (e.g., AdaBoost reweights misclassified samples, Gradient Boosting fits residuals).  
* Prediction: Weighted sum of all learners’ outputs.  
* Goal: Reduce bias; converts weak learners into a strong one by learning from mistakes.

**Edge cases**  
* Bagging may under‑perform if base models are already stable (e.g., linear regression).  
* Boosting can overfit noisy data unless regularized (learning rate, tree depth limits).

**Optimize & communicate**  
I’d emphasize that Bagging is parallelizable and robust to outliers; Boosting is sequential but often yields higher accuracy at the cost of training time. I would wrap up by noting that modern libraries expose both (e.g., `RandomForest` vs. `GradientBoostingRegressor`) so choosing depends on data size, noise level, and desired bias–variance trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
