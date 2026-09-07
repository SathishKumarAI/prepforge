---
qid: ing_2b7395ceb2__faang__local
question: 'Explain: Implementing hold-out cross-validation with stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 441
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:23:46-05:00'
sources: []
---

**Clarify**  
You’re asked to build a *hold‑out* (train/test split) that preserves the class distribution of a multi‑class dataset. Confirm assumptions:  

1. Data is tabular and labels are categorical.  
2. You want a single split rather than k‑fold CV.  
3. The test set must be unseen during training and should reflect the same prevalence as the full data.

**Approach**  
1. Compute class proportions in the whole dataset.  
2. For each class, randomly select *n × proportion* samples for the test set (where *n* is desired test size).  
3. The remaining samples form the training set.  

This is equivalent to `train_test_split` with `stratify=y`.

**Depth**  
```python
from sklearn.model_selection import train_test_split

X_train, X_val, y_train, y_val = train_test_split(
    X, y,
    test_size=0.2,
    stratify=y,
    random_state=42
)
```
- `test_size` can be a float (fraction) or int (exact count).  
- Complexity: O(N) to shuffle and partition; memory‑wise trivial.  
- Trade‑off: One split means no estimate of variance across folds; but it's fast and guarantees class balance.

**Edge Cases**  
- Very small classes (< test_size * N): may force 0 or 1 sample, leading to imbalance.  
- Imbalanced data with extreme ratios can still yield zero samples in a fold if not handled.  
- Random seed must be set for reproducibility.

**Optimize & Communicate**  
If you need robust performance estimates, replace hold‑out with *stratified k‑fold CV* (`StratifiedKFold`) to average across multiple splits. Explain that the chosen method balances speed and fidelity to class distribution, which is critical for metrics like ROC AUC or precision/recall in imbalanced settings.  

---  
Word count: ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
