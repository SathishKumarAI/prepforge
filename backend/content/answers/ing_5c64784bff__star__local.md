---
qid: ing_5c64784bff__star__local
question: 'Explain: Now back to our program we can — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 303
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:09-05:00'
sources: []
---

**Situation:**  
In my third semester I was part of a capstone team tasked with predicting student dropout rates for an online university. The dataset had 12,000 records but only 8% labeled as dropouts, and the raw features were noisy time‑series logs from the LMS.

**Task:**  
I needed to build a reliable binary classifier that could flag at-risk students before their first semester ends, aiming for >80% precision so we wouldn’t overwhelm support staff with false positives.

**Action:**  
First, I engineered lag features and applied SMOTE to balance classes. I then compared several models—logistic regression, random forest, and a lightweight XGBoost—using cross‑validation. To avoid overfitting, I used early stopping on XGBoost and tuned `max_depth` and `learning_rate`. I wrapped the pipeline in scikit‑learn’s `Pipeline` to keep preprocessing consistent. Finally, I deployed the model as an AWS Lambda function that ran nightly, sending alerts via SNS.

**Result:**  
The final XGBoost model achieved 82% precision and 78% recall on the holdout set, reducing our support ticket volume by 35% in the first month of deployment. I learned how to balance bias‑variance trade‑offs in imbalanced data and the importance of automating feature pipelines for production reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
