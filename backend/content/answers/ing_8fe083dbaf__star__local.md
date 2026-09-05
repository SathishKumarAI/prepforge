---
qid: ing_8fe083dbaf__star__local
question: 'Explain: Recommended by LinkedIn — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 284
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:37-05:00'
sources: []
---

**Situation:** While leading the product team at a mid‑size startup, we launched a new “smart ordering” feature that aimed to reduce average delivery times by predicting optimal restaurant‑courier pairings during peak hours.

**Task:** I needed to design a scalable ML pipeline that could ingest real‑time traffic, weather, and historical order data, train a predictive model, and serve predictions with sub‑second latency across multiple regions.

**Action:** I chose Apache Kafka for streaming ingestion, Spark Structured Streaming for feature engineering, and a LightGBM ensemble trained on 30 days of labeled deliveries. To keep inference fast, we distilled the model into a TensorFlow Lite graph deployed via Kubernetes autoscaling. We built an A/B test harness in Python to evaluate latency vs. accuracy trade‑offs, iterating on feature selection until we hit <50 ms per request with >85 % precision. Continuous monitoring used Prometheus and Grafana; automated retraining jobs ran nightly.

**Result:** The system cut average delivery time by 18%, saving the company $120K/month in operational costs. I learned that balancing model complexity against inference latency is critical, and that a robust observability stack turns data science into reliable production service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
