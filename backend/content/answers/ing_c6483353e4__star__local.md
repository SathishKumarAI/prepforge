---
qid: ing_c6483353e4__star__local
question: 'Explain: Questions — Abridge Software Engineer Interview Experience - United
  States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 302
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:23-05:00'
sources: []
---

**Situation:** While working at a fintech startup, our fraud detection model was flagging 12% of legitimate transactions as suspicious, causing customer churn and a backlog for the compliance team.

**Task:** I had to reduce false positives by at least 30% without hurting true positive rates, and deliver the solution within two sprint cycles so we could meet an upcoming regulatory audit deadline.

**Action:** I started with a feature importance analysis using SHAP values on our gradient‑boosted tree model. This revealed that several engineered categorical features were leaking timestamp information, inflating false alarms. I redesigned those features, applied one‑hot encoding for critical transaction types, and introduced a temporal decay factor to dampen recency bias. Next, I tuned the model’s class weights in XGBoost and experimented with a two‑stage pipeline: a lightweight logistic regression filter followed by the boosted tree to reduce computational load. Finally, I set up A/B testing on a 5% traffic slice, monitoring precision‑recall curves in real time.

**Result:** The false positive rate dropped from 12% to 7%, a 42% improvement, while true positives improved marginally by 2%. Compliance staff reported a 60% reduction in manual reviews, and we passed the audit with zero infractions. I learned that careful feature inspection combined with staged modeling can deliver measurable gains faster than pure hyper‑parameter sweeps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
