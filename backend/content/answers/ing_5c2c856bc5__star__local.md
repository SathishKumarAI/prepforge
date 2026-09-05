---
qid: ing_5c2c856bc5__star__local
question: 'Explain: Okay? And otherwise if else none of — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 290
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:47-05:00'
sources: []
---

**Situation:** In my last internship at a fintech startup, the fraud detection model’s false‑positive rate had spiked from 2% to 9%, causing legitimate transactions to be blocked and hurting revenue.

**Task:** I was tasked with reducing the false‑positive rate back below 3% while keeping the true‑positive rate above 95%, all within two weeks before the next quarterly audit.

**Action:** First, I ran a feature importance analysis using SHAP on our existing XGBoost pipeline to identify noisy predictors. I removed three highly correlated features and added a transaction‑time lag variable that captured user behavior patterns. Next, I switched from a single‑model ensemble to a two‑stage classifier: a lightweight logistic regression as a pre‑filter followed by the tuned XGBoost for final scoring. I also implemented a dynamic thresholding strategy based on daily fraud volume, using ROC‑curve analysis to set stage‑specific cutoffs.

**Result:** The false‑positive rate dropped to 2.4% and true positives rose to 96.8%, restoring $1.3M in expected revenue for the quarter. I learned that careful feature pruning combined with staged classification can dramatically improve model precision without sacrificing recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
