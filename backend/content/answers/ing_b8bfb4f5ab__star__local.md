---
qid: ing_b8bfb4f5ab__star__local
question: 'Explain: Internal Elo-based Evaluation — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 384
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:43-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had a growing suite of AI models (fraud detection, recommendation, risk scoring) but no systematic way to compare their real‑world performance. Stakeholders were pulling reports from different dashboards, leading to conflicting claims about which model was “best.”  

**Task** – I was asked to design an internal, repeatable evaluation framework that could rank models in a single metric, update continuously as new data arrived, and surface actionable insights for the ML Ops team.

**Action** – I built an Elo‑based scoring system inspired by chess rankings. Each model starts at 1500; after every batch of production predictions (≈10k transactions), we compare its binary outcome against ground truth and the outcomes of all other models on that same batch. Using a standard Elo update formula, each win/loss adjusts a model’s rating by Δ = K * (S – E), where S is 1 for correct prediction and 0 otherwise, and E is the expected score derived from current ratings. I implemented this in Python with Airflow DAGs to run nightly, stored ratings in PostgreSQL, and visualized trends in Grafana. We also set a “skill level” threshold; models below it were flagged for retraining.

**Result** – Within three months the Elo dashboard became the go‑to reference for model selection: we reduced the time to deploy a new fraud model from 10 days to 4, and overall fraud loss dropped by 18 % as the top‑ranked model was prioritized. The exercise taught me how probabilistic ranking systems can bring clarity to noisy ML metrics and foster data‑driven decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
