---
qid: ing_606434ec2d__star__local
question: 'Explain: Sources — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 341
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:59-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our loan‑underwriting model was lagging behind the competition because we only had a handful of credit bureau feeds. We needed richer data to improve risk predictions without blowing up costs.

**Task:** I was tasked with sourcing high‑value, low‑latency data streams that could be integrated into our AI pipeline while staying within budget and complying with GDPR.

**Action:** I identified Sarvam AI—a platform that aggregates anonymized transaction, behavioral, and social‑media signals from millions of users in real time. After negotiating a pilot contract, I used their REST API to pull a 30‑day snapshot of transactional patterns for our top 10,000 applicants. I then preprocessed the data with Spark, engineered features like “cash‑flow volatility” and “online purchase frequency,” and fed them into our XGBoost model. To keep latency low, I cached the processed tensors in Redis so inference time dropped from 1.2 s to 0.4 s per request.

**Result:** The enriched dataset boosted our default prediction AUC from 0.71 to 0.83, cut false‑positive approvals by 27%, and saved us $120k annually on credit bureau fees. I learned that the right data source can be a game changer—especially when it balances breadth, privacy, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
