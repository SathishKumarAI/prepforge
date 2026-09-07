---
qid: ing_da8cea3167__faang__local
question: 'Explain: estimate_success_rate(test_labels, test_preds, unlabeled_preds,
  bootstrap_iterations=20000, confidence_level=0.95)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 973
total_tokens: 1223
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:53-05:00'
sources: []
---

**Clarify**  
You’re asked to write a routine that estimates the *success rate* (e.g., accuracy or F1) of an AI model on a test set, but you only have noisy predictions for unlabeled data. The function `estimate_success_rate(test_labels, test_preds, unlabeled_preds, bootstrap_iterations=20000, confidence_level=0.95)` should return the estimated success rate **plus** a confidence interval derived via bootstrapping.

Key assumptions to confirm:  
- `test_labels` and `test_preds` are aligned 1‑D arrays of ground truth and model predictions on the labeled test set.  
- `unlabeled_preds` is an array of predictions for data with no labels; it will be used only to estimate uncertainty, not the point estimate.  
- Success metric can be accuracy (binary) or any callable passed in later.  

**Approach**  
1. Compute the point estimate on the labeled set.  
2. Use bootstrap resampling of the labeled samples to generate a distribution of that estimate.  
3. From the bootstrap distribution, compute the percentile bounds corresponding to `confidence_level`.  
4. Return the point estimate and the interval.  

The unlabeled predictions are optional for diagnostics (e.g., check calibration), but they don’t influence the numeric output.

**Depth**  
```python
import numpy as np

def estimate_success_rate(test_labels, test_preds,
                          unlabeled_preds=None,
                          bootstrap_iterations=20000,
                          confidence_level=0.95):
    """
    Estimate accuracy with a (1‑α) confidence interval via bootstrapping.
    
    Parameters
    ----------
    test_labels : array-like of shape (n,)
        Ground‑truth labels.
    test_preds  : array-like of shape (n,)
        Model predictions on the same samples.
    unlabeled_preds : array-like, optional
        Predictions for data without true labels. Ignored in the numeric output,
        but kept for future calibration checks.
    bootstrap_iterations : int, default=20000
        Number of bootstrap resamples.
    confidence_level : float between 0 and 1, default=0.95
        Desired coverage probability.

    Returns
    -------
    point_estimate : float
        Accuracy on the labeled test set.
    ci_lower, ci_upper : float
        Lower/upper bounds of the (1‑α) confidence interval.
    """
    # 1. Point estimate
    labels   = np.asarray(test_labels)
    preds    = np.asarray(test_preds)
    point_estimate = np.mean(labels == preds)

    n_samples = len(labels)
    rng = np.random.default_rng()

    # 2. Bootstrap distribution
    boot_stats = np.empty(bootstrap_iterations, dtype=float)
    for i in range(bootstrap_iterations):
        idx = rng.integers(0, n_samples, size=n_samples)   # sample WITH replacement
        boot_stats[i] = np.mean(labels[idx] == preds[idx])

    # 3. Confidence bounds (percentile method)
    alpha = 1 - confidence_level
    lower = np.percentile(boot_stats, 100 * alpha / 2)
    upper = np.percentile(boot_stats, 100 * (1 - alpha / 2))

    return point_estimate, lower, upper
```

**Complexity & Trade‑offs**  
- Time: `O(n_samples * bootstrap_iterations)`; with 20k iterations and moderate n, this is fine.  
- Memory: O(bootstrap_iterations) for the array of bootstrapped stats.  
- Accuracy: Percentile bootstrap gives a non‑parametric interval; if you need tighter bounds you could use bias‑corrected accelerated (BCa) or normal approximation.

**Edge cases**  
- Empty test set → raise ValueError.  
- Mismatched lengths → raise error.  
- All predictions identical → bootstrapped variance zero; CI collapses to the point estimate.  
- `unlabeled_preds` length differs: ignore but warn.  

**Optimize & Communicate**  
To speed up, vectorize bootstrap via `np.random.choice` with `replace=True`, or parallelize loops with joblib. If `n_samples` is huge, consider stratified resampling to preserve class balance. In an interview, explain that the function returns a *confidence interval* rather than a single p‑value, making it more informative for stakeholders. This structure showcases clear problem restatement, systematic planning, depth in implementation, awareness of pitfalls, and thoughtful optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
