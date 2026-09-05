---
qid: ing_cc62f0425b__star__local
question: How do you detect overfitting and underfitting in practice, and what do
  you do about each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 333
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:39-05:00'
sources: []
---

**Situation:**  
In my last role I was building a churn prediction model for a telecom client. The training accuracy hit 98% while the test set hovered around 70%, raising red flags about overfitting.

**Task:**  
I had to diagnose whether we were suffering from overfitting, underfitting, or both, and then adjust our modeling pipeline accordingly so that the model generalized well to new customers.

**Action:**  
First, I plotted learning curves for training vs. validation loss across epochs; the gap was widening, confirming overfitting. I added L2 regularization (α=0.01) and dropped a layer of hidden units. Then I reran cross‑validation, observing a 4% lift in ROC‑AUC on the hold‑out set. To guard against underfitting, I also performed a feature importance sweep with SHAP values; several lagged usage features were consistently low‑impact, so I pruned them and retrained. Finally, I monitored a validation loss curve during production rollout to catch any drift early.

**Result:**  
The final model achieved 85% ROC‑AUC on the test set—a 15-point improvement—and reduced false positives by 30%. I learned that balancing complexity with regularization, coupled with feature pruning guided by SHAP, is key to mitigating both overfitting and underfitting in real deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
