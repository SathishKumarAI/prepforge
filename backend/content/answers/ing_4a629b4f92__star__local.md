---
qid: ing_4a629b4f92__star__local
question: 'Explain: Sample questions — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 346
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:08-05:00'
sources: []
---

**Situation**  
During my final semester project I built a churn prediction model for a telecom client. The initial logistic regression had an AUC of 0.78 on the training set but only 0.65 on the hold‑out, indicating a big gap between performance and generalization.

**Task**  
I needed to identify why the model was overfitting and bring the test AUC above 0.70 while keeping interpretability for the client’s sales team.

**Action**  
I first plotted learning curves to confirm high training accuracy vs low validation accuracy, a classic sign of bias‑variance imbalance. I then reduced variance by:  
1. Adding L2 regularization (C=0.5) to shrink coefficients.  
2. Switching to an ensemble of 100 decision trees with max depth 6, which lowered variance without hurting interpretability too much.  
3. Using cross‑validation to tune hyperparameters and early stopping on a validation set. I also dropped highly correlated features (>0.9 correlation) to reduce noise.

**Result**  
The AUC rose from 0.65 to 0.73 on the test set, and the model’s calibration improved by 12% (Brier score). The client could now confidently target high‑risk customers, saving an estimated $1M in potential churn. I learned that balancing bias and variance is not just a theoretical exercise—it directly translates into measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
