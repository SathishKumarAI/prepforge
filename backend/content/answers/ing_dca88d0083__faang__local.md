---
qid: ing_dca88d0083__faang__local
question: 'Explain: Implementing k-fold cross-validation with stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 523
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:11:36-05:00'
sources: []
---

**Clarify**  
You want a reproducible validation routine that preserves class distribution across folds—common for imbalanced datasets. I’ll assume we have a labeled dataset `X, y` and an estimator with a `.fit()` interface.

**Approach**  
1. Split indices into *k* roughly equal folds.  
2. For each fold, build training set from the other *k‑1* folds and test set from the current fold.  
3. Ensure each fold’s class proportions match the overall distribution (stratification).  
4. Train on training set, evaluate on test set; aggregate metrics.

**Depth**  
```python
import numpy as np
from collections import defaultdict

def stratified_kfold(X, y, k=5, random_state=None):
    rng = np.random.default_rng(random_state)
    indices = np.arange(len(y))
    # group by class
    classes = defaultdict(list)
    for idx, cls in enumerate(y):
        classes[cls].append(idx)

    folds = [[] for _ in range(k)]
    for cls, inds in classes.items():
        rng.shuffle(inds)
        split = np.array_split(inds, k)
        for f, part in zip(folds, split):
            f.extend(part)

    for i in range(k):
        test_idx = np.array(folds[i])
        train_idx = np.setdiff1d(indices, test_idx)
        yield X[train_idx], y[train_idx], X[test_idx], y[test_idx]
```
Time: O(n log n) due to shuffling; space: O(n).  
Metrics (e.g., ROC‑AUC) are averaged across folds.

**Edge Cases**  
- *Very small classes*: if a class has fewer than *k* samples, some folds will be empty → reduce *k* or use leave‑one‑out.  
- *Non‑numeric labels*: ensure mapping to hashable keys.  
- *Stratified sampling in regressors*: approximate by binning continuous targets.

**Optimize & Communicate**  
Use `sklearn.model_selection.StratifiedKFold` for production; it handles edge cases internally and offers parallelism (`n_jobs`). Explain that stratification mitigates bias from class imbalance, leading to more reliable generalization estimates. Summarize the algorithmic steps and trade‑offs succinctly so interviewers see clear reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
