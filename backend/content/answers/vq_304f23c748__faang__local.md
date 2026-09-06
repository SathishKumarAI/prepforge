---
qid: vq_304f23c748__faang__local
question: Q24- How would you evaluate a logistic regression model?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 488
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:47-05:00'
sources: []
---

**Clarify**  
You’re asking how to assess a binary classifier built with logistic regression. I’ll assume the data is already split into train/validation/test, and we want metrics that reflect both calibration (probability quality) and discrimination (ranking ability).  

**Approach**  
1. **Split & preprocess** – Train on training set; evaluate on validation/test.  
2. **Discrimination metrics** – ROC‑AUC, PR‑AUC, accuracy, precision/recall/F1 at chosen thresholds.  
3. **Calibration metrics** – Brier score, calibration curve (expected vs observed), Hosmer–Lemeshow test.  
4. **Model diagnostics** – Check residuals, multicollinearity (VIF), over‑dispersion.  
5. **Cross‑validation** – k‑fold to estimate variance and guard against data leakage.  

**Depth**  
- *ROC‑AUC* is threshold‑agnostic; it measures the ability to rank positives higher than negatives. Complexity: O(n log n) for sorting scores.  
- *PR‑AUC* focuses on positive class performance, especially important with class imbalance.  
- *Brier score* = mean((ŷ – y)^2); lower is better and reflects both calibration and discrimination.  
- *Hosmer–Lemeshow* partitions predictions into deciles; a high p‑value indicates good fit.  
- Use *k‑fold CV* (e.g., k=5) to get stable estimates; average metrics across folds.  

**Edge Cases**  
- Extremely imbalanced data → ROC may be misleading; use PR‑AUC and balanced accuracy.  
- Small test set → high variance in metrics; rely more on cross‑validation.  
- Probabilities near 0/1 → check for numerical instability or overfitting.  

**Optimize & Communicate**  
Explain that logistic regression is fast (O(nd) per iteration) but sensitive to feature scaling and multicollinearity. If performance lags, consider regularization (L1/L2), feature engineering, or switching to a tree‑based model. Convey the trade‑offs between interpretability (coefficients) and predictive power, and how each metric informs deployment decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
