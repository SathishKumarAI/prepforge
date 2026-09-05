---
qid: ing_b8fc155897__star__local
question: How do Bagging and Boosting get N learners?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 328
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:13-05:00'
sources: []
---

**Situation**  
At my previous company we were building a fraud‑detection model for credit card transactions. The baseline random forest gave us an AUC of 0.82, but the business required at least 0.88 to reduce false positives.

**Task**  
I needed to create an ensemble that could boost performance without blowing up training time or memory, so we had to decide how many base learners (N) to use for both bagging and boosting strategies.

**Action**  
For bagging I chose **50 decision trees**, each trained on a bootstrap sample of the 1 M transaction dataset using scikit‑learn’s `RandomForestClassifier`. I limited depth to 10 to keep inference fast. For boosting, I used XGBoost with **200 estimators** and a learning rate of 0.05, pruning weak learners early via built‑in regularization. I monitored training loss per iteration and stopped when validation AUC plateaued at iteration 180. Both ensembles were evaluated on a held‑out 100 k set.

**Result**  
The bagged model reached an AUC of 0.85, while the boosted ensemble hit **0.89**, surpassing the target. Runtime stayed under 2 minutes for training and inference was <5 ms per transaction. I learned that choosing N is a trade‑off: more trees improve stability but increase cost; with boosting, fewer learners can be sufficient if early stopping is used, keeping models lean yet powerful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
