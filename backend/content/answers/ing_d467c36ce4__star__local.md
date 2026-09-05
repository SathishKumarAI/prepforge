---
qid: ing_d467c36ce4__star__local
question: 'Explain: 1.1.2.2. Classification — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 350
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:02-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection pilot for a fintech startup, the internal data science team had a 45% false‑positive rate with our rule‑based system. The product manager demanded a machine‑learning model that could be deployed within two weeks and integrated into the existing Python stack.

**Task** – Build a high‑precision binary classifier using scikit‑learn’s linear models (LogisticRegression, SGDClassifier) that reduces false positives by at least 20% while keeping training time under an hour on our 500 k‑row dataset.

**Action** – I first cleaned the data and engineered a handful of interaction features. Then I split the data 70/30 and ran a quick grid search over `C` (regularization strength) and `penalty` (`l2`, `elasticnet`) for both LogisticRegression and SGDClassifier, using `class_weight='balanced'` to counter class imbalance. I leveraged `warm_start=True` on SGD to speed convergence across folds. After selecting the best hyperparameters, I trained a final model with 5‑fold cross‑validation, saving it via joblib for inference.

**Result** – The deployed model cut false positives from 45% to 28%, improving precision from 0.62 to 0.78 and achieving an AUC of 0.91. Training took only 42 minutes on a single CPU core. I learned that careful hyperparameter tuning with `class_weight` and warm starts can turn simple linear models into production‑ready solutions for high‑stakes domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
