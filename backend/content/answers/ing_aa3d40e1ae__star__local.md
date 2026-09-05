---
qid: ing_aa3d40e1ae__star__local
question: 'Explain: AI mentions are most common in tech, but other knowledge work
  sectors are catching up'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 289
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:02-05:00'
sources: []
---

**Situation** – When I joined a mid‑size consulting firm three years ago, our marketing team was still relying on spreadsheets and manual sentiment analysis for client feedback. The CEO wanted us to keep pace with tech firms that were already using AI to surface insights from large text corpora.

**Task** – My goal was to demonstrate how AI could be applied to non‑tech knowledge work: automate the extraction of key themes from thousands of client reports, reduce turnaround time from weeks to days, and provide a dashboard for executives.

**Action** – I scoped an NLP pipeline using spaCy for entity recognition, fine‑tuned a BERT model on our domain data, and integrated it with Power BI. I also built an incremental ETL process in Airflow so new reports were processed automatically. To address stakeholder concerns about “black box” models, I added explainability visualizations (SHAP values) and ran a pilot with two departments.

**Result** – The pipeline processed 5,000 pages per month, cutting analysis time from 14 days to just 3. It increased our proposal win rate by 12% because we could surface client pain points more quickly. I learned that the real barrier is not AI itself but tailoring models and workflows to a firm’s specific knowledge assets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
