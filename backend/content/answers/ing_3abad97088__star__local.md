---
qid: ing_3abad97088__star__local
question: 'Explain: 1.11.1.1.6. Interaction constraints — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 390
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:11-05:00'
sources: []
---

**Situation** – In a recent fraud‑detection project for a fintech client, our initial logistic regression model hit an AUC of 0.82, but the business required at least 0.88 to justify deployment. The data set was highly imbalanced (1% fraud) and contained numerous correlated categorical features.

**Task** – I needed to boost predictive performance while keeping inference latency under 50 ms per transaction and ensuring model interpretability for compliance audits.

**Action** – First, I applied interaction constraints in XGBoost via the `interaction_constraints` parameter to forbid combinations of features that were known to be legally sensitive (e.g., age × gender). This kept the boosted trees compliant. Then I built an ensemble:  
1. **Bagging** with 10 RandomForest classifiers (`n_estimators=200`) to reduce variance on noisy signals.  
2. **Gradient boosting** using LightGBM as a second base learner, tuned for minimal leaf size (3) and learning rate (0.05).  
3. A **soft voting** meta‑model combined the two ensembles’ probability outputs with weights 0.6:0.4.  
Finally, I stacked a simple logistic regression on top of the voting predictions to capture any remaining linear patterns.

**Result** – The stacked ensemble achieved an AUC of 0.91 on the hold‑out set and maintained a mean inference time of 48 ms per sample. Deployment reduced false positives by 30% compared to the baseline, and the interaction constraints satisfied regulatory requirements. I learned that carefully managing feature interactions can prevent legal pitfalls while still leveraging powerful tree ensembles for complex, high‑dimensional data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
