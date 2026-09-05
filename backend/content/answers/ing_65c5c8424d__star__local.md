---
qid: ing_65c5c8424d__star__local
question: 'Explain: Otherwise it''s irritating. It causes some cognitive'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 318
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:25-05:00'
sources: []
---

**Situation**  
During a fraud‑detection project for a fintech client, the model’s precision dropped to 78 % after deploying the new version that included an extra feature engineered from transaction timestamps. The low score meant many legitimate users were flagged and had to be manually reviewed, clogging our ops queue.

**Task**  
I needed to identify why adding that timestamp feature hurt performance and restore precision above 90 % without sacrificing recall.

**Action**  
First I plotted the feature distribution against label classes and discovered a strong class imbalance: the new feature correlated with a rare “high‑risk” pattern, inflating false positives. I then applied SMOTE to balance the minority class in training, switched from a single logistic regression to an ensemble of XGBoost trees, and tuned the threshold using ROC‑curve analysis. I also set up a pipeline that automatically retrains every week on fresh data and uses A/B testing to compare precision/recall before promotion.

**Result**  
Precision rose to 92 %, recall stayed at 88 %. Manual review tickets dropped by 65 % per month, freeing the ops team for higher‑value tasks. I learned that seemingly helpful features can introduce bias if not evaluated with proper class‑balance checks and that automated retraining pipelines are critical for maintaining model health in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
