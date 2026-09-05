---
qid: ing_64e0eb3af1__star__local
question: 'Explain: Evaluation plan — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 364
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:21-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a conversational AI that could translate natural‑language questions into SQL queries against our product analytics database. The beta launch was scheduled for the next sprint, but we had no clear metric to prove its reliability to stakeholders.

**Task** – Design an end‑to‑end evaluation plan that would quantify accuracy, latency, and user satisfaction, while also flagging edge cases that could break downstream reporting pipelines.

**Action** – I first assembled a balanced test set of 5,000 real queries from the helpdesk logs, annotated by domain experts. I then defined three KPIs: (1) *Query Success Rate* (percentage of generated SQL that executed without error), (2) *Execution Time* (average latency < 200 ms), and (3) *User Retention Score* (post‑interaction survey). For robustness, I added a Monte Carlo stress test with 10,000 synthetic utterances covering rare phrasing. We automated the pipeline in Airflow, running nightly evaluations against our staging DB, and visualized results in Grafana dashboards for quick triage.

**Result** – The agent achieved an 88 % success rate on real queries and 92 % on synthetic ones; latency stayed below 180 ms on 95 % of cases. User surveys improved by 15 percentage points compared to the legacy keyword search. The evaluation framework reduced post‑deployment bugs by 40 %, and I learned that a continuous, data‑driven loop is essential for scaling conversational AI in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
