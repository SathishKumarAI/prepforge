---
qid: ing_2614e92144__star__local
question: 'Explain: We don''t really care what are... what — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 330
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:05-05:00'
sources: []
---

**Situation** – While working on the real‑time traffic prediction feature at a ride‑hailing startup, our latency SLA was 200 ms per user request, yet our model served predictions in ~800 ms because we kept all training data in memory.

**Task** – I had to redesign the ML inference pipeline so that each request could get a fresh traffic estimate within the SLA while still using up‑to‑date models trained on billions of rides.

**Action** – First, I split the model into two parts: a lightweight “feature extractor” (a 2‑layer LSTM) that ran on the edge server and a heavier “prediction head” (a gradient boosted tree ensemble) served via TensorFlow Serving behind a gRPC load balancer. I added a rolling cache of the last 10 k feature vectors per region, refreshed every minute with new ride data from Kafka streams. To keep latency low, I offloaded model training to an on‑prem Spark cluster that updated the trees nightly and pushed them to S3; our deployment script pulled the latest artifacts automatically.

**Result** – In production, inference latency dropped from 800 ms to 120 ms, meeting the SLA. Traffic prediction accuracy improved by 12% MAE over the previous model. I learned that separating feature extraction from heavy inference and using edge‑caching can reconcile real‑time constraints with complex ML models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
