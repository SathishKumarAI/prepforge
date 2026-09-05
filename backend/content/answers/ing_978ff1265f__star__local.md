---
qid: ing_978ff1265f__star__local
question: 'Explain: Results and Discussion — Helix Accelerating Real-World Logistics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 342
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:47-05:00'
sources: []
---

**Situation** – At a mid‑size e‑commerce fulfillment center, the shipping cost was creeping up by 12 % YoY because route plans were generated manually and updated only weekly. I joined the data science team to build an AI that could replan routes in real time using live traffic feeds.

**Task** – Deliver a prototype that reduces average delivery cost per order by at least 5 % within two months, while staying within the existing IT stack (Python, PostgreSQL, Docker) and not exceeding the $20k budget.

**Action** – I first scraped real‑time traffic data from HERE Maps API and merged it with historical GPS logs in a Postgres table. Using scikit‑learn’s RandomForestRegressor, I trained a cost‑prediction model on 100 K samples to estimate fuel & time per leg. Then I built a reinforcement‑learning agent (OpenAI Gym + Stable Baselines) that chose next stops to minimize predicted cost, subject to capacity constraints. The policy was containerized and deployed behind an API gateway; we ran A/B tests against the legacy scheduler.

**Result** – After 30 days of live operation, the new planner cut delivery costs by 6.3 % (≈$350k annually) and reduced average route time by 8 %. I learned that blending classical ML for cost estimation with RL for sequencing can outperform hand‑tuned heuristics, especially when constrained by existing infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
