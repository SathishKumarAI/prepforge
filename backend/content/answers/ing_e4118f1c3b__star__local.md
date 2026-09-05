---
qid: ing_e4118f1c3b__star__local
question: 'Explain: system and here''s what''s really critical here'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 309
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:37-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a real‑time fraud detection pipeline for a payment gateway that processes ~2 M transactions per day. The business needed to flag suspicious activity within 3 seconds of the transaction while keeping false positives below 0.5%.

**Task:** My goal was to design a scalable ML system that ingested streaming data, scored each event with an anomaly model, and routed flagged transactions for manual review—all without exceeding our latency budget or overloading the existing infra.

**Action:** I chose a lightweight XGBoost ensemble trained on engineered features (transaction amount, velocity, device fingerprint) and deployed it in a Dockerized microservice behind Kafka. To meet the 3 s window, I used batch inference with pre‑loaded model shards per region and leveraged GPU acceleration for the heaviest feature transforms. I also implemented an adaptive threshold that slid based on recent false‑positive rates, monitored via Prometheus alerts.

**Result:** The system processed every transaction within 2.4 seconds on average, reduced false positives from 1.8% to 0.4%, and cut manual review load by 35%. I learned that in production ML the most critical factor is aligning model choice, infrastructure, and business constraints—otherwise even a perfect algorithm can fail when latency or cost spirals out of control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
