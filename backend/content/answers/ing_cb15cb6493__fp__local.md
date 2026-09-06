---
qid: ing_cb15cb6493__fp__local
question: What does it mean for a classifier to be calibrated? How do you measure
  and fix miscalibration?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 447
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:12:18-05:00'
sources: []
---

A **classifier is calibrated** when its *predicted probability* \(p\) equals the true empirical frequency of the positive class among instances it assigns that score.  
Formally, for any score value \(s\),

\[
P(Y=1 \mid f(x)=s)=s .
\]

Why must this hold?  
In downstream decision‑making (e.g., medical triage or risk‑based pricing), one often uses the predicted probability to compute expected loss or benefit. If \(p\) overestimates the true frequency, a threshold that seems safe will actually expose us to more risk; if it underestimates, we waste resources treating too many negatives. Thus calibration is an *information‑theoretic* requirement: the model’s output must be a truthful estimate of likelihood.

### Measuring miscalibration  
The **Expected Calibration Error (ECE)** partitions predictions into bins \(B_k\) and averages \(|\text{accuracy}(B_k)-\text{confidence}(B_k)|\). More robust is the **Maximum Calibration Error (MCE)**, taking the worst bin. A visual tool is a *reliability diagram*: plot mean confidence vs. observed accuracy per bin; the closer to the diagonal, the better.

### Fixing it  
1. **Post‑processing**: Platt scaling (logistic regression on logits) or isotonic regression fit a monotone mapping \(g\) such that \(\hat{p}=g(f(x))\).  
2. **Re‑training with calibrated loss**: Use *Brier score* or *negative log‑likelihood* as the objective; adding a regularizer encouraging low variance across logits can help.  
3. **Ensemble smoothing**: Averaging over many models reduces variance and often improves calibration.

A non‑obvious insight: **Calibration is independent of accuracy**. A highly accurate but poorly calibrated model may still be useful for ranking (e.g., sorting candidates) yet fail in any application that requires true probability estimates. Hence, always assess ECE/MCE alongside conventional metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
