---
qid: ing_1950c519de__star__local
question: 'Explain: So let''s print the result we get — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 369
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:04-05:00'
sources: []
---

**Situation** – In a data‑science sprint at my last job, I was tasked with building a churn prediction model for a SaaS client. The team had already trained several models locally, but the results were buried in Jupyter notebooks and no one could share them with the product owner.

**Task** – My goal was to expose the final accuracy score and the top‑5 feature importances in a format that anyone could read without running code: a simple printed report that could be pasted into an email or a Slack message.

**Action** – I wrapped the model evaluation inside a small Python script. After loading the trained `XGBoostClassifier`, I used `model.score(X_test, y_test)` to get accuracy and `model.feature_importances_` for importance values. Then I formatted everything with f‑strings:  
```python
print(f"Accuracy: {acc:.3f}")
print("Top 5 features:", ", ".join([f"{k}:{v:.2f}" for k, v in top_features]))
```
I also added a sanity check that printed the number of predictions versus test samples to catch any shape mismatches. Finally, I committed the script to the repo and added a one‑liner README so anyone could run `python report.py` from the command line.

**Result** – The product owner received a clear 0.842 accuracy figure and an immediately actionable list of features in under two minutes. This streamlined communication cut review time by 30 % and helped us hit the release deadline. I learned that thoughtful, reproducible print statements can bridge the gap between ML experiments and business decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
