---
qid: ing_334e0b594f__star__local
question: 'Explain: Medical Insurance — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 392
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:07-05:00'
sources: []
---

**Situation** – In my last role I was part of a product team building an upsell module for a health‑insurance provider. The company wanted to increase the conversion rate for “Join Us” add‑on plans, but our marketing data showed only a 12 % uptake despite a 35 % interest survey response.

**Task** – Build a machine‑learning model that predicts which prospects are most likely to click “Join Us” so we could target them with personalized offers and reduce wasted spend on low‑value leads.

**Action** – I gathered the last two years of CRM logs, claim histories, and behavioral data from our web portal. Using Python/SQL, I engineered features such as claim frequency, average cost per visit, and time since last policy renewal. After a quick EDA in Jupyter, I tried Random Forests, Gradient Boosting, and XGBoost; the latter gave the best AUC (0.82). I performed 5‑fold cross‑validation, tuned hyperparameters with Optuna, and deployed the model to our staging environment via Flask API. Finally, I set up a feedback loop that logged conversion outcomes back into the feature store for continual retraining.

**Result** – The targeted campaign ran over three weeks; click‑through rose from 12 % to 27 %, and new policy sign‑ups increased by 18 %. We cut marketing spend on low‑probability leads by 25 %. I learned how to balance model performance with interpretability for stakeholder buy‑in, and the importance of end‑to‑end pipelines that feed real business decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
