---
qid: vq_a6a020d2fd__star__local
question: In statistics, how are missing data treated?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 343
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:24-05:00'
sources: []
---

**Situation:**  
During a quarterly churn‑prediction project at my previous SaaS company, the training dataset had ~18% of customer feature rows with missing values—especially for “average monthly usage” and “support ticket count.” The model’s baseline accuracy was only 68%, far below our target of 80%.

**Task:**  
I needed to clean the data so the predictive model could reliably use all available customers, while keeping the process reproducible and explainable for compliance.

**Action:**  
First, I plotted missingness patterns with a heatmap in Python (pandas + seaborn) to confirm that missingness was not completely random. For “average monthly usage,” I used multiple imputation via scikit‑learn’s IterativeImputer, which models each feature as a function of the others; for the sparse “support ticket count” I applied median imputation because it was skewed. I also created binary flags indicating whether data were imputed so the model could learn any systematic differences. Finally, I validated the approach by running a 5‑fold cross‑validation and comparing performance against simple mean/median fill.

**Result:**  
Accuracy rose to 82%, and the model’s AUC improved from 0.72 to 0.78. The imputation pipeline reduced processing time by 30% compared to manual cleanup, and we documented the steps for audit purposes. I learned that understanding missingness mechanisms and choosing the right imputer can make a measurable difference in production ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
