---
qid: ing_9dbaa14d4b__star__local
question: 'Explain: How to Apply — We are hiring interns!'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 296
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:43-05:00'
sources: []
---

**Situation:**  
At my previous startup, the recruiting team was overwhelmed by a surge of internship applications—over 4,000 in a single month—and the manual screening process took weeks per cohort.

**Task:**  
I was tasked with designing an automated model to triage candidates, flag top talent for interviews, and reduce recruiter time by at least 60%.

**Action:**  
Using Python’s scikit‑learn pipeline, I first engineered features from résumé text (skills frequencies, education level, project keywords) via TF‑IDF vectorization. I trained a gradient‑boosted decision tree on a labeled set of past hires vs. non‑hires, tuning hyperparameters with Bayesian optimization in Optuna to balance precision and recall. The model was deployed as an API on AWS Lambda, integrated into the ATS, and visualized with Grafana dashboards for recruiters to review flagged candidates.

**Result:**  
The triage system cut recruiter screening time from 3 weeks to just 2 days per batch, increased interview-to‑offer ratio by 35%, and helped us onboard a cohort of interns who delivered 20% more code contributions than the previous year. I learned that combining domain‑specific feature engineering with automated hyperparameter tuning can deliver tangible hiring efficiencies at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
