---
qid: ing_b6f54930f2__star__local
question: 'Explain: Sample Note'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 379
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:10-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with building a churn prediction model for our SaaS product. The training set had 10,000 users but the active cohort we cared about—enterprise customers—made up only 2% of that data.

**Task**  
I needed to create a model that accurately predicted churn for those enterprise accounts without drowning in noise from the bulk of free or small‑business users.

**Action**  
I applied *stratified sampling* to construct a balanced training set: first, I extracted all 200 enterprise records; then I sampled an equal number of non‑enterprise users randomly. To preserve the true distribution for evaluation, I used *importance weighting* during model fitting—assigning each enterprise sample a weight of \( \frac{0.02}{0.2} = 0.1\) and each non‑enterprise sample a weight of \( \frac{0.98}{0.8} = 1.225\). I trained an XGBoost classifier with these weights, tuned hyperparameters via Bayesian search, and validated using stratified k‑fold cross‑validation.

**Result**  
The weighted model achieved an AUROC of 0.87 on the enterprise cohort versus 0.71 when using the naïve approach—an improvement of 22%. The feature importance highlighted that “contract renewal date” was the top predictor, prompting a proactive outreach program that reduced churn by 15% in the following quarter. I learned that careful sampling and weighting can turn a class‑imbalanced dataset into actionable insights without sacrificing overall model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
