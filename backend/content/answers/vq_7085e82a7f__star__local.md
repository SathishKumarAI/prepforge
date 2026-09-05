---
qid: vq_7085e82a7f__star__local
question: What is the difference between regression and classification?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 319
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:03-05:00'
sources: []
---

**Situation** – While leading a data‑science sprint at my last company, the product team asked me to predict whether a customer would churn in the next quarter. The dataset had dozens of numeric and categorical features from usage logs, billing, and support tickets.

**Task** – I needed to build a model that outputs a single probability per user indicating churn risk, then turn that into actionable segments for the marketing team.

**Action** – I framed the problem as **classification**, because the outcome was binary (churn vs. stay). I used a gradient‑boosted tree pipeline in Python: first encoded categorical variables with target encoding, handled missing values with median imputation, and scaled numeric features. I tuned hyperparameters via Bayesian search and evaluated with AUC‑ROC. For comparison, I also built a **regression** model predicting the exact churn probability; however, its mean absolute error was higher and the interpretability of class labels was lost.

**Result** – The classification model achieved an 0.87 AUC, exceeding our benchmark by 12%. It enabled the marketing team to target high‑risk users with a retention offer, boosting re‑engagement by 18% in three months. I learned that choosing between regression and classification hinges on whether the business needs a continuous score or discrete decision thresholds—classification gives clearer actionable labels for churn prevention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
