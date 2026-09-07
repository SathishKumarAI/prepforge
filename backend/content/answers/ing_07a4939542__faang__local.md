---
qid: ing_07a4939542__faang__local
question: 'Explain: Implementing k-fold cross-validation without stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 529
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:01:57-05:00'
sources: []
---

**Clarify**  
We need a routine that splits a dataset into *k* disjoint folds and trains/validates a model on each fold pair (train = k‑1 folds, val = 1). No stratification means the class distribution may drift between folds; we’ll simply use random shuffling. Confirm assumptions: data fits in memory, labels are available, and the model can be retrained *k* times.

**Approach**  
1. Shuffle indices uniformly.  
2. Partition indices into *k* roughly equal chunks.  
3. For each fold `i`:  
   - `train_idx = all_indices \ fold_i`  
   - `val_idx = fold_i`  
   - Train the model on `X[train_idx], y[train_idx]`.  
   - Evaluate on `X[val_idx], y[val_idx]`.  
4. Aggregate metrics (mean ± std).

**Depth**  
```python
def kfold_cv(X, y, model_factory, k=5):
    idx = np.arange(len(y))
    np.random.shuffle(idx)
    folds = np.array_split(idx, k)
    scores = []
    for i in range(k):
        val_idx = folds[i]
        train_idx = np.hstack([f for j,f in enumerate(folds) if j!=i])
        model = model_factory()
        model.fit(X[train_idx], y[train_idx])
        pred  = model.predict(X[val_idx])
        scores.append(accuracy_score(y[val_idx], pred))
    return np.mean(scores), np.std(scores)
```
Complexity: *O(k·N)* training time; memory linear in *N*. No extra cost for stratification.

**Edge Cases**  
- Small *k* or tiny datasets → some folds may be empty. Guard against `len(folds[i])==0`.  
- Imbalanced classes → metrics can be misleading; consider reporting per‑class F1 after the fact.  
- Non‑random splits (e.g., time series) break assumption of IID data.

**Optimize & Communicate**  
If training is expensive, parallelize folds with joblib or multiprocessing. For very large data, use incremental learning or reservoir sampling to avoid full shuffling in memory. Explain that while stratification preserves class balance, plain k‑fold suffices when classes are roughly balanced or when the goal is unbiased variance estimation rather than strict class fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
