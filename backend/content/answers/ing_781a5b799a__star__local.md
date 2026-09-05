---
qid: ing_781a5b799a__star__local
question: 'Explain: Diagnostic Questions Interviewers Actually Ask'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 370
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:18-05:00'
sources: []
---

**Situation** – In my last role I was asked to optimize a churn prediction model for a telecom client whose monthly retention rate had slipped from 92 % to 88 %. The interview panel wanted to see how I’d diagnose the issue before tweaking features or algorithms.

**Task** – I needed to identify whether the drop stemmed from data drift, feature mis‑specification, or model overfitting, and then propose a corrective plan that would lift retention back above 90 % within two weeks.

**Action** – First I performed an EDA with pandas and seaborn: plotted time series of key predictors (usage, payment delay) against churn labels to spot drift. Then I ran a SHAP summary plot on the current XGBoost model to see which features were contributing most to misclassifications. The SHAP analysis revealed that “monthly data cap” had become less predictive after the company lifted its plan limits. I retrained the model with updated feature engineering (log‑transformed usage, interaction terms) and added a time‑series component using Prophet for seasonal effects. Finally, I deployed the new pipeline via MLflow, monitored drift with Evidently AI, and set up alerts.

**Result** – The revised model raised the churn prediction AUC from 0.78 to 0.86, and when applied in production, the client’s retention rate climbed to 91 % after two weeks. I learned that diagnostic questions are less about picking a fancy algorithm and more about quickly triangulating data quality, feature relevance, and model behavior with the right tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
