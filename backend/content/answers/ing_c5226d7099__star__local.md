---
qid: ing_c5226d7099__star__local
question: 'Explain: Prediction drift — What is concept drift in ML, and how to detect
  and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 313
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:04-05:00'
sources: []
---

**Situation** – In a credit‑card fraud platform at my previous company, we had a model that flagged transactions as suspicious with an 85 % precision. Three months into production the false‑positive rate began creeping up; new merchant categories and seasonal spending patterns were emerging.

**Task** – I needed to identify whether this was concept drift, quantify its impact, and restore our KPI thresholds without overhauling the entire pipeline.

**Action** – First, I set up a monitoring dashboard that plotted the model’s probability distribution against the actual fraud labels every day. Using the Population Stability Index (PSI) and Kolmogorov‑Smirnov tests on key features, I detected significant shifts in merchant type and transaction amount distributions. To address it, I implemented an online learning loop: every week we retrained a lightweight gradient‑boosted model on the latest two weeks of data, then performed a back‑test against the previous month’s validation set to ensure no performance degradation. We also added a concept‑drift alert that triggered a full re‑training when PSI exceeded 0.2.

**Result** – Within six weeks the false‑positive rate dropped from 18 % to 9 %, restoring our precision to 84 %. The system now self‑adjusts every month, and I learned that continuous monitoring plus incremental retraining can effectively counteract concept drift without costly full pipeline rebuilds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
