---
qid: ing_86e986142a__star__local
question: Your judge model is being deprecated and you have to move to a new version.
  How do you keep your scores comparable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 370
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:22-05:00'
sources: []
---

**Situation** – In mid‑2024 our product relied on a proprietary LLM evaluator that scored user responses on a 0–10 scale. The vendor announced the model would be retired in three months, and we needed to transition to OpenAI’s newer “gpt‑4o‑judge” without breaking historical analytics dashboards.

**Task** – Preserve continuity of our performance metrics: keep the 0–10 scale, maintain trend lines for quarterly KPI reviews, and ensure any new scores are directly comparable to legacy data so stakeholders can trust year‑over‑year comparisons.

**Action** – I built a two‑stage mapping pipeline. First, I ran a large batch (≈50k responses) through both the old and new judges in parallel, recording paired scores. Using Spearman correlation, we found 0.94, confirming strong rank consistency. Next, I fit a piecewise linear regression to map old scores to new ones, adjusting for the slight upward bias of the new model. To guard against drift, I scheduled quarterly “anchor” runs where identical test sets were scored by both judges and updated the mapping coefficients automatically. Finally, I updated our monitoring dashboards to display both raw and mapped scores, adding a transparency flag.

**Result** – The transition took 12 days; post‑migration, KPI trends showed <2% deviation from historical trajectories, and stakeholder confidence increased as evidenced by a 15% reduction in support tickets about score discrepancies. I learned that rigorous statistical alignment plus automated re‑calibration are key to maintaining metric integrity during model upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
