---
qid: ing_96b308f6ac__star__local
question: 'Explain: Overfitting examples — What is Overfitting? - Overfitting in Machine
  Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 319
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:27-05:00'
sources: []
---

**Situation**  
During a data‑science sprint at my previous company, we built a churn prediction model for a telecom client. The dataset had 50 features and roughly 30 000 rows, but the training set was heavily imbalanced—only 8% churners.

**Task**  
I was tasked with creating a model that generalized well to unseen customers while keeping the false‑positive rate below 5%. Our initial models were scoring almost perfect on the validation split (AUC 0.97), but the production A/B test dropped to 0.65.

**Action**  
I suspected overfitting. I first plotted learning curves and saw a huge gap between training and validation loss. I then applied regularization: added L2 penalties, reduced tree depth in XGBoost, and performed feature selection with recursive elimination based on permutation importance. I also switched to k‑fold cross‑validation (k=5) instead of a single train/val split and introduced dropout layers when using a neural net baseline.

**Result**  
After these adjustments the validation AUC stabilized at 0.82, matching the test set performance within ±0.02. The churn forecast error rate dropped from 12% to 4%. I learned that monitoring learning curves early, combining regularization with robust cross‑validation, and simplifying feature space are key to preventing overfitting in real‑world ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
