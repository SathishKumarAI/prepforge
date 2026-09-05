---
qid: ing_a394c8f294__star__local
question: 'Explain: What is the difference between Bagging and Boosting? | Quantdare'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 295
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:14-05:00'
sources: []
---

**Situation**  
During my senior thesis I had to improve the accuracy of a fraud‑detector for credit‑card transactions. The baseline random forest (bagging) got us ~85% precision, but we needed >90% because false positives cost the bank millions.

**Task**  
I was tasked with exploring ensemble methods that could push performance past 90% while keeping inference time under 50 ms per transaction.

**Action**  
First I implemented a bagged gradient‑boosted tree (XGBoost) to see if combining many weak learners would help. It did raise precision to ~88%, but training was slow and overfitting appeared on the validation set. Next, I switched to AdaBoost with decision stumps as base estimators. By weighting misclassified examples more heavily in each round, the model focused on hard cases. I tuned the learning rate (0.1) and number of rounds (200), then pruned trees to keep latency low. I also added early stopping based on a separate hold‑out set.

**Result**  
AdaBoost achieved 92.3% precision with only a 12 ms inference time, surpassing our target. The experiment taught me that bagging reduces variance by averaging uncorrelated models, whereas boosting reduces bias by sequentially correcting errors—each method suits different data characteristics and performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
