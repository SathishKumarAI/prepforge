---
qid: ing_859b0838b1__star__local
question: 'Explain: Asset management — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 335
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:11-05:00'
sources: []
---

**Situation** – In my last role at a telecom operator, our network‑equipment inventory was growing to 12 000+ items and the aging hardware list had a 22 % failure rate during the past year, pushing maintenance costs over $4 M annually.

**Task** – I was tasked with building an ML‑driven predictive asset‑health dashboard that could flag high‑risk devices before they failed and suggest optimal replacement windows within our existing procurement cycle.

**Action** – First, I collected 3 years of telemetry (CPU, temperature, error logs) from the CMDB, cleansed it in Airflow, and engineered lag features with Spark. Using LightGBM on a GPU‑enabled Databricks cluster, I trained a binary classifier (precision 0.87, recall 0.81). I wrapped the model into an Azure Function that exposes a REST endpoint; the function feeds predictions back into ServiceNow via its API. On the front end, I built a Power BI report with drill‑through to individual device history and a heatmap of risk zones across our sites.

**Result** – The pilot covered 2 000 assets and reduced unplanned outages by 35 % (≈$1.2 M saved) in six months while cutting maintenance labor hours by 18 %. I learned that marrying domain‑specific feature engineering with a cloud‑native ML pipeline dramatically accelerates time‑to‑value, and that continuous model monitoring is key to sustaining accuracy when equipment wear patterns shift over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
