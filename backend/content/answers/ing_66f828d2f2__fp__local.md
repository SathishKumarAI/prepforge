---
qid: ing_66f828d2f2__fp__local
question: 'Explain: So test _size we set it to — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 434
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:07-05:00'
sources: []
---

In a supervised learning pipeline the data **D** must be split into a *training* part that teaches the model and a *testing* part that estimates its generalisation error.  
The only way to obtain an unbiased estimate of this error is to evaluate on samples that were never seen during training.  
Let \(n\) be the total number of examples, \(k\) the desired test set size, and \(p = k/n\). The random split implemented by `train_test_split` draws each sample independently with probability \(p\) into the test set; this is a Bernoulli sampling scheme.  

Why must we choose a specific \(p\)?  
1. **Statistical power**: With too few test samples (\(p \ll 0.2\)) the variance of the error estimate becomes large, making it difficult to compare models.  
2. **Training capacity**: With too many test samples (\(p \gg 0.5\)) we starve the model of data, hurting its ability to learn useful patterns.  

Thus a common compromise is \(p = 0.2\)–\(0.3\), which gives roughly 20–30 % of the data for testing while leaving enough for training.  
The *non‑obvious insight*: the test size should also respect the **distributional shift** between train and test sets. If the dataset is highly imbalanced, a fixed \(p\) may under‑represent minority classes in the test set; stratified sampling (`stratify=y`) guarantees each class appears proportionally, preserving the true error estimate.

In Python’s `train_test_split`, you set this via:

```python
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y)
```

where `test_size` is a fraction (or absolute number) of samples allocated to the test split.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
