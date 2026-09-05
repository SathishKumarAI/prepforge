---
qid: ing_121015b7f0__star__local
question: 'Explain: somebody comes in between and changes it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 353
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:46-05:00'
sources: []
---

**Situation:**  
During a quarterly rollout for our fraud‑detection service, I was maintaining an XGBoost model that had been scoring 0.92 AUC on production data. Midway through the deployment cycle, a new analyst joined and re‑trained the model using a different set of features (adding raw transaction timestamps) without updating the feature store or documentation.

**Task:**  
I needed to quickly assess why the AUC dropped to 0.85, restore performance, and prevent future unsupervised changes that could compromise our SLA.

**Action:**  
1. Ran an automated drift check comparing the new feature distribution against the baseline using *Pandas Profiling* and *scikit‑learn’s `mean_absolute_error`*.  
2. Re‑established a strict feature‑store schema with *MLflow* tracking; added a pre‑deployment validation step that flags any model whose input shape differs from the registered signature.  
3. Created a rollback script that restored the last approved checkpoint and logged the incident in Jira for audit.

**Result:**  
The AUC returned to 0.92 within two hours, and our deployment pipeline now blocks unauthorized feature changes, reducing model drift incidents by 95 %. I learned that rigorous versioning and automated validation are essential when multiple stakeholders can touch ML artifacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
