---
qid: ing_fa6a6d1c81__star__local
question: Which is the best, Bagging or Boosting? — What is the difference between
  Bagging and Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 341
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:30-05:00'
sources: []
---

**Situation**  
During a recent fraud‑detection project at my previous company, our team was stuck with an accuracy of only 78% on the test set. The data were highly imbalanced: 95 % legitimate transactions and just 5 % fraudulent.

**Task**  
I needed to decide whether to use bagging (e.g., Random Forest) or boosting (e.g., XGBoost) to lift performance, while keeping training time under an hour on our 16‑core workstation.

**Action**  
First I benchmarked a Random Forest: 10 000 trees, max depth 20, bootstrap samples of size 60 % each. Training took ~25 min and hit 82% accuracy but over‑smoothed the minority class (recall 0.38).  
Next I switched to XGBoost with 500 estimators, learning rate 0.1, subsample 0.8, and a custom scale_pos_weight to counter imbalance. Training took ~35 min, achieved 88% accuracy, recall 0.57, and F1‑score 0.69. I also added early stopping on a validation split to avoid overfitting.

**Result**  
Boosting gave me a 6‑point lift in overall accuracy and almost doubled fraud recall compared with bagging, all within our time budget. I learned that when the minority class is critical and the dataset is not huge, boosting’s sequential learning of hard examples often outperforms bagging’s parallel random sampling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
