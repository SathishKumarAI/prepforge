---
qid: ing_b95f7d9c17__star__local
question: 'Explain: Microsoft Custom Problems (2025-2026) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 333
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:03-05:00'
sources: []
---

**Situation:**  
At my previous role I was leading a fraud‑detection project for an online payments platform that had just integrated Azure Machine Learning into its pipeline. The model’s precision dropped from 92% to 85% after the launch of a new merchant onboarding feature, and we were under pressure to meet a quarterly compliance audit deadline.

**Task:**  
I needed to rebuild the classification model using Microsoft Custom Problems (a recent Azure ML capability) so that it could handle evolving data distributions while staying within the 2‑hour retraining window required by our DevOps schedule.

**Action:**  
First, I mapped the fraud score output to a custom “RiskScore” problem type in Azure ML. Using AutoML with the Custom Problem setting, I specified the target as a bounded continuous variable (0–1) and added feature importance constraints to keep the model interpretable for compliance reviewers. I then leveraged Azure Pipelines to trigger nightly training jobs, integrating HyperDrive for Bayesian optimization across 20 hyperparameter sets. Finally, I deployed the best model via ACI with an end‑to‑end scoring service that automatically logged predictions to Application Insights.

**Result:**  
The new Custom Problem model lifted precision back to 91% and reduced false positives by 18%, keeping us compliant. Deployment time dropped from 4 hours to just under 2, meeting the audit schedule. I learned how Azure’s Custom Problems can streamline target definition and accelerate iterative ML cycles in regulated environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
