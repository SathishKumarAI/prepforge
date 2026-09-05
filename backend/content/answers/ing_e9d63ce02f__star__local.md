---
qid: ing_e9d63ce02f__star__local
question: 'SQL vs Pandas vs AI Agents: Which Solves Analytics Problems Best?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 278
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:58-05:00'
sources: []
---

**Situation:**  
At my last company we had to deliver a weekly dashboard that tracked customer churn across three regions. The raw data lived in a PostgreSQL warehouse, but analysts complained the queries were slow and the team was stuck on manual Excel work.

**Task:**  
I needed to replace the ad‑hoc SQL reports with an automated, scalable solution that could ingest new metrics daily and surface actionable insights without manual intervention.

**Action:**  
First I wrote a lightweight ETL in Pandas to pull the latest 1.2 million rows, clean missing values, and compute rolling churn rates. Next, I deployed a simple rule‑based AI agent using scikit‑learn’s RandomForest to flag high‑risk accounts, packaging it as an Airflow DAG that ran nightly. Finally, I exposed the results through a FastAPI endpoint so BI tools could query JSON instead of raw SQL, dramatically cutting response times.

**Result:**  
Query latency dropped from 45 seconds to under 2 seconds; churn predictions increased accuracy by 12%, leading to a 5% reduction in churn over two quarters. I learned that combining Pandas for data wrangling, AI models for prediction, and lightweight APIs for delivery often beats heavy SQL pipelines when speed and flexibility are critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
