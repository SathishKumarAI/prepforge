---
qid: ing_ef5a3f115d__star__local
question: 'Explain: Company context — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 316
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:38-05:00'
sources: []
---

**Situation** – At my previous fintech startup we were launching a new credit‑scoring product for small businesses. The data science team had built an initial model that scored 78% accuracy, but senior management insisted on at least 85% before the regulatory audit in Q3. They asked me to figure out how AI could help us boost performance without overhauling the entire pipeline.

**Task** – My goal was to identify a lightweight AI enhancement that could lift accuracy by at least 7 points within two weeks, keeping the model explainable for compliance purposes.

**Action** – I started by profiling feature importance with SHAP and discovered that our categorical encoding was hurting minority business types. I implemented a target‑encoding scheme coupled with an XGBoost ensemble, then used Optuna to tune hyperparameters (max_depth=6, learning_rate=0.05). To keep the model interpretable, I added a rule‑based post‑processor that flagged any score above 90% for manual review. All changes were versioned in DVC and deployed via a FastAPI endpoint behind our Kubernetes cluster.

**Result** – Accuracy jumped from 78% to 86% on our holdout set, and the audit passed with no objections. We also cut inference time by 30%, freeing up GPU resources for other projects. I learned that targeted feature engineering and lightweight ensembles can deliver regulatory‑grade performance faster than building a brand‑new model from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
