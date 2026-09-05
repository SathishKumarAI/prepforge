---
qid: ing_d12785b04b__star__local
question: What’s next? — Hello, World! - Zerodha Tech Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:27:51-05:00'
sources: []
---

**Situation:**  
During my senior year I led a capstone project for a fintech startup that wanted an automated fraud‑detection model for micro‑transactions. Their existing rule‑based system flagged only 12% of fraudulent activity and was generating thousands of false positives, costing them $35k monthly in investigation costs.

**Task:**  
I needed to build a predictive model that increased true‑positive rate by at least 30% while keeping the false‑positive rate below 5%, all within a two‑week sprint.

**Action:**  
I started with an exploratory data analysis in Python, using pandas and matplotlib to uncover feature importances. I engineered new features (transaction velocity, device entropy) and applied SMOTE for class imbalance. For modeling, I used XGBoost, tuning hyperparameters via Optuna and cross‑validating on a stratified 5‑fold split. I deployed the model as a REST API in FastAPI, containerized with Docker, and set up A/B testing on our staging environment.

**Result:**  
The final model achieved an F1 score of 0.82, boosting fraud detection by 38% and cutting false positives to 4.2%. The startup saved roughly $48k annually and was able to scale the solution to 100k transactions per day. I learned that marrying robust feature engineering with automated hyper‑parameter tuning can dramatically improve real‑world ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
