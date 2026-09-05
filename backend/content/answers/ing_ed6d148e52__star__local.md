---
qid: ing_ed6d148e52__star__local
question: 'Explain: Netflix Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 351
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:38-05:00'
sources: []
---

**Situation**  
When I joined the data science team at a streaming startup, we were tasked with designing a “custom problem” pipeline to help Netflix predict viewer churn for specific niche genres—something the company hadn’t done before.

**Task**  
I needed to build an end‑to‑end system that could ingest millions of user interaction logs, train a lightweight model per genre, and deploy it so that product managers could see weekly churn risk scores in real time.

**Action**  
First I built a Spark streaming job to clean and feature‑engineer clickstreams (watch time, pause frequency, skip rate). I then used LightGBM to train separate models for each of the 12 niche genres, tuning hyperparameters with Optuna to keep inference latency under 5 ms. For deployment I containerized the models with Docker, exposed them via a FastAPI endpoint, and set up an automated CI/CD pipeline in GitHub Actions that retrained every night on fresh data. Finally, I created a Grafana dashboard that plotted the churn risk scores against actual churn events.

**Result**  
The new custom‑problem system reduced genre‑specific churn by 12 % over three months (from 8.7 % to 7.7 %). Inference latency stayed below 4 ms, keeping the user experience smooth. I learned how to balance model complexity with real‑world deployment constraints and the importance of continuous monitoring for production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
