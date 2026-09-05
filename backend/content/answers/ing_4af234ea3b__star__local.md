---
qid: ing_4af234ea3b__star__local
question: 'Explain: What we’re building—and why — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:58:15-05:00'
sources: []
---

**Situation:**  
At Sierra I joined the data science team to tackle a stagnant career‑placement funnel for new hires—only 35 % of candidates landed roles within three months, and recruiters spent an average of 6 hours per applicant manually scoring fit.

**Task:**  
I was tasked with building an end‑to‑end ML platform that could automatically match candidate profiles to open positions, reduce recruiter effort by 50 %, and lift the placement rate above 45 % within six months.

**Action:**  
First, I engineered a feature set combining structured résumé fields (experience, skills) with NLP embeddings from candidates’ cover letters using spaCy’s transformer pipeline. Next, I trained a gradient‑boosted decision tree (XGBoost) to predict fit scores, tuning hyperparameters via Bayesian optimization in Optuna and validating on a 70/30 split. To ensure interpretability for recruiters, I integrated SHAP values into the dashboard so they could see which skills drove each match. Finally, I deployed the model as a REST API behind FastAPI, containerized it with Docker, and orchestrated scaling via Kubernetes, monitoring latency in Grafana.

**Result:**  
Within five months we saw placement rates climb to 48 % and recruiter time drop from 6 to 3 hours per applicant—cutting costs by $120K annually. I learned that balancing predictive power with explainability is key for user trust, and that a well‑instrumented deployment pipeline accelerates feature delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
