---
qid: ing_cb15cb6493__star__local
question: What does it mean for a classifier to be calibrated? How do you measure
  and fix miscalibration?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 329
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:08-05:00'
sources: []
---

**Situation:** In my last role, we built an email spam detector that scored each message with a probability between 0 and 1. Our marketing team noticed the model was overconfident: when it predicted “spam” at 90 % confidence, only about 70 % of those emails were actually spam.

**Task:** I had to ensure the classifier’s probabilities reflected real-world likelihoods—i.e., make it calibrated—so the downstream teams could rely on the scores for automated routing and user notifications.

**Action:** First, I plotted a reliability diagram using scikit‑learn’s `calibration_curve` over 10 bins. The curve lay far above the diagonal, confirming miscalibration. I then applied temperature scaling: added a single scalar parameter \(T\) to the logits before softmax and optimized it on a held‑out validation set via gradient descent (using PyTorch). After re‑scoring, I recomputed the reliability diagram; the curve now hovered close to the 45° line. Finally, I automated this calibration step in our CI pipeline so every new model version is automatically calibrated before deployment.

**Result:** Post‑calibration, the average precision at each confidence bin improved from 70 % to 88 %, and the Brier score dropped from 0.12 to 0.04. The marketing team reported higher trust in automated email routing, and I learned that a simple post‑processing tweak can dramatically improve real‑world model reliability without retraining the entire network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
