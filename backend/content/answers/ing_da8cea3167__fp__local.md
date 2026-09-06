---
qid: ing_da8cea3167__fp__local
question: 'Explain: estimate_success_rate(test_labels, test_preds, unlabeled_preds,
  bootstrap_iterations=20000, confidence_level=0.95)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 491
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:10-05:00'
sources: []
---

**Why the function exists**

When a model outputs class probabilities for *unlabeled* data, we can’t compute its accuracy directly.  
The routine estimates how often the predictions would be correct if the unlabeled labels were known, by **bootstrapping** the observed error on a small labeled set and propagating that uncertainty to the unlabeled pool.

---

### 1. Fundamental problem

We have:

* `test_labels` – ground‑truth for a validation split  
* `test_preds` – model’s predictions (e.g., argmax of logits) on that split  
* `unlabeled_preds` – predictions on data without labels  

The goal is to report the *expected accuracy* of `unlabeled_preds` and a confidence interval.

---

### 2. Core idea: bootstrap error estimation

1. **Error rate on test set**  
   \( \hat{e} = \frac{1}{n}\sum_{i=1}^{n}\mathbf{1}[y_i\neq \hat y_i] \)

2. **Resample with replacement** from the `test` indices, recompute error → generate a distribution of error rates.  
   Each bootstrap sample mimics drawing a new validation set from the same underlying population.

3. The empirical standard deviation of these errors gives an estimate of the *sampling variability* of accuracy.

4. **Translate to confidence interval**:  
   \[
   CI = 1-\hat{e}\;\pm\; z_{\alpha/2}\times s_e
   \]
   where \(z_{\alpha/2}\) is the normal quantile for `confidence_level` and \(s_e\) the bootstrap standard deviation.

5. **Apply to unlabeled predictions**:  
   Expected success rate = mean of `1 - e_bootstrap`.  
   The confidence bounds are the same as above because the error distribution on labeled data is assumed representative.

---

### 3. Non‑obvious insight

*The bootstrap treats each *prediction* independently, even when the model’s predictions are correlated (e.g., due to shared feature space). This independence assumption is often violated in practice; thus, the confidence interval can be overly optimistic if the test set is small or highly structured.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
