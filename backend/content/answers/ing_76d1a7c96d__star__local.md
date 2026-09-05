---
qid: ing_76d1a7c96d__star__local
question: 'Explain: might be subscriber information it might be'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 347
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:29-05:00'
sources: []
---

**Situation:**  
In a telecom analytics project, our product team wanted to predict which customers were likely to churn within the next quarter. We had access to detailed subscriber information—usage logs, billing history, and support tickets—but the initial churn model performed poorly (AUC 0.68).

**Task:**  
I was tasked with improving the predictive power by extracting more meaningful features from the raw subscriber data and integrating them into a new model.

**Action:**  
First, I parsed the usage logs to compute weekly peak‑usage times and variance across channels; then I engineered a “behavioral entropy” metric that captures how regularly a customer changes their plan. From billing history, I created a rolling average of payment delays and flagged any late payments in the last six months. For support tickets, I applied NLP to classify complaints into categories (billing, service quality, network issues) and counted each type per subscriber. I combined these engineered features with demographic data, trained an XGBoost model, tuned hyperparameters via Bayesian optimization, and performed k‑fold cross‑validation.

**Result:**  
The new model raised the AUC to 0.82, a 14 % lift over the baseline. We identified 1,200 high‑risk subscribers early, allowing the retention team to offer targeted incentives that reduced churn by 18% in the following quarter. I learned that turning raw subscriber logs into domain‑specific metrics—like behavioral entropy—can unlock predictive signals that generic features miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
