---
qid: ing_989faa0042__star__local
question: 'Explain: I am Mosh Hamedani, so here, so — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 352
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:45-05:00'
sources: []
---

**Situation:**  
During my senior capstone project I was tasked to predict student dropout rates at a large university. The existing dashboard only displayed static enrollment numbers, and the university wanted an actionable forecast to allocate tutoring resources.

**Task:**  
I needed to build a predictive model that delivered at least 80 % accuracy on a hold‑out test set, deploy it as a REST API, and integrate it into the existing data pipeline without exceeding a 10 minute inference time.

**Action:**  
I first performed exploratory data analysis in Jupyter using Pandas and Seaborn to uncover key features such as GPA, attendance, and socioeconomic indicators. After cleaning missing values with Scikit‑learn’s `SimpleImputer`, I engineered interaction terms and applied one‑hot encoding. For modeling I compared a Logistic Regression baseline to a Gradient Boosting Machine (XGBoost). Using 5‑fold cross‑validation, the GBM achieved 84 % accuracy. I tuned hyperparameters via Optuna and pruned the model with `TreeSHAP` for interpretability. Finally, I wrapped the trained model in FastAPI, containerized it with Docker, and deployed to a local Kubernetes cluster.

**Result:**  
The API returned predictions within 0.8 seconds per request, meeting the latency requirement. The university reported a 15 % reduction in dropout rates over the next semester after allocating resources guided by our forecasts. I learned that combining rigorous EDA with modern auto‑ML tools can turn raw data into actionable insights quickly and reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
