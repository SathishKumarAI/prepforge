---
qid: ing_c2e3d2249c__star__local
question: What Makes It Special? — Blind 75
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 321
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:36-05:00'
sources: []
---

**Situation** – In my senior thesis I was tasked with predicting student success in an online MOOC where enrollment spiked from 2,000 to over 12,000 participants during the COVID‑19 surge. The existing rule‑based grading system lagged behind, missing 30% of students who dropped out early.

**Task** – Build a real‑time churn model that could flag at-risk learners within two weeks of enrollment so the support team could intervene before they left the course.

**Action** – I cleaned the raw clickstream logs (≈1.2 GB/day) with Pandas, engineered features such as session frequency, video completion ratio, and forum sentiment using spaCy. I then trained an XGBoost classifier tuned via Bayesian optimization on a 70/30 train/test split, achieving 0.87 AUC. To deploy, I containerized the model in Docker, set up an AWS Lambda endpoint behind API Gateway, and wired it to the LMS’s webhook so every new enrollment triggered a prediction within seconds.

**Result** – The churn‑prediction system reduced dropout rates by 18% (from 27% to 9%) over the next semester, saving the university $45K in remediation costs. I learned that model performance is only part of success; integrating ML into production pipelines with proper monitoring and feedback loops is what truly makes it special.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
