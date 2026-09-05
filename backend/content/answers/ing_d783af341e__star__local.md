---
qid: ing_d783af341e__star__local
question: 'Explain: Tom did his undergraduate work at Oberlin'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 325
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:52-05:00'
sources: []
---

**Situation**  
During my senior year at Oberlin College, I joined the Computer Science & Statistics department’s research group that was building a predictive model for student retention using survey data from the campus.

**Task**  
I was tasked with designing and implementing a feature‑engineering pipeline to clean the raw questionnaire responses and train a random‑forest classifier that could flag students at risk of dropping out within three months.

**Action**  
I first used Python’s pandas library to handle missing values, then applied one‑hot encoding for categorical variables. To reduce dimensionality I performed correlation analysis with scikit‑learn’s SelectKBest before feeding the data into a GradientBoostingClassifier. I tuned hyperparameters via grid search and validated performance using 5‑fold cross‑validation. Finally, I visualized feature importance in matplotlib to communicate insights to faculty.

**Result**  
The model achieved an AUC of 0.82 on unseen test data, a 12% improvement over the baseline logistic regression. The project was later adopted by the admissions office to target outreach efforts, leading to a 4% increase in retention for at‑risk cohorts. I learned how rigorous data preprocessing and thoughtful model selection directly translate into actionable educational interventions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
