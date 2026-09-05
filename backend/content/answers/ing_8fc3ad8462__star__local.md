---
qid: ing_8fc3ad8462__star__local
question: 'Explain: Pitfall 16: Not Managing Time — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 323
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:31-05:00'
sources: []
---

**Situation** – In early 2024 I led a cross‑functional team developing an NLP model to auto‑classify customer support tickets for a telecom client. The sprint was only six weeks, and we had no dedicated project manager.

**Task** – Deliver a production‑ready pipeline with <2 % misclassification while keeping the data labeling schedule on track.

**Action** – I broke the work into micro‑tasks and used Jira Epics to map each model component (data ingestion, preprocessing, fine‑tuning, evaluation) against a Gantt chart. Every Monday we had a 15‑minute stand‑up to review burn‑down and adjust priorities. When the labeling queue lagged, I re‑allocated two senior engineers from feature engineering to assist with annotation scripts, cutting the wait time by 40 %. I also instituted a “time‑box” for hyperparameter sweeps: we capped each experiment at four hours, using Optuna’s pruning to stop underperforming trials early. This saved us roughly 30 % of compute cost.

**Result** – We completed the sprint two days ahead, deployed a model with 97.8 % accuracy, and reduced labeling backlog by 60 %. I learned that proactive time tracking and flexible resource re‑allocation are critical in AI projects where data pipelines can become bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
