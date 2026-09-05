---
qid: ing_5948531ae8__star__local
question: 'Explain: 1.11.1.2. GradientBoostingClassifier and GradientBoostingRegressor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 383
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:24-05:00'
sources: []
---

**Situation:**  
In my last project I was tasked with predicting customer churn for a telecom company that had a highly imbalanced dataset (only 12% churn). The baseline logistic regression model gave an AUC of 0.68, which wasn’t enough for the business.

**Task:**  
I needed to build a more accurate predictive model that could capture complex interactions without overfitting, and provide clear feature importance for stakeholders.

**Action:**  
I chose **GradientBoostingClassifier** from scikit‑learn because it handles non‑linearities well and is robust to noisy data. I set `n_estimators=300`, `learning_rate=0.05`, and used the “logloss” objective, tuning via 5‑fold cross‑validation on a stratified split. To prevent overfitting I added early stopping (`early_stopping_rounds=30`) and limited tree depth to 3. For regression tasks (e.g., predicting monthly spend), I swapped in **GradientBoostingRegressor** with the “huber” loss, which is less sensitive to outliers. I also plotted SHAP values to interpret feature contributions.

**Result:**  
The classifier’s AUC jumped from 0.68 to 0.81 on the hold‑out set, and precision at 80% recall improved by 15%. The regressor reduced RMSE by 12% compared to a baseline random forest. I learned that careful hyperparameter tuning and early stopping are critical for boosting models, especially with imbalanced data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
