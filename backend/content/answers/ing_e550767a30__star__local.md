---
qid: ing_e550767a30__star__local
question: 'Explain: Workflows vs agents — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 373
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:30-05:00'
sources: []
---

**Situation:** In a fintech startup I was tasked with automating the monthly risk‑report generation that previously took our data team three days of manual SQL queries, Excel wrangling, and PDF formatting.

**Task:** Deliver an end‑to‑end pipeline that could pull raw market feeds, run statistical models, generate visual dashboards, and email a ready‑to‑ship report to stakeholders—all within 8 hours, with minimal human oversight.

**Action:** I first designed a **workflow** using Airflow: a DAG of tasks—extract (Kafka consumer), transform (Spark job), load (PostgreSQL), and render (Plotly + Jinja2). Each node had clear inputs/outputs and retry logic. Next, to reduce the need for hand‑coding every new report type, I built an **agent** layer on top: a lightweight Python agent that listens for “report requests” via a REST API, dynamically composes a sub‑workflow by selecting pre‑built tool modules (e.g., “apply GARCH model,” “create heatmap”), and injects them into the DAG. The agent also uses OpenAI’s GPT‑4 to interpret natural‑language specifications (“Show volatility trend for tech stocks”) and map them to the appropriate tools.

**Result:** Production time dropped from 3 days to under 8 hours, with a 40% reduction in manual errors. The agent layer cut development time for new report types by 70%, letting analysts focus on insights rather than code. I learned that workflows provide deterministic orchestration, while agents add an adaptive, intent‑driven layer that can orchestrate tools on demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
