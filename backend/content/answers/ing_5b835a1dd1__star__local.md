---
qid: ing_5b835a1dd1__star__local
question: 'Explain: Likelihood and Maximum Likelihood Estimation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:19-05:00'
sources: []
---

**Situation** – While working on a fraud‑detection model for a fintech startup, the validation set showed that our logistic regression was under‑predicting high‑risk transactions by about 30 %. The data were highly imbalanced (1 % fraud), so I needed a better way to fit the probability of fraud given transaction features.

**Task** – Refine the model’s parameter estimates so that the predicted probabilities matched the observed fraud rates, thereby improving ROC AUC and reducing false negatives without blowing up false positives.

**Action** – I switched from using default maximum‑entropy training to a true Maximum Likelihood Estimation (MLE) framework. First, I defined the likelihood function \(L(\theta)=\prod_{i}p(y_i|\mathbf{x}_i;\theta)\), then used gradient ascent with L-BFGS to maximize \(\log L(\theta)\). To handle class imbalance, I incorporated a weighted log‑likelihood (higher weight for fraud cases) and added an L2 regularization term. I also plotted the likelihood surface to ensure convexity and avoided local optima by initializing from several random seeds.

**Result** – The MLE‑trained model raised ROC AUC from 0.82 to 0.89, cut false negatives by 25 %, and maintained a false‑positive rate under 4 %. I learned that explicitly maximizing likelihood, especially with proper weighting for rare events, can dramatically improve probabilistic predictions in skewed datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
