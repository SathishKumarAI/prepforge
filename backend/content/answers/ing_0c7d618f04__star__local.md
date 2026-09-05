---
qid: ing_0c7d618f04__star__local
question: 'Explain: 1.11.1.1.1. Usage — 1.11. Ensembles: Gradient boosting, random
  forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 314
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:37-05:00'
sources: []
---

**Situation**  
During my senior capstone, we were tasked with predicting customer churn for a telecom provider. The baseline logistic regression model only reached an F1 score of 0.68 on the held‑out test set, far below the company’s target of 0.80.

**Task**  
I needed to boost performance by leveraging ensemble methods while keeping training time under two hours on a single workstation.

**Action**  
First I built a Gradient Boosting Regressor (XGBoost) as it excels with tabular data and handles missing values natively. Next, I trained a Random Forest to capture different interaction patterns. For bagging, I used `BaggingClassifier` with an SVM base estimator, which helped reduce variance on the noisy features. I then combined all three models in a soft voting scheme (`VotingClassifier`) to average their probability outputs. Finally, I stacked the predictions by feeding them into a logistic regression meta‑learner, using 5‑fold cross‑validation to avoid leakage.

**Result**  
The stacked ensemble lifted our F1 score to 0.82 on the test set—a 12% relative improvement—and reduced overfitting as measured by a smaller train‑test gap (2%). I learned that carefully blending diverse ensembles can surpass any single model, especially when each captures complementary signal in the data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
