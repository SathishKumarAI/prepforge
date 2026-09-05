---
qid: ing_cb15cb6493__eli5__local
question: What does it mean for a classifier to be calibrated? How do you measure
  and fix miscalibration?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 311
total_tokens: 479
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:57:02-05:00'
sources: []
---

Imagine you’re a weather forecaster who says there’s a “60 % chance of rain tomorrow.” A *calibrated* forecast means that, over many days when the forecaster predicts 60 %, it actually rains about 60 % of those times. In AI, a classifier gives a probability for each class (e.g., “this image is a cat” with 0.72). Calibration checks whether those numbers match real outcomes.

**How to measure it:**  
1. Group predictions into bins (0–10 %, 10–20 %, …).  
2. For each bin, compute the *average predicted probability* and the *actual fraction of positives*.  
3. Plot them or calculate a simple error metric (e.g., Brier score). If the points lie on the diagonal line y = x, the model is calibrated.

**How to fix miscalibration:**  
- **Platt scaling:** Fit a tiny logistic regression on the validation set to adjust probabilities.  
- **Isotonic regression:** A non‑parametric method that preserves order while reshaping the curve.  
Both keep the ranking of predictions (which samples are more likely) but shift the numbers so they match reality.

So, calibration is about aligning “I think it’s 70 % likely” with what actually happens, and we tune the model’s output probabilities until that alignment improves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
