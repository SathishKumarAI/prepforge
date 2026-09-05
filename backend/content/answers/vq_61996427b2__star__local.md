---
qid: vq_61996427b2__star__local
question: What is the definition of recall?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 305
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:22-05:00'
sources: []
---

**Situation**  
During a recent fraud‑detection project at my fintech client, our model was flagging too many legitimate transactions, hurting customer experience. The business insisted on keeping the false‑positive rate below 2%, but we were stuck with a recall of only 78%.

**Task**  
I had to boost the model’s recall—i.e., the proportion of actual fraud cases correctly identified—without letting precision drop past the threshold.

**Action**  
First, I re‑examined the training labels and discovered an imbalance: only 1.5% of transactions were fraudulent. I applied SMOTE to synthesize minority samples and retrained a gradient‑boosting classifier in XGBoost, tuning the `scale_pos_weight` parameter to penalize missed frauds more heavily. I also introduced a cost‑matrix loss function that weighed false negatives 10× higher than false positives. After iterating on feature engineering (adding time‑of‑day and device fingerprint features), I ran k‑fold cross‑validation, selecting the model with the best F1 score.

**Result**  
Recall jumped from 78% to 92%, while precision stayed at 98%. The fraud loss rate fell by 35%, saving the company roughly $3.2 M annually. I learned that carefully balancing class weighting and cost functions can turn a metric bottleneck into a business win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
