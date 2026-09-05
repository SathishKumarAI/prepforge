---
qid: ing_f35181df7b__star__local
question: 'Explain: Shreya Shankar'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 569
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:32-05:00'
sources: []
---

**Situation** – In my last role at a telecom company, our customer‑churn rate was climbing to 18 % over the past six months, costing us roughly $3 million annually in lost revenue. The data science team had built a predictive model, but executives couldn’t trust it because we didn’t know why customers were flagged as high risk.

**Task** – I needed to turn that black‑box classifier into an interpretable tool that could be used by the marketing team to design targeted retention campaigns while still maintaining > 85 % AUC on our holdout set.

**Action** – I integrated SHAP (SHapley Additive exPlanations) into our pipeline. First, I retrained a Gradient Boosting model with XGBoost, then applied TreeExplainer to compute feature contributions for each prediction. I visualized the global importance plot and created a “feature impact dashboard” that highlighted the top five drivers of churn (e.g., high data usage during off‑peak, late‑night call volume, contract length). I also set up an automated report that refreshed daily and included counterfactual suggestions (“if we offer a 20 % discount on next month’s bill, the predicted churn probability drops by 12 %”). Finally, I held a workshop with marketing to interpret the SHAP values and design personalized offers.

**Result** – The interpretable model maintained an AUC of 0.87 while giving actionable insights. After deploying the targeted campaigns suggested by the SHAP analysis, churn dropped from 18 % to 12 % within three months, saving the company approximately $1.8 million in revenue. I also learned that marrying high‑performing algorithms with explainability tools like SHAP is essential for stakeholder buy‑in and real‑world impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
