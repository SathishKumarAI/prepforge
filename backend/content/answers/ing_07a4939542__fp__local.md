---
qid: ing_07a4939542__fp__local
question: 'Explain: Implementing k-fold cross-validation without stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 674
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:21:52-05:00'
sources: []
---

### Why k‑fold cross‑validation works

The goal of learning is to minimise *expected* error on unseen data:
\[
R(f)=\mathbb{E}_{(x,y)\sim P}[\ell(f(x),y)] .
\]
We cannot access \(P\) directly, so we approximate it with a finite sample \(\{z_i\}_{i=1}^{n}\).  
k‑fold CV splits this sample into \(k\) disjoint *validation* sets \(V_1,\dots,V_k\) and uses the remaining data as training. For each fold we compute
\[
\hat R_j(f)=\frac{1}{|V_j|}\sum_{i\in V_j}\ell(f_{\mathcal{T}_j}(x_i),y_i),
\]
where \(\mathcal{T}_j=\{z_i:i\notin V_j\}\). Averaging over folds gives an unbiased estimator of \(R(f)\) provided the data are i.i.d. and each observation appears exactly once in a validation set.

### What stratification adds

If the target distribution is imbalanced (e.g., binary labels 90/10), random splitting can produce folds with wildly different class proportions. Since many learning algorithms depend on *class balance* for stability, the resulting \(\hat R_j\) will have high variance and bias. Stratified sampling forces each fold to preserve the global label ratio, reducing this variance.

### Implementing non‑stratified k‑fold

```python
import numpy as np

def k_fold_cv(X, y, k=5, random_state=None):
    n = len(y)
    rng = np.random.default_rng(random_state)
    indices = rng.permutation(n)
    fold_sizes = [n // k + (i < n % k) for i in range(k)]
    start = 0
    folds = []
    for size in fold_sizes:
        end = start + size
        val_idx = indices[start:end]
        train_idx = np.setdiff1d(indices, val_idx)
        folds.append((train_idx, val_idx))
        start = end
    return folds
```

*Key steps*: shuffle once (to avoid ordering bias), partition deterministically by floor division plus remainder, and use set difference to obtain training indices.

### Non‑obvious insight

Even without stratification, the *averaging* over \(k\) folds mitigates extreme class imbalance in any single fold. Each observation’s contribution is weighted by \(\frac{1}{|V_j|}\), which equals roughly \(\frac{k}{n}\). Thus the variance reduction from averaging scales as \(1/k\), regardless of per‑fold imbalance. Consequently, for moderate \(k\) (e.g., 5–10) and large datasets, non‑stratified CV can still yield reliable error estimates—especially when the learning algorithm is robust to class imbalance or when the class distribution itself is part of what you want to model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
