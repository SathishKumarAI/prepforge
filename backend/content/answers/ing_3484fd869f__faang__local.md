---
qid: ing_3484fd869f__faang__local
question: 'Explain: 1.11.1.1.3. Sample weight support — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 555
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:25-05:00'
sources: []
---

**Clarify**  
The question asks for an overview of *sample‑weight support* in scikit‑learn’s ensemble modules (GradientBoosting, RandomForest, Bagging, VotingClassifier, Stacking) as described in the 1.9.0 docs. I’ll assume the audience knows basic ensemble concepts and wants to know where sample weights are accepted and how they influence training.

**Approach**  
I’ll first state which estimators accept `sample_weight`. Then describe how each algorithm uses those weights, highlighting any differences or caveats. Finally, I’ll note any limitations (e.g., only in fit, not predict).

**Depth**

| Estimator | Weight support | How it’s used |
|-----------|----------------|---------------|
| **GradientBoostingClassifier/Regressor** | Yes (`sample_weight` in `fit`) | Weights are incorporated into the loss function; each residual is weighted when fitting base learners. |
| **RandomForestClassifier/Regressor** | Yes (`class_weight` *and* `sample_weight` in `fit`) | `sample_weight` scales leaf node impurity calculations and splits, effectively giving more influence to selected samples during tree growth. |
| **BaggingClassifier/Regressor** | No direct weight argument; can use `sample_weight` via base estimator’s `fit`. | Only if the underlying base learner supports weights (e.g., DecisionTree). |
| **VotingClassifier / VotingRegressor** | No – weights are for *voting*, not training. |
| **StackingClassifier / Regressor** | No direct support; you can pass weighted samples to each base estimator individually, but stacking’s `fit` ignores a global `sample_weight`. |

*Key points:*  
- Weights must be passed during `fit`; they are ignored in `predict`.  
- For tree‑based models, weights affect impurity calculations and split selection.  
- Gradient boosting re‑weights residuals each iteration.

**Edge cases**  
- Passing zero or negative weights causes errors (e.g., “All sample weights are zero”).  
- Some base estimators may silently ignore the weight argument if not implemented.  
- In stacking, a global `sample_weight` cannot be used; you’d need to re‑train each base model separately.

**Optimize & communicate**  
I’d emphasize that for most ensemble tasks, using `class_weight` (for imbalance) is simpler than manual sample weights. If fine‑grained control is needed, ensure the chosen estimator explicitly supports it and test with synthetic data where certain samples are heavily weighted to confirm expected behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
