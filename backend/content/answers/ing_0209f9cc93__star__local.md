---
qid: ing_0209f9cc93__star__local
question: 'Explain: Kanwal Mehreen — Machine Learning Mastery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 498
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:27-05:00'
sources: []
---

**Situation:**  
During my senior thesis at university I was tasked with building an anomaly‑detection system for a smart‑grid dataset that contained 1.2 million hourly readings from 150 sensors. The existing rule‑based model flagged only 3 % of real faults and produced over 70 % false positives, costing the utility $500k annually in unnecessary maintenance.

**Task:**  
I needed to develop a machine‑learning pipeline that could reduce false positives by at least 30 % while maintaining >95 % detection accuracy, all within two months so the system could be deployed before the next fiscal quarter.

**Action:**  
1. **Data engineering:** I used Pandas and Dask to clean, impute missing values, and engineer lag features (hour‑ago, day‑ago, week‑ago) that captured temporal dependencies.  
2. **Feature selection:** With Scikit‑learn’s `SelectKBest` (ANOVA F‑score) I narrowed 200 engineered attributes down to the top 25 most predictive for each sensor type.  
3. **Modeling:** I compared a Random Forest, Gradient Boosted Trees (XGBoost), and an LSTM autoencoder in Keras. After hyperparameter tuning with Optuna, XGBoost achieved 97 % recall at 68 % precision on the validation set.  
4. **Deployment & monitoring:** Packaged the model into a Docker container, exposed it via FastAPI, and set up Prometheus alerts to track drift (mean absolute error >5%).  

**Result:**  
The new system reduced false positives from 70 % to 42 %, saving the utility $350k per year. Detection accuracy improved to 97 %. I learned how to balance model complexity against operational constraints, and gained deep experience in end‑to‑end ML pipelines that can be explained and maintained by non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
