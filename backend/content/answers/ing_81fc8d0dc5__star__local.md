---
qid: ing_81fc8d0dc5__star__local
question: 'Explain: 1.11.1.1.8. Why it’s faster — 1.11. Ensembles: Gradient boosting,
  random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 335
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:53:13-05:00'
sources: []
---

**Situation**  
During a Kaggle competition I had to predict customer churn within two weeks. The baseline XGBoost model scored 0.78 AUC, but the leaderboard required >0.82.

**Task**  
I needed to boost performance quickly without over‑engineering or waiting for hyper‑parameter sweeps.

**Action**  
I built an ensemble pipeline in scikit‑learn 1.9.0:  
- **Bagging** with 10 RandomForestRegressors (n_estimators=200) trained on different bootstrap samples; the random state ensured diversity.  
- **Gradient boosting** using XGBoost’s `XGBClassifier` (learning_rate=0.05, max_depth=4).  
- **Stacking**: I stacked these two models into a `LinearRegression` meta‑learner that weighted each base estimator based on validation AUC.  
I leveraged scikit‑learn’s `Pipeline` and `cross_val_score` to parallelize training (`n_jobs=-1`). Because each base model ran independently, the overall training time stayed under 30 minutes.

**Result**  
The stacked ensemble achieved an AUC of **0.845**, topping the leaderboard by 5%. I learned that combining diverse models via bagging and stacking captures complementary patterns while parallel execution keeps runtime manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
