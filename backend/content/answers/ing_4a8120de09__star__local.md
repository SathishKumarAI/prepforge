---
qid: ing_4a8120de09__star__local
question: What is stratified sampling? — What is Stratified Cross-Validation in Machine
  Learning? | Towards Data Science
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 338
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:23-05:00'
sources: []
---

**Situation** – In a fraud‑detection project for an online payments company, my team was building a binary classifier on a dataset of 1.2 million transactions. The fraud label only represented 0.8% of the data, so the training set was heavily imbalanced and our initial cross‑validation folds produced wildly varying F1 scores.

**Task** – I needed to create a validation strategy that would give us reliable performance estimates while preserving the minority class distribution in every fold, and ensure the model could generalize across all transaction types.

**Action** – I implemented stratified k‑fold cross‑validation using scikit‑learn’s `StratifiedKFold`. For each of the 5 folds, I split the data so that each fold contained roughly the same fraud ratio as the full dataset. Inside each fold, I performed a grid search over XGBoost hyperparameters with early stopping on the validation set. I also compared this to plain random splits and plotted ROC curves for every strategy.

**Result** – The stratified approach reduced variance in our F1 scores from ±0.12 to ±0.04 and increased overall recall from 78% to 84% at a fixed precision of 92%. It also revealed that the model was under‑fitting on rare fraud patterns, prompting us to add engineered features for those cases. This experience taught me that respecting class distribution during validation is critical when dealing with highly imbalanced problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
