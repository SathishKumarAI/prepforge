---
qid: ing_9945f76138__star__local
question: 'Explain: Uber Custom Problems (Machine Coding) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 368
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:05-05:00'
sources: []
---

**Situation** – At my last internship, I was asked to design a recommendation engine for a ride‑sharing app that had just launched a “pooling” feature in three new cities. The data set included millions of rides, driver ratings, and real‑time traffic feeds, but the team only had a week before the launch.

**Task** – My goal was to build a lightweight model that could predict which nearby drivers would accept a pool request with high confidence, reducing wait times by at least 20 % while keeping CPU usage under 0.5 GHz on a mobile edge device.

**Action** – I started by preprocessing the data in Spark (Parquet for fast scans) and engineered features such as “driver proximity,” “current surge multiplier,” and a rolling average of acceptance rates per time slot. I then trained a LightGBM model, tuning hyperparameters with Optuna to balance accuracy and inference latency. To meet the CPU constraint, I used quantized trees (8‑bit weights) and converted the model to ONNX for deployment on Android. Finally, I built an A/B test framework that streamed live predictions back into our monitoring dashboard.

**Result** – The deployed model cut average rider wait time from 4.2 minutes to 3.1 minutes— a 26 % improvement—and increased driver acceptance rates by 12 %. It also stayed well below the CPU budget, earning kudos from product and ops teams for delivering a production‑ready solution under tight constraints. I learned that rigorous feature engineering combined with careful model compression can turn a complex ML problem into an edge‑friendly solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
