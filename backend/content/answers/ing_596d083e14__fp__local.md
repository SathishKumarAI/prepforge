---
qid: ing_596d083e14__fp__local
question: How is stratified sampling related to cross-validation?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 350
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:14:33-05:00'
sources: []
---

**Stratified sampling** is a way of partitioning data so that each subset preserves the class‑label distribution of the whole set.  
Cross‑validation (CV) asks us to evaluate a model by repeatedly training on *k*–1 folds and testing on the remaining fold, then averaging the results.

The two concepts meet because CV can be made **stratified**: every fold is built using stratified sampling so that each fold contains roughly the same proportion of each class.  
Why this matters? In classification tasks with imbalanced classes, a random split may leave one fold almost devoid of minority samples. The model will then be trained and tested on data whose label distribution does not reflect the true population, producing biased performance estimates.

From an optimization standpoint, stratification keeps the *expected loss* over each fold close to the global expected loss, reducing variance in the CV estimate without altering the bias (the estimator remains consistent).  
Mathematically, if \(p_c\) is the true class probability for class \(c\), a stratified fold ensures that the empirical proportion \(\hat p_{c}^{(fold)} \approx p_c\). This guarantees that each training set sees a representative mix of classes, preserving the geometry of decision boundaries that would be learned from the full data.

**Non‑obvious insight:**  
Stratification is not merely about fairness; it’s a variance‑reduction technique. By aligning class proportions across folds, we constrain the sampling distribution of the loss function, tightening confidence intervals for performance metrics—especially important when deploying models in safety‑critical domains where small fluctuations can lead to costly misclassifications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
