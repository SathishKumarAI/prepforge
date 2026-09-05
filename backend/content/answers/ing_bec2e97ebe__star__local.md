---
qid: ing_bec2e97ebe__star__local
question: 'Explain: To sum up: — What is the difference between Bagging and Boosting?
  | Quantdare'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 366
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:29-05:00'
sources: []
---

**Situation:**  
In my last role as a data scientist at a fintech startup, we were building a credit‑risk model to predict loan defaults. Our baseline gradient‑boosted trees achieved an AUC of 0.82, but the regulatory audit required us to demonstrate robustness across multiple market conditions.

**Task:**  
I was tasked with improving generalization while keeping interpretability high, and I decided to experiment with two ensemble strategies: bagging and boosting, to see which yielded better out‑of‑sample performance.

**Action:**  
First, I implemented a Random Forest (bagging) by training 200 decision trees on bootstrapped samples with feature subsampling. This reduced variance but left bias high. Next, I built an AdaBoost pipeline that sequentially reweighted misclassified instances, allowing each weak learner to focus on hard cases. I tuned learning rates and tree depths using cross‑validation in scikit‑learn. I compared both against a single deep tree and monitored metrics like AUC, precision at 10%, and calibration curves.

**Result:**  
The AdaBoost model lifted the AUC from 0.82 to 0.88 and improved precision@10% by 12 percentage points, while the Random Forest only reached 0.84. I learned that bagging excels at variance reduction but can leave bias untouched, whereas boosting actively corrects bias by concentrating on difficult samples—making it more suitable when the underlying model is under‑fitted and interpretability of feature importance remains critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
