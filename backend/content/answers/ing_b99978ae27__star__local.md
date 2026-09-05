---
qid: ing_b99978ae27__star__local
question: 'Explain: Supervised Machine Learning: Regression and Classification'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 286
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:27-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were building an automated credit scoring tool. Our existing rule‑based system had a 12% default rate on new applicants and couldn’t adapt to changing market conditions.

**Task:** I was tasked with designing a predictive model that could reduce defaults by at least 30% while staying explainable for compliance purposes.

**Action:** I first collected transaction histories, demographic data, and credit bureau scores. For the **regression** component, I used XGBoost to predict a continuous risk score (0–1). Then I set a threshold to convert that score into a binary **classification** label (approve/reject). To keep the model interpretable, I applied SHAP values for feature importance and tuned hyperparameters with cross‑validation. I also built an automated pipeline in Airflow that refreshed data nightly and retrained models monthly.

**Result:** The new system cut default rates to 8%—a 33% improvement—and increased approved loan volume by 15%. We also received positive feedback from auditors because the SHAP explanations satisfied regulatory transparency requirements. This experience taught me how regression can generate nuanced risk estimates while classification translates those estimates into actionable decisions, all within a production‑ready framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
