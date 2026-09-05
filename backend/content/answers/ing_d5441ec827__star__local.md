---
qid: ing_d5441ec827__star__local
question: How does the classification stage work? — What is the difference between
  Bagging and Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 309
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:31-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with improving our fraud‑detector for a fintech client. The baseline random forest model hit an 85 % accuracy, but the false‑positive rate kept customer support overloaded.

**Task**  
I needed to boost precision without sacrificing too much recall and also compare two ensemble strategies—bagging and boosting—to decide which would be more effective in this domain.

**Action**  
First I built a bagged model: 100 decision trees trained on bootstrap samples of the training set, each tree voting by majority. Then I implemented XGBoost, a gradient‑boosting framework that builds trees sequentially, each focusing on the residuals (errors) of its predecessor. I tuned learning rates, depth, and regularization to avoid overfitting. I also plotted ROC curves for both ensembles and ran 5‑fold cross‑validation.

**Result**  
The bagged model lifted accuracy to 88 % but still had a 12 % false‑positive rate. XGBoost pushed precision to 93 % and recall to 84 %, reducing the false‑positive rate by 30 %. I learned that bagging reduces variance by averaging independent models, while boosting reduces bias by iteratively correcting mistakes—boosting often outperforms bagging when data is noisy but can overfit if not properly regularized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
