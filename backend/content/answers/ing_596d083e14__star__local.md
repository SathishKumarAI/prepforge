---
qid: ing_596d083e14__star__local
question: How is stratified sampling related to cross-validation?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 317
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:38-05:00'
sources: []
---

**Situation:** In a credit‑risk project I was building a binary classifier to flag high‑default customers. The dataset had only 12 % positives, and the production model needed to generalize well across all regions.

**Task:** My goal was to estimate performance reliably while ensuring each cross‑validation fold reflected the true class distribution so that minority samples weren’t underrepresented during training or testing.

**Action:** I implemented stratified k‑fold CV in scikit‑learn, specifying `StratifiedKFold(n_splits=5, shuffle=True, random_state=42)`. For every split, the algorithm maintained the 12 % positive rate in both train and validation sets. I also used a stratified bootstrap for feature importance estimation to keep class balance during sampling. This prevented the model from overfitting to the majority class and allowed the ROC‑AUC scores to be comparable across folds.

**Result:** The average AUC improved from 0.78 (plain CV) to 0.84, with a standard deviation drop from 0.06 to 0.02. Deployment on a hold‑out set confirmed a 4 % lift in true positive rate at the same false positive level. I learned that aligning sampling strategy with cross‑validation is critical when class imbalance can skew model evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
