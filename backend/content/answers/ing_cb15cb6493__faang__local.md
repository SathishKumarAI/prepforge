---
qid: ing_cb15cb6493__faang__local
question: What does it mean for a classifier to be calibrated? How do you measure
  and fix miscalibration?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 564
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:48-05:00'
sources: []
---

**Clarify**  
A *calibrated* classifier predicts probabilities that match true outcome frequencies: if it outputs 0.7 for many examples, ≈70 % of them should be positive. I’ll assume a binary setting with a score‑to‑probability mapping and we can access a hold‑out set or cross‑validated predictions.

**Approach**  
1. **Quantify calibration** – use reliability diagrams (bucketed probabilities vs. observed rates) and metrics such as Expected Calibration Error (ECE) or Brier score.  
2. **Diagnose miscalibration** – check if the model is over‑confident (predictions too close to 0/1) or under‑confident.  
3. **Fix** – apply post‑processing calibration methods: Platt scaling, isotonic regression, temperature scaling for deep nets, or recalibrate during training with a calibrated loss (e.g., KL divergence).

**Depth**  
- *ECE*: \( \text{ECE} = \sum_{m=1}^{M}\frac{|B_m|}{N}| \hat{p}_m - o_m |\), where \(B_m\) are bins, \(\hat{p}_m\) the mean predicted probability, and \(o_m\) the empirical frequency.  
- *Platt scaling* fits a sigmoid to logits: \(P(y=1|z)=\frac{1}{1+e^{Az+B}}\).  
- *Isotonic regression* is non‑parametric, fitting a monotone function via PAV algorithm (O(N log N)).  
- *Temperature scaling*: minimize cross‑entropy over validation set with single scalar \(T\): \(P_{\text{temp}}(y|z)=\frac{\exp(z/T)}{\sum_j \exp(z_j/T)}\).  
All preserve rank ordering, so AUC remains unchanged.

**Edge Cases**  
- Extremely imbalanced data: reliability diagrams become noisy; use stratified bins or weighted ECE.  
- Multi‑class problems: extend ECE per class or compute macro/micro averages.  
- Overfitting the calibration set: reserve a separate calibration split or use nested CV.

**Optimize & Communicate**  
Start with temperature scaling (fast, minimal overfit) if using neural nets; fall back to isotonic regression when probability distribution is highly non‑sigmoidal. Emphasize that calibration improves decision‑making thresholds and downstream cost‑sensitive metrics without hurting discrimination. Conclude by noting the trade‑off: more flexible methods reduce bias but may increase variance, so choose based on validation performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
