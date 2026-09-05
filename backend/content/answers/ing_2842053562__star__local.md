---
qid: ing_2842053562__star__local
question: 'Explain: This is one part of the things — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 319
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:52-05:00'
sources: []
---

**Situation** – During my senior project I was tasked with building a real‑time traffic prediction engine for a city’s bike‑sharing network. The dataset had millions of GPS points, and we needed to feed predictions into the navigation app within two seconds per query.

**Task** – My goal was to design an end‑to‑end ML pipeline that could ingest streaming data, train a model online, and serve low‑latency predictions while keeping compute costs under $5k/month.

**Action** – I chose a gradient‑boosted tree ensemble (XGBoost) trained on engineered features like time of day, historical congestion, weather, and recent incident reports. For streaming ingestion I used Apache Kafka to buffer GPS events, then Spark Structured Streaming to batch them into 1‑minute windows for incremental training with XGBoost’s `update` API. Predictions were exposed through a gRPC microservice deployed on Kubernetes, auto‑scaling from one pod during off‑peak hours to ten pods during rush hour. I added model drift monitoring using Mean Absolute Error (MAE) alerts and scheduled nightly retraining jobs.

**Result** – The system achieved 92 % accuracy in predicting average speeds, reduced navigation ETA errors by 18 %, and kept monthly spend at $4.2k. I learned how to balance model complexity with latency constraints and the importance of automated monitoring for production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
