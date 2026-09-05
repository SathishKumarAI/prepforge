---
qid: vq_c019493ca6__star__local
question: what is feature selection?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 323
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:31-05:00'
sources: []
---

**Situation**  
At my previous company we were building a churn prediction model for a telecom client. The raw dataset had over 400 engineered features from call logs, billing history, and customer support tickets. When we fed the full set into a gradient‑boosted tree, training time ballooned to 45 minutes per fold and the validation AUC hovered around 0.73.

**Task**  
I was tasked with reducing dimensionality while keeping—or improving—the model’s predictive power, so we could iterate faster and deploy on edge devices with limited memory.

**Action**  
First I ran a correlation heatmap and removed features with > 0.95 pairwise correlation to avoid redundancy. Next, I applied mutual‑information ranking to capture non‑linear relationships and kept the top 80 scores. I then used recursive feature elimination (RFE) with cross‑validated XGBoost as the estimator, pruning until the validation AUC plateaued. Finally, I performed a sanity check by training on the reduced set in an automated pipeline that logged runtime and memory usage.

**Result**  
The final model used only 42 features, cut training time to under 8 minutes, and achieved an AUC of 0.76—an improvement of 3 % over the full‑feature baseline. The project was delivered two weeks early, and I learned that a disciplined combination of statistical filtering and model‑driven RFE often yields the best trade‑off between speed and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
