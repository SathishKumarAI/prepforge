---
qid: vq_f9cf1a6d03__star__local
question: Q19- How would you handle an imbalanced dataset?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 356
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:41-05:00'
sources: []
---

**Situation:**  
During a churn prediction project for a telecom client, the training set had only 3% churners while 97% were non‑churners. The model kept predicting “stay” and the business team was skeptical.

**Task:**  
I needed to build a classifier that could reliably detect churners without drowning in false positives, aiming for an AUC > 0.80 and precision ≥ 0.30 on the minority class.

**Action:**  
First, I balanced the data with SMOTE+ENN to generate synthetic churn samples while cleaning noisy ones, keeping the original distribution in validation folds. I then trained a LightGBM model with built‑in class weighting (ratio 97:3) and used early stopping on the F1 score. For evaluation I swapped ROC for Precision‑Recall curves because of imbalance. I also ran an ensemble of three models (XGBoost, CatBoost, RandomForest) and averaged their probabilities to smooth variance.

**Result:**  
The final model achieved a precision of 0.35, recall of 0.58, and AUC‑PR of 0.48—up from the baseline 0.12 precision and 0.10 recall. The client used the predictions to target high‑value retention campaigns, saving ~15% in churn costs over six months. I learned that combining resampling, class weighting, and ensemble averaging often beats any single trick on highly skewed data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
