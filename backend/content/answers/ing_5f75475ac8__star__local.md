---
qid: ing_5f75475ac8__star__local
question: You have 48 hours before a demo to a Fortune 500 executive team, using their
  data. What do you build and what do you deliberately cut?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 345
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:22-05:00'
sources: []
---

**Situation** – Three days ago we got an urgent request from the finance division of a Fortune 500 company: they needed a live demo showing how our AI could flag potential fraud in their transaction logs before the executive board meeting tomorrow. Their data set is massive—over 10 million rows—and they only have a few hours to review the results.

**Task** – Deliver a clean, actionable prototype that runs within 48 hours, demonstrates high‑precision anomaly detection on real data, and can be easily extended later for production use.

**Action** – I scoped the problem to a supervised model with engineered features (transaction amount, time of day, merchant category) and used a lightweight XGBoost pipeline. To stay on schedule I built a Docker container that pulls the latest CSV from their S3 bucket, trains the model in under 20 minutes, and outputs a ranked list of suspicious IDs to an S3 “results” folder. I deliberately cut the explainability layer (SHAP plots) for this demo—time‑consuming, but we can add it later—and skipped hyperparameter sweeps; instead I used default XGBoost settings that already achieve ~92 % precision on our validation split.

**Result** – The demo ran smoothly, produced a 1.2‑second inference per transaction, and flagged 0.8 % of the batch as high risk—exactly what the executives wanted to see. I learned that when under extreme time pressure, prioritizing model speed and simplicity over feature richness delivers more business value than chasing perfect accuracy or full interpretability in a single iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
