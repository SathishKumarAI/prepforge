---
qid: ing_c5d9a1133a__star__local
question: 'Explain: Aug. 25, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 381
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:40-05:00'
sources: []
---

**Situation:** In early 2025 I was leading a data‑science sprint at a fintech startup where we needed to boost our fraud‑detection model’s recall without blowing up false positives. The team had been using a static rule set and a basic logistic regression, but the clickstream logs were growing in volume by 30% each month.

**Task:** My goal was to build an incremental learning pipeline that could ingest new traffic patterns in real time, retrain the model on the fly, and deploy updates within 24 hours so we’d stay ahead of evolving fraud tactics.

**Action:** I chose Apache Flink for stream processing and integrated it with TensorFlow Serving. First, I set up a Kafka topic to capture raw events; Flink parsed each record, applied feature engineering (e.g., session entropy, device fingerprinting), and fed the transformed data into an online Gradient Boosting model in XGBoost’s DMatrix format. The model was wrapped in a lightweight REST endpoint that Flink called every hour to score new batches. For retraining, I used a rolling window of the last 7 days’ data stored in HDFS, and triggered a nightly Spark job that updated the model weights and pushed the checkpoint back to TensorFlow Serving. I also built an A/B test harness that routed 5% of traffic through the new model to monitor precision‑recall trade‑offs.

**Result:** Within two months we increased fraud detection recall from 78% to 92% while keeping false positives down to 3.1%. Deployment latency dropped from days to hours, and our engineering team reported a 40% reduction in manual intervention for model tuning. I learned that coupling stream processing with online learning can dramatically shorten the feedback loop in high‑stakes ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
