---
qid: ing_43463baa5e__star__local
question: How do you detect and handle model drift in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 334
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:25-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had a credit‑scoring model deployed on AWS SageMaker that was feeding risk scores into our underwriting pipeline. Two months after launch, the approval rate started creeping up from 28% to 35%, and we noticed an uptick in defaults.

**Task:**  
I needed to confirm whether this shift was due to model drift, identify its source, and bring performance back within acceptable bounds without disrupting live traffic.

**Action:**  
First, I set up a monitoring stack: CloudWatch metrics for prediction latency, daily drift reports using Evidently’s feature‑level drift checks, and a small holdout test set that mirrored the production distribution. When Evidently flagged significant changes in age and income distributions, I ran an SHAP analysis to see which features were driving the new predictions. It turned out the model was over‑weighting the “recent credit activity” feature because its distribution had shifted after a regulatory change. I retrained the model with updated weights for that feature, validated it on the holdout set, and deployed the new version via SageMaker’s blue/green rollout to minimize risk.

**Result:**  
After deployment, the approval rate stabilized at 29%, default rates dropped by 12% over the next quarter, and we reduced prediction latency by 15%. I also implemented an automated drift‑alert pipeline that now triggers retraining when any feature’s KS statistic exceeds 0.1, ensuring early detection of future shifts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
