---
qid: vq_3ebe0f7c15__star__local
question: Q18- What’s the F1 score? How would you use it?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 331
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:58-05:00'
sources: []
---

**Situation** – In a recent churn prediction project for a telecom client, our model’s precision was high (0.88) but recall dropped to 0.55, meaning we missed many customers likely to leave. The business asked us to reduce false negatives without inflating false positives.

**Task** – I had to identify a single metric that balances precision and recall so the team could tune hyperparameters and feature sets effectively, ensuring we captured as many churners as possible while keeping unnecessary alerts low.

**Action** – I introduced the F1 score, the harmonic mean of precision and recall:  
\(F1 = 2 \times (precision \times recall) / (precision + recall)\).  
I calculated it for each model run, plotted it against different threshold values, and used a grid‑search over the regularization parameter in an XGBoost classifier. I also compared F1 with ROC‑AUC to show that while AUC was high (0.93), F1 improved from 0.64 to 0.78 after tuning.

**Result** – The final model achieved an F1 of 0.81, a 27% lift over the baseline, and the client now receives churn alerts for 20% more at-risk customers with only a 5% increase in false positives. I learned that choosing the right metric—here F1—directly aligns technical tuning with business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
