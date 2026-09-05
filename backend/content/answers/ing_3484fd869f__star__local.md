---
qid: ing_3484fd869f__star__local
question: 'Explain: 1.11.1.1.3. Sample weight support — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 278
output_tokens: 370
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:27-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with predicting churn for a telecom client whose dataset had severe class imbalance—only 12 % of customers actually churned. The model’s recall on the minority class needed to improve from 0.48 to at least 0.70 before we could deploy it in production.

**Task:**  
I had to build an ensemble pipeline that leveraged sample weights and robust boosting/forest methods in scikit‑learn 1.9.0, while keeping training time under two hours on a single machine.

**Action:**  
First, I used `class_weight='balanced'` in the `LogisticRegression` base estimator so each minority instance carried more influence during fitting. For ensembles, I constructed a **Gradient Boosting Classifier** (`GradientBoostingClassifier`) and a **Random Forest** (`RandomForestClassifier`). Both accepted sample weights via their `fit` method; I passed the same weighted vector to each. I then stacked them using `StackingClassifier`, with a lightweight `LogisticRegression` as the meta‑learner, again feeding it the weighted samples. Finally, I evaluated the stack on a hold‑out set and tuned `learning_rate` (0.05) and `n_estimators` (200) to balance bias–variance.

**Result:**  
The stacked model achieved an **AUC of 0.87** and recall of **0.73** for churners, surpassing the target by 3 % while keeping inference latency below 50 ms per request. I learned that careful weighting combined with stacking diverse learners can dramatically lift minority‑class performance without overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
