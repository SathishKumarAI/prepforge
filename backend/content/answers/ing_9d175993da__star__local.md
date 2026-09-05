---
qid: ing_9d175993da__star__local
question: 'Explain: Week 3: Classification — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 381
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:14-05:00'
sources: []
---

**Situation:**  
During my data‑science bootcamp, we were assigned a project to predict whether customers would churn for a telecom provider. The dataset had 8,000 records with 20 features (usage, demographics, plan type). Our deadline was two weeks and the instructor stressed that we must demonstrate both regression and classification techniques.

**Task:**  
I needed to build a model that accurately classified churn vs. no‑churn while also estimating the probability of churn for each customer (essentially turning a classification problem into a probabilistic output). The goal was an overall accuracy above 85 % and a ROC AUC over 0.90.

**Action:**  
I started by cleaning the data, handling missing values with median imputation, and encoding categorical variables using one‑hot encoding in Pandas. For regression I trained a logistic regression model (since it outputs probabilities) and then tuned its regularization strength via cross‑validation with Scikit‑Learn’s `LogisticRegressionCV`. I also experimented with a gradient‑boosted tree classifier (`XGBoost`) to compare performance. Feature importance from the XGBoost model guided me to drop highly correlated features, improving both speed and interpretability. Finally, I plotted precision–recall curves to select an operating threshold that balanced false positives and negatives.

**Result:**  
The tuned logistic regression achieved 87 % accuracy and a ROC AUC of 0.92 on the test set, while XGBoost reached 90 % accuracy but was slower to train. By converting the classification output into churn probabilities, we could provide the client with a risk score for each customer. I learned that proper preprocessing and hyperparameter tuning are crucial, and that logistic regression remains surprisingly powerful when paired with thoughtful feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
