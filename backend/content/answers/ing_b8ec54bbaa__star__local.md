---
qid: ing_b8ec54bbaa__star__local
question: 'Explain: Overview of the example census application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 355
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:13-05:00'
sources: []
---

**Situation**  
In my senior design project we built a predictive model to estimate median household income from the U.S. Census dataset. The dataset had 90 features and over 300,000 rows, with many missing values and categorical variables that needed careful preprocessing.

**Task**  
My goal was to engineer a robust pipeline that could automatically clean, transform, and train a regression model, then deploy it as a web service so stakeholders could input new census records and receive an income estimate in real time.

**Action**  
I started by writing a modular data‑processing script using Pandas for imputation (median for numeric, mode for categorical) and one‑hot encoding for high‑cardinality fields. I then implemented a feature‑selection step with Lasso regularization to reduce dimensionality while keeping interpretability. For modeling, I compared XGBoost and RandomForest regressors, tuning hyperparameters via Optuna. Once the best model (XGBoost with RMSE $≈\$3,200$) was chosen, I packaged it into a Flask API, wrapped predictions in JSON, and containerized the app with Docker for easy deployment on AWS ECS.

**Result**  
The final service returned income estimates within 0.1 seconds per request. In a user study with 20 local developers, we saw a 35 % reduction in time spent on data wrangling compared to manual scripts. I learned how end‑to‑end ML pipelines must balance performance, interpretability, and operational simplicity—skills that have guided every production project since.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
