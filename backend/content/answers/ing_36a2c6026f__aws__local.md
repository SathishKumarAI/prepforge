---
qid: ing_36a2c6026f__aws__local
question: 'Explain: 1.1.3.2.1. Using cross-validation — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 538
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:07-05:00'
sources: []
---

**Behavioral (STAR – Customer Obsession & Ownership)**  
*Situation:* I led a fraud‑detection team that built a logistic‑regression model on millions of transaction records. *Task:* Ensure the model generalised beyond our training set without leaking future data. *Action:* Implemented k‑fold cross‑validation (k=5) using `sklearn.model_selection.KFold` and wrapped it in a custom scorer that weighted false negatives heavily, reflecting customer risk. I automated the pipeline with Airflow, logged every fold’s ROC‑AUC to CloudWatch, and set alerts if performance drifted >2 %. *Result:* The model achieved an average AUC of **0.97** across folds—up 5 % over a single train/test split—and maintained this margin in production for six months, reducing false positives by **30 %** while keeping customer churn negligible.  

**Technical (Dive Deep & Deliver Results)**  
Cross‑validation partitions data into *k* disjoint subsets; each fold trains on *(k–1)* parts and validates on the held‑out part. In scikit‑learn’s linear models (`LogisticRegression`, `LinearRegression`), you typically:

```python
from sklearn.model_selection import KFold, cross_val_score
kf = KFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(LogisticRegression(), X, y, cv=kf,
                         scoring='roc_auc')
```

*Why it matters:*  
- **Bias–variance trade‑off**: Averaging over folds reduces variance compared to a single split.  
- **Hyperparameter tuning**: Use `GridSearchCV` with the same k‑fold logic to avoid data leakage.  
- **Scalability**: For 10M rows, use `shuffle=True` and `n_jobs=-1` to parallelise across CPU cores; for cloud deployment, run on an EMR cluster or SageMaker training jobs.  

*Trade‑offs:*  
- More folds → higher computational cost but better estimate.  
- Shuffling is essential when data are temporally ordered; otherwise, you risk optimistic bias.  

**Bar‑raiser focus:** Demonstrated ownership of the entire ML lifecycle, deep dive into cross‑validation mechanics, quantified business impact (30 % churn reduction), and lessons learned—e.g., adding a temporal split to guard against concept drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
