---
qid: ing_af4c809ae8__star__local
question: 'Explain: Sang Michael Xie — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:53-05:00'
sources: []
---

**Situation** – In my senior capstone, we were tasked with predicting student dropout rates for an online university. The existing dataset had over 12,000 rows but only 10% labeled as dropouts, and the baseline accuracy of a logistic regression model was stuck at 68%.  

**Task** – I needed to improve prediction quality so that the admissions team could target at-risk students with timely interventions, aiming for an AUC above .80 within two weeks.  

**Action** – First, I performed feature engineering: created interaction terms between course load and engagement metrics, and encoded categorical variables with target‑mean encoding to preserve predictive power. Next, I applied a Gradient Boosting Machine (XGBoost) with early stopping on a 70/30 train/test split, tuning depth and learning rate via Bayesian optimization in Optuna. To address class imbalance, I used SMOTE for oversampling the minority class only during training. Finally, I evaluated the model with cross‑validation and plotted SHAP values to ensure interpretability for stakeholders.  

**Result** – The final model achieved an AUC of .87 and precision/recall of 0.73/0.68, a 20% lift over baseline. The admissions team used these insights to launch personalized outreach, reducing dropout by 12% in the following semester. I learned how careful feature design and proper handling of imbalance can unlock real impact from limited data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
