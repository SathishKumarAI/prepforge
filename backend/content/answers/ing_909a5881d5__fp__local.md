---
qid: ing_909a5881d5__fp__local
question: 'Explain: Design the evaluation for a fraud model at 0.1% prevalence, end
  to end: metrics, thresholding, validation protocol, and monitoring.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 639
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:12:30-05:00'
sources: []
---

**Why the evaluation must be built from first principles**

A fraud model is a *rare‑event detector*: only 0.1 % of transactions are genuine positives.  
From Bayes’ theorem, any classifier that maximizes overall accuracy will simply predict “non‑fraud” for everyone; its utility vanishes.  
Thus we must optimise **precision (PPV)** under a fixed acceptable *false‑positive rate* (FPR) so that the business can process only a manageable number of flagged transactions.

---

### 1. Metric

- **Precision @ k**: proportion of true frauds among the top *k* ranked predictions.  
  It directly maps to operational cost (how many investigations per hit).  
- **Cost‑weighted loss**: \(L = C_{\text{FN}}\Pr(\text{FN}) + C_{\text{FP}}\Pr(\text{FP})\), with \(C_{\text{FN}}\gg C_{\text{FP}}\) to reflect missed fraud.

---

### 2. Thresholding

1. **Score calibration** (Platt scaling or isotonic regression) so that predicted probabilities are honest.  
2. **Choose threshold \(t\)** by solving  
   \[
   \frac{\Pr(\hat y=1)}{N} = \text{target FPR}
   \]
   using the calibrated ROC curve; this guarantees a fixed investigation load.  
3. Validate that at \(t\) precision meets business SLA (e.g., ≥ 10 % for 0.1 % prevalence).

---

### 3. Validation protocol

- **Stratified, time‑split CV**: train on past months, validate on the following month to respect temporal drift.  
- **Nested cross‑validation** for hyper‑parameter tuning while keeping the outer split unbiased.  
- **Bootstrap estimation of PPV confidence intervals** because variance is high at low prevalence.

---

### 4. Monitoring

1. **Drift detection**: monitor distribution of features and score calibration curve weekly.  
2. **Performance drift**: track precision@k, FPR, and the *expected cost* over sliding windows.  
3. **Alerting rule**: if PPV drops below a threshold or calibration error exceeds 5 %, trigger retraining.

---

### Non‑obvious insight

> Even with perfect ranking, an uncalibrated model can still mislead operational thresholds because the *posterior probability* (needed for cost‑optimal decision) is distorted. Calibration transforms the ROC into a reliable mapping from score to true fraud likelihood, making threshold choice mathematically sound rather than heuristic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
