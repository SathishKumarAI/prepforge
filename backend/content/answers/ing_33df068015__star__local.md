---
qid: ing_33df068015__star__local
question: 'Explain: Investor Relations — Investor Relations | SoftBank Group Corp.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 335
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:22-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the board requested quarterly reports on user acquisition trends and projected revenue to satisfy SoftBank’s investor‑relations team. Our data lake was growing fast, but manual dashboards lagged behind, making it hard to deliver insights in time for the 2 pm investor call.

**Task:**  
Build an automated, real‑time pipeline that pulls raw event logs, applies predictive models to forecast churn and lifetime value, and feeds the results into a Tableau dashboard shared with SoftBank’s IR analysts.

**Action:**  
I set up Airflow DAGs to ingest Kafka streams into Snowflake nightly. Using Python and Scikit‑learn, I trained an XGBoost model on 1 M user records to predict churn probability. I wrapped the model in FastAPI for inference at scale, exposing a REST endpoint that Tableau queries every 15 minutes. To keep models fresh, I scheduled monthly re‑training with feature drift checks and logged performance metrics (AUC = 0.87) into Grafana.

**Result:**  
Investor calls now receive up‑to‑date churn forecasts within minutes of data ingestion, cutting the reporting lag from 48 hours to under 20 minutes. SoftBank’s IR team noted a 30% increase in confidence when reviewing our projections, and we secured an additional $12 M round. I learned how end‑to‑end ML pipelines can directly support high‑stakes financial communications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
