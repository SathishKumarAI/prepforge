---
qid: ing_468d8b7fec__star__local
question: 'Explain: Losses, softmax, temperature — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 311
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:47-05:00'
sources: []
---

**Situation:** While leading a fraud‑detection prototype at my previous fintech company, our model’s confidence scores were too extreme—either almost 0 or 1—making it hard to calibrate alerts for compliance.

**Task:** I needed to adjust the output distribution so that probabilities reflected uncertainty better, without hurting overall accuracy, and then evaluate how the changes impacted loss and training stability.

**Action:** First, I switched from a plain cross‑entropy loss to a label‑smoothed version (adding ε=0.1) to reduce overconfidence. Then I introduced a temperature parameter T>1 in the softmax layer:  
\( \text{softmax}_i = \frac{\exp(z_i/T)}{\sum_j \exp(z_j/T)}\).  
Increasing T dampened logits, yielding softer probability distributions. During training I monitored the KL‑divergence loss to ensure it stayed below 0.05 nats, and used TensorBoard to track calibration plots (ECE dropped from 12% to 5%).

**Result:** The model’s AUC remained at 0.93 while the calibrated scores improved alert triage efficiency by 18%. I learned that temperature tuning is a lightweight yet powerful tool for probability calibration, especially when combined with label smoothing to keep loss gradients informative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
